/**
 * UPSCALE AI PROJECT ADVISOR CHATBOT ENGINE (Production Edition)
 * Handles chatbot UI rendering, state management, and communication with secure backend APIs.
 * Pure Vanilla JavaScript designed to prevent XSS.
 */

(function () {
  // Configurable options - dynamically resolves backend origin from script tag location
  const scriptSrc = document.currentScript ? document.currentScript.src : '';
  const backendBase = scriptSrc && scriptSrc.startsWith('http') ? new URL(scriptSrc).origin : '';

  const CONFIG = {
    knowledgeBaseUrl: `${backendBase}/chatbot-knowledge.json`,
    apiBaseUrl: `${backendBase}/api`
  };

  // State Tracking
  let state = {
    isOpen: false,
    knowledge: null,
    currentStep: 'greeting', // greeting -> discovery -> features -> tech -> estimate -> lead_capture -> thank_you
    discoveryQuestionIndex: 0,
    projectIdea: '',
    answers: {}, // Stores user responses to discovery questions
    selectedFeatures: [],
    recommendedTech: {},
    calculatedEstimate: null,
    leadInfo: {}
  };

  // DOM Elements
  let els = {
    root: null,
    fab: null,
    panel: null,
    messages: null,
    input: null,
    sendBtn: null,
    typing: null
  };

  // Initialize chatbot on DOMContentLoaded or immediately if already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initChatbot();
    });
  } else {
    initChatbot();
  }

  /**
   * Loads the knowledge base and sets up UI components.
   */
  async function initChatbot() {
    try {
      // 1. Fetch Knowledge Base config
      const response = await fetch(CONFIG.knowledgeBaseUrl);
      if (!response.ok) {
        throw new Error('Failed to load chatbot knowledge base JSON');
      }
      state.knowledge = await response.json();
      
      // 2. Build the DOM structure securely
      buildDOM();

      // 3. Setup event listeners
      setupListeners();

      // 4. Start the conversation
      startConversation();
    } catch (err) {
      console.error('Chatbot initialization failed:', err);
    }
  }

  /**
   * Dynamically constructs the chatbot DOM securely.
   * Employing textContent and element generation to avoid XSS vectors.
   */
  function buildDOM() {
    // Remove existing widget if it already exists (e.g., during hot-reloads)
    const existingRoot = document.getElementById('chatbot-widget-root');
    if (existingRoot) {
      existingRoot.remove();
    }

    // Root container
    els.root = document.createElement('div');
    els.root.id = 'chatbot-widget-root';

    // FAB Button
    els.fab = document.createElement('button');
    els.fab.className = 'chatbot-fab';
    els.fab.setAttribute('aria-label', 'Open AI Project Advisor');
    
    const openIcon = document.createElement('i');
    openIcon.className = 'fa-solid fa-comments fab-icon-open';
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark fab-icon-close';
    
    els.fab.appendChild(openIcon);
    els.fab.appendChild(closeIcon);
    els.root.appendChild(els.fab);

    // Chat Panel
    els.panel = document.createElement('div');
    els.panel.className = 'chatbot-panel';

    // Header
    const header = document.createElement('div');
    header.className = 'chatbot-header';

    const avatar = document.createElement('div');
    avatar.className = 'chatbot-avatar';
    const robotIcon = document.createElement('i');
    robotIcon.className = 'fa-solid fa-robot';
    avatar.appendChild(robotIcon);

    const headerInfo = document.createElement('div');
    headerInfo.className = 'chatbot-header-info';
    const title = document.createElement('h3');
    title.className = 'chatbot-header-title';
    title.textContent = 'Upscale Project Advisor';
    const subtitle = document.createElement('p');
    subtitle.className = 'chatbot-header-subtitle';
    const statusDot = document.createElement('span');
    statusDot.className = 'status-dot';
    subtitle.appendChild(statusDot);
    
    const subtitleText = document.createTextNode(' AI Assistant');
    subtitle.appendChild(subtitleText);

    headerInfo.appendChild(title);
    headerInfo.appendChild(subtitle);

    const minBtn = document.createElement('button');
    minBtn.className = 'chatbot-minimize-btn';
    minBtn.setAttribute('aria-label', 'Minimize Chat');
    const minIcon = document.createElement('i');
    minIcon.className = 'fa-solid fa-minus';
    minBtn.appendChild(minIcon);

    header.appendChild(avatar);
    header.appendChild(headerInfo);
    header.appendChild(minBtn);
    els.panel.appendChild(header);

    // Messages Area
    els.messages = document.createElement('div');
    els.messages.className = 'chatbot-messages';
    els.panel.appendChild(els.messages);

    // Input Area
    const inputArea = document.createElement('div');
    inputArea.className = 'chatbot-input-area';

    els.input = document.createElement('input');
    els.input.type = 'text';
    els.input.className = 'chatbot-input';
    els.input.placeholder = 'Type your message...';
    els.input.disabled = true;

    els.sendBtn = document.createElement('button');
    els.sendBtn.className = 'chatbot-send-btn';
    els.sendBtn.disabled = true;
    els.sendBtn.setAttribute('aria-label', 'Send message');
    const sendIcon = document.createElement('i');
    sendIcon.className = 'fa-solid fa-paper-plane';
    els.sendBtn.appendChild(sendIcon);

    inputArea.appendChild(els.input);
    inputArea.appendChild(els.sendBtn);
    els.panel.appendChild(inputArea);

    els.root.appendChild(els.panel);
    document.body.appendChild(els.root);
  }

  /**
   * Binds user interactions to events.
   */
  function setupListeners() {
    els.fab.addEventListener('click', toggleChat);
    
    const minBtn = els.panel.querySelector('.chatbot-minimize-btn');
    if (minBtn) {
      minBtn.addEventListener('click', toggleChat);
    }

    els.input.addEventListener('input', () => {
      els.sendBtn.disabled = els.input.value.trim() === '';
    });

    els.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !els.sendBtn.disabled) {
        handleSend();
      }
    });

    els.sendBtn.addEventListener('click', handleSend);
  }

  /**
   * Opens or closes the chatbot panel.
   */
  function toggleChat() {
    state.isOpen = !state.isOpen;
    if (state.isOpen) {
      els.panel.classList.add('open');
      els.fab.classList.add('active');
      setTimeout(() => {
        els.messages.scrollTop = els.messages.scrollHeight;
        if (!els.input.disabled) els.input.focus();
      }, 300);
    } else {
      els.panel.classList.remove('open');
      els.fab.classList.remove('active');
    }
  }

  /**
   * Starts the greeting phase.
   */
  function startConversation() {
    showTyping();
    setTimeout(() => {
      hideTyping();
      const greetingMsg = state.knowledge.responseTemplates.greeting;
      appendMessage('assistant', greetingMsg);
      els.input.disabled = false;
      
      const templates = Object.keys(state.knowledge.projectTemplates);
      const chips = templates.map(key => {
        return {
          label: state.knowledge.projectTemplates[key].name,
          value: `I want to build a ${state.knowledge.projectTemplates[key].name}`
        };
      });
      chips.push({ label: 'Something Else', value: 'I have a custom project idea' });
      
      appendChips(chips);
    }, 1000);
  }

  /**
   * Appends a message bubble securely to the messages container.
   */
  function appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chatbot-msg ${role}`;

    const textSpan = document.createElement('span');
    const formatted = formatMessageText(text);
    textSpan.appendChild(formatted);
    msgDiv.appendChild(textSpan);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'chatbot-msg-time';
    const now = new Date();
    timeDiv.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    msgDiv.appendChild(timeDiv);

    els.messages.appendChild(msgDiv);
    els.messages.scrollTop = els.messages.scrollHeight;
  }

  /**
   * Formats response text into structured HTML nodes securely.
   * Employs standard regex parsing to safely display text.
   */
  function formatMessageText(text) {
    const container = document.createDocumentFragment();
    const lines = text.split('\n');

    lines.forEach((line) => {
      if (line.trim() === '') {
        container.appendChild(document.createElement('br'));
        return;
      }

      const p = document.createElement('p');
      p.style.margin = '0 0 6px 0';

      // Parse bold formatting **text**
      let parts = line.split(/\*\*([^*]+)\*\*/g);
      parts.forEach((part, index) => {
        if (index % 2 === 1) {
          const bold = document.createElement('strong');
          bold.textContent = part;
          p.appendChild(bold);
        } else {
          // Parse bullet points
          if (part.startsWith('• ') || part.startsWith('- ')) {
            const bullet = document.createElement('span');
            bullet.textContent = part.slice(2);
            p.appendChild(bullet);
          } else {
            parseInlineLinks(part, p);
          }
        }
      });

      container.appendChild(p);
    });

    return container;
  }

  /**
   * Regular expression parsing for emails and links to insert them securely.
   */
  function parseInlineLinks(text, container) {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    let parts = text.split(emailRegex);
    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        const link = document.createElement('a');
        link.href = `mailto:${part}`;
        link.textContent = part;
        link.style.color = 'var(--primary-orange)';
        link.style.textDecoration = 'underline';
        container.appendChild(link);
      } else {
        let subParts = part.split(urlRegex);
        subParts.forEach((subPart, subIndex) => {
          if (subIndex % 2 === 1) {
            const link = document.createElement('a');
            link.href = subPart;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Link';
            link.style.color = 'var(--primary-orange)';
            link.style.textDecoration = 'underline';
            container.appendChild(link);
          } else {
            container.appendChild(document.createTextNode(subPart));
          }
        });
      }
    });
  }

  /**
   * Renders quick replies.
   */
  function appendChips(chips) {
    const chipsContainer = document.createElement('div');
    chipsContainer.className = 'chatbot-quick-replies';

    chips.forEach((chip) => {
      const btn = document.createElement('button');
      btn.className = 'chatbot-chip';
      btn.textContent = chip.label;
      btn.addEventListener('click', () => {
        els.input.value = chip.value;
        handleSend();
      });
      chipsContainer.appendChild(btn);
    });

    els.messages.appendChild(chipsContainer);
    els.messages.scrollTop = els.messages.scrollHeight;
  }

  /**
   * Shows typing indicator.
   */
  function showTyping() {
    if (els.typing) return;
    els.typing = document.createElement('div');
    els.typing.className = 'chatbot-typing';
    
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      els.typing.appendChild(dot);
    }
    
    els.messages.appendChild(els.typing);
    els.messages.scrollTop = els.messages.scrollHeight;
  }

  /**
   * Hides typing indicator.
   */
  function hideTyping() {
    if (els.typing && els.typing.parentNode) {
      els.typing.parentNode.removeChild(els.typing);
    }
    els.typing = null;
  }

  /**
   * Handle send user message.
   */
  function handleSend() {
    const text = els.input.value.trim();
    if (text === '') return;

    appendMessage('user', text);
    els.input.value = '';
    els.sendBtn.disabled = true;

    const oldReplies = els.messages.querySelectorAll('.chatbot-quick-replies');
    oldReplies.forEach(c => c.remove());

    processConversationFlow(text);
  }

  /**
   * POSTs JSON to a backend endpoint and returns the parsed body.
   * Returns null (instead of throwing) whenever the API is unavailable or
   * errors, so the caller can transparently fall back to local logic.
   */
  async function postJson(url, payload) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        console.warn(`Chatbot API ${url} responded with ${response.status}; using local logic.`);
        return null;
      }
      return await response.json();
    } catch (err) {
      console.warn(`Chatbot API ${url} unreachable; using local logic.`, err.message);
      return null;
    }
  }

  /**
   * Maps free text onto one of the knowledge-base project templates.
   * Mirrors the server-side matcher so the widget still works offline.
   */
  function matchTemplateKey(text) {
    const lower = String(text || '').toLowerCase();
    if (/(shop|store|e-?commerce|sell|cart|retail)/.test(lower)) return 'ecommerce';
    if (/(food|delivery|restaurant|grocery)/.test(lower)) return 'food_delivery';
    if (/(learn|course|school|lms|education|student)/.test(lower)) return 'learning_management';
    if (/(health|clinic|doctor|hospital|medical|patient)/.test(lower)) return 'healthcare_app';
    if (/(social|community|feed|network|forum)/.test(lower)) return 'social_media';
    if (/(\bai\b|gpt|chatbot|\bbot\b|machine learning|\bml\b|llm)/.test(lower)) return 'ai_application';
    if (/(mobile|android|ios|\bapp\b)/.test(lower)) return 'mobile_app';
    return 'portfolio_website';
  }

  function templateKeyFromAnswers() {
    return matchTemplateKey([
      state.answers.project_type,
      state.answers.key_features,
      state.answers.platform,
      state.answers.target_users
    ].filter(Boolean).join(' '));
  }

  /** Local equivalent of POST /api/chatbot { step: 'greeting' }. */
  function localAnalyzeIdea(idea) {
    const key = matchTemplateKey(idea);
    const temp = state.knowledge.projectTemplates[key];
    return {
      projectCategory: temp.name,
      acknowledgement: `That sounds like a great project! A **${temp.name}** is something our team can definitely help you build. To outline the requirements, let's go through a quick questionnaire.`,
      suggestedTemplate: key
    };
  }

  /** Local equivalent of POST /api/chatbot { step: 'features' }. */
  function localSuggestFeatures() {
    const temp = state.knowledge.projectTemplates[templateKeyFromAnswers()];
    const effort = state.knowledge.pricingRules.moduleEffort;
    return {
      introduction: `Based on your answers, we recommend including these core features for your ${temp.name}:`,
      suggestedFeatures: temp.suggestedFeatures.map(key => ({
        key,
        label: effort[key] ? effort[key].label : key,
        reason: 'Recommended as a core module for this project type.'
      }))
    };
  }

  /** Local equivalent of POST /api/chatbot { step: 'tech' }. */
  function localRecommendTech() {
    const temp = state.knowledge.projectTemplates[templateKeyFromAnswers()];
    return {
      introduction: 'For your project architecture, we officially recommend using our verified technology stack:',
      recommendations: {
        frontend: { name: temp.suggestedTech.frontend, reason: 'Provides a highly responsive, modern interface suitable for this platform.' },
        backend: { name: temp.suggestedTech.backend, reason: 'Ensures robust processing and standard API design.' },
        database: { name: temp.suggestedTech.database, reason: 'Ensures persistent storage and transactional integrity.' }
      }
    };
  }

  /**
   * Main state machine for the conversation flow.
   * Every backend call degrades to deterministic local logic when the API is
   * unavailable, so the widget never dead-ends on the fallback message.
   */
  async function processConversationFlow(userInput) {
    showTyping();
    els.input.disabled = true;

    try {
      if (state.currentStep === 'greeting') {
        state.projectIdea = userInput;

        const res = await postJson(`${CONFIG.apiBaseUrl}/chatbot`, { step: 'greeting', message: userInput });
        const data = (res && res.data) ? res.data : localAnalyzeIdea(userInput);

        hideTyping();
        appendMessage('assistant', data.acknowledgement);

        state.suggestedTemplate = data.suggestedTemplate;
        state.answers.project_type = data.projectCategory || data.suggestedTemplate;

        // Move on to the discovery questionnaire.
        state.currentStep = 'discovery';
        state.discoveryQuestionIndex = 0;
        askNextDiscoveryQuestion();
      }
      else if (state.currentStep === 'discovery') {
        const currentQ = state.knowledge.discoveryQuestions[state.discoveryQuestionIndex];
        state.answers[currentQ.id] = userInput;

        state.discoveryQuestionIndex++;
        if (state.discoveryQuestionIndex < state.knowledge.discoveryQuestions.length) {
          hideTyping();
          askNextDiscoveryQuestion();
        } else {
          state.currentStep = 'features';

          const res = await postJson(`${CONFIG.apiBaseUrl}/chatbot`, { step: 'features', answers: state.answers });
          const data = (res && res.data && Array.isArray(res.data.suggestedFeatures) && res.data.suggestedFeatures.length)
            ? res.data
            : localSuggestFeatures();

          state.selectedFeatures = data.suggestedFeatures.map(f => f.key);

          let displayMsg = data.introduction + '\n\n';
          data.suggestedFeatures.forEach(f => {
            displayMsg += `• **${f.label}**: ${f.reason}\n`;
          });

          hideTyping();
          appendMessage('assistant', displayMsg);

          appendChips([
            { label: 'Confirm Stack & Estimate', value: 'Perfect, proceed with these features.' },
            { label: 'Custom Scopes', value: 'Proceed to design parameters' }
          ]);
        }
      }
      else if (state.currentStep === 'features') {
        state.currentStep = 'tech';

        const res = await postJson(`${CONFIG.apiBaseUrl}/chatbot`, { step: 'tech', answers: state.answers });
        const data = (res && res.data && res.data.recommendations) ? res.data : localRecommendTech();

        state.recommendedTech = {
          frontend: data.recommendations.frontend.name,
          backend: data.recommendations.backend.name,
          database: data.recommendations.database.name
        };

        const displayMsg = data.introduction + '\n\n' +
          `• **Frontend**: ${data.recommendations.frontend.name} (${data.recommendations.frontend.reason})\n` +
          `• **Backend**: ${data.recommendations.backend.name} (${data.recommendations.backend.reason})\n` +
          `• **Database**: ${data.recommendations.database.name} (${data.recommendations.database.reason})`;

        hideTyping();
        appendMessage('assistant', displayMsg);

        state.currentStep = 'estimate';
        await fetchAndDisplayEstimate();
      }
    } catch (err) {
      console.error('Chatbot conversation step error:', err);
      hideTyping();
      appendMessage('assistant', state.knowledge.responseTemplates.fallback);
      els.input.disabled = false;
      els.input.focus();
    } finally {
      hideTyping();
      if (state.currentStep !== 'lead_capture' && state.currentStep !== 'thank_you' && state.currentStep !== 'discovery') {
        els.input.disabled = false;
        els.input.focus();
      }
    }
  }

  /**
   * Ask the next question in discovery questionnaire.
   */
  function askNextDiscoveryQuestion() {
    showTyping();
    setTimeout(() => {
      hideTyping();
      const currentQ = state.knowledge.discoveryQuestions[state.discoveryQuestionIndex];
      appendMessage('assistant', currentQ.question);
      
      if (currentQ.options) {
        const chips = currentQ.options.map(opt => ({ label: opt, value: opt }));
        appendChips(chips);
      }
      
      els.input.disabled = false;
      els.input.focus();
    }, 1000);
  }

  /**
   * Fetches deterministic cost calculation from backend and renders results.
   */
  async function fetchAndDisplayEstimate() {
    showTyping();
    try {
      const response = await fetch(`${CONFIG.apiBaseUrl}/estimate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType: state.answers.project_type || state.suggestedTemplate,
          features: state.selectedFeatures
        })
      });

      if (!response.ok) throw new Error('Failed to retrieve cost estimation');
      const resData = await response.json();

      state.calculatedEstimate = resData.estimate;

      setTimeout(() => {
        hideTyping();
        appendMessage('assistant', 'Here is the indicative project plan and effort estimation based on Upscale development standards:');
        appendSummaryCard();
        appendMessage('assistant', state.knowledge.responseTemplates.leadCapturePrompt);
        
        appendLeadCaptureForm();
      }, 1200);
    } catch (err) {
      console.error('Estimation service unreachable, using local fallback:', err);
      // Hard fallback calculation locally if service fails
      fallbackLocalEstimate();
    }
  }

  /**
   * Local backup calculator in case server-side estimation endpoint is offline.
   */
  function fallbackLocalEstimate() {
    hideTyping();
    const pricing = state.knowledge.pricingRules;
    let totalHours = 0;
    const modules = [];

    state.selectedFeatures.forEach(featKey => {
      const config = pricing.moduleEffort[featKey];
      if (config) {
        totalHours += config.hours;
        modules.push({ label: config.label, hours: config.hours });
      }
    });

    if (totalHours === 0) totalHours = 40;
    totalHours = Math.round(totalHours * (pricing.overheadMultiplier || 1.25));

    const minCost = totalHours * pricing.hourlyRateRange.min;
    const maxCost = totalHours * pricing.hourlyRateRange.max;
    const weeks = Math.max(2, Math.ceil(totalHours / 35));

    state.calculatedEstimate = {
      modules,
      totalHours,
      minCost,
      maxCost,
      weeks,
      currency: pricing.currency,
      currencySymbol: pricing.currencySymbol,
      disclaimer: pricing.disclaimer
    };

    appendSummaryCard();
    appendMessage('assistant', state.knowledge.responseTemplates.leadCapturePrompt);
    appendLeadCaptureForm();
  }

  /**
   * Renders the project summary card in the chat log.
   */
  function appendSummaryCard() {
    const est = state.calculatedEstimate;
    if (!est) return;

    const card = document.createElement('div');
    card.className = 'chatbot-summary-card';

    const sections = [
      { label: 'Project Idea', val: state.projectIdea },
      { label: 'Target Platform', val: state.answers['platform'] || 'Web' }
    ];

    sections.forEach(sec => {
      const sDiv = document.createElement('div');
      sDiv.className = 'summary-section';
      const label = document.createElement('div');
      label.className = 'summary-label';
      label.textContent = sec.label;
      const val = document.createElement('div');
      val.className = 'summary-value';
      val.textContent = sec.val;
      sDiv.appendChild(label);
      sDiv.appendChild(val);
      card.appendChild(sDiv);
    });

    // Modules
    const mDiv = document.createElement('div');
    mDiv.className = 'summary-section';
    const mLabel = document.createElement('div');
    mLabel.className = 'summary-label';
    mLabel.textContent = 'Included Modules';
    const mVal = document.createElement('div');
    mVal.className = 'summary-value';
    
    est.modules.forEach(m => {
      const tag = document.createElement('span');
      tag.className = 'summary-tag';
      tag.textContent = m.label;
      mVal.appendChild(tag);
    });
    mDiv.appendChild(mLabel);
    mDiv.appendChild(mVal);
    card.appendChild(mDiv);

    // Cost and Timeline
    const estDiv = document.createElement('div');
    estDiv.className = 'summary-section';
    const estLabel = document.createElement('div');
    estLabel.className = 'summary-label';
    estLabel.textContent = 'Timeline & Budget Estimate';
    const estVal = document.createElement('div');
    estVal.className = 'summary-value';
    
    const formattedMin = est.minCost.toLocaleString('en-IN');
    const formattedMax = est.maxCost.toLocaleString('en-IN');
    
    const timeStrong = document.createElement('strong');
    timeStrong.textContent = `~${est.weeks} weeks`;
    const costStrong = document.createElement('strong');
    costStrong.textContent = `${est.currencySymbol || '₹'}${formattedMin} - ${est.currencySymbol || '₹'}${formattedMax}`;

    estVal.appendChild(document.createTextNode('⏳ Timeline: '));
    estVal.appendChild(timeStrong);
    estVal.appendChild(document.createElement('br'));
    estVal.appendChild(document.createTextNode('💰 Budget: '));
    estVal.appendChild(costStrong);

    estDiv.appendChild(estLabel);
    estDiv.appendChild(estVal);
    card.appendChild(estDiv);

    // Disclaimer
    const disc = document.createElement('div');
    disc.className = 'chatbot-disclaimer';
    disc.textContent = est.disclaimer || state.knowledge.pricingRules.disclaimer;
    card.appendChild(disc);

    els.messages.appendChild(card);
    els.messages.scrollTop = els.messages.scrollHeight;
  }

  /**
   * Builds the pre-filled WhatsApp handoff link locally.
   * Used only when POST /api/leads is unreachable, so the user is never
   * left without a way to reach the team.
   */
  function localWhatsAppUrl(lead, est) {
    const rawPhone = (state.knowledge.company && state.knowledge.company.phone) || '+91 9063593070';
    const digits = rawPhone.replace(/\D/g, '');
    const fullPhone = digits.length <= 10 ? `91${digits}` : digits;
    const a = lead.answers || {};

    const answersText = [
      `• *Project Type:* ${a.project_type || 'N/A'}`,
      `• *Target Users:* ${a.target_users || 'N/A'}`,
      `• *Platform:* ${a.platform || 'N/A'}`,
      `• *User Scale:* ${a.scale || 'N/A'}`,
      `• *Key Features Details:* ${a.key_features || 'N/A'}`,
      `• *Integrations:* ${a.integrations || 'None'}`,
      `• *Requested Timeline:* ${a.timeline || 'N/A'}`,
      `• *Approx. Budget Range:* ${a.budget_range || 'N/A'}`
    ].join('\n');

    const featuresText = (lead.features && lead.features.length) ? lead.features.join(', ') : 'None selected';
    const techText = lead.technologies && Object.keys(lead.technologies).length
      ? Object.entries(lead.technologies).map(([layer, tech]) => `*${layer.toUpperCase()}:* ${tech}`).join(', ')
      : 'None recommended';

    const symbol = (est && est.currencySymbol) || '₹';
    const estimateText = est
      ? `Budget: ${symbol}${est.minCost.toLocaleString('en-IN')} - ${symbol}${est.maxCost.toLocaleString('en-IN')} (~${est.weeks} weeks)`
      : 'Not calculated';

    const message = `*New Lead from Upscale Chatbot*\n\n` +
      `*Contact Info:*\n` +
      `• *Name:* ${lead.name}\n` +
      `• *Email:* ${lead.email}\n` +
      `• *Phone:* ${lead.phone || 'Not provided'}\n\n` +
      `*Project Objective/Idea:*\n${lead.projectIdea}\n\n` +
      `*Discovery Questionnaire Answers:*\n${answersText}\n\n` +
      `*Confirmed Modules:*\n• ${featuresText}\n\n` +
      `*Recommended Tech Stack:*\n• ${techText}\n\n` +
      `*Effort & Budget Estimate:*\n• ${estimateText}`;

    return `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Renders the lead collection form and handles POST submission.
   */
  function appendLeadCaptureForm() {
    state.currentStep = 'lead_capture';
    els.input.disabled = true;

    const formDiv = document.createElement('div');
    formDiv.className = 'chatbot-msg assistant';
    formDiv.style.width = '85%';
    formDiv.style.alignSelf = 'flex-start';

    const form = document.createElement('div');
    form.className = 'chatbot-contact-form';

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.className = 'chatbot-contact-input';
    inputName.placeholder = 'Your Name *';
    inputName.required = true;

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.className = 'chatbot-contact-input';
    inputEmail.placeholder = 'Email Address *';
    inputEmail.required = true;

    const inputPhone = document.createElement('input');
    inputPhone.type = 'tel';
    inputPhone.className = 'chatbot-contact-input';
    inputPhone.placeholder = 'Phone Number (Optional)';

    const submitBtn = document.createElement('button');
    submitBtn.className = 'chatbot-action-btn';
    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Request Detailed Proposal';

    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputPhone);
    form.appendChild(submitBtn);
    formDiv.appendChild(form);

    els.messages.appendChild(formDiv);
    els.messages.scrollTop = els.messages.scrollHeight;

    submitBtn.addEventListener('click', async () => {
      const name = inputName.value.trim();
      const email = inputEmail.value.trim();
      const phone = inputPhone.value.trim();

      if (!name || !email) {
        alert('Please fill in Name and Email fields.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      const leadPayload = {
        name,
        email,
        phone: phone || null,
        projectIdea: state.projectIdea,
        answers: state.answers,
        features: state.selectedFeatures,
        technologies: state.recommendedTech
      };

      try {
        // Store the lead via the backend; if that is unreachable, still hand off
        // to WhatsApp using a locally generated link.
        const resData = await postJson(`${CONFIG.apiBaseUrl}/leads`, leadPayload);
        const whatsappUrl = (resData && resData.whatsappUrl)
          ? resData.whatsappUrl
          : localWhatsAppUrl(leadPayload, state.calculatedEstimate);

        // 1. Success Message
        appendMessage('assistant', state.knowledge.responseTemplates.thankYou);
        state.currentStep = 'thank_you';
        
        // Remove input form from active display
        form.replaceChildren();
        const successLabel = document.createElement('div');
        successLabel.style.color = '#22C55E';
        successLabel.style.fontWeight = 'bold';
        successLabel.innerHTML = '<i class="fa-solid fa-circle-check"></i> Scopes submitted successfully!';
        form.appendChild(successLabel);

        // 2. Render WhatsApp handoff redirect button
        const waButton = document.createElement('button');
        waButton.className = 'chatbot-action-btn';
        waButton.style.marginTop = '10px';
        waButton.style.background = '#25D366';
        waButton.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp';
        waButton.addEventListener('click', () => {
          window.open(whatsappUrl, '_blank');
        });
        form.appendChild(waButton);

        // Auto-launch WhatsApp redirect
        window.open(whatsappUrl, '_blank');

      } catch (err) {
        console.error('Lead submission failure:', err);
        alert('We encountered an error saving your request. Please try again or email us directly.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Request Detailed Proposal';
      }
    });
  }

})();
