'use strict';

(function(){
  function $(sel, root){ return (root||document).querySelector(sel); }
  // Global conversation state
  const convo = { flow: null, step: 0, data: {} };

  function createUI(container){
    container.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.height = '100%';

    const header = document.createElement('div');
    header.textContent = (window.I18N ? window.I18N.t('chatbot_header') : 'Agri Assistant');
    header.style.padding = '10px 12px';
    header.style.borderBottom = '1px solid #eee';
    header.style.background = '#f9fff9';
    header.style.color = '#2e7d32';
    header.style.fontWeight = '600';

    const messages = document.createElement('div');
    messages.id = 'sc-messages';
    messages.style.flex = '1';
    messages.style.padding = '12px';
    messages.style.overflowY = 'auto';
    messages.style.background = '#fff';

    const form = document.createElement('div');
    form.style.display = 'flex';
    form.style.gap = '8px';
    form.style.padding = '10px';
    form.style.borderTop = '1px solid #eee';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = (window.I18N ? window.I18N.t('chatbot_input_placeholder') : 'Type your message...');
    input.style.flex = '1';
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '8px';

    const btn = document.createElement('button');
    btn.textContent = (window.I18N ? window.I18N.t('chatbot_send_button') : 'Send');
    btn.style.background = 'linear-gradient(90deg, #4caf50, #81c784)';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.padding = '10px 14px';
    btn.style.cursor = 'pointer';

    form.appendChild(input);
    form.appendChild(btn);
    wrap.appendChild(header);
    wrap.appendChild(messages);
    wrap.appendChild(form);
    container.appendChild(wrap);

    return { messages, input, btn, header };
  }

  function addMsg(messagesEl, text, who){
    const line = document.createElement('div');
    line.textContent = text;
    line.style.margin = '6px 0';
    line.style.maxWidth = '80%';
    line.style.padding = '8px 10px';
    line.style.borderRadius = '10px';
    line.style.whiteSpace = 'pre-wrap';
    if (who === 'user') {
      line.style.alignSelf = 'flex-end';
      line.style.background = '#e8f5e9';
    } else {
      line.style.alignSelf = 'flex-start';
      line.style.background = '#f5f5f5';
    }
    messagesEl.appendChild(line);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // Very simple rule-based responder with selling flow state machine
  function reply(text){
    // helper to fetch translated text with a safe fallback
    const ft = (key, fallback) => (window.I18N ? window.I18N.t(key) : fallback);
    const raw = text.trim();
    const t = raw.toLowerCase();

    // Multilingual keyword helpers
    const hasAny = (patterns) => patterns.some((p) => {
      if (p instanceof RegExp) return p.test(raw) || p.test(t);
      return t.includes(String(p).toLowerCase());
    });

    // Phrase banks (EN/HI/MR)
    const phrases = {
      greet: [
        /\b(hello|hey|hi)\b/i,
        /namaste|namaskar/i,
        /नमस्ते|नमस्कार|हैलो|हेलो/,
        /हॅलो|नमस्कार|हाय/
      ],
      sell_intent: [
        /\bi want to sell\b/i,
        /\b(sell my waste|sell waste)\b/i,
        'i want to sell any product',
        // Hindi
        /बेचना\s*है/, /कचरा\s*बेचना/, /मैं\s*बेचना\s*चाहता|चाहती\s*हूँ/,
        // Marathi
        /विकायचे\s*आहे|विक्री\s*करायची\s*आहे/, /कचरा\s*विकायचा/, /मी\s*विकायचे\s*आहे/
      ],
      register: [
        /register|sign\s*up/i,
        /रजिस्टर|रजिस्ट्रेशन|साइन\s*अप/,
        /नोंदणी|नोंदणी\s*करा/
      ],
      login: [
        /login|sign\s*in/i,
        /लॉगिन|साइन\s*इन/,
        /लॉगिन/
      ],
      buy_sell: [
        /(buy|purchase).*waste/i, /(sell|list).*waste/i,
        /कचरा.*खरीद|खरीदना|खरीदारी|खरीदें|खरीदना\s*है/, /कचरा.*बेच|बेचना/,
        /कचरा.*खरेदी|घेणे/, /कचरा.*विक्री|विकायचा/
      ],
      prices: [
        /price|rate/i,
        /कीमत|भाव|रेट/,
        /किंमत|भाव/
      ],
      logistics: [
        /transport|pickup|delivery/i,
        /ट्रांसपोर्ट|पिकअप|डिलीवरी|परिवहन/,
        /ट्रान्सपोर्ट|वाहतूक|उचल|पिकअप|डिलिव्हरी|वितरण/
      ],
      help: [
        /help|how\s*to/i,
        /मदद|कैसे|किस तरह/,
        /मदत|कसे|कसा|कशी/
      ]
    };

    // If a selling flow is active, handle step-by-step first
    if (convo.flow === 'sell') {
      if (convo.step === 1) {
        // Expect kilos
        convo.data.kilos = text.trim();
        convo.step = 2;
        return ft('chat_reply_sell_step1', 'Our company will meet you soon... What is your address?');
      }
      if (convo.step === 2) {
        // Expect address
        convo.data.address = text.trim();
        convo.step = 3;
        return ft('chat_reply_sell_step2', "Okay, that's great! When do you want to meet?");
      }
      if (convo.step === 3) {
        // Expect date
        convo.data.date = text.trim();
        convo.step = 4;
        return ft('chat_reply_sell_step3', 'Please provide time and place');
      }
      if (convo.step === 4) {
        // Expect time and place
        convo.data.time_place = text.trim();
        // Final response without summary
        const finalMsg = ft('chat_reply_sell_final', 'Okay thank you! We will meet soon.');
        // Reset conversation
        convo.flow = null; convo.step = 0; convo.data = {};
        return finalMsg;
      }
    }

    // Exact greeting override
    if (t === 'hi' || t === 'हाय') return ft('chat_reply_hello', 'hello');

    // Greetings
    if (hasAny(phrases.greet))
      return ft('chat_reply_greeting_generic', 'Hi! 👋 How can I help you with AgriWaste today?');

    // Selling intent (start guided flow)
    if (hasAny(phrases.sell_intent)) {
      convo.flow = 'sell';
      convo.step = 1;
      convo.data = {};
      return ft('chat_reply_sell_start', 'Oh great! How many kilos?');
    }

    // Registration
    if (hasAny(phrases.register))
      return ft('chat_reply_register', 'To register, open Register from the login page and fill in your details (name, email, username, password, role, phone).');

    // Login help
    if (hasAny(phrases.login))
      return ft('chat_reply_login', 'Use your username/email and password on the login page. Forgot password? Click on "Forgot Password".');

    // Buy/Sell
    if (hasAny(phrases.buy_sell))
      return ft('chat_reply_buy_sell', 'For buying or selling agri-waste, create a listing with material, quantity, location, and price expectations. Share contact for buyers/sellers.');

    // Prices
    if (hasAny(phrases.prices))
      return ft('chat_reply_prices', 'Prices vary by material, quantity, and location. Please specify material (e.g., sugarcane bagasse) and quantity.');

    // Logistics
    if (hasAny(phrases.logistics))
      return ft('chat_reply_logistics', 'For logistics, coordinate pickup and delivery time, and confirm vehicle availability with the buyer/seller.');

    // Help
    if (hasAny(phrases.help))
      return ft('chat_reply_help', 'You can ask me about registration, login, buying/selling, pricing, or logistics. Try: "How do I list my waste?"');

    // Default
    return ft('chat_reply_default', 'I didn\'t catch that. You can ask about registration, login, pricing, or logistics. 🙂');
  }

  function init(){
    const container = document.getElementById('chatContainer');
    if (!container) return;

    const ui = createUI(container);

    // Intro message
    addMsg(ui.messages, (window.I18N ? window.I18N.t('chatbot_intro') : 'Hello! I\'m your AgriWaste assistant. Ask me about registration, pricing, or buying/selling.'), 'bot');

    function send(){
      const text = ui.input.value.trim();
      if (!text) return;
      addMsg(ui.messages, text, 'user');
      ui.input.value = '';
      const r = reply(text);
      addMsg(ui.messages, r, 'bot');
    }

    ui.btn.addEventListener('click', send);
    ui.input.addEventListener('keydown', function(e){ if (e.key === 'Enter') send(); });

    // React to language changes to update UI labels dynamically
    try {
      window.addEventListener('app_lang_changed', function(){
        if (!window.I18N) return;
        // Update UI texts
        ui.header.textContent = window.I18N.t('chatbot_header');
        ui.input.placeholder = window.I18N.t('chatbot_input_placeholder');
        ui.btn.textContent = window.I18N.t('chatbot_send_button');
      });
    } catch(_) {}
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', init);
  else
    init();
})();
