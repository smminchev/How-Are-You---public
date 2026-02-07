/**
 * How Are You?! Landing Page JavaScript
 * - Language switching with localStorage persistence
 * - Spam-protected contact email
 * - Privacy policy link updates per language
 */

// Translations
const translations = {
    en: {
        'hero.title': 'Peace of Mind for Your Loved Ones',
        'hero.subtitle': 'AI-powered safety monitoring that learns your parent\'s routines and alerts you to emergencies - without daily check-in calls',
        'hero.cta': 'Download on Google Play',
        'hero.reviews': 'See what users say on Google Play',

        'features.title': 'Key Features',
        'features.learning.title': '7-Day Learning',
        'features.learning.desc': 'AI learns unique behavioral patterns in just one week',
        'features.monitoring.title': '24/7 Monitoring',
        'features.monitoring.desc': 'Continuous protection without any interaction required',
        'features.alerts.title': 'Smart Alerts',
        'features.alerts.desc': 'Email notifications with GPS coordinates when needed',
        'features.privacy.title': '100% Private',
        'features.privacy.desc': 'All data stays on device, zero cloud transmission',
        'features.price.title': 'One-Time Purchase',
        'features.price.desc': '$99, no subscriptions ever',
        'features.dignity.title': 'Dignity First',
        'features.dignity.desc': 'No intrusive notifications to your parent',

        'howItWorks.title': 'How It Works',
        'howItWorks.step1.title': 'Quick Setup',
        'howItWorks.step1.desc': 'Grant permissions, connect Gmail, add family emails. Takes just 3-5 minutes.',
        'howItWorks.step2.title': 'Learning Phase',
        'howItWorks.step2.desc': 'Basic monitoring active from Day 1. AI personalizes thresholds by Day 7.',
        'howItWorks.step3.title': 'Active Protection',
        'howItWorks.step3.desc': 'Anomaly detection with automatic family alerts when something seems wrong.',

        'whyNot.title': 'Why Not Traditional Solutions?',
        'whyNot.item1': 'Traditional alert systems require pressing a button - but emergencies don\'t wait',
        'whyNot.item2': 'Subscription services cost $30-50/month ($360-600/year) - safety shouldn\'t be a recurring tax',
        'whyNot.item3': 'Cloud-based solutions store your data on their servers - we keep everything on your device',
        'whyNot.item4': 'Generic thresholds don\'t know YOUR parent - we learn individual patterns',
        'whyNot.mission': 'This isn\'t about making money. We built this because we needed it ourselves.',

        'inControl.title': 'You\'re In Control',
        'inControl.subtitle': 'Your privacy, your choice - always',
        'inControl.item1': 'Your data never leaves your device - zero cloud surveillance',
        'inControl.item2': 'View exactly what the app has learned about your patterns',
        'inControl.item3': 'Reset Learning button instantly deletes all data - your choice',
        'inControl.item4': 'No notifications bother you during normal operation',

        'underHood.title': 'Under the Hood',
        'underHood.item1': 'Powered by Google\'s Gemini Nano - on-device AI, no internet required for analysis',
        'underHood.item2': 'Detects: unusual stillness duration, abnormally long sleep, location deviations from safe zones',
        'underHood.item3': 'Context-aware: different thresholds for home vs. outside, day vs. night',
        'underHood.item4': 'Monthly recalibration adapts to changing routines (seasonal, health changes)',
        'underHood.item5': 'Battery efficient: designed for less than 10% daily battery impact',

        'screenshots.title': 'See It In Action',

        'faq.title': 'Frequently Asked Questions',
        'faq.q1.question': 'What emergencies can it detect?',
        'faq.q1.answer': 'The app detects unusual stillness (potential falls or medical emergencies), abnormally long sleep periods, and location deviations from established safe zones. It learns what\'s normal for YOUR parent specifically.',
        'faq.q2.question': 'How does the 7-day learning phase work?',
        'faq.q2.answer': 'During the first 7 days, the AI observes daily patterns - when they wake up, typical activity levels, regular locations. Basic monitoring is active from Day 1, but personalized thresholds are refined by Day 7.',
        'faq.q3.question': 'Is my parent\'s data safe?',
        'faq.q3.answer': 'Yes. All data is processed and stored entirely on the device. Nothing is sent to cloud servers. The only external communication is emergency alerts sent via Gmail to family members.',
        'faq.q4.question': 'What if the app sends false alerts?',
        'faq.q4.answer': 'The AI continuously learns and adapts. False alerts decrease over time as the system better understands individual patterns. You can also adjust sensitivity in settings.',
        'faq.q5.question': 'Do I need to pay monthly?',
        'faq.q5.answer': 'No. It\'s a one-time purchase of $99. No subscriptions, no hidden fees, no recurring charges - ever.',
        'faq.q6.question': 'What Android version is required?',
        'faq.q6.answer': 'Android 14 or higher is required for the on-device AI features (Gemini Nano).',
        'faq.q7.question': 'Can my parent reset or disable it?',
        'faq.q7.answer': 'Yes, absolutely. The "Reset Learning" button is easily accessible and instantly deletes all learned data. They can also uninstall the app anytime - no questions asked.',
        'faq.q8.question': 'What happens if the phone battery dies?',
        'faq.q8.answer': 'The app cannot monitor when the phone is off. However, an extended period without any data can itself trigger an alert to family members, indicating something may be wrong.',
        'faq.q9.question': 'Does it work without WiFi or internet?',
        'faq.q9.answer': 'The AI analysis works entirely offline. However, internet connection (WiFi or mobile data) is needed to send emergency alerts via email.',
        'faq.q10.question': 'What if my parent leaves their phone at home?',
        'faq.q10.answer': 'The app monitors the phone\'s location. If your parent frequently leaves their phone at home, this will be learned as normal behavior. Unusual patterns (phone stationary for too long) may still trigger alerts.',
        'faq.q11.question': 'Why must I "Ignore Battery Optimizations"?',
        'faq.q11.answer': 'Android tries to kill apps that run in the background to save power. For a safety app, this is dangerous because it stops monitoring. "Ignoring optimizations" tells Android that this app is critical and must not be killed.',
        'faq.q12.question': 'The app keeps getting killed by my phone. What do I do?',
        'faq.q12.answer': 'Some manufacturers (Samsung, Xiaomi, Huawei, Honor, OPPO) aggressively kill background apps. Go to Settings > Permissions and fix any issues. Disable Battery Optimization for this app. On Samsung/Xiaomi/Huawei: check manufacturer-specific power saving settings and add the app to exceptions. Lock the app in recent apps if possible.',
        'faq.q13.question': 'I don\'t see a notification. Is the app running?',
        'faq.q13.answer': 'Yes! The app is designed to be "install and forget". The notification is intentionally silent and hidden while you use your phone so you\'re not bothered. To verify: open the app - if you see the dashboard, monitoring is active.',
        'faq.q14.question': 'I see a warning "May keep your system from sleeping". Is this a problem?',
        'faq.q14.answer': 'This warning is normal for a 24/7 safety app. It means the app is working correctly by keeping sensors active to detect emergencies. The app works perfectly with this warning. On Honor/Huawei devices, you can optionally silence it in Settings > Battery > Power-intensive prompt.',
        'faq.q15.question': 'How much battery does the app use?',
        'faq.q15.answer': 'The app uses smart sensor polling that adapts to activity. During stillness, sensor polling reduces by 80%. Typical battery usage is 3-8% per day. WiFi-assisted location helps reduce GPS battery drain. The app is designed for less than 10% daily impact.',

        'troubleshooting.title': 'Troubleshooting',
        'troubleshooting.gps.question': 'GPS location isn\'t updating',
        'troubleshooting.gps.answer': '1. Open Android Settings > Location and ensure it\'s enabled. 2. Set location accuracy to "High accuracy" mode. 3. Open app permissions for "How Are You?!" and set Location to "Allow all the time". 4. Restart the phone and wait 5 minutes. 5. If outdoors, ensure clear view of sky for 2 minutes.',
        'troubleshooting.email.question': 'Alert emails are not being delivered',
        'troubleshooting.email.answer': '1. Go to Settings > Email Configuration and ensure you see "Signed in as...". 2. If not signed in, tap "Sign in with Google" and grant permissions. 3. Verify all recipient email addresses are valid. 4. Ensure the phone has active internet. 5. Wait 10 minutes and try again if you\'ve sent many emails recently (Gmail rate limiting).',
        'troubleshooting.killed.question': 'Monitoring stops or notification disappears',
        'troubleshooting.killed.answer': '1. Go to Settings > Permissions and fix any issues shown. 2. Disable Battery Optimization: Android Settings > Apps > How Are You?! > Battery > Unrestricted. 3. Lock the app in recent apps (long-press the app card and tap the lock icon). 4. On Xiaomi/Huawei/Samsung/Honor: check manufacturer-specific power saving settings and add the app to exceptions.',
        'troubleshooting.battery.question': 'Battery draining quickly',
        'troubleshooting.battery.answer': '1. Ensure WiFi is enabled - GPS uses less battery with WiFi-assisted location. 2. The app typically uses 3-8% battery per day. Higher usage may indicate GPS issues. 3. If battery drain is severe, restart the phone. 4. The app automatically reduces sensor polling during periods of stillness to save battery.',

        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2026 How Are You?! All rights reserved.'
    },
    bg: {
        'hero.title': 'Спокойствие за Вашите Близки',
        'hero.subtitle': 'AI мониторинг за безопасност, който научава рутината на родителя ви и ви известява при извънредни ситуации - без ежедневни обаждания',
        'hero.cta': 'Изтегли от Google Play',
        'hero.reviews': 'Вижте какво казват потребителите в Google Play',

        'features.title': 'Основни Функции',
        'features.learning.title': '7-дневно Обучение',
        'features.learning.desc': 'AI научава уникалните поведенчески модели само за една седмица',
        'features.monitoring.title': '24/7 Мониторинг',
        'features.monitoring.desc': 'Непрекъсната защита без необходимост от взаимодействие',
        'features.alerts.title': 'Интелигентни Известия',
        'features.alerts.desc': 'Имейл известия с GPS координати при нужда',
        'features.privacy.title': '100% Поверително',
        'features.privacy.desc': 'Всички данни остават на устройството, нула облачно предаване',
        'features.price.title': 'Еднократно Плащане',
        'features.price.desc': '$99, без абонаменти завинаги',
        'features.dignity.title': 'Достойнство Преди Всичко',
        'features.dignity.desc': 'Без натрапчиви известия към родителя ви',

        'howItWorks.title': 'Как Работи',
        'howItWorks.step1.title': 'Бърза Настройка',
        'howItWorks.step1.desc': 'Дайте разрешения, свържете Gmail, добавете имейли на семейството. Отнема само 3-5 минути.',
        'howItWorks.step2.title': 'Фаза на Обучение',
        'howItWorks.step2.desc': 'Базов мониторинг активен от Ден 1. AI персонализира праговете до Ден 7.',
        'howItWorks.step3.title': 'Активна Защита',
        'howItWorks.step3.desc': 'Откриване на аномалии с автоматични известия до семейството при нещо нередно.',

        'whyNot.title': 'Защо Не Традиционни Решения?',
        'whyNot.item1': 'Традиционните системи изискват натискане на бутон - но спешните случаи не чакат',
        'whyNot.item2': 'Абонаментните услуги струват $30-50/месец ($360-600/година) - безопасността не трябва да е повтарящ се данък',
        'whyNot.item3': 'Облачните решения съхраняват данните ви на техните сървъри - ние пазим всичко на вашето устройство',
        'whyNot.item4': 'Общите прагове не познават ВАШИЯ родител - ние научаваме индивидуалните модели',
        'whyNot.mission': 'Това не е за пари. Създадохме го, защото самите ние имахме нужда от него.',

        'inControl.title': 'Вие Контролирате',
        'inControl.subtitle': 'Вашата поверителност, ваш избор - винаги',
        'inControl.item1': 'Данните ви никога не напускат устройството - нула облачно наблюдение',
        'inControl.item2': 'Вижте точно какво е научило приложението за моделите ви',
        'inControl.item3': 'Бутонът "Нулиране на Обучението" незабавно изтрива всички данни - ваш избор',
        'inControl.item4': 'Никакви известия не ви безпокоят при нормална работа',

        'underHood.title': 'Под Капака',
        'underHood.item1': 'Задвижван от Google Gemini Nano - AI на устройството, не е нужен интернет за анализ',
        'underHood.item2': 'Открива: необичайна неподвижност, ненормално дълъг сън, отклонения от безопасни зони',
        'underHood.item3': 'Контекстно осъзнат: различни прагове за вкъщи и навън, ден и нощ',
        'underHood.item4': 'Месечно прекалибриране се адаптира към променящи се рутини (сезонни, здравни промени)',
        'underHood.item5': 'Ефективен за батерията: проектиран за по-малко от 10% дневно въздействие',

        'screenshots.title': 'Вижте го в Действие',

        'faq.title': 'Често Задавани Въпроси',
        'faq.q1.question': 'Какви спешни случаи може да открие?',
        'faq.q1.answer': 'Приложението открива необичайна неподвижност (потенциални падания или медицински спешни случаи), ненормално дълги периоди на сън и отклонения от установените безопасни зони. То научава какво е нормално конкретно за ВАШИЯ родител.',
        'faq.q2.question': 'Как работи 7-дневната фаза на обучение?',
        'faq.q2.answer': 'През първите 7 дни AI наблюдава ежедневните модели - кога се събуждат, типични нива на активност, редовни локации. Базов мониторинг е активен от Ден 1, но персонализираните прагове се усъвършенстват до Ден 7.',
        'faq.q3.question': 'Безопасни ли са данните на родителя ми?',
        'faq.q3.answer': 'Да. Всички данни се обработват и съхраняват изцяло на устройството. Нищо не се изпраща към облачни сървъри. Единствената външна комуникация са спешните известия, изпратени чрез Gmail до членовете на семейството.',
        'faq.q4.question': 'Какво ако приложението изпраща фалшиви известия?',
        'faq.q4.answer': 'AI непрекъснато се учи и адаптира. Фалшивите известия намаляват с времето, тъй като системата по-добре разбира индивидуалните модели. Можете също да регулирате чувствителността в настройките.',
        'faq.q5.question': 'Трябва ли да плащам месечно?',
        'faq.q5.answer': 'Не. Това е еднократна покупка от $99. Без абонаменти, без скрити такси, без повтарящи се такси - никога.',
        'faq.q6.question': 'Каква версия на Android е необходима?',
        'faq.q6.answer': 'Изисква се Android 14 или по-нова версия за AI функциите на устройството (Gemini Nano).',
        'faq.q7.question': 'Може ли родителят ми да го нулира или деактивира?',
        'faq.q7.answer': 'Да, абсолютно. Бутонът "Нулиране на Обучението" е лесно достъпен и незабавно изтрива всички научени данни. Те също могат да деинсталират приложението по всяко време - без въпроси.',
        'faq.q8.question': 'Какво се случва ако батерията на телефона се изтощи?',
        'faq.q8.answer': 'Приложението не може да наблюдава, когато телефонът е изключен. Въпреки това, продължителен период без никакви данни сам по себе си може да задейства известие до членовете на семейството, показващо че нещо може да не е наред.',
        'faq.q9.question': 'Работи ли без WiFi или интернет?',
        'faq.q9.answer': 'AI анализът работи изцяло офлайн. Въпреки това, интернет връзка (WiFi или мобилни данни) е необходима за изпращане на спешни известия по имейл.',
        'faq.q10.question': 'Какво ако родителят ми остави телефона си вкъщи?',
        'faq.q10.answer': 'Приложението следи местоположението на телефона. Ако родителят ви често оставя телефона си вкъщи, това ще бъде научено като нормално поведение. Необичайни модели (телефон неподвижен твърде дълго) все още могат да задействат известия.',
        'faq.q11.question': 'Защо трябва да "Игнорирам оптимизацията на батерията"?',
        'faq.q11.answer': 'Android се опитва да убие приложения, работещи на заден план, за да спести енергия. За приложение за безопасност това е опасно, защото спира мониторинга. "Игнориране на оптимизациите" казва на Android, че това приложение е критично и не трябва да се убива.',
        'faq.q12.question': 'Телефонът ми продължава да убива приложението. Какво да направя?',
        'faq.q12.answer': 'Някои производители (Samsung, Xiaomi, Huawei, Honor, OPPO) агресивно убиват фонови приложения. Отидете в Настройки > Разрешения и поправете проблемите. Деактивирайте оптимизацията на батерията за това приложение. За Samsung/Xiaomi/Huawei: проверете настройките за пестене на енергия на производителя и добавете приложението в изключенията.',
        'faq.q13.question': 'Не виждам известие. Работи ли приложението?',
        'faq.q13.answer': 'Да! Приложението е проектирано да бъде "инсталирай и забрави". Известието е нарочно тихо и скрито, докато използвате телефона, за да не ви притеснява. За да проверите: отворете приложението - ако виждате таблото, мониторингът е активен.',
        'faq.q14.question': 'Виждам предупреждение "Може да попречи на системата да заспи". Проблем ли е?',
        'faq.q14.answer': 'Това предупреждение е нормално за 24/7 приложение за безопасност. Означава, че приложението работи правилно, поддържайки сензорите активни за откриване на спешни случаи. Приложението работи перфектно с това предупреждение. За Honor/Huawei можете да го заглушите в Настройки > Батерия > Енергоемки приложения.',
        'faq.q15.question': 'Колко батерия използва приложението?',
        'faq.q15.answer': 'Приложението използва интелигентно адаптивно четене на сензорите. При неподвижност честотата се намалява с 80%. Типичното използване на батерията е 3-8% на ден. WiFi-подпомогнатото местоположение помага за намаляване на разхода. Приложението е проектирано за по-малко от 10% дневно въздействие.',

        'troubleshooting.title': 'Отстраняване на проблеми',
        'troubleshooting.gps.question': 'GPS местоположението не се обновява',
        'troubleshooting.gps.answer': '1. Отворете Настройки на Android > Местоположение и се уверете, че е включено. 2. Задайте точност на местоположението на "Висока точност". 3. Отворете разрешенията на приложението и задайте Местоположение на "Позволи винаги". 4. Рестартирайте телефона и изчакайте 5 минути. 5. Ако сте навън, осигурете ясна видимост към небето за 2 минути.',
        'troubleshooting.email.question': 'Имейл известията не се доставят',
        'troubleshooting.email.answer': '1. Отидете в Настройки > Имейл конфигурация и се уверете, че виждате "Влезли сте като...". 2. Ако не сте влезли, натиснете "Влез с Google" и дайте разрешения. 3. Проверете дали имейл адресите на получателите са валидни. 4. Уверете се, че телефонът има активен интернет. 5. Изчакайте 10 минути и опитайте отново ако сте изпратили много имейли наскоро.',
        'troubleshooting.killed.question': 'Мониторингът спира или известието изчезва',
        'troubleshooting.killed.answer': '1. Отидете в Настройки > Разрешения и поправете проблемите. 2. Деактивирайте оптимизацията на батерията: Настройки > Приложения > How Are You?! > Батерия > Неограничено. 3. Заключете приложението в последни приложения (задръжте картата на приложението и натиснете иконата за заключване). 4. За Xiaomi/Huawei/Samsung/Honor: проверете настройките за пестене на енергия на производителя.',
        'troubleshooting.battery.question': 'Батерията се изтощава бързо',
        'troubleshooting.battery.answer': '1. Уверете се, че WiFi е включен - GPS използва по-малко батерия с WiFi-подпомогнато местоположение. 2. Приложението обикновено използва 3-8% батерия на ден. По-високо използване може да означава проблеми с GPS. 3. Ако изтощаването е сериозно, рестартирайте телефона. 4. Приложението автоматично намалява честотата на сензорите при неподвижност.',

        'footer.privacy': 'Политика за Поверителност',
        'footer.contact': 'Контакт',
        'footer.copyright': '© 2026 How Are You?! Всички права запазени.'
    },
    de: {
        'hero.title': 'Seelenfrieden für Ihre Liebsten',
        'hero.subtitle': 'KI-gestützte Sicherheitsüberwachung, die die Routinen Ihrer Eltern lernt und Sie bei Notfällen benachrichtigt - ohne tägliche Kontrollanrufe',
        'hero.cta': 'Bei Google Play herunterladen',
        'hero.reviews': 'Sehen Sie, was Nutzer bei Google Play sagen',

        'features.title': 'Hauptfunktionen',
        'features.learning.title': '7-Tage-Lernphase',
        'features.learning.desc': 'KI lernt einzigartige Verhaltensmuster in nur einer Woche',
        'features.monitoring.title': '24/7 Überwachung',
        'features.monitoring.desc': 'Kontinuierlicher Schutz ohne jegliche Interaktion',
        'features.alerts.title': 'Intelligente Alarme',
        'features.alerts.desc': 'E-Mail-Benachrichtigungen mit GPS-Koordinaten bei Bedarf',
        'features.privacy.title': '100% Privat',
        'features.privacy.desc': 'Alle Daten bleiben auf dem Gerät, keine Cloud-Übertragung',
        'features.price.title': 'Einmaliger Kauf',
        'features.price.desc': '99$, keine Abonnements - niemals',
        'features.dignity.title': 'Würde Zuerst',
        'features.dignity.desc': 'Keine aufdringlichen Benachrichtigungen an Ihre Eltern',

        'howItWorks.title': 'So Funktioniert Es',
        'howItWorks.step1.title': 'Schnelle Einrichtung',
        'howItWorks.step1.desc': 'Berechtigungen erteilen, Gmail verbinden, Familien-E-Mails hinzufügen. Dauert nur 3-5 Minuten.',
        'howItWorks.step2.title': 'Lernphase',
        'howItWorks.step2.desc': 'Basisüberwachung ab Tag 1 aktiv. KI personalisiert Schwellenwerte bis Tag 7.',
        'howItWorks.step3.title': 'Aktiver Schutz',
        'howItWorks.step3.desc': 'Anomalieerkennung mit automatischen Familienalarmen, wenn etwas nicht stimmt.',

        'whyNot.title': 'Warum Nicht Traditionelle Lösungen?',
        'whyNot.item1': 'Traditionelle Alarmsysteme erfordern das Drücken eines Knopfes - aber Notfälle warten nicht',
        'whyNot.item2': 'Abo-Dienste kosten 30-50$/Monat (360-600$/Jahr) - Sicherheit sollte keine wiederkehrende Steuer sein',
        'whyNot.item3': 'Cloud-basierte Lösungen speichern Ihre Daten auf deren Servern - wir behalten alles auf Ihrem Gerät',
        'whyNot.item4': 'Allgemeine Schwellenwerte kennen IHREN Elternteil nicht - wir lernen individuelle Muster',
        'whyNot.mission': 'Es geht nicht ums Geld. Wir haben es gebaut, weil wir es selbst brauchten.',

        'inControl.title': 'Sie Haben Die Kontrolle',
        'inControl.subtitle': 'Ihre Privatsphäre, Ihre Wahl - immer',
        'inControl.item1': 'Ihre Daten verlassen niemals Ihr Gerät - keine Cloud-Überwachung',
        'inControl.item2': 'Sehen Sie genau, was die App über Ihre Muster gelernt hat',
        'inControl.item3': 'Die Schaltfläche "Lernen Zurücksetzen" löscht sofort alle Daten - Ihre Wahl',
        'inControl.item4': 'Keine Benachrichtigungen stören Sie im Normalbetrieb',

        'underHood.title': 'Unter Der Haube',
        'underHood.item1': 'Angetrieben von Googles Gemini Nano - KI auf dem Gerät, kein Internet für Analysen erforderlich',
        'underHood.item2': 'Erkennt: ungewöhnliche Stillstandsdauer, abnormal langen Schlaf, Abweichungen von sicheren Zonen',
        'underHood.item3': 'Kontextbewusst: unterschiedliche Schwellenwerte für Zuhause vs. draußen, Tag vs. Nacht',
        'underHood.item4': 'Monatliche Neukalibrierung passt sich ändernden Routinen an (saisonal, gesundheitliche Veränderungen)',
        'underHood.item5': 'Batterieeffizient: entwickelt für weniger als 10% tägliche Batterieauswirkung',

        'screenshots.title': 'Sehen Sie Es In Aktion',

        'faq.title': 'Häufig Gestellte Fragen',
        'faq.q1.question': 'Welche Notfälle kann es erkennen?',
        'faq.q1.answer': 'Die App erkennt ungewöhnliche Stillstand (potenzielle Stürze oder medizinische Notfälle), abnormal lange Schlafperioden und Abweichungen von etablierten sicheren Zonen. Sie lernt, was speziell für IHREN Elternteil normal ist.',
        'faq.q2.question': 'Wie funktioniert die 7-tägige Lernphase?',
        'faq.q2.answer': 'Während der ersten 7 Tage beobachtet die KI tägliche Muster - wann sie aufwachen, typische Aktivitätsniveaus, regelmäßige Orte. Basisüberwachung ist ab Tag 1 aktiv, aber personalisierte Schwellenwerte werden bis Tag 7 verfeinert.',
        'faq.q3.question': 'Sind die Daten meiner Eltern sicher?',
        'faq.q3.answer': 'Ja. Alle Daten werden vollständig auf dem Gerät verarbeitet und gespeichert. Nichts wird an Cloud-Server gesendet. Die einzige externe Kommunikation sind Notfallalarme, die per Gmail an Familienmitglieder gesendet werden.',
        'faq.q4.question': 'Was wenn die App Fehlalarme sendet?',
        'faq.q4.answer': 'Die KI lernt und passt sich kontinuierlich an. Fehlalarme nehmen mit der Zeit ab, da das System individuelle Muster besser versteht. Sie können auch die Empfindlichkeit in den Einstellungen anpassen.',
        'faq.q5.question': 'Muss ich monatlich bezahlen?',
        'faq.q5.answer': 'Nein. Es ist ein einmaliger Kauf von 99$. Keine Abonnements, keine versteckten Gebühren, keine wiederkehrenden Kosten - niemals.',
        'faq.q6.question': 'Welche Android-Version ist erforderlich?',
        'faq.q6.answer': 'Android 14 oder höher ist für die KI-Funktionen auf dem Gerät (Gemini Nano) erforderlich.',
        'faq.q7.question': 'Kann mein Elternteil es zurücksetzen oder deaktivieren?',
        'faq.q7.answer': 'Ja, absolut. Die Schaltfläche "Lernen Zurücksetzen" ist leicht zugänglich und löscht sofort alle gelernten Daten. Sie können die App auch jederzeit deinstallieren - ohne Fragen.',
        'faq.q8.question': 'Was passiert, wenn der Handyakku leer ist?',
        'faq.q8.answer': 'Die App kann nicht überwachen, wenn das Telefon ausgeschaltet ist. Ein längerer Zeitraum ohne Daten kann jedoch selbst einen Alarm an Familienmitglieder auslösen, der darauf hinweist, dass etwas nicht stimmen könnte.',
        'faq.q9.question': 'Funktioniert es ohne WLAN oder Internet?',
        'faq.q9.answer': 'Die KI-Analyse funktioniert vollständig offline. Eine Internetverbindung (WLAN oder mobile Daten) ist jedoch erforderlich, um Notfallalarme per E-Mail zu senden.',
        'faq.q10.question': 'Was wenn mein Elternteil das Telefon zu Hause lässt?',
        'faq.q10.answer': 'Die App überwacht den Standort des Telefons. Wenn Ihr Elternteil häufig das Telefon zu Hause lässt, wird dies als normales Verhalten gelernt. Ungewöhnliche Muster (Telefon zu lange stationär) können trotzdem Alarme auslösen.',
        'faq.q11.question': 'Warum muss ich "Batterieoptimierung ignorieren"?',
        'faq.q11.answer': 'Android versucht, Hintergrund-Apps zu beenden, um Strom zu sparen. Für eine Sicherheits-App ist dies gefährlich, da die Überwachung gestoppt wird. "Optimierungen ignorieren" teilt Android mit, dass diese App kritisch ist und nicht beendet werden darf.',
        'faq.q12.question': 'Mein Telefon beendet die App ständig. Was soll ich tun?',
        'faq.q12.answer': 'Einige Hersteller (Samsung, Xiaomi, Huawei, Honor, OPPO) beenden Hintergrund-Apps aggressiv. Gehen Sie zu Einstellungen > Berechtigungen und beheben Sie Probleme. Deaktivieren Sie die Batterieoptimierung für diese App. Bei Samsung/Xiaomi/Huawei: Überprüfen Sie die herstellerspezifischen Energiespareinstellungen und fügen Sie die App zu den Ausnahmen hinzu.',
        'faq.q13.question': 'Ich sehe keine Benachrichtigung. Läuft die App?',
        'faq.q13.answer': 'Ja! Die App ist als "Installieren und Vergessen" konzipiert. Die Benachrichtigung ist absichtlich lautlos und verborgen, während Sie Ihr Telefon benutzen. Zur Überprüfung: Öffnen Sie die App - wenn Sie das Dashboard sehen, ist die Überwachung aktiv.',
        'faq.q14.question': 'Ich sehe eine Warnung "Kann Ihr System am Einschlafen hindern". Ist das ein Problem?',
        'faq.q14.answer': 'Diese Warnung ist normal für eine 24/7-Sicherheits-App. Sie bedeutet, dass die App korrekt funktioniert, indem sie Sensoren aktiv hält, um Notfälle zu erkennen. Die App funktioniert einwandfrei mit dieser Warnung. Auf Honor/Huawei-Geräten können Sie sie optional unter Einstellungen > Akku > Energieintensive Eingabeaufforderung stummschalten.',
        'faq.q15.question': 'Wie viel Akku verbraucht die App?',
        'faq.q15.answer': 'Die App verwendet intelligente Sensorabfrage, die sich an die Aktivität anpasst. Bei Stillstand wird die Sensorabfrage um 80% reduziert. Typischer Akkuverbrauch beträgt 3-8% pro Tag. WLAN-unterstützte Ortung hilft, den GPS-Akkuverbrauch zu reduzieren. Die App ist für weniger als 10% tägliche Auswirkung konzipiert.',

        'troubleshooting.title': 'Fehlerbehebung',
        'troubleshooting.gps.question': 'GPS-Standort wird nicht aktualisiert',
        'troubleshooting.gps.answer': '1. Öffnen Sie Android-Einstellungen > Standort und stellen Sie sicher, dass er aktiviert ist. 2. Setzen Sie die Standortgenauigkeit auf "Hohe Genauigkeit". 3. Öffnen Sie die App-Berechtigungen und setzen Sie Standort auf "Immer erlauben". 4. Starten Sie das Telefon neu und warten Sie 5 Minuten. 5. Wenn Sie draußen sind, sorgen Sie für freie Sicht zum Himmel für 2 Minuten.',
        'troubleshooting.email.question': 'Alarm-E-Mails werden nicht zugestellt',
        'troubleshooting.email.answer': '1. Gehen Sie zu Einstellungen > E-Mail-Konfiguration und stellen Sie sicher, dass "Angemeldet als..." angezeigt wird. 2. Falls nicht angemeldet, tippen Sie auf "Mit Google anmelden" und erteilen Sie Berechtigungen. 3. Überprüfen Sie, ob alle Empfänger-E-Mail-Adressen gültig sind. 4. Stellen Sie sicher, dass das Telefon aktives Internet hat. 5. Warten Sie 10 Minuten und versuchen Sie es erneut, wenn Sie kürzlich viele E-Mails gesendet haben.',
        'troubleshooting.killed.question': 'Überwachung stoppt oder Benachrichtigung verschwindet',
        'troubleshooting.killed.answer': '1. Gehen Sie zu Einstellungen > Berechtigungen und beheben Sie angezeigte Probleme. 2. Deaktivieren Sie Batterieoptimierung: Einstellungen > Apps > How Are You?! > Akku > Uneingeschränkt. 3. Sperren Sie die App in den letzten Apps (App-Karte lange drücken und Sperrsymbol tippen). 4. Bei Xiaomi/Huawei/Samsung/Honor: Überprüfen Sie die herstellerspezifischen Energiespareinstellungen.',
        'troubleshooting.battery.question': 'Akku entlädt sich schnell',
        'troubleshooting.battery.answer': '1. Stellen Sie sicher, dass WLAN aktiviert ist - GPS verbraucht weniger Akku mit WLAN-unterstützter Ortung. 2. Die App verbraucht normalerweise 3-8% Akku pro Tag. Höherer Verbrauch kann auf GPS-Probleme hinweisen. 3. Bei starker Entladung starten Sie das Telefon neu. 4. Die App reduziert automatisch die Sensorabfrage bei Stillstand, um Akku zu sparen.',

        'footer.privacy': 'Datenschutzerklärung',
        'footer.contact': 'Kontakt',
        'footer.copyright': '© 2026 How Are You?! Alle Rechte vorbehalten.'
    }
};

// Privacy policy links per language
const privacyLinks = {
    en: 'privacy-policy.html',
    bg: 'privacy-policy-bg.html',
    de: 'privacy-policy-de.html'
};

// Contact email (obfuscated)
const emailParts = ['stoyan', '.', 'minchev', '@', 'gmail', '.', 'com'];

// Current language
let currentLang = 'en';

/**
 * Initialize the page
 */
function init() {
    // Load saved language preference
    const savedLang = localStorage.getItem('howAreYou_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    // Set up language switcher
    setupLanguageSwitcher();

    // Set up contact link
    setupContactLink();

    // Apply initial language
    applyLanguage(currentLang);
}

/**
 * Set up language switcher buttons
 */
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                applyLanguage(lang);
            }
        });
    });
}

/**
 * Apply a language to the page
 */
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('howAreYou_lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update privacy policy link
    const privacyLink = document.querySelector('[data-privacy-link]');
    if (privacyLink && privacyLinks[lang]) {
        privacyLink.href = privacyLinks[lang];
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

/**
 * Set up spam-protected contact link
 */
function setupContactLink() {
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Assemble email from parts
            const email = emailParts.join('');
            window.location.href = 'mailto:' + email;
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
