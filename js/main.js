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
        'features.privacy.title': 'Your Privacy, Protected',
        'features.privacy.desc': 'Your data stays on your phone — AI safety analysis via secure encrypted connection',
        'features.price.title': 'Simple Pricing',
        'features.price.desc': '$99 with first year included. $2/year after that',
        'features.dignity.title': 'Dignity First',
        'features.dignity.desc': 'No intrusive notifications to your parent',

        'scenarios.title': 'What We Detect',
        'scenarios.subtitle': 'Real emergencies the app is built to catch',
        'scenarios.falls.title': 'Falls at Home',
        'scenarios.falls.desc': 'Your parent falls and can\'t reach their phone. The app detects hours of unusual stillness and alerts your family with their GPS location.',
        'scenarios.medical.title': 'Medical Emergency',
        'scenarios.medical.desc': 'A stroke or heart event leaves them unable to move. The app notices the sudden break from normal activity patterns.',
        'scenarios.sleep.title': 'Didn\'t Wake Up on Time',
        'scenarios.sleep.desc': 'It\'s 11 AM and they usually wake at 7. The app knows their sleep schedule and alerts you when something\'s off.',
        'scenarios.wandered.title': 'Wandered to Unfamiliar Area',
        'scenarios.wandered.desc': 'They\'ve left their usual neighborhood at an unusual hour. The app learned their safe zones and notices the deviation.',
        'scenarios.silent.title': 'Phone Silent Too Long',
        'scenarios.silent.desc': 'No phone activity for hours. Could mean the battery died — or it could mean they can\'t reach it.',
        'scenarios.travel.title': 'Traveling Safely',
        'scenarios.travel.desc': 'Your parent went on vacation. Instead of 7 days of false alarms, you get one "they appear to be traveling" notification and a "they\'re home" when they return.',

        'howItWorks.title': 'How It Works',
        'howItWorks.step1.title': 'Quick Setup',
        'howItWorks.step1.desc': 'Grant permissions, add family emails. Takes just 3-5 minutes.',
        'howItWorks.step2.title': 'Learning Phase',
        'howItWorks.step2.desc': 'Basic monitoring active from Day 1. AI personalizes thresholds by Day 7.',
        'howItWorks.step3.title': 'Active Protection',
        'howItWorks.step3.desc': 'Anomaly detection with automatic family alerts when something seems wrong.',

        'dayStory.title': 'A Day With How Are You?!',
        'dayStory.subtitle': 'What protection looks like from your family\'s perspective',
        'dayStory.morning.time': 'Morning',
        'dayStory.morning.text': 'Elena wakes up at 7:15 AM, just like every day. The app notes this quietly. No alert. Her daughter Katya starts her workday without worry.',
        'dayStory.afternoon.time': 'Afternoon',
        'dayStory.afternoon.text': 'Elena walks to the neighborhood grocery store — a familiar route. The app recognizes her safe zone. Still no alert. Katya is in a meeting.',
        'dayStory.alert.time': 'The Alert That Matters',
        'dayStory.alert.text': 'One Tuesday, Elena doesn\'t wake up by 10 AM. Then 11 AM. The app sends Katya an email: "Unusual sleep duration detected. Last known location: Home." Katya calls a neighbor who checks on Elena — she had a fever and couldn\'t get out of bed. She\'s fine now.',
        'dayStory.closing': '99 days of trusted silence. 1 day of life-saving attention.',

        'trust.title': 'Why Families Trust Us',
        'trust.zero.title': 'Zero Interaction Needed',
        'trust.zero.desc': 'Your parent doesn\'t press buttons, wear devices, or answer check-in calls. They just live their life.',
        'trust.price.title': '$99 + $2/year After Year 1',
        'trust.price.desc': 'First year included. Small annual fee keeps AI analysis active. No hidden costs.',
        'trust.privacy.title': 'Your Privacy, Protected',
        'trust.privacy.desc': 'All detailed data stays on their phone. Anonymous behavioral summaries analyzed securely — no tracking, no surveillance.',
        'trust.ai.title': 'AI That Learns THEIR Routine',
        'trust.ai.desc': 'Not generic thresholds — the AI learns your parent\'s unique sleep times, activity levels, and favorite places.',
        'trust.travel.title': 'Travel-Aware Intelligence',
        'trust.travel.desc': 'Going on vacation? The app adapts automatically. No false alarms, just one friendly "they\'re traveling" notification.',
        'trust.phone.title': 'Just Their Phone',
        'trust.phone.desc': 'No pendants, no base stations, no wristbands to charge. Their existing Android phone is all they need.',

        'whyNot.mission': 'We built this because someone we love was in a difficult situation, and we wished something like this existed.',

        'inControl.title': 'You\'re In Control',
        'inControl.subtitle': 'Your privacy, your choice - always',
        'inControl.item1': 'Your detailed data stays on the device — no tracking, no surveillance, no personal data shared',
        'inControl.item2': 'View exactly what the app has learned about your patterns',
        'inControl.item3': 'Reset Learning button instantly deletes all data - your choice',
        'inControl.item4': 'No notifications bother you during normal operation',

        'underHood.title': 'Under the Hood',
        'underHood.item1': 'Powered by Google\'s Gemini AI — fast, accurate safety analysis. Core monitoring works even offline',
        'underHood.item2': 'Detects: unusual stillness duration, abnormally long sleep, location deviations from safe zones',
        'underHood.item3': 'Context-aware: different thresholds for home vs. outside, day vs. night',
        'underHood.item4': 'Weekly recalibration adapts to changing routines (seasonal, health changes)',
        'underHood.item5': 'Battery efficient: designed for less than 1% daily battery impact',

        'screenshots.title': 'See It In Action',

        'faq.title': 'Frequently Asked Questions',
        'faq.q1.question': 'What emergencies can it detect?',
        'faq.q1.answer': 'The app detects unusual stillness (potential falls or medical emergencies), abnormally long sleep periods, and location deviations from established safe zones. It learns what\'s normal for YOUR parent specifically.',
        'faq.q2.question': 'How does the 7-day learning phase work?',
        'faq.q2.answer': 'During the first 7 days, the AI observes daily patterns - when they wake up, typical activity levels, regular locations. Basic monitoring is active from Day 1, but personalized thresholds are refined by Day 7.',
        'faq.q3.question': 'Is my parent\'s data safe?',
        'faq.q3.answer': 'Yes. All detailed data is stored on the device. For safety analysis, behavioral summaries and general location context are sent securely to Google\'s AI — similar to what any maps or weather app uses. No names or personal identifiers are ever shared. Emergency alerts are sent via encrypted email to family members.',
        'faq.q4.question': 'What if the app sends false alerts?',
        'faq.q4.answer': 'The AI continuously learns and adapts. False alerts decrease over time as the system better understands individual patterns.',
        'faq.q5.question': 'Do I need to pay monthly?',
        'faq.q5.answer': '$99 includes the first year. After that, a small fee ($2/year) keeps the AI safety analysis active. Even without the subscription, core safety monitoring continues.',
        'faq.q6.question': 'What Android version is required?',
        'faq.q6.answer': 'Any Android phone running Android 14 or higher.',
        'faq.q7.question': 'Can my parent reset or disable it?',
        'faq.q7.answer': 'Yes, absolutely. The "Reset Learning" button is easily accessible and instantly deletes all learned data. They can also uninstall the app anytime - no questions asked.',
        'faq.q8.question': 'What happens if the phone battery dies?',
        'faq.q8.answer': 'The app cannot monitor when the phone is off. However, an extended period without any data can itself trigger an alert to family members, indicating something may be wrong.',
        'faq.q9.question': 'Does it work without WiFi or internet?',
        'faq.q9.answer': 'Core safety monitoring works offline. AI-enhanced analysis requires internet, but safety floors (emergency detection) always work. Internet connection is needed to send emergency alerts via email.',
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
        'faq.q15.answer': 'The app uses an adaptive heartbeat that reduces sensor activity during stillness. Typical battery usage is less than 1% per day. WiFi-assisted location helps reduce GPS battery drain.',

        'troubleshooting.title': 'Troubleshooting',
        'troubleshooting.gps.question': 'GPS location isn\'t updating',
        'troubleshooting.gps.answer': '1. Open Android Settings > Location and ensure it\'s enabled. 2. Set location accuracy to "High accuracy" mode. 3. Open app permissions for "How Are You?!" and set Location to "Allow all the time". 4. Restart the phone and wait 5 minutes. 5. If outdoors, ensure clear view of sky for 2 minutes.',
        'troubleshooting.email.question': 'Alert emails are not being delivered',
        'troubleshooting.email.answer': '1. Verify all recipient email addresses are correct in Settings > Recipients. 2. Ensure the phone has active internet. 3. Try sending a test alert from Settings. 4. If it still fails, check the diagnostic export for error details.',
        'troubleshooting.killed.question': 'Monitoring stops or notification disappears',
        'troubleshooting.killed.answer': '1. Go to Settings > Permissions and fix any issues shown. 2. Disable Battery Optimization: Android Settings > Apps > How Are You?! > Battery > Unrestricted. 3. Lock the app in recent apps (long-press the app card and tap the lock icon). 4. On Xiaomi/Huawei/Samsung/Honor: check manufacturer-specific power saving settings and add the app to exceptions.',
        'troubleshooting.battery.question': 'Battery draining quickly',
        'troubleshooting.battery.answer': '1. Ensure WiFi is enabled - GPS uses less battery with WiFi-assisted location. 2. The app typically uses less than 1% battery per day. Higher usage may indicate GPS issues. 3. If battery drain is severe, restart the phone. 4. The app automatically reduces sensor activity during periods of stillness to save battery.',

        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2026 How Are You?! All rights reserved.',

        'useCases.title': 'Is This For You?',
        'useCases.subtitle': 'Families in these situations find How Are You?! most valuable',
        'useCases.alone.title': 'My parent lives alone',
        'useCases.alone.desc': 'No one is there to notice if something goes wrong. A fall at 2 AM, a medical episode during the day — the app watches when no one else can.',
        'useCases.far.title': 'I live far from my parent',
        'useCases.far.desc': 'You can\'t drop by to check. Maybe you\'re in another city, or another country. The app bridges the distance with real-time safety awareness.',
        'useCases.refuses.title': 'My parent won\'t wear a medical alert',
        'useCases.refuses.desc': 'They see the pendant as a sign of weakness. They don\'t want to feel old. How Are You?! runs on their phone — something they already carry every day.',
        'useCases.peace.title': 'I just want to know they\'re okay',
        'useCases.peace.desc': 'Not every family faces an emergency. Sometimes you just want the quiet confidence that if something did happen, you\'d know. That\'s what this app gives you.',

        'compare.title': 'How It Compares',
        'compare.subtitle': 'Traditional elderly monitoring vs. a smarter approach',
        'compare.pendants.title': 'Medical Alert Pendants',
        'compare.pendants.old': 'Requires pressing a button. Useless if they\'re unconscious or confused.',
        'compare.pendants.new': 'Detects emergencies automatically. No button needed.',
        'compare.watches.title': 'Smartwatch Fall Detection',
        'compare.watches.old': 'Needs daily charging. Many elderly find them uncomfortable or forget to wear them.',
        'compare.watches.new': 'Uses their existing phone. Nothing new to wear or charge.',
        'compare.cameras.title': 'Camera Monitoring',
        'compare.cameras.old': 'Your parent feels watched in their own home. Invasive and dignity-stripping.',
        'compare.cameras.new': 'Completely invisible. They just live their life normally.',
        'compare.checkins.title': 'Daily Check-in Calls',
        'compare.checkins.old': 'Creates anxiety on both sides. They feel like a burden. You panic when they don\'t answer.',
        'compare.checkins.new': 'Zero interaction needed. You only hear from the app when it matters.',
        'compare.cost.title': 'Monthly Monitoring Services',
        'compare.cost.old': 'Traditional services cost $30-50/month — that\'s $360-600 per year, every year.',
        'compare.cost.new': '$99 once, then just $2/year. Same protection, fraction of the price.'
    },
    bg: {
        'hero.title': 'Спокойствие за Вашите близки',
        'hero.subtitle': 'AI мониторинг за безопасност, който научава рутината на родителя ви и ви известява при извънредни ситуации - без ежедневни обаждания',
        'hero.cta': 'Изтегли от Google Play',
        'hero.reviews': 'Вижте какво казват потребителите в Google Play',

        'features.title': 'Основни функции',
        'features.learning.title': '7-дневно обучение',
        'features.learning.desc': 'AI научава уникалните ежедневни навици само за една седмица',
        'features.monitoring.title': '24/7 Мониторинг',
        'features.monitoring.desc': 'Непрекъсната защита без да се налага нищо да правите',
        'features.alerts.title': 'Интелигентни известия',
        'features.alerts.desc': 'Имейл известия с GPS координати при нужда',
        'features.privacy.title': 'Вашата поверителност, защитена',
        'features.privacy.desc': 'Данните ви остават на телефона — AI анализ за безопасност чрез сигурна криптирана връзка',
        'features.price.title': 'Ясна цена',
        'features.price.desc': '$99 с включена първа година. $2/година след това',
        'features.dignity.title': 'Достойнство преди всичко',
        'features.dignity.desc': 'Без натрапчиви известия към родителя ви',

        'scenarios.title': 'Какво разпознаваме',
        'scenarios.subtitle': 'Реални спешни ситуации, за които приложението е създадено',
        'scenarios.falls.title': 'Падане вкъщи',
        'scenarios.falls.desc': 'Родителят ви пада и не може да стигне до телефона си. Приложението засича часове необичайна неподвижност и известява семейството ви с GPS местоположение.',
        'scenarios.medical.title': 'Медицинска спешност',
        'scenarios.medical.desc': 'Инсулт или сърдечен инцидент ги оставя неподвижни. Приложението забелязва внезапната промяна в обичайната активност.',
        'scenarios.sleep.title': 'Не се събуди навреме',
        'scenarios.sleep.desc': '11 часа е, а обикновено се събуждат в 7. Приложението знае графика им на сън и ви известява, когато нещо не е наред.',
        'scenarios.wandered.title': 'Отклонение от познат район',
        'scenarios.wandered.desc': 'Напуснали са обичайния си квартал в необичаен час. Приложението е научило безопасните им зони и забелязва отклонението.',
        'scenarios.silent.title': 'Телефонът не е активен твърде дълго',
        'scenarios.silent.desc': 'Никаква активност на телефона от часове. Може да означава, че батерията е свършила — или че не могат да стигнат до него.',
        'scenarios.travel.title': 'Безопасно пътуване',
        'scenarios.travel.desc': 'Родителят ви е отишъл на почивка. Вместо 7 дни фалшиви аларми, получавате едно известие "изглежда пътуват" и "прибраха се" когато се върнат.',

        'howItWorks.title': 'Как работи',
        'howItWorks.step1.title': 'Бърза настройка',
        'howItWorks.step1.desc': 'Дайте разрешения, добавете имейли на семейството. Отнема само 3-5 минути.',
        'howItWorks.step2.title': 'Фаза на обучение',
        'howItWorks.step2.desc': 'Базов мониторинг активен от Ден 1. AI настройва критериите до Ден 7.',
        'howItWorks.step3.title': 'Активна защита',
        'howItWorks.step3.desc': 'Откриване на аномалии с автоматични известия до семейството при нещо нередно.',

        'dayStory.title': 'Един Ден с How Are You?!',
        'dayStory.subtitle': 'Как изглежда защитата от гледна точка на семейството',
        'dayStory.morning.time': 'Сутрин',
        'dayStory.morning.text': 'Елена се събужда в 7:15 сутринта, както всеки ден. Приложението отбелязва това тихо. Без известие. Дъщеря й Катя започва работния си ден без притеснения.',
        'dayStory.afternoon.time': 'Следобед',
        'dayStory.afternoon.text': 'Елена отива до квартален магазин — познат маршрут. Приложението разпознава безопасната й зона. Все още без известие. Катя е в среща.',
        'dayStory.alert.time': 'Известието, което има значение',
        'dayStory.alert.text': 'Един вторник Елена не се събужда до 10 часа. После 11 часа. Приложението изпраща на Катя имейл: "Засечена необичайна продължителност на съня. Последно известно местоположение: Вкъщи." Катя се обажда на съседка, която проверява Елена — имала е температура и не е могла да стане от леглото. Сега е добре.',
        'dayStory.closing': '99 дни спокойна тишина. 1 ден животоспасяващо внимание.',

        'trust.title': 'Защо семействата ни се доверяват',
        'trust.zero.title': 'Не изисква нищо',
        'trust.zero.desc': 'Родителят ви не натиска бутони, не носи устройства, не отговаря на обаждания за проверка. Просто живее живота си.',
        'trust.price.title': '$99 + $2/година след година 1',
        'trust.price.desc': 'Първата година е включена. Малка годишна такса поддържа AI анализа. Без скрити разходи.',
        'trust.privacy.title': 'Вашата поверителност, защитена',
        'trust.privacy.desc': 'Всички подробни данни остават на телефона им. Анонимни поведенчески обобщения се анализират сигурно — без проследяване, без наблюдение.',
        'trust.ai.title': 'AI, който учи ТЯХНАТА рутина',
        'trust.ai.desc': 'Без статични граници — AI научава уникалните часове на сън, нива на активност и любими места на вашия родител.',
        'trust.travel.title': 'Интелигентност при пътуване',
        'trust.travel.desc': 'Отиват на почивка? Приложението се адаптира автоматично. Без фалшиви аларми, само едно кратко известие "пътува".',
        'trust.phone.title': 'Само телефонът им',
        'trust.phone.desc': 'Без медальони, без базови станции, без гривни за зареждане. Съществуващият им Android телефон е всичко необходимо.',

        'whyNot.mission': 'Създадохме това, защото близък човек беше в трудна ситуация и ни се искаше нещо подобно да съществува.',

        'inControl.title': 'Вие контролирате',
        'inControl.subtitle': 'Вашата поверителност, ваш избор - винаги',
        'inControl.item1': 'Подробните ви данни остават на устройството — без проследяване, без наблюдение, без споделяне на лични данни',
        'inControl.item2': 'Вижте точно какво е научило приложението за навиците ви',
        'inControl.item3': 'Бутонът "Нулиране на Обучението" незабавно изтрива всички данни - ваш избор',
        'inControl.item4': 'Никакви известия не ви безпокоят при нормална работа',

        'underHood.title': 'Под капака',
        'underHood.item1': 'Задвижван от Google Gemini AI — бърз, точен анализ за безопасност. Основният мониторинг работи дори офлайн',
        'underHood.item2': 'Открива: необичайна неподвижност, необичайно дълъг сън, отклонения от безопасни зони',
        'underHood.item3': 'Разбира контекста: различни критерии за вкъщи и навън, ден и нощ',
        'underHood.item4': 'Седмична настройка се адаптира към променящи се рутини (сезонни, здравни промени)',
        'underHood.item5': 'Ефективен за батерията: проектиран за по-малко от 1% дневно въздействие',

        'screenshots.title': 'Вижте го в действие',

        'faq.title': 'Често задавани въпроси',
        'faq.q1.question': 'Какви спешни случаи може да открие?',
        'faq.q1.answer': 'Приложението открива необичайна неподвижност (потенциални падания или медицински спешни случаи), ненормално дълги периоди на сън и отклонения от установените безопасни зони. То научава какво е нормално конкретно за ВАШИЯ родител.',
        'faq.q2.question': 'Как работи 7-дневната фаза на обучение?',
        'faq.q2.answer': 'През първите 7 дни AI наблюдава ежедневните навици - кога се събуждат, типични нива на активност, редовни локации. Базов мониторинг е активен от Ден 1, но персонализираните критерии се усъвършенстват до Ден 7.',
        'faq.q3.question': 'Безопасни ли са данните на родителя ми?',
        'faq.q3.answer': 'Да. Всички подробни данни се съхраняват на устройството. За анализ на безопасността обобщени данни за поведението и общ контекст за местоположение се изпращат сигурно до AI на Google — подобно на всяко приложение за карти или време. Никога не се споделят имена или лични идентификатори. Спешните известия се изпращат чрез криптиран имейл до членовете на семейството.',
        'faq.q4.question': 'Какво ако приложението изпраща фалшиви известия?',
        'faq.q4.answer': 'AI непрекъснато се учи и адаптира. Фалшивите известия намаляват с времето, тъй като системата по-добре разбира личните навици.',
        'faq.q5.question': 'Трябва ли да плащам месечно?',
        'faq.q5.answer': '$99 включва първата година. След това малка такса ($2/година) поддържа AI анализа активен. Дори без абонамент, основният мониторинг за безопасност продължава.',
        'faq.q6.question': 'Каква версия на Android е необходима?',
        'faq.q6.answer': 'Всеки Android телефон с Android 14 или по-нова версия.',
        'faq.q7.question': 'Може ли родителят ми да го нулира или деактивира?',
        'faq.q7.answer': 'Да, абсолютно. Бутонът "Нулиране на Обучението" е лесно достъпен и незабавно изтрива всички научени данни. Те също могат да деинсталират приложението по всяко време - без въпроси.',
        'faq.q8.question': 'Какво се случва ако батерията на телефона се изтощи?',
        'faq.q8.answer': 'Приложението не може да наблюдава, когато телефонът е изключен. Въпреки това, продължителен период без никакви данни сам по себе си може да задейства известие до членовете на семейството, показващо че нещо може да не е наред.',
        'faq.q9.question': 'Работи ли без WiFi или интернет?',
        'faq.q9.answer': 'Основният мониторинг за безопасност работи офлайн. AI-подобреният анализ изисква интернет, но основите за безопасност (засичане на спешност) винаги работят. Интернет връзка е необходима за изпращане на спешни известия по имейл.',
        'faq.q10.question': 'Какво ако родителят ми остави телефона си вкъщи?',
        'faq.q10.answer': 'Приложението следи местоположението на телефона. Ако родителят ви често оставя телефона си вкъщи, това ще бъде научено като нормално поведение. Необичайни ситуации (телефон неподвижен твърде дълго) все още могат да задействат известия.',
        'faq.q11.question': 'Защо трябва да "Игнорирам оптимизацията на батерията"?',
        'faq.q11.answer': 'Android се опитва да убие приложения, работещи на заден план, за да спести енергия. За приложение за безопасност това е опасно, защото спира мониторинга. "Игнориране на оптимизациите" казва на Android, че това приложение е критично и не трябва да се убива.',
        'faq.q12.question': 'Телефонът ми продължава да убива приложението. Какво да направя?',
        'faq.q12.answer': 'Някои производители (Samsung, Xiaomi, Huawei, Honor, OPPO) агресивно убиват фонови приложения. Отидете в Настройки > Разрешения и поправете проблемите. Деактивирайте оптимизацията на батерията за това приложение. За Samsung/Xiaomi/Huawei: проверете настройките за пестене на енергия на производителя и добавете приложението в изключенията.',
        'faq.q13.question': 'Не виждам известие. Работи ли приложението?',
        'faq.q13.answer': 'Да! Приложението е проектирано да бъде "инсталирай и забрави". Известието е нарочно тихо и скрито, докато използвате телефона, за да не ви притеснява. За да проверите: отворете приложението - ако виждате таблото, мониторингът е активен.',
        'faq.q14.question': 'Виждам предупреждение "Може да попречи на системата да заспи". Проблем ли е?',
        'faq.q14.answer': 'Това предупреждение е нормално за 24/7 приложение за безопасност. Означава, че приложението работи правилно, поддържайки сензорите активни за откриване на спешни случаи. Приложението работи перфектно с това предупреждение. За Honor/Huawei можете да го заглушите в Настройки > Батерия > Енергоемки приложения.',
        'faq.q15.question': 'Колко батерия използва приложението?',
        'faq.q15.answer': 'Приложението използва адаптивен пулс, който намалява сензорната активност при неподвижност. Типичното използване на батерията е по-малко от 1% на ден. WiFi-подпомогнатото местоположение помага за намаляване на GPS разхода.',

        'troubleshooting.title': 'Отстраняване на проблеми',
        'troubleshooting.gps.question': 'GPS местоположението не се обновява',
        'troubleshooting.gps.answer': '1. Отворете Настройки на Android > Местоположение и се уверете, че е включено. 2. Задайте точност на местоположението на "Висока точност". 3. Отворете разрешенията на приложението и задайте Местоположение на "Позволи винаги". 4. Рестартирайте телефона и изчакайте 5 минути. 5. Ако сте навън, осигурете ясна видимост към небето за 2 минути.',
        'troubleshooting.email.question': 'Имейл известията не се доставят',
        'troubleshooting.email.answer': '1. Проверете дали всички имейл адреси на получатели са правилни в Настройки > Получатели. 2. Уверете се, че телефонът има активен интернет. 3. Опитайте да изпратите тестово известие от Настройки. 4. Ако все още не работи, проверете диагностичния експорт за детайли.',
        'troubleshooting.killed.question': 'Мониторингът спира или известието изчезва',
        'troubleshooting.killed.answer': '1. Отидете в Настройки > Разрешения и поправете проблемите. 2. Деактивирайте оптимизацията на батерията: Настройки > Приложения > How Are You?! > Батерия > Неограничено. 3. Заключете приложението в последни приложения (задръжте картата на приложението и натиснете иконата за заключване). 4. За Xiaomi/Huawei/Samsung/Honor: проверете настройките за пестене на енергия на производителя.',
        'troubleshooting.battery.question': 'Батерията се изтощава бързо',
        'troubleshooting.battery.answer': '1. Уверете се, че WiFi е включен - GPS използва по-малко батерия с WiFi-подпомогнато местоположение. 2. Приложението обикновено използва по-малко от 1% батерия на ден. По-високо използване може да означава проблеми с GPS. 3. Ако изтощаването е сериозно, рестартирайте телефона. 4. Приложението автоматично намалява сензорната активност при неподвижност.',

        'footer.privacy': 'Политика за поверителност',
        'footer.contact': 'Контакт',
        'footer.copyright': '© 2026 How Are You?! Всички права запазени.',

        'useCases.title': 'За вас ли е това?',
        'useCases.subtitle': 'Семейства в тези ситуации намират How Are You?! за най-полезно',
        'useCases.alone.title': 'Родителят ми живее сам',
        'useCases.alone.desc': 'Няма кой да забележи, ако нещо се случи. Падане в 2 часа сутринта, медицински инцидент през деня — приложението наблюдава, когато никой друг не може.',
        'useCases.far.title': 'Живея далеч от родителя си',
        'useCases.far.desc': 'Не можете да отскочите за проверка. Може да сте в друг град или друга държава. Приложението преодолява разстоянието с осведоменост за безопасността в реално време.',
        'useCases.refuses.title': 'Родителят ми отказва да носи медицинска аларма',
        'useCases.refuses.desc': 'Те виждат медальона като знак за слабост. Не искат да се чувстват стари. How Are You?! работи на телефона им — нещо, което вече носят всеки ден.',
        'useCases.peace.title': 'Просто искам да знам, че са добре',
        'useCases.peace.desc': 'Не всяко семейство се сблъсква със спешен случай. Понякога просто искате тихата увереност, че ако нещо се случи, ще разберете. Това ви дава това приложение.',

        'compare.title': 'Как се сравнява',
        'compare.subtitle': 'Традиционен мониторинг за възрастни срещу по-интелигентен подход',
        'compare.pendants.title': 'Медицински аларми с бутон',
        'compare.pendants.old': 'Изисква натискане на бутон. Безполезно ако са в безсъзнание или объркани.',
        'compare.pendants.new': 'Разпознава спешни ситуации автоматично. Без бутони.',
        'compare.watches.title': 'Смарт часовник с разпознаване на падания',
        'compare.watches.old': 'Нуждае се от ежедневно зареждане. Много възрастни хора не ги носят.',
        'compare.watches.new': 'Използва съществуващия им телефон. Нищо ново за носене или зареждане.',
        'compare.cameras.title': 'Камери за наблюдение',
        'compare.cameras.old': 'Родителят ви се чувства наблюдаван в собствения си дом. Натрапчиво.',
        'compare.cameras.new': 'Напълно невидимо. Просто живеят живота си нормално.',
        'compare.checkins.title': 'Ежедневни обаждания',
        'compare.checkins.old': 'Създава тревожност. Те се чувстват като тежест. Вие паникьосвате, когато не вдигат.',
        'compare.checkins.new': 'Не се изисква нищо от тях. Чувате от приложението само когато има значение.',
        'compare.cost.title': 'Месечни абонаменти за мониторинг',
        'compare.cost.old': 'Традиционните услуги струват $30-50/месец — $360-600 на година, всяка година.',
        'compare.cost.new': '$99 еднократно, след това $2/година. Същата защита, малка част от цената.'
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
        'features.privacy.title': 'Ihr Datenschutz, Geschützt',
        'features.privacy.desc': 'Ihre Daten bleiben auf Ihrem Telefon — AI-Sicherheitsanalyse über sichere verschlüsselte Verbindung',
        'features.price.title': 'Einfache Preisgestaltung',
        'features.price.desc': '99$ mit erstem Jahr inklusive. 2$/Jahr danach',
        'features.dignity.title': 'Würde Zuerst',
        'features.dignity.desc': 'Keine aufdringlichen Benachrichtigungen an Ihre Eltern',

        'scenarios.title': 'Was Wir Erkennen',
        'scenarios.subtitle': 'Echte Notfälle, für die die App entwickelt wurde',
        'scenarios.falls.title': 'Stürze zu Hause',
        'scenarios.falls.desc': 'Ihr Elternteil stürzt und kann das Telefon nicht erreichen. Die App erkennt stundenlange ungewöhnliche Reglosigkeit und benachrichtigt Ihre Familie mit GPS-Standort.',
        'scenarios.medical.title': 'Medizinischer Notfall',
        'scenarios.medical.desc': 'Ein Schlaganfall oder Herzereignis macht sie bewegungsunfähig. Die App bemerkt den plötzlichen Bruch normaler Aktivitätsmuster.',
        'scenarios.sleep.title': 'Nicht Rechtzeitig Aufgewacht',
        'scenarios.sleep.desc': 'Es ist 11 Uhr und sie wachen normalerweise um 7 auf. Die App kennt ihren Schlafrhythmus und warnt Sie, wenn etwas nicht stimmt.',
        'scenarios.wandered.title': 'In Unbekanntes Gebiet Gewandert',
        'scenarios.wandered.desc': 'Sie haben ihre gewohnte Nachbarschaft zu einer ungewöhnlichen Stunde verlassen. Die App hat ihre sicheren Zonen gelernt und bemerkt die Abweichung.',
        'scenarios.silent.title': 'Telefon Zu Lange Still',
        'scenarios.silent.desc': 'Keine Telefonaktivität seit Stunden. Könnte bedeuten, dass der Akku leer ist — oder dass sie es nicht erreichen können.',
        'scenarios.travel.title': 'Sicher Auf Reisen',
        'scenarios.travel.desc': 'Ihr Elternteil ist in den Urlaub gefahren. Statt 7 Tagen Fehlalarmen erhalten Sie eine Benachrichtigung "scheint zu verreisen" und "ist wieder zu Hause" bei der Rückkehr.',

        'howItWorks.title': 'So Funktioniert Es',
        'howItWorks.step1.title': 'Schnelle Einrichtung',
        'howItWorks.step1.desc': 'Berechtigungen erteilen, Familien-E-Mails hinzufügen. Dauert nur 3-5 Minuten.',
        'howItWorks.step2.title': 'Lernphase',
        'howItWorks.step2.desc': 'Basisüberwachung ab Tag 1 aktiv. KI personalisiert Schwellenwerte bis Tag 7.',
        'howItWorks.step3.title': 'Aktiver Schutz',
        'howItWorks.step3.desc': 'Anomalieerkennung mit automatischen Familienalarmen, wenn etwas nicht stimmt.',

        'dayStory.title': 'Ein Tag Mit How Are You?!',
        'dayStory.subtitle': 'Wie Schutz aus der Perspektive Ihrer Familie aussieht',
        'dayStory.morning.time': 'Morgens',
        'dayStory.morning.text': 'Elena wacht um 7:15 Uhr auf, wie jeden Tag. Die App vermerkt das still. Kein Alarm. Ihre Tochter Katya beginnt ihren Arbeitstag ohne Sorgen.',
        'dayStory.afternoon.time': 'Nachmittags',
        'dayStory.afternoon.text': 'Elena geht zum Lebensmittelgeschäft in der Nachbarschaft — eine vertraute Route. Die App erkennt ihre sichere Zone. Immer noch kein Alarm. Katya ist in einer Besprechung.',
        'dayStory.alert.time': 'Der Alarm, Der Zählt',
        'dayStory.alert.text': 'An einem Dienstag wacht Elena nicht bis 10 Uhr auf. Dann 11 Uhr. Die App sendet Katya eine E-Mail: "Ungewöhnliche Schlafdauer erkannt. Letzter bekannter Standort: Zu Hause." Katya ruft eine Nachbarin an, die nach Elena sieht — sie hatte Fieber und konnte nicht aus dem Bett aufstehen. Es geht ihr jetzt gut.',
        'dayStory.closing': '99 Tage vertrauensvolle Stille. 1 Tag lebensrettende Aufmerksamkeit.',

        'trust.title': 'Warum Familien Uns Vertrauen',
        'trust.zero.title': 'Keine Interaktion Nötig',
        'trust.zero.desc': 'Ihr Elternteil drückt keine Knöpfe, trägt keine Geräte und beantwortet keine Kontrollanrufe. Sie leben einfach ihr Leben.',
        'trust.price.title': '99$ + 2$/Jahr Nach Jahr 1',
        'trust.price.desc': 'Erstes Jahr inklusive. Kleine Jahresgebühr hält die AI-Analyse aktiv. Keine versteckten Kosten.',
        'trust.privacy.title': 'Ihr Datenschutz, Geschützt',
        'trust.privacy.desc': 'Alle detaillierten Daten bleiben auf ihrem Telefon. Anonyme Verhaltensübersichten werden sicher analysiert — kein Tracking, keine Überwachung.',
        'trust.ai.title': 'KI, Die IHRE Routine Lernt',
        'trust.ai.desc': 'Keine generischen Schwellenwerte — die KI lernt die einzigartigen Schlafzeiten, Aktivitätsniveaus und Lieblingsorte Ihres Elternteils.',
        'trust.travel.title': 'Reiseintelligenz',
        'trust.travel.desc': 'Im Urlaub? Die App passt sich automatisch an. Keine Fehlalarme, nur eine freundliche "verreist"-Benachrichtigung.',
        'trust.phone.title': 'Nur Ihr Telefon',
        'trust.phone.desc': 'Keine Anhänger, keine Basisstationen, keine Armbänder zum Laden. Ihr vorhandenes Android-Telefon ist alles, was sie brauchen.',

        'whyNot.mission': 'Wir haben das entwickelt, weil ein geliebter Mensch in einer schwierigen Situation war und wir uns wünschten, so etwas würde existieren.',

        'inControl.title': 'Sie Haben Die Kontrolle',
        'inControl.subtitle': 'Ihre Privatsphäre, Ihre Wahl - immer',
        'inControl.item1': 'Ihre detaillierten Daten bleiben auf dem Gerät — kein Tracking, keine Überwachung, keine persönlichen Daten geteilt',
        'inControl.item2': 'Sehen Sie genau, was die App über Ihre Muster gelernt hat',
        'inControl.item3': 'Die Schaltfläche "Lernen Zurücksetzen" löscht sofort alle Daten - Ihre Wahl',
        'inControl.item4': 'Keine Benachrichtigungen stören Sie im Normalbetrieb',

        'underHood.title': 'Unter Der Haube',
        'underHood.item1': 'Angetrieben von Googles Gemini AI — schnelle, genaue Sicherheitsanalyse. Kernüberwachung funktioniert auch offline',
        'underHood.item2': 'Erkennt: ungewöhnliche Stillstandsdauer, abnormal langen Schlaf, Abweichungen von sicheren Zonen',
        'underHood.item3': 'Kontextbewusst: unterschiedliche Schwellenwerte für Zuhause vs. draußen, Tag vs. Nacht',
        'underHood.item4': 'Wöchentliche Neukalibrierung passt sich ändernden Routinen an (saisonal, gesundheitliche Veränderungen)',
        'underHood.item5': 'Batterieeffizient: entwickelt für weniger als 1% tägliche Batterieauswirkung',

        'screenshots.title': 'Sehen Sie Es In Aktion',

        'faq.title': 'Häufig Gestellte Fragen',
        'faq.q1.question': 'Welche Notfälle kann es erkennen?',
        'faq.q1.answer': 'Die App erkennt ungewöhnliche Stillstand (potenzielle Stürze oder medizinische Notfälle), abnormal lange Schlafperioden und Abweichungen von etablierten sicheren Zonen. Sie lernt, was speziell für IHREN Elternteil normal ist.',
        'faq.q2.question': 'Wie funktioniert die 7-tägige Lernphase?',
        'faq.q2.answer': 'Während der ersten 7 Tage beobachtet die KI tägliche Muster - wann sie aufwachen, typische Aktivitätsniveaus, regelmäßige Orte. Basisüberwachung ist ab Tag 1 aktiv, aber personalisierte Schwellenwerte werden bis Tag 7 verfeinert.',
        'faq.q3.question': 'Sind die Daten meiner Eltern sicher?',
        'faq.q3.answer': 'Ja. Alle detaillierten Daten werden auf dem Gerät gespeichert. Für die Sicherheitsanalyse werden Verhaltensübersichten und allgemeiner Standortkontext sicher an Googles AI gesendet — ähnlich wie bei jeder Karten- oder Wetter-App. Namen oder persönliche Kennungen werden niemals geteilt. Notfallalarme werden per verschlüsselter E-Mail an Familienmitglieder gesendet.',
        'faq.q4.question': 'Was wenn die App Fehlalarme sendet?',
        'faq.q4.answer': 'Die KI lernt und passt sich kontinuierlich an. Fehlalarme nehmen mit der Zeit ab, da das System individuelle Muster besser versteht.',
        'faq.q5.question': 'Muss ich monatlich bezahlen?',
        'faq.q5.answer': '99$ beinhaltet das erste Jahr. Danach hält eine kleine Gebühr (2$/Jahr) die AI-Sicherheitsanalyse aktiv. Auch ohne Abonnement läuft die Kern-Sicherheitsüberwachung weiter.',
        'faq.q6.question': 'Welche Android-Version ist erforderlich?',
        'faq.q6.answer': 'Jedes Android-Telefon mit Android 14 oder höher.',
        'faq.q7.question': 'Kann mein Elternteil es zurücksetzen oder deaktivieren?',
        'faq.q7.answer': 'Ja, absolut. Die Schaltfläche "Lernen Zurücksetzen" ist leicht zugänglich und löscht sofort alle gelernten Daten. Sie können die App auch jederzeit deinstallieren - ohne Fragen.',
        'faq.q8.question': 'Was passiert, wenn der Handyakku leer ist?',
        'faq.q8.answer': 'Die App kann nicht überwachen, wenn das Telefon ausgeschaltet ist. Ein längerer Zeitraum ohne Daten kann jedoch selbst einen Alarm an Familienmitglieder auslösen, der darauf hinweist, dass etwas nicht stimmen könnte.',
        'faq.q9.question': 'Funktioniert es ohne WLAN oder Internet?',
        'faq.q9.answer': 'Die Kern-Sicherheitsüberwachung funktioniert offline. AI-erweiterte Analyse erfordert Internet, aber Sicherheitsgrundlagen (Notfallerkennung) funktionieren immer. Internetverbindung ist erforderlich, um Notfallalarme per E-Mail zu senden.',
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
        'faq.q15.answer': 'Die App verwendet einen adaptiven Herzschlag, der die Sensoraktivität bei Stillstand reduziert. Typischer Akkuverbrauch beträgt weniger als 1% pro Tag. WLAN-unterstützte Ortung hilft, den GPS-Akkuverbrauch zu reduzieren.',

        'troubleshooting.title': 'Fehlerbehebung',
        'troubleshooting.gps.question': 'GPS-Standort wird nicht aktualisiert',
        'troubleshooting.gps.answer': '1. Öffnen Sie Android-Einstellungen > Standort und stellen Sie sicher, dass er aktiviert ist. 2. Setzen Sie die Standortgenauigkeit auf "Hohe Genauigkeit". 3. Öffnen Sie die App-Berechtigungen und setzen Sie Standort auf "Immer erlauben". 4. Starten Sie das Telefon neu und warten Sie 5 Minuten. 5. Wenn Sie draußen sind, sorgen Sie für freie Sicht zum Himmel für 2 Minuten.',
        'troubleshooting.email.question': 'Alarm-E-Mails werden nicht zugestellt',
        'troubleshooting.email.answer': '1. Überprüfen Sie, ob alle Empfänger-E-Mail-Adressen in Einstellungen > Empfänger korrekt sind. 2. Stellen Sie sicher, dass das Telefon aktives Internet hat. 3. Versuchen Sie, einen Testalarm über Einstellungen zu senden. 4. Wenn es immer noch nicht funktioniert, prüfen Sie den Diagnose-Export für Fehlerdetails.',
        'troubleshooting.killed.question': 'Überwachung stoppt oder Benachrichtigung verschwindet',
        'troubleshooting.killed.answer': '1. Gehen Sie zu Einstellungen > Berechtigungen und beheben Sie angezeigte Probleme. 2. Deaktivieren Sie Batterieoptimierung: Einstellungen > Apps > How Are You?! > Akku > Uneingeschränkt. 3. Sperren Sie die App in den letzten Apps (App-Karte lange drücken und Sperrsymbol tippen). 4. Bei Xiaomi/Huawei/Samsung/Honor: Überprüfen Sie die herstellerspezifischen Energiespareinstellungen.',
        'troubleshooting.battery.question': 'Akku entlädt sich schnell',
        'troubleshooting.battery.answer': '1. Stellen Sie sicher, dass WLAN aktiviert ist - GPS verbraucht weniger Akku mit WLAN-unterstützter Ortung. 2. Die App verbraucht normalerweise weniger als 1% Akku pro Tag. Höherer Verbrauch kann auf GPS-Probleme hinweisen. 3. Bei starker Entladung starten Sie das Telefon neu. 4. Die App reduziert automatisch die Sensoraktivität bei Stillstand, um Akku zu sparen.',

        'footer.privacy': 'Datenschutzerklärung',
        'footer.contact': 'Kontakt',
        'footer.copyright': '© 2026 How Are You?! Alle Rechte vorbehalten.',

        'useCases.title': 'Ist das etwas für Sie?',
        'useCases.subtitle': 'Familien in diesen Situationen finden How Are You?! am wertvollsten',
        'useCases.alone.title': 'Mein Elternteil lebt allein',
        'useCases.alone.desc': 'Niemand ist da, um zu bemerken, wenn etwas passiert. Ein Sturz um 2 Uhr nachts, ein medizinischer Vorfall tagsüber — die App wacht, wenn niemand sonst es kann.',
        'useCases.far.title': 'Ich lebe weit von meinem Elternteil entfernt',
        'useCases.far.desc': 'Sie können nicht kurz vorbeischauen. Vielleicht sind Sie in einer anderen Stadt oder einem anderen Land. Die App überbrückt die Entfernung mit Sicherheitsbewusstsein in Echtzeit.',
        'useCases.refuses.title': 'Mein Elternteil weigert sich, einen Notrufknopf zu tragen',
        'useCases.refuses.desc': 'Sie sehen den Anhänger als Zeichen von Schwäche. Sie wollen sich nicht alt fühlen. How Are You?! läuft auf ihrem Telefon — etwas, das sie bereits jeden Tag bei sich tragen.',
        'useCases.peace.title': 'Ich möchte einfach wissen, dass es ihnen gut geht',
        'useCases.peace.desc': 'Nicht jede Familie erlebt einen Notfall. Manchmal möchte man einfach die ruhige Gewissheit, dass man es erfahren würde, wenn etwas passiert. Das gibt Ihnen diese App.',

        'compare.title': 'Im Vergleich',
        'compare.subtitle': 'Traditionelle Seniorenüberwachung vs. ein intelligenterer Ansatz',
        'compare.pendants.title': 'Medizinische Notruf-Anhänger',
        'compare.pendants.old': 'Erfordert Knopfdruck. Nutzlos bei Bewusstlosigkeit oder Verwirrung.',
        'compare.pendants.new': 'Erkennt Notfälle automatisch. Kein Knopf nötig.',
        'compare.watches.title': 'Smartwatch-Sturzerkennung',
        'compare.watches.old': 'Muss täglich geladen werden. Viele Senioren finden sie unbequem oder vergessen sie.',
        'compare.watches.new': 'Nutzt ihr vorhandenes Telefon. Nichts Neues zum Tragen oder Laden.',
        'compare.cameras.title': 'Kameraüberwachung',
        'compare.cameras.old': 'Ihr Elternteil fühlt sich im eigenen Zuhause beobachtet. Aufdringlich.',
        'compare.cameras.new': 'Völlig unsichtbar. Sie leben einfach normal weiter.',
        'compare.checkins.title': 'Tägliche Kontrollanrufe',
        'compare.checkins.old': 'Erzeugt Angst auf beiden Seiten. Sie fühlen sich als Last. Sie geraten in Panik, wenn niemand abnimmt.',
        'compare.checkins.new': 'Keine Interaktion nötig. Die App meldet sich nur, wenn es wichtig ist.',
        'compare.cost.title': 'Monatliche Überwachungsdienste',
        'compare.cost.old': 'Traditionelle Dienste kosten 30-50$/Monat — 360-600$ pro Jahr, jedes Jahr.',
        'compare.cost.new': 'Einmalig 99$, dann nur 2$/Jahr. Gleicher Schutz, ein Bruchteil der Kosten.'
    }
};

// Privacy policy links per language
const privacyLinks = {
    en: 'privacy-policy.html',
    bg: 'privacy-policy-bg.html',
    de: 'privacy-policy-de.html'
};

// Contact email (obfuscated)
const emailParts = ['developer', '@', 'howareu', '.', 'app'];

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

/**
 * Scroll reveal animation using IntersectionObserver
 */
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { init(); setupScrollReveal(); });
} else {
    init();
    setupScrollReveal();
}
