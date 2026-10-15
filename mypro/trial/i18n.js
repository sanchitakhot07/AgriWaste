(function(){
  const LS_LANG_KEY = 'app_lang';
  const LS_LOGIN_KEY = 'loggedIn';

  const translations = {
    en: {
      // index.html
      app_title: 'AgriWaste Marketplace',
      login_username_placeholder: 'Username or Email',
      login_password_placeholder: 'Password',
      login_button: 'Login',
      register_link: 'Register',
      forgot_link: 'Forgot Password?',
      chatbot_link: 'Open Chatbot',
      // chatbot UI strings
      chatbot_header: 'Agri Assistant',
      chatbot_input_placeholder: 'Type your message...',
      chatbot_send_button: 'Send',
      chatbot_intro: "Hello! I'm your AgriWaste assistant. Ask me about registration, pricing, or buying/selling.",
      back_to_home: 'Home',
      back_to_chat: 'Chat',

      // chatbot replies
      chat_reply_hello: 'hello',
      chat_reply_greeting_generic: 'Hi! 👋 How can I help you with AgriWaste today?',
      chat_reply_sell_start: 'Oh great! How many kilos?',
      chat_reply_sell_step1: 'Our company will meet you soon... What is your address?',
      chat_reply_sell_step2: "Okay, that's great! When do you want to meet?",
      chat_reply_sell_step3: 'Please provide time and place',
      chat_reply_sell_final: 'Okay thank you! We will meet soon.',
      chat_reply_register: 'To register, open Register from the login page and fill in your details (name, email, username, password, role, phone).',
      chat_reply_login: 'Use your username/email and password on the login page. Forgot password? Click on "Forgot Password".',
      chat_reply_buy_sell: 'For buying or selling agri-waste, create a listing with material, quantity, location, and price expectations. Share contact for buyers/sellers.',
      chat_reply_prices: 'Prices vary by material, quantity, and location. Please specify material (e.g., sugarcane bagasse) and quantity.',
      chat_reply_logistics: 'For logistics, coordinate pickup and delivery time, and confirm vehicle availability with the buyer/seller.',
      chat_reply_help: 'You can ask me about registration, login, buying/selling, pricing, or logistics. Try: "How do I list my waste?"',
      chat_reply_default: "I didn't catch that. You can ask about registration, login, pricing, or logistics. 🙂",

      // register.html
      register_title: 'Create Your Account',
      fullname_placeholder: 'Full Name',
      email_placeholder: 'Email',
      username_placeholder: 'Username',
      password_placeholder: 'Password',
      confirm_password_placeholder: 'Confirm Password',
      user_type_label: 'Select User Type',
      user_type_farmer: 'Farmer',
      user_type_buyer: 'Buyer',
      phone_placeholder: 'Phone Number',
      register_submit: 'Register',
      already_have_account: 'Already have an account? Login',
      register_success_title: '🎉 Registration Successful!',
      register_success_p: 'Your account has been created successfully.',
      register_success_back: 'Back to Login',
      register_demo_message: 'This frontend-only demo does not create or store an account.',

      // chatbot.html
      chatbot_title: 'Chatbot',
      chatbot_desc_1: 'Ask questions about marketplace features, farmer–buyer queries, pricing, or logistics.',
      chatbot_desc_2: 'This built-in chatbot runs entirely in your browser and requires no cloud setup.',
      back_to_login: 'Back to Login',

      // selector
      lang_label: 'Language',
      lang_en: 'English',
      lang_hi: 'Hindi',
      lang_mr: 'Marathi',

      // log.html (home)
      home_title: 'AgriWaste Marketplace - Home',
      site_title: '🌱 AgriWaste Marketplace',
      site_tag: 'Turning agricultural waste into income & opportunity',
      nav_home: 'Home',
      nav_gallery: 'Gallery',
      nav_marketplace: 'Marketplace',
      nav_sell: 'Sell Waste',
      nav_buy: 'Buy Waste',
      nav_chatbot: 'Chatbot',
      nav_contact: 'Contact',
      nav_about: 'About',
      hero_title: 'Waste to Wealth',
      hero_subtitle: 'Connect • Recycle • Profit',
      btn_sell_now: '🚜 Sell Now',
      btn_browse_marketplace: '🛒 Browse Marketplace',
      about_title_welcome: 'Welcome',
      about_p1: 'AgriWaste Marketplace is a digital platform that connects farmers with industries. Crop residues and agricultural by-products from farmers are used as raw materials by industries. This helps reduce waste burning and pollution, provides farmers with additional income, and promotes sustainability and a circular economy.',
      about_p2: 'Our platform ensures that farmers gain extra income by selling waste, while industries benefit from low-cost, sustainable resources. This creates a win-win solution that promotes circular economy principles and supports environmental sustainability.',
      about_p3: 'Beyond trade, AgriWaste Marketplace also spreads awareness about eco-friendly practices, including composting, biogas generation, and recycling. By bridging the gap between waste generators and waste users, we aim to build a cleaner, greener future for both rural communities and industries.',
      impact_title: 'Our Impact',
      stat_tons_saved: '♻️ <span>500+</span> Tons Saved',
      stat_less_burning: '🌍 <span>30%</span> Less Burning',
      stat_farmers: '👨‍🌾 <span>1000+</span> Farmers',
      highlights_title: 'Highlights',
      card1_title: 'Easy Listing',
      card1_desc: 'Farmers can list items with price & quantity easily.',
      card2_title: 'Marketplace',
      card2_desc: 'Buyers can browse, compare, and contact sellers.',
      card3_title: 'Recycling Ideas',
      card3_desc: 'Explore composting, biogas & eco-friendly uses.',
      footer_copyright: '© 2025 AgriWaste Marketplace',
      loading_text: 'Loading AgriWaste Marketplace...'
      ,
      // about.html
      about_page_title: 'About Us - AgriWaste',
      about_header_title: 'About AgriWaste Marketplace',
      about_header_tag: 'Our mission & vision',
      about_nav_active: 'About',
      about_main_title: 'About Us',
      about_intro: 'At AgriWaste Marketplace, our mission is to reduce agricultural waste burning and dumping by connecting farmers with buyers who can repurpose crop residues as valuable raw materials. By doing so, we promote sustainable livelihoods, support renewable resource use, and minimize environmental impacts.',
      about_why_title: 'Why This Matters',
      about_why_1: 'Cleaner Air: Reduces air pollution caused by burning crop residues.',
      about_why_2: 'Farmer Income: Creates additional revenue streams for farmers.',
      about_why_3: 'Sustainability: Encourages a circular economy through reuse of agricultural waste.',
      about_impact_title: 'Our Impact',
      about_impact_1: 'Turning crop residues into compost improves soil health.',
      about_impact_2: 'Producing biogas from agriwaste generates energy for local communities, reducing reliance on non-renewable sources.',
      about_closing: 'At AgriWaste Marketplace, we’re committed to building a greener, more sustainable future—one crop residue at a time.',

      // marketplace.html
      market_page_title: 'Marketplace - AgriWaste',
      market_header_title: 'AgriWaste Marketplace',
      market_header_tag: 'Available agricultural waste listings',
      market_hero_h2: 'Turn Agricultural Waste into Opportunity!',
      market_hero_p: 'Buy & sell farm residues for compost, biofuel, animal feed, and more.',
      market_hero_btn: 'Explore Listings',
      market_main_title: 'Available Items',
      use_label: 'Use:',
      quantity_label: 'Quantity:',
      price_label: 'Price:',
      market_search_placeholder: 'Search by name...',
      market_filter_all: 'All Prices',
      market_filter_0_400: 'Below ₹400',
      market_filter_400_700: '₹400 - ₹700',
      market_filter_700_1000: '₹700 - ₹1000',
      market_filter_1000_2000: 'Above ₹1000',
      market_card_sell_now: 'Sell Now',
      market_footer_links: '© 2025 AgriWaste Marketplace | ',
      market_footer_fb: 'Facebook',
      market_footer_ig: 'Instagram',
      market_footer_tw: 'Twitter',

      // product names (marketplace & sell options)
      product_rice_straw: 'Rice Straw',
      product_sugarcane_bagasse: 'Sugarcane Bagasse',
      product_coconut_husk: 'Coconut Husk',
      product_compost_material: 'Compost Material',
      product_wheat_straw: 'Wheat Straw',
      product_banana_fiber_waste: 'Banana Fiber Waste',
      product_corn_cobs: 'Corn Cobs',
      product_peanut_shells: 'Peanut Shells',
      product_fruit_waste: 'Fruit Waste',
      product_tea_waste: 'Tea Waste',
      product_bamboo_waste: 'Bamboo Waste',
      product_cotton_stalks: 'Cotton Stalks',
      product_mango_seed_waste: 'Mango Seed Waste',
      product_sawdust: 'Sawdust',
      product_mustard_husk: 'Mustard Husk',
      product_other: 'Other',

      // units and use descriptions (marketplace)
      unit_ton: 'ton',
      unit_tons: 'tons',
      use_desc_rice_straw: 'Compost, Animal bedding, Paper pulp',
      use_desc_sugarcane_bagasse: 'Biofuel, Paper/board manufacturing',
      use_desc_coconut_husk: 'Coir production, Mulch',
      use_desc_compost_material: 'Soil amendment, Organic farming',
      use_desc_wheat_straw: 'Cattle feed, Mulch, Compost',
      use_desc_banana_fiber_waste: 'Rope, Handicrafts, Pulp',
      use_desc_corn_cobs: 'Biofuel, Fodder, Activated carbon',
      use_desc_peanut_shells: 'Fuel, Particle board, Compost',
      use_desc_fruit_waste: 'Biogas, Animal feed, Organic compost',
      use_desc_tea_waste: 'Compost, Mushroom cultivation',
      use_desc_bamboo_waste: 'Biochar, Handicrafts, Construction boards',
      use_desc_cotton_stalks: 'Fuel, Paper pulp, Particle board',
      use_desc_mango_seed_waste: 'Oil extraction, Cattle feed, Compost',
      use_desc_sawdust: 'Particle boards, Biofuel briquettes, Compost',
      use_desc_mustard_husk: 'Fuel, Cattle feed, Organic compost',

      // sell.html
      sell_page_title: 'Sell Waste - AgriWaste',
      sell_header_title: 'Sell Your AgriWaste',
      sell_header_tag: 'List your agricultural waste for buyers to see',
      sell_main_title: 'Sell Waste Form',
      sell_name_placeholder: 'Your full name',
      sell_email_placeholder: 'you@example.com',
      sell_phone_placeholder: 'Phone number',
      sell_waste_label: 'Select Waste Type',
      sell_image_label: 'Waste photo',
      sell_image_hint: 'Add a photo of your agricultural waste (optional)',
      sell_qty_placeholder: 'Quantity in tons',
      sell_price_placeholder: 'Price per ton',
      sell_location_placeholder: 'Village / Town / District',
      sell_submit_btn: 'Submit Listing',
      sell_new_listing: 'Create another listing',
      sell_name_label: 'Full name',
      sell_email_label: 'Email address',
      sell_phone_label: 'Phone number',
      sell_company_label: 'Company',
      sell_company_placeholder: 'Select Company',
      sell_waste_type_label: 'Waste type',
      sell_quantity_label: 'Quantity in tons',
      sell_price_label: 'Price per ton',
      sell_location_label: 'Location',
      sell_image_alt: 'Selected waste photo preview',
      sell_local_success: '',
      sell_image_invalid: 'Choose a valid image file.',
      sell_image_too_large: 'Choose an image smaller than 5 MB.',
      sell_receipt_title: 'AgriWaste Listing Receipt',
      sell_receipt_subtitle: 'Listing Preview',
      sell_receipt_transaction_id: 'Transaction ID',
      sell_receipt_date: 'Date',
      sell_receipt_total: 'Estimated total',
      sell_receipt_print: 'Print',
      sell_receipt_download: 'Save / Print',
      sell_receipt_new: 'New Listing',

      // buy.html
      buy_page_title: 'Buy Waste - AgriWaste',
      buy_header_title: 'Buy Agricultural Waste',
      buy_header_tag: 'Guidance for new customers',
      buy_how_title: 'How to Buy',
      buy_how_p1: 'Browse the <a href="marketplace.html">Marketplace</a> for available listings. Contact the seller using the contact details they provide (or use the Contact page to ask the platform admin for assistance).',
      buy_benefits_title: 'Benefits of Buying Waste',
      buy_env_title: 'Environmental Benefits:',
      buy_env_1: 'Reduces air pollution caused by burning crop residues.',
      buy_env_2: 'Encourages sustainable waste management.',
      buy_env_3: 'Conserves natural resources by reusing waste as compost or biofuel.',
      buy_econ_title: 'Economic Benefits:',
      buy_econ_1: 'Provides additional income for farmers.',
      buy_econ_2: 'Supplies cheap raw materials for buyers.',
      buy_econ_3: 'Boosts local economy through small-scale businesses.',
      buy_soc_title: 'Social Benefits:',
      buy_soc_1: 'Reduces smoke and pollutants, improving community health.',
      buy_soc_2: 'Creates jobs in waste processing and transportation.',
      buy_soc_3: 'Promotes awareness of sustainable farming and environment.',
      buy_agri_title: 'Agricultural & Industrial Benefits:',
      buy_agri_1: 'Organic waste can be converted into nutrient-rich compost.',
      buy_agri_2: 'Crop residues can be used for biofuel production.',
      buy_agri_3: 'Supports circular economy by turning waste into valuable resources.',

      // contact.html
      contact_page_title: 'Contact Us - AgriWaste',
      contact_header_title: 'Contact Us',
      contact_header_tag: "We'd love to hear from you",
      contact_form_title: 'Send a Message',
      contact_name_placeholder: 'Your Name',
      contact_email_placeholder: 'you@example.com',
      contact_mobile_placeholder: 'Mobile Number',
      contact_message_placeholder: 'Write your message...',
      contact_submit_btn: 'Send Message',
      contact_info_title: 'Contact Info',
      contact_info_email: 'Email: support@agriwaste.example',
      contact_info_phone: 'Phone: +91-8087620226',
      contact_info_mobile: 'Mobile: +91-8446250633',

      // gallery.html
      gallery_page_title: 'Gallery - AgriWaste',
      gallery_header_title: 'Gallery',
      gallery_header_tag: 'Photos of agriwaste & recycling',
      gallery_hero_h1: 'Our Gallery',
      gallery_hero_p: 'Explore AgriWaste & Recycling in Action',
      gallery_snapshots_title: 'Snapshots of Sustainability',
      gallery_filter_all: 'All',
      gallery_filter_plants: 'Plants',
      gallery_filter_farmers: 'Farmers',
      gallery_filter_energy: 'Energy',

      // success.html
      success_page_title: 'Message Sent - AgriWaste',
      success_h2: '✅ Message Sent Successfully!',
      success_p: 'Thank you for contacting us. We will get back to you soon.',
      success_back_home: 'Go Back to Home',

      // thankyou.html
      thankyou_page_title: 'Thank You - AgriWaste',
      thankyou_h1: 'Thank You!',
      thankyou_p: 'Your listing preview is ready in this browser. No server was contacted.',
      thankyou_to_market: 'Go to Marketplace',

      // forgot.html
      forgot_page_title: 'Forgot Password - AgriWaste',
      forgot_h2: 'Forgot Password?',
      forgot_p: 'Enter your registered email address to reset your password',
      forgot_email_placeholder: 'Enter your email',
      forgot_submit_btn: 'Send Reset Link',
      forgot_local_only: 'Password reset is unavailable in this frontend-only demo. No email was sent.',
      forgot_back_login: '⬅ Back to Login'
    },
    hi: {
      app_title: 'एग्रीवेस्ट मार्केटप्लेस',
      login_username_placeholder: 'उपयोगकर्ता नाम या ईमेल',
      login_password_placeholder: 'पासवर्ड',
      login_button: 'लॉगिन',
      register_link: 'रजिस्टर',
      forgot_link: 'पासवर्ड भूल गए?',
      chatbot_link: 'चैटबॉट खोलें',
      // chatbot UI strings
      chatbot_header: 'एग्री असिस्टेंट',
      chatbot_input_placeholder: 'अपना संदेश लिखें...',
      chatbot_send_button: 'भेजें',
      chatbot_intro: 'नमस्ते! मैं आपका एग्रीवेस्ट असिस्टेंट हूँ। पंजीकरण, कीमत, या खरीद/बिक्री के बारे में पूछें।',

      register_title: 'अपना खाता बनाएं',
      fullname_placeholder: 'पूरा नाम',
      email_placeholder: 'ईमेल',
      username_placeholder: 'उपयोगकर्ता नाम',
      password_placeholder: 'पासवर्ड',
      confirm_password_placeholder: 'पासवर्ड की पुष्टि करें',
      user_type_label: 'उपयोगकर्ता प्रकार चुनें',
      user_type_farmer: 'किसान',
      user_type_buyer: 'खरीदार',
      phone_placeholder: 'फ़ोन नंबर',
      register_submit: 'रजिस्टर',
      already_have_account: 'पहले से खाता है? लॉगिन करें',
      register_success_title: '🎉 पंजीकरण सफल!',
      register_success_p: 'आपका खाता सफलतापूर्वक बना दिया गया है।',
      register_success_back: 'लॉगिन पर वापस जाएँ',
      register_demo_message: 'यह केवल फ्रंटएंड डेमो है; इसमें खाता बनाया या सहेजा नहीं जाता।',
      forgot_local_only: 'इस फ्रंटएंड डेमो में पासवर्ड रीसेट उपलब्ध नहीं है। कोई ईमेल नहीं भेजा गया।',

      chatbot_title: 'चैटबॉट',
      chatbot_desc_1: 'मार्केटप्लेस फीचर्स, किसान–खरीदार प्रश्न, कीमत या लॉजिस्टिक्स के बारे में पूछें।',
      chatbot_desc_2: 'यह इन-ब्राउज़र चैटबॉट बिना किसी क्लाउड सेटअप के चलता है।',
      back_to_login: 'लॉगिन पर वापस जाएँ',
      back_to_home: 'होम',
      back_to_chat: 'चैट',

      // chatbot replies
      chat_reply_hello: 'हैलो',
      chat_reply_greeting_generic: 'नमस्ते! 👋 AgriWaste में मैं आपकी कैसे मदद कर सकता/सकती हूँ?',
      chat_reply_sell_start: 'बहुत बढ़िया! कितने किलो?',
      chat_reply_sell_step1: 'हमारी कंपनी आपसे जल्द ही मिलेगी... आपका पता क्या है?',
      chat_reply_sell_step2: 'ठीक है, बहुत अच्छा! आप कब मिलना चाहेंगे?',
      chat_reply_sell_step3: 'कृपया समय और स्थान बताएं',
      chat_reply_sell_final: 'ठीक है धन्यवाद! हम जल्द ही मिलेंगे।',
      chat_reply_register: 'रजिस्टर करने के लिए, लॉगिन पेज से Register खोलें और अपनी जानकारी भरें (नाम, ईमेल, यूज़रनेम, पासवर्ड, भूमिका, फोन).',
      chat_reply_login: 'लॉगिन पेज पर अपना यूज़रनेम/ईमेल और पासवर्ड इस्तेमाल करें। पासवर्ड भूल गए? "Forgot Password" पर क्लिक करें।',
      chat_reply_buy_sell: 'कचरा खरीद/बेचने के लिए, सामग्री, मात्रा, स्थान और कीमत अपेक्षा के साथ एक लिस्टिंग बनाएं। संपर्क विवरण साझा करें।',
      chat_reply_prices: 'कीमतें सामग्री, मात्रा और स्थान के अनुसार बदलती हैं। कृपया सामग्री (जैसे गन्ने का बगास) और मात्रा बताएं।',
      chat_reply_logistics: 'लॉजिस्टिक्स के लिए, पिकअप और डिलीवरी समय तय करें, और वाहन उपलब्धता की पुष्टि करें।',
      chat_reply_help: 'आप पंजीकरण, लॉगिन, खरीद/बिक्री, कीमत या लॉजिस्टिक्स के बारे में पूछ सकते हैं। उदाहरण: "मैं अपना कचरा कैसे सूचीबद्ध करूं?"',
      chat_reply_default: 'माफ़ कीजिए, समझ नहीं पाया/पाई। आप पंजीकरण, लॉगिन, कीमत या लॉजिस्टिक्स के बारे में पूछ सकते हैं। 🙂',

      lang_label: 'भाषा',
      lang_en: 'अंग्रेज़ी',
      lang_hi: 'हिंदी',
      lang_mr: 'मराठी',

      home_title: 'एग्रीवेस्ट मार्केटप्लेस - होम',
      site_title: '🌱 एग्रीवेस्ट मार्केटप्लेस',
      site_tag: 'कृषि अपशिष्ट को आय और अवसर में बदलना',
      nav_home: 'होम',
      nav_gallery: 'गैलरी',
      nav_marketplace: 'मार्केटप्लेस',
      nav_sell: 'कचरा बेचें',
      nav_buy: 'कचरा खरीदें',
      nav_chatbot: 'चैटबॉट',
      nav_contact: 'संपर्क',
      nav_about: 'हमारे बारे में',
      hero_title: 'कचरे से कमाई',
      hero_subtitle: 'जुड़ें • रीसायकल करें • कमाएँ',
      btn_sell_now: '🚜 अभी बेचें',
      btn_browse_marketplace: '🛒 मार्केटप्लेस देखें',
      about_title_welcome: 'स्वागत है',
      about_p1: 'एग्रीवेस्ट मार्केटप्लेस एक डिजिटल प्लेटफ़ॉर्म है जो किसानों को उद्योगों से जोड़ता है। किसानों के फसल अवशेष और कृषि उप-उत्पाद उद्योगों के लिए कच्चे माल के रूप में उपयोग होते हैं। इससे कचरा जलाना और प्रदूषण कम होता है, किसानों को अतिरिक्त आय मिलती है, और स्थिरता व परिपत्र अर्थव्यवस्था को बढ़ावा मिलता है।',
      about_p2: 'हमारा प्लेटफ़ॉर्म सुनिश्चित करता है कि किसान कचरा बेचकर अतिरिक्त आय प्राप्त करें, जबकि उद्योगों को कम लागत और टिकाऊ संसाधन मिलें। यह एक जीत-जीत समाधान है जो परिपत्र अर्थव्यवस्था को बढ़ावा देता है और पर्यावरणीय स्थिरता का समर्थन करता है।',
      about_p3: 'व्यापार से आगे, एग्रीवेस्ट मार्केटप्लेस पर्यावरण-अनुकूल प्रथाओं जैसे कम्पोस्टिंग, बायोगैस और रीसाइक्लिंग के बारे में जागरूकता भी फैलाता है। अपशिष्ट उत्पादक और उपयोगकर्ताओं के बीच की दूरी कम कर, हम एक स्वच्छ और हरित भविष्य का निर्माण करना चाहते हैं।',
      impact_title: 'हमारा प्रभाव',
      stat_tons_saved: '♻️ <span>500+</span> टन बचाए',
      stat_less_burning: '🌍 <span>30%</span> कम जलाना',
      stat_farmers: '👨‍🌾 <span>1000+</span> किसान',
      highlights_title: 'मुख्य बिंदु',
      card1_title: 'आसान लिस्टिंग',
      card1_desc: 'किसान आसानी से कीमत और मात्रा के साथ वस्तुएँ सूचीबद्ध कर सकते हैं।',
      card2_title: 'मार्केटप्लेस',
      card2_desc: 'खरीदार ब्राउज़, तुलना और विक्रेताओं से संपर्क कर सकते हैं।',
      card3_title: 'रीसाइक्लिंग विचार',
      card3_desc: 'कम्पोस्टिंग, बायोगैस और पर्यावरण-अनुकूल उपयोग खोजें।',
      footer_copyright: '© 2025 एग्रीवेस्ट मार्केटप्लेस',
      loading_text: 'एग्रीवेस्ट मार्केटप्लेस लोड हो रहा है...'
      ,
      // about.html
      about_page_title: 'हमारे बारे में - एग्रीवेस्ट',
      about_header_title: 'एग्रीवेस्ट मार्केटप्लेस के बारे में',
      about_header_tag: 'हमारा उद्देश्य और दृष्टि',
      about_nav_active: 'हमारे बारे में',
      about_main_title: 'हमारे बारे में',
      about_intro: 'एग्रीवेस्ट मार्केटप्लेस में हमारा उद्देश्य किसानों को ऐसे खरीदारों से जोड़कर कृषि अपशिष्ट जलाना और फेंकना कम करना है जो फसल अवशेषों का मूल्यवान कच्चे माल के रूप में पुन: उपयोग कर सकें। इस तरह हम सतत आजीविका को बढ़ावा देते हैं, नवीकरणीय संसाधनों के उपयोग का समर्थन करते हैं और पर्यावरणीय प्रभावों को कम करते हैं।',
      about_why_title: 'क्यों महत्वपूर्ण है',
      about_why_1: 'स्वच्छ हवा: फसल अवशेष जलाने से होने वाले प्रदूषण में कमी।',
      about_why_2: 'किसान आय: किसानों के लिए अतिरिक्त आय के साधन।',
      about_why_3: 'स्थिरता: कृषि अपशिष्ट के पुन: उपयोग से परिपत्र अर्थव्यवस्था को बढ़ावा।',
      about_impact_title: 'हमारा प्रभाव',
      about_impact_1: 'फसल अवशेष को कम्पोस्ट में बदलने से मिट्टी की सेहत सुधरती है।',
      about_impact_2: 'एग्रीवेस्ट से बायोगैस बनाकर ऊर्जा मिलती है, गैर-नवीकरणीय स्रोतों पर निर्भरता घटती है।',
      about_closing: 'एग्रीवेस्ट मार्केटप्लेस एक हरित, टिकाऊ भविष्य बनाने के लिए प्रतिबद्ध है—एक-एक फसल अवशेष के साथ।',

      // marketplace.html
      market_page_title: 'मार्केटप्लेस - एग्रीवेस्ट',
      market_header_title: 'एग्रीवेस्ट मार्केटप्लेस',
      market_header_tag: 'उपलब्ध कृषि कचरे की सूचियाँ',
      market_hero_h2: 'कृषि कचरे को अवसर में बदलें!',
      market_hero_p: 'कम्पोस्ट, जैव ईंधन, पशु चारा और अन्य के लिए खरीदें और बेचें।',
      market_hero_btn: 'लिस्टिंग देखें',
      market_main_title: 'उपलब्ध आइटम',
      use_label: 'उपयोग:',
      quantity_label: 'मात्रा:',
      price_label: 'कीमत:',
      market_search_placeholder: 'नाम से खोजें...',
      market_filter_all: 'सभी कीमतें',
      market_filter_0_400: '₹400 से कम',
      market_filter_400_700: '₹400 - ₹700',
      market_filter_700_1000: '₹700 - ₹1000',
      market_filter_1000_2000: '₹1000 से अधिक',
      market_card_sell_now: 'अभी बेचें',
      market_footer_links: '© 2025 एग्रीवेस्ट मार्केटप्लेस | ',
      market_footer_fb: 'फेसबुक',
      market_footer_ig: 'इंस्टाग्राम',
      market_footer_tw: 'ट्विटर',

      // उत्पाद नाम (मार्केटप्लेस और विक्री विकल्प)
      product_rice_straw: 'धान का पुआल',
      product_sugarcane_bagasse: 'गन्ने का बगास',
      product_coconut_husk: 'नारियल का छिलका',
      product_compost_material: 'कम्पोस्ट सामग्री',
      product_wheat_straw: 'गेहूं का पुआल',
      product_banana_fiber_waste: 'केले के रेशों का कचरा',
      product_corn_cobs: 'मक्के के भुट्टे के कोब',
      product_peanut_shells: 'मूंगफली के छिलके',
      product_fruit_waste: 'फलों का कचरा',
      product_tea_waste: 'चाय का कचरा',
      product_bamboo_waste: 'बांस का कचरा',
      product_cotton_stalks: 'कपास की टहनियाँ',
      product_mango_seed_waste: 'आम के बीज का कचरा',
      product_sawdust: 'लकड़ी का बुरादा',
      product_mustard_husk: 'सरसों की भूसी',
      product_other: 'अन्य',

      // इकाई और उपयोग विवरण
      unit_ton: 'टन',
      unit_tons: 'टन',
      use_desc_rice_straw: 'कम्पोस्ट, पशु बिछौना, कागज़ का लुगदी',
      use_desc_sugarcane_bagasse: 'जैव ईंधन, पेपर/बोर्ड निर्माण',
      use_desc_coconut_husk: 'कॉयर उत्पादन, मल्च',
      use_desc_compost_material: 'मृदा संशोधन, जैविक खेती',
      use_desc_wheat_straw: 'पशु चारा, मल्च, कम्पोस्ट',
      use_desc_banana_fiber_waste: 'रस्सी, हस्तशिल्प, पल्प',
      use_desc_corn_cobs: 'जैव ईंधन, चारा, सक्रिय कार्बन',
      use_desc_peanut_shells: 'ईंधन, पार्टिकल बोर्ड, कम्पोस्ट',
      use_desc_fruit_waste: 'बायोगैस, पशु आहार, जैविक कम्पोस्ट',
      use_desc_tea_waste: 'कम्पोस्ट, मशरूम की खेती',
      use_desc_bamboo_waste: 'बायोचार, हस्तशिल्प, निर्माण बोर्ड',
      use_desc_cotton_stalks: 'ईंधन, पेपर पल्प, पार्टिकल बोर्ड',
      use_desc_mango_seed_waste: 'तेल निष्कर्षण, पशु चारा, कम्पोस्ट',
      use_desc_sawdust: 'पार्टिकल बोर्ड, बायोफ्युएल ब्रिकेट्स, कम्पोस्ट',
      use_desc_mustard_husk: 'ईंधन, पशु चारा, जैविक कम्पोस्ट',

      // sell.html
      sell_page_title: 'कचरा बेचें - एग्रीवेस्ट',
      sell_header_title: 'अपना कृषि कचरा बेचें',
      sell_header_tag: 'खरीदारों के लिए अपना कृषि कचरा सूचीबद्ध करें',
      sell_main_title: 'कचरा बिक्री फ़ॉर्म',
      sell_name_placeholder: 'आपका पूरा नाम',
      sell_email_placeholder: 'you@example.com',
      sell_phone_placeholder: 'फ़ोन नंबर',
      sell_waste_label: 'कचरे का प्रकार चुनें',
      sell_image_label: 'कचरे की तस्वीर',
      sell_image_hint: 'अपने कृषि कचरे की तस्वीर जोड़ें (वैकल्पिक)',
      sell_qty_placeholder: 'मात्रा (टन में)',
      sell_price_placeholder: 'प्रति टन कीमत',
      sell_location_placeholder: 'गाँव / शहर / जिला',
      sell_submit_btn: 'लिस्टिंग जमा करें',
      sell_new_listing: 'एक और लिस्टिंग बनाएँ',
      sell_name_label: 'पूरा नाम',
      sell_email_label: 'ईमेल पता',
      sell_phone_label: 'फ़ोन नंबर',
      sell_company_label: 'कंपनी',
      sell_company_placeholder: 'कंपनी चुनें',
      sell_waste_type_label: 'कचरे का प्रकार',
      sell_quantity_label: 'मात्रा (टन में)',
      sell_price_label: 'प्रति टन कीमत',
      sell_location_label: 'स्थान',
      sell_image_alt: 'चुनी गई कचरे की तस्वीर का पूर्वावलोकन',
      sell_local_success: 'लिस्टिंग इस ब्राउज़र में तैयार है। किसी सर्वर से संपर्क नहीं किया गया।',
      sell_image_invalid: 'कृपया मान्य तस्वीर चुनें।',
      sell_image_too_large: '5 MB से छोटी तस्वीर चुनें।',
      sell_receipt_title: 'एग्रीवेस्ट लिस्टिंग रसीद',
      sell_receipt_subtitle: 'लिस्टिंग पूर्वावलोकन',
      sell_receipt_transaction_id: 'लेनदेन आईडी',
      sell_receipt_date: 'तारीख',
      sell_receipt_total: 'अनुमानित कुल',
      sell_receipt_print: 'प्रिंट करें',
      sell_receipt_download: 'सेव / प्रिंट करें',
      sell_receipt_new: 'नई लिस्टिंग',

      // buy.html
      buy_page_title: 'कचरा खरेदी - एग्रीवेस्ट',
      buy_header_title: 'कृषी कचरा खरेदी',
      buy_header_tag: 'नवीन ग्राहकांसाठी मार्गदर्शन',
      buy_how_title: 'कसे खरेदी करावे',
      buy_how_p1: 'उपलब्ध लिस्टिंगसाठी <a href="marketplace.html">मार्केटप्लेस</a> पहा. विक्रेत्याने दिलेल्या संपर्क तपशीलांचा वापर करून संपर्क साधा (किंवा मदतीसाठी संपर्क पृष्ठ वापरा).',
      buy_benefits_title: 'कचरा खरेदीचे फायदे',
      buy_env_title: 'पर्यावरणीय फायदे:',
      buy_env_1: 'फसल अवशेष जाळण्यामुळे होणारे प्रदूषण कमी होते.',
      buy_env_2: 'टिकाऊ कचरा व्यवस्थापनाला प्रोत्साहन.',
      buy_env_3: 'कचऱ्याचा कम्पोस्ट/बायोफ्युएल म्हणून पुनर्वापर करून संसाधनांची बचत.',
      buy_econ_title: 'आर्थिक फायदे:',
      buy_econ_1: 'किसानांसाठी अतिरिक्त उत्पन्न.',
      buy_econ_2: 'खरेदीदारांसाठी स्वस्त कच्चा माल.',
      buy_econ_3: 'लघु उद्योगांद्वारे स्थानिक अर्थव्यवस्थेला चालना.',
      buy_soc_title: 'सामाजिक फायदे:',
      buy_soc_1: 'धूर व प्रदूषक कमी होऊन समुदायाचे आरोग्य सुधारते.',
      buy_soc_2: 'कचरा प्रक्रिया व वाहतूक क्षेत्रात रोजगारनिर्मिती.',
      buy_soc_3: 'शाश्वत शेती व पर्यावरणाविषयी जागरूकता वाढते.',
      buy_agri_title: 'कृषी व औद्योगिक फायदे:',
      buy_agri_1: 'सेंद्रिय कचरा पौष्टिक कम्पोस्टमध्ये रूपांतरित करता येतो.',
      buy_agri_2: 'फसल अवशेष बायोफ्युएल निर्मितीसाठी वापरता येतात.',
      buy_agri_3: 'कचरा मौल्यवान साधनांमध्ये रूपांतरित करून परिपत्र अर्थव्यवस्था समर्थित होते.',

      // contact.html
      contact_page_title: 'संपर्क - एग्रीवेस्ट',
      contact_header_title: 'आमच्याशी संपर्क साधा',
      contact_header_tag: 'आम्हाला तुमच्याकडून ऐकायला आवडेल',
      contact_form_title: 'संदेश पाठवा',
      contact_name_placeholder: 'तुमचे नाव',
      contact_email_placeholder: 'you@example.com',
      contact_mobile_placeholder: 'मोबाइल नंबर',
      contact_message_placeholder: 'तुमचा संदेश लिहा...',
      contact_submit_btn: 'संदेश पाठवा',
      contact_info_title: 'संपर्क माहिती',
      contact_info_email: 'ईमेल: support@agriwaste.example',
      contact_info_phone: 'फोन: +91-8087620226',
      contact_info_mobile: 'मोबाइल: +91-8446250633',

      // gallery.html
      gallery_page_title: 'गॅलरी - एग्रीवेस्ट',
      gallery_header_title: 'गॅलरी',
      gallery_header_tag: 'कृषी कचरा आणि रीसायकलिंगचे फोटो',
      gallery_hero_h1: 'आमची गॅलरी',
      gallery_hero_p: 'अॅग्रीवेस्ट आणि रीसायकलिंग प्रत्यक्षात',
      gallery_snapshots_title: 'सस्टेनेबिलिटीचे स्नॅपशॉट्स',
      gallery_filter_all: 'सर्व',
      gallery_filter_plants: 'झाडे',
      gallery_filter_farmers: 'शेतकरी',
      gallery_filter_energy: 'ऊर्जा',

      // success.html
      success_page_title: 'संदेश पाठवला - एग्रीवेस्ट',
      success_h2: '✅ संदेश यशस्वीरित्या पाठवला!',
      success_p: 'संपर्क केल्याबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क करू.',
      success_back_home: 'मुख्यपृष्ठावर जा',

      // thankyou.html
      thankyou_page_title: 'धन्यवाद - एग्रीवेस्ट',
      thankyou_h1: 'धन्यवाद!',
      thankyou_p: 'तुमची लिस्टिंग या ब्राउझरमध्ये तयार आहे. सर्व्हरशी संपर्क केलेला नाही.',
      thankyou_to_market: 'मार्केटप्लेसला जा',

      // forgot.html
      forgot_page_title: 'पासवर्ड विसरलात - एग्रीवेस्ट',
      forgot_h2: 'पासवर्ड विसरलात?',
      forgot_p: 'पासवर्ड रीसेट करण्यासाठी तुमचा नोंदणीकृत ईमेल पत्ता टाका',
      forgot_email_placeholder: 'तुमचा ईमेल टाका',
      forgot_submit_btn: 'रीसेट लिंक पाठवा',
      forgot_local_only: 'या फ्रंटएंड डेमोमध्ये पासवर्ड रीसेट उपलब्ध नाही. ईमेल पाठवलेला नाही.',
      forgot_back_login: '⬅ लॉगिनकडे परत'
    },
    mr: {
      app_title: 'अॅग्रीवेस्ट मार्केटप्लेस',
      login_username_placeholder: 'वापरकर्तानाव किंवा ईमेल',
      login_password_placeholder: 'पासवर्ड',
      login_button: 'लॉगिन',
      register_link: 'नोंदणी',
      forgot_link: 'पासवर्ड विसरलात?',
      chatbot_link: 'चॅटबॉट उघडा',
      // chatbot UI strings
      chatbot_header: 'अॅग्री असिस्टंट',
      chatbot_input_placeholder: 'आपला संदेश लिहा...',
      chatbot_send_button: 'पाठवा',
      chatbot_intro: 'नमस्कार! मी तुमचा अॅग्रीवेस्ट सहाय्यक आहे. नोंदणी, किंमत किंवा खरेदी/विक्रीबद्दल विचारा.',

      register_title: 'आपले खाते तयार करा',
      fullname_placeholder: 'पूर्ण नाव',
      email_placeholder: 'ईमेल',
      username_placeholder: 'वापरकर्तानाव',
      password_placeholder: 'पासवर्ड',
      confirm_password_placeholder: 'पासवर्ड पुष्टी करा',
      user_type_label: 'वापरकर्ता प्रकार निवडा',
      user_type_farmer: 'शेतकरी',
      user_type_buyer: 'खरेदीदार',
      phone_placeholder: 'फोन नंबर',
      register_submit: 'नोंदणी करा',
      already_have_account: 'आधीच खाते आहे? लॉगिन',
      register_success_title: '🎉 नोंदणी यशस्वी!',
      register_success_p: 'आपले खाते यशस्वीरित्या तयार झाले आहे.',
      register_success_back: 'लॉगिनकडे परत',
      register_demo_message: 'हा फक्त फ्रंटएंड डेमो आहे; यामध्ये खाते तयार किंवा जतन केले जात नाही.',

      chatbot_title: 'चॅट',
      chatbot_desc_1: 'मार्केटप्लेस वैशिष्ट्ये, शेतकरी–खरेदीदार प्रश्न, किंमत किंवा लॉजिस्टिक्स बद्दल विचारा.',
      chatbot_desc_2: 'हा ब्राउझरमधील चॅटबॉट कोणत्याही क्लाउड सेटअपशिवाय चालतो.',
      back_to_login: 'लॉगिनकडे परत',
      back_to_home: 'मुख्यपृष्ठ',
      back_to_chat: 'चॅट',

      // chatbot replies
      chat_reply_hello: 'हॅलो',
      chat_reply_greeting_generic: 'नमस्कार! 👋 AgriWaste संदर्भात मी तुमची कशी मदत करू?',
      chat_reply_sell_start: 'छान! किती किलो?',
      chat_reply_sell_step1: 'आमची कंपनी लवकरच तुमची भेट घेईल... तुमचा पत्ता काय आहे?',
      chat_reply_sell_step2: 'ठीक आहे, छान! भेट कधी घ्यायची?',
      chat_reply_sell_step3: 'कृपया वेळ आणि ठिकाण सांगा',
      chat_reply_sell_final: 'ठीक आहे, धन्यवाद! आपण लवकरच भेटू.',
      chat_reply_register: 'नोंदणी करण्यासाठी, लॉगिन पानावरील Register उघडा आणि तुमची माहिती (नाव, ईमेल, वापरकर्तानाव, पासवर्ड, भूमिका, फोन) भरा.',
      chat_reply_login: 'लॉगिन पानावर तुमचे वापरकर्तानाव/ईमेल आणि पासवर्ड वापरा. पासवर्ड विसरलात? "Forgot Password" वर क्लिक करा.',
      chat_reply_buy_sell: 'कृषी-कचरा खरेदी/विक्रीसाठी सामग्री, प्रमाण, ठिकाण आणि अपेक्षित किंमत यांसह लिस्टिंग तयार करा. संपर्क तपशील शेअर करा.',
      chat_reply_prices: 'किंमती सामग्री, प्रमाण आणि ठिकाणानुसार बदलतात. कृपया सामग्री (उदा. ऊस बगॅस) आणि प्रमाण सांगा.',
      chat_reply_logistics: 'लॉजिस्टिक्ससाठी पिकअप आणि डिलिव्हरी वेळ ठरवा आणि वाहन उपलब्धता निश्चित करा.',
      chat_reply_help: 'तुम्ही नोंदणी, लॉगिन, खरेदी/विक्री, किंमत किंवा लॉजिस्टिक्सबद्दल विचारू शकता. उदा: "मी माझा कचरा लिस्ट कसा करू?"',
      chat_reply_default: 'माफ करा, माझ्या लक्षात आले नाही. तुम्ही नोंदणी, लॉगिन, किंमत किंवा लॉजिस्टिक्सबद्दल विचारू शकता. 🙂',

      lang_label: 'भाषा',
      lang_en: 'इंग्रजी',
      lang_hi: 'हिंदी',
      lang_mr: 'मराठी',

      home_title: 'अॅग्रीवेस्ट मार्केटप्लेस - मुख्यपृष्ठ',
      site_title: '🌱 अॅग्रीवेस्ट मार्केटप्लेस',
      site_tag: 'कृषी कचऱ्याला उत्पन्न आणि संधीमध्ये रुपांतर',
      nav_home: 'मुख्यपृष्ठ',
      nav_gallery: 'गॅलरी',
      nav_marketplace: 'मार्केटप्लेस',
      nav_sell: 'कचरा विक्री',
      nav_buy: 'कचरा खरेदी',
      nav_contact: 'संपर्क',
      nav_about: 'आमच्याबद्दल',
      hero_title: 'कचऱ्यातून संपत्ती',
      hero_subtitle: 'जोडा • पुनर्वापर करा • कमवा',
      btn_sell_now: '🚜 आत्ताच विक्री करा',
      btn_browse_marketplace: '🛒 मार्केटप्लेस पहा',
      about_title_welcome: 'स्वागत आहे',
      about_p1: 'अॅग्रीवेस्ट मार्केटप्लेस हे शेतकऱ्यांना उद्योगांशी जोडणारे डिजिटल व्यासपीठ आहे. शेतकऱ्यांकडील पिकांचे अवशेष आणि कृषी उपउत्पाद उद्योगांसाठी कच्चा माल म्हणून वापरले जातात. यामुळे कचरा जाळणे आणि प्रदूषण कमी होते, शेतकऱ्यांना अतिरिक्त उत्पन्न मिळते आणि शाश्वतता व परिपत्र अर्थव्यवस्थेला चालना मिळते.',
      about_p2: 'आमचे व्यासपीठ खात्री देते की शेतकऱ्यांना कचरा विक्रीतून अतिरिक्त उत्पन्न मिळते, तर उद्योगांना कमी खर्चिक व शाश्वत साधने मिळतात. हा दोन्हींसाठी फायदेशीर उपाय आहे जो परिपत्र अर्थव्यवस्थेला प्रोत्साहन देतो आणि पर्यावरणीय शाश्वततेला साथ देतो.',
      about_p3: 'व्यवहारापलीकडे, अॅग्रीवेस्ट मार्केटप्लेस कम्पोस्टिंग, बायोगॅस आणि रीसायकलिंग सारख्या पर्यावरणपूरक पद्धतींबाबत जनजागृतीही करतो. कचरा निर्माण करणारे आणि वापरकर्ते यांच्यातील दरी कमी करून, ग्रामीण समुदाय आणि उद्योगांसाठी स्वच्छ, हिरवे भविष्य घडवण्याचे आमचे उद्दिष्ट आहे.',
      impact_title: 'आपला प्रभाव',
      stat_tons_saved: '♻️ <span>500+</span> टन वाचवले',
      stat_less_burning: '🌍 <span>30%</span> कमी जाळणे',
      stat_farmers: '👨‍🌾 <span>1000+</span> शेतकरी',
      highlights_title: 'ठळक वैशिष्ट्ये',
      card1_title: 'सुलभ लिस्टिंग',
      card1_desc: 'शेतकरी किंमत आणि प्रमाणासह सहज वस्तू सूचीबद्ध करू शकतात.',
      card2_title: 'मार्केटप्लेस',
      card2_desc: 'खरेदीदार ब्राउझ, तुलना आणि विक्रेत्यांशी संपर्क करू शकतात.',
      card3_title: 'रीसायकलिंग कल्पना',
      card3_desc: 'कम्पोस्टिंग, बायोगॅस आणि पर्यावरणपूरक उपयोग शोधा.',
      footer_copyright: '© 2025 अॅग्रीवेस्ट मार्केटप्लेस',
      loading_text: 'अॅग्रीवेस्ट मार्केटप्लेस लोड होत आहे...'
      ,
      // about.html
      about_page_title: 'आमच्याबद्दल - अॅग्रीवेस्ट',
      about_header_title: 'अॅग्रीवेस्ट मार्केटप्लेस बद्दल',
      about_header_tag: 'आमचे ध्येय आणि दृष्टी',
      about_nav_active: 'आमच्याबद्दल',
      about_main_title: 'आमच्याबद्दल',
      about_intro: 'अॅग्रीवेस्ट मार्केटप्लेसमध्ये आमचे ध्येय कृषी कचरा जाळणे आणि फेकणे कमी करणे आहे. आम्ही शेतकऱ्यांना असे खरेदीदारांशी जोडतो जे पिकांचे अवशेष मौल्यवान कच्च्या मालाप्रमाणे पुनर्वापर करू शकतात. यामुळे शाश्वत उपजीविकेला चालना मिळते, नवीकरणीय संसाधनांचा वापर समर्थित होतो आणि पर्यावरणीय परिणाम कमी होतात.',
      about_why_title: 'हे का महत्त्वाचे आहे',
      about_why_1: 'स्वच्छ हवा: पिकांचे अवशेष जाळल्यामुळे होणारे प्रदूषण कमी होते.',
      about_why_2: 'शेतकरी उत्पन्न: शेतकऱ्यांसाठी अतिरिक्त उत्पन्नाच्या संधी तयार होतात.',
      about_why_3: 'शाश्वतता: कृषी कचऱ्याचा पुनर्वापर करून परिपत्र अर्थव्यवस्था प्रोत्साहित होते.',
      about_impact_title: 'आपला प्रभाव',
      about_impact_1: 'पिकांच्या अवशेषांपासून बनवलेल्या कम्पोस्टमुळे मातीची सुपीकता सुधारते.',
      about_impact_2: 'अॅग्रीवेस्टमधून बायोगॅस निर्मिती केल्याने स्थानिक समुदायांना ऊर्जा मिळते आणि अनवीकरणीय स्रोतांवरील अवलंबन कमी होते.',
      about_closing: 'अॅग्रीवेस्ट मार्केटप्लेस स्वच्छ आणि अधिक शाश्वत भविष्यासाठी कटिबद्ध आहे—एकावेळी एका पिकाच्या अवशेषापासून.'
      ,
      // उत्पादनांची नावे (मार्केटप्लेस आणि विक्री पर्याय)
      product_rice_straw: 'तांदळाचा पेंढा',
      product_sugarcane_bagasse: 'उसाचा बगास',
      product_coconut_husk: 'नारळाची साल',
      product_compost_material: 'कंपोस्ट साहित्य',
      product_wheat_straw: 'गव्हाचा पेंढा',
      product_banana_fiber_waste: 'केळी तंतू कचरा',
      product_corn_cobs: 'मक्याच्या कणसाचा कोब',
      product_peanut_shells: 'शेंगदाण्याची साल',
      product_fruit_waste: 'फळांचा कचरा',
      product_tea_waste: 'चहाचा कचरा',
      product_bamboo_waste: 'बांबू कचरा',
      product_cotton_stalks: 'कापसाच्या काड्या',
      product_mango_seed_waste: 'आंबा बियांचा कचरा',
      product_sawdust: 'आरीची भुशी',
      product_mustard_husk: 'मोहरीचा भूसा',
      product_other: 'इतर',

      // एकक आणि वापर वर्णन
      unit_ton: 'टन',
      unit_tons: 'टन',
      use_desc_rice_straw: 'कम्पोस्ट, प्राण्यांच्या बिछान्यासाठी, कागद गूळ',
      use_desc_sugarcane_bagasse: 'बायोफ्युएल, पेपर/बोर्ड निर्माण',
      use_desc_coconut_husk: 'कोइर उत्पादन, मल्च',
      use_desc_compost_material: 'मृदा सुधारणा, सेंद्रिय शेती',
      use_desc_wheat_straw: 'जनावरांचे खाद्य, मल्च, कम्पोस्ट',
      use_desc_banana_fiber_waste: 'दोऱ्या, हस्तकला, पल्प',
      use_desc_corn_cobs: 'बायोफ्युएल, चारा, सक्रिय कार्बन',
      use_desc_peanut_shells: 'इंधन, पार्टिकल बोर्ड, कम्पोस्ट',
      use_desc_fruit_waste: 'बायोगॅस, प्राण्यांचे खाद्य, सेंद्रिय कम्पोस्ट',
      use_desc_tea_waste: 'कम्पोस्ट, मशरूम शेती',
      use_desc_bamboo_waste: 'बायोचार, हस्तकला, बांधकाम बोर्ड',
      use_desc_cotton_stalks: 'इंधन, पेपर पल्प, पार्टिकल बोर्ड',
      use_desc_mango_seed_waste: 'तेल निष्कर्षण, जनावरांचे खाद्य, कम्पोस्ट',
      use_desc_sawdust: 'पार्टिकल बोर्ड, बायोफ्युएल ब्रिकेट्स, कम्पोस्ट',
      use_desc_mustard_husk: 'इंधन, जनावरांचे खाद्य, सेंद्रिय कम्पोस्ट',
      
      // sell.html
      sell_page_title: 'कचरा विक्री - अॅग्रीवेस्ट',
      sell_header_title: 'तुमचा कृषी कचरा विका',
      sell_header_tag: 'खरेदीदारांसाठी तुमचा कृषी कचरा सूचीबद्ध करा',
      sell_main_title: 'कचरा विक्री फॉर्म',
      sell_name_placeholder: 'तुमचे पूर्ण नाव',
      sell_email_placeholder: 'तुमचा ईमेल पत्ता',
      sell_phone_placeholder: 'फोन नंबर',
      sell_waste_label: 'कचऱ्याचा प्रकार निवडा',
      sell_image_label: 'कचऱ्याचा फोटो',
      sell_image_hint: 'तुमच्या कृषी कचऱ्याचा फोटो जोडा (ऐच्छिक)',
      sell_qty_placeholder: 'प्रमाण (टनमध्ये)',
      sell_price_placeholder: 'प्रति टन किंमत',
      sell_location_placeholder: 'गाव / शहर / जिल्हा',
      sell_submit_btn: 'लिस्टिंग सबमिट करा',
      sell_new_listing: 'आणखी एक लिस्टिंग तयार करा',
      sell_name_label: 'पूर्ण नाव',
      sell_email_label: 'ईमेल पत्ता',
      sell_phone_label: 'फोन नंबर',
      sell_company_label: 'कंपनी',
      sell_company_placeholder: 'कंपनी निवडा',
      sell_waste_type_label: 'कचऱ्याचा प्रकार',
      sell_quantity_label: 'प्रमाण (टनमध्ये)',
      sell_price_label: 'प्रति टन किंमत',
      sell_location_label: 'ठिकाण',
      sell_image_alt: 'निवडलेल्या कचऱ्याच्या फोटोचे पूर्वावलोकन',
      sell_local_success: 'लिस्टिंग या ब्राउझरमध्ये तयार केली आहे. सर्व्हरशी संपर्क केलेला नाही.',
      sell_image_invalid: 'कृपया योग्य प्रतिमा निवडा.',
      sell_image_too_large: '५ MB पेक्षा लहान प्रतिमा निवडा.',
      sell_receipt_title: 'अॅग्रीवेस्ट लिस्टिंग पावती',
      sell_receipt_subtitle: 'लिस्टिंग पूर्वावलोकन',
      sell_receipt_transaction_id: 'व्यवहार आयडी',
      sell_receipt_date: 'तारीख',
      sell_receipt_total: 'अंदाजे एकूण',
      sell_receipt_print: 'प्रिंट करा',
      sell_receipt_download: 'जतन / प्रिंट करा',
      sell_receipt_new: 'नवीन लिस्टिंग',

      // buy.html
      buy_page_title: 'कचरा खरेदी - अॅग्रीवेस्ट',
      buy_header_title: 'कृषी कचरा खरेदी',
      buy_header_tag: 'नवीन ग्राहकांसाठी मार्गदर्शन',
      buy_how_title: 'कसे खरेदी करावे',
      buy_how_p1: 'उपलब्ध लिस्टिंगसाठी <a href="marketplace.html">मार्केटप्लेस</a> पहा. विक्रेत्याने दिलेल्या संपर्क तपशीलांचा वापर करून संपर्क साधा (किंवा मदतीसाठी संपर्क पृष्ठ वापरा).',
      buy_benefits_title: 'कचरा खरेदीचे फायदे',
      buy_env_title: 'पर्यावरणीय फायदे:',
      buy_env_1: 'पिकांचे अवशेष जाळल्यामुळे होणारे प्रदूषण कमी होते.',
      buy_env_2: 'शाश्वत कचरा व्यवस्थापनाला प्रोत्साहन मिळते.',
      buy_env_3: 'कचऱ्याचा कम्पोस्ट/बायोफ्युएल म्हणून पुनर्वापर करून संसाधनांची बचत होते.',
      buy_econ_title: 'आर्थिक फायदे:',
      buy_econ_1: 'शेतकऱ्यांसाठी अतिरिक्त उत्पन्न उपलब्ध होते.',
      buy_econ_2: 'खरेदीदारांसाठी स्वस्त कच्चा माल उपलब्ध होतो.',
      buy_econ_3: 'लघु उद्योगांद्वारे स्थानिक अर्थव्यवस्थेला चालना मिळते.',
      buy_soc_title: 'सामाजिक फायदे:',
      buy_soc_1: 'धूर व प्रदूषक कमी होऊन समुदायाचे आरोग्य सुधारते.',
      buy_soc_2: 'कचरा प्रक्रिया व वाहतूक क्षेत्रात रोजगारनिर्मिती होते.',
      buy_soc_3: 'शाश्वत शेती व पर्यावरणाविषयी जागरूकता वाढते.',
      buy_agri_title: 'कृषी व औद्योगिक फायदे:',
      buy_agri_1: 'सेंद्रिय कचरा पौष्टिक कम्पोस्टमध्ये रूपांतरित करता येतो.',
      buy_agri_2: 'पिकांचे अवशेष बायोफ्युएल निर्मितीसाठी वापरता येतात.',
      buy_agri_3: 'कचरा मौल्यवान साधनांमध्ये रूपांतरित करून परिपत्र अर्थव्यवस्था समर्थित होते.',

      // FAB tooltips (home)
      fab_title_sell: 'कचरा विक्री',
      fab_title_market: 'मार्केटप्लेस पहा',
      fab_title_contact: 'आमच्याशी संपर्क साधा'
    }
  };

  function getLang(){
    const lang = localStorage.getItem(LS_LANG_KEY);
    return Object.prototype.hasOwnProperty.call(translations, lang) ? lang : 'mr';
  }

  function setLang(lang){
    if (!Object.prototype.hasOwnProperty.call(translations, lang)) {
      throw new RangeError(`Unsupported language: ${lang}`);
    }
    localStorage.setItem(LS_LANG_KEY, lang);
    applyTranslations();
    // Notify other scripts (e.g., chatbot) that language changed
    try {
      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('app_lang_changed', { detail: { lang } }));
      }
    } catch(_) {}
  }

  function t(key){
    const lang = getLang();
    return (translations[lang] && translations[lang][key]) || (translations.en[key] || key);
  }

  function applyTranslations(){
    // Ensure the root <html> tag reflects current language
    try {
      const currentLang = getLang();
      if (document && document.documentElement) {
        document.documentElement.setAttribute('lang', currentLang);
      }
    } catch(_) {}
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(key);
    });
    // HTML content (use carefully)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = t(key);
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', t(key));
    });
    // Translate common attributes like title and alt
    document.querySelectorAll('[data-i18n-title-attr]').forEach(el => {
      const key = el.getAttribute('data-i18n-title-attr');
      if (!key) return;
      el.setAttribute('title', t(key));
    });
    document.querySelectorAll('[data-i18n-alt-attr]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt-attr');
      if (!key) return;
      el.setAttribute('alt', t(key));
    });
    // Select options
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      opt.textContent = t(key);
    });
    // Common label fixes inside strong tags (helps marketplace without editing every card)
    document.querySelectorAll('strong').forEach(el => {
      const text = (el.textContent || '').trim();
      if (text === 'Use:') el.textContent = t('use_label');
      if (text === 'Quantity:') el.textContent = t('quantity_label');
      if (text === 'Price:') el.textContent = t('price_label');
    });
    // Always translate units from their original text so switching languages is reversible.
    document.querySelectorAll('p:not([data-i18n]):not([data-i18n-html])').forEach(p => {
      const source = p.dataset.i18nUnitSource || p.innerHTML;
      p.dataset.i18nUnitSource = source;
      p.innerHTML = source
        .replace(/\s*\/\s*ton(s)?\b/gi, match => {
          const plural = /tons/i.test(match);
          return ' / ' + (plural ? t('unit_tons') : t('unit_ton'));
        })
        .replace(/\btons\b/gi, t('unit_tons'))
        .replace(/\bton\b/gi, t('unit_ton'));
    });
    // Document title (optional hook)
    if (document.title && document.body.getAttribute('data-i18n-title')){
      const titleKey = document.body.getAttribute('data-i18n-title');
      document.title = t(titleKey);
    }
  }

  function ensureSelector(){
    let selector = document.getElementById('langSelector');

    if (!selector){
      selector = document.createElement('div');
      selector.id = 'langSelector';
      selector.style.position = 'fixed';
      selector.style.top = '12px';
      selector.style.right = '12px';
      selector.style.zIndex = '99999';
      selector.style.background = 'rgba(255,255,255,0.96)';
      selector.style.backdropFilter = 'blur(8px)';
      selector.style.border = '1px solid rgba(46,125,50,0.15)';
      selector.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
      selector.style.borderRadius = '999px';
      selector.style.padding = '8px 10px';
      selector.style.display = 'flex';
      selector.style.alignItems = 'center';
      selector.style.gap = '8px';
      selector.style.userSelect = 'none';
      selector.style.transition = 'transform .2s ease, box-shadow .2s ease';
      selector.addEventListener('mouseenter', ()=>{ selector.style.boxShadow = '0 8px 22px rgba(0,0,0,0.18)'; selector.style.transform = 'translateY(-1px)'; });
      selector.addEventListener('mouseleave', ()=>{ selector.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)'; selector.style.transform = 'translateY(0)'; });

      const icon = document.createElement('span');
      icon.textContent = '🌐';
      icon.setAttribute('aria-hidden','true');
      icon.style.fontSize = '16px';
      icon.style.lineHeight = '1';
      icon.style.marginRight = '2px';

      const label = document.createElement('span');
      label.setAttribute('data-i18n','lang_label');
      label.style.color = '#2e7d32';
      label.style.fontSize = '13px';
      label.style.fontWeight = '600';
      label.textContent = t('lang_label');

      const sel = document.createElement('select');
      sel.style.border = '1px solid #c8e6c9';
      sel.style.borderRadius = '999px';
      sel.style.padding = '6px 10px';
      sel.style.background = '#fff';
      sel.style.color = '#2e7d32';
      sel.style.fontWeight = '600';
      sel.style.outline = 'none';
      sel.style.cursor = 'pointer';
      sel.style.boxShadow = 'inset 0 0 0 2px rgba(46,125,50,0.06)';
      sel.addEventListener('focus', ()=>{ sel.style.boxShadow = '0 0 0 3px rgba(46,125,50,0.15)'; });
      sel.addEventListener('blur', ()=>{ sel.style.boxShadow = 'inset 0 0 0 2px rgba(46,125,50,0.06)'; });

      const optEn = document.createElement('option');
      optEn.value = 'en'; optEn.setAttribute('data-i18n','lang_en'); optEn.textContent = '🇺🇸 ' + t('lang_en');
      const optHi = document.createElement('option');
      optHi.value = 'hi'; optHi.setAttribute('data-i18n','lang_hi'); optHi.textContent = '🇮🇳 ' + t('lang_hi');
      const optMr = document.createElement('option');
      optMr.value = 'mr'; optMr.setAttribute('data-i18n','lang_mr'); optMr.textContent = '🇮🇳 ' + t('lang_mr');

      sel.appendChild(optEn); sel.appendChild(optHi); sel.appendChild(optMr);
      sel.value = getLang();
      sel.addEventListener('change', (e)=>{
        setLang(e.target.value);
      });

      selector.appendChild(icon);
      selector.appendChild(label);
      selector.appendChild(sel);
      document.body.appendChild(selector);
    } else {
      // Update labels and value
      selector.querySelector('[data-i18n="lang_label"]').textContent = t('lang_label');
      const sel = selector.querySelector('select');
      sel.querySelector('option[value="en"]').textContent = '🇺🇸 ' + t('lang_en');
      sel.querySelector('option[value="hi"]').textContent = '🇮🇳 ' + t('lang_hi');
      sel.querySelector('option[value="mr"]').textContent = '🇮🇳 ' + t('lang_mr');
      sel.value = getLang();
    }
  }

  function init(){
    applyTranslations();
    ensureSelector();
  }

  document.addEventListener('DOMContentLoaded', init);
  // Expose t() as well so other modules can reuse translations if desired
  window.I18N = { setLang, getLang, applyTranslations, t };
})();
