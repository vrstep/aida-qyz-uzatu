// ========== TRANSLATIONS ==========
const translations = {
    kk: {
        heroSubtitle: 'Қыз Ұзату',
        heroDate: '28 тамыз 2026',
        invitationTitle: 'Құрметті қонақтар!',
        invitationText1: 'Өмірімнің ең бақытты кезеңіне қадам басуға дайынмын. Жүрегімде шексіз қуаныш пен алғыс сезімі бар.',
        invitationText2: 'Сіздерді менің қыз ұзату тойыма шақырамын. Осы ерекше күнді бірге атап өтсек деп тілеймін. Сіздердің қатысуыңыз маған ерекше қуаныш сыйлайды.',
        invitationHighlight: 'Сіздерді көруге асыға күтемін! 🤍',
        signature: 'Сүйіспеншілікпен, Аида',
        detailsTitle: 'Той күні',
        dateTimeTitle: 'Күні мен уақыты',
        calendarMonth: 'Тамыз 2026',
        dayMon: 'Дс', dayTue: 'Сс', dayWed: 'Ср', dayThu: 'Бс', dayFri: 'Жм', daySat: 'Сн', daySun: 'Жс',
        startTime: 'Басталуы',
        labelDays: 'Күн', labelHours: 'Сағат', labelMinutes: 'Минут', labelSeconds: 'Секунд',
        locationTitle: 'Тойхана',
        venueAddress: 'Орал қ., Тәуелсіздік көшесі, 28​',
        venueTime: '19:00',
        venueDateDetail: '28 тамыз 2026, жұма',
        mapLink: '2GIS-те ашу',
        rsvpTitle: 'Растау',
        rsvpSubtitle: 'Тойға қатыса алатыныңызды хабарлаңыз',
        labelName: 'Сіздің атыңыз',
        placeholderName: 'Аты-жөні',
        labelAttendance: 'Сіз қатыса аласыз ба?',
        optionYes: 'Иә, келемін',
        optionNo: 'Келе алмаймын',
        labelPhone: 'Телефон нөмірі',
        submitBtn: 'Жауапты жіберу',
        footer: 'Сүйіспеншілікпен, Аида 🤍 2026',
        countdownOver: 'Бақытты күн келді!',
        submitting: 'Жіберілуде...',
        formErrorRequired: 'Барлық міндетті жолақтарды толтырыңыз.',
        formSuccessYes: 'Рахмет! Сізді тойда көруге асыға күтемін! 🤍',
        formSuccessNo: 'Келе алмайтыныңызға өкінемін. Жауабыңызға рахмет!',
        formError: 'Жіберу кезінде қате пайда болды. Қайтадан көріңіз.',
    },
    ru: {
        heroSubtitle: 'Кыз Узату',
        heroDate: '28 августа 2026',
        invitationTitle: 'Дорогие гости!',
        invitationText1: 'Я готова шагнуть в самый счастливый период своей жизни. В моём сердце — безграничная радость и благодарность.',
        invitationText2: 'Приглашаю вас на мой кыз узату той. Мне бы очень хотелось, чтобы мы отпраздновали этот особенный день вместе. Ваше присутствие подарит мне огромную радость.',
        invitationHighlight: 'С нетерпением жду встречи с вами! 🤍',
        signature: 'С любовью, Аида',
        detailsTitle: 'Дата свадьбы',
        dateTimeTitle: 'Дата и время',
        calendarMonth: 'Август 2026',
        dayMon: 'Пн', dayTue: 'Вт', dayWed: 'Ср', dayThu: 'Чт', dayFri: 'Пт', daySat: 'Сб', daySun: 'Вс',
        startTime: 'Начало в',
        labelDays: 'Дней', labelHours: 'Часов', labelMinutes: 'Минут', labelSeconds: 'Секунд',
        locationTitle: 'Ресторан',
        venueAddress: 'г. Уральск, Улица Тауелсыздык, 28',
        venueTime: '19:00',
        venueDateDetail: '28 августа 2026, пятница',
        mapLink: 'Открыть в 2GIS',
        rsvpTitle: 'Подтверждение',
        rsvpSubtitle: 'Пожалуйста, сообщите, сможете ли вы присутствовать на торжестве',
        labelName: 'Ваше имя',
        placeholderName: 'Имя Фамилия',
        labelAttendance: 'Вы сможете присутствовать?',
        optionYes: 'Да, приду',
        optionNo: 'Не смогу',
        labelPhone: 'Номер телефона',
        submitBtn: 'Отправить ответ',
        footer: 'С любовью, Аида 🤍 2026',
        countdownOver: 'Счастливый день настал!',
        submitting: 'Отправка...',
        formErrorRequired: 'Пожалуйста, заполните все обязательные поля.',
        formSuccessYes: 'Спасибо! С нетерпением жду вас на торжестве! 🤍',
        formSuccessNo: 'Жаль, что вы не сможете прийти. Спасибо за ответ!',
        formError: 'Произошла ошибка при отправке. Попробуйте ещё раз.',
    }
};

let currentLang = 'kk';

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    document.documentElement.lang = lang === 'kk' ? 'kk' : 'ru';
    localStorage.setItem('weddingLang', lang);
}

function t(key) {
    return translations[currentLang][key] || key;
}

// ========== MAIN ==========
document.addEventListener('DOMContentLoaded', () => {

    // --- Language Selector ---
    const langOverlay = document.getElementById('langOverlay');
    const btnKz = document.getElementById('btnLangKz');
    const btnRu = document.getElementById('btnLangRu');
    const savedLang = localStorage.getItem('weddingLang');

    if (savedLang) {
        applyLanguage(savedLang);
        langOverlay.classList.add('hidden');
        setTimeout(() => langOverlay.remove(), 900);
    } else {
        document.body.classList.add('lang-selecting');
    }

    function selectLanguage(lang) {
        applyLanguage(lang);
        document.body.classList.remove('lang-selecting');
        langOverlay.classList.add('hidden');
        setTimeout(() => langOverlay.remove(), 900);
    }

    btnKz.addEventListener('click', () => selectLanguage('kk'));
    btnRu.addEventListener('click', () => selectLanguage('ru'));

    // --- Floating Peony Petals ---
    const petalsContainer = document.getElementById('floatingPetals');

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        const size = Math.random() * 18 + 8;
        const startX = Math.random() * 100;
        const duration = Math.random() * 12 + 10;
        const delay = Math.random() * 5;
        const swayAmount = (Math.random() - 0.5) * 200;

        petal.style.width = `${size}px`;
        petal.style.height = `${size * 0.7}px`;
        petal.style.left = `${startX}vw`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;

        // Random rotation for variety
        const initialRotation = Math.random() * 360;
        petal.style.setProperty('--sway', `${swayAmount}px`);
        petal.style.transform = `rotate(${initialRotation}deg)`;

        // Slight color variation for realistic petals
        const hue = 340 + Math.random() * 20;
        const sat = 20 + Math.random() * 30;
        const light = 90 + Math.random() * 8;
        petal.style.background = `radial-gradient(ellipse at center, 
            hsla(${hue}, ${sat}%, ${light}%, 0.85) 0%, 
            hsla(${hue}, ${sat - 10}%, ${light - 5}%, 0.4) 60%, 
            hsla(${hue}, ${sat - 15}%, ${light - 10}%, 0.1) 100%)`;

        petalsContainer.appendChild(petal);

        setTimeout(() => petal.remove(), (duration + delay) * 1000);
    }

    // Initial batch
    for (let i = 0; i < 12; i++) {
        setTimeout(createPetal, Math.random() * 4000);
    }
    // Continuous generation
    setInterval(createPetal, 1500);

    // --- Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // --- Navigation Dots ---
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
    });

    // --- Countdown Timer ---
    const targetDate = new Date('2026-08-28T19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            const timer = document.getElementById('countdownTimer');
            if (timer) {
                timer.innerHTML = `<p style="font-family: var(--font-heading); color: var(--secondary-color); font-size: 1.5rem;">${t('countdownOver')}</p>`;
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val.toString().padStart(2, '0');
        };

        setVal('countDays', days);
        setVal('countHours', hours);
        setVal('countMinutes', minutes);
        setVal('countSeconds', seconds);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // --- Phone Auto-format ---
    const phoneInput = document.getElementById('guestPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            let digits = phoneInput.value.replace(/\D/g, '').substring(0, 10);
            let formatted = '';

            if (digits.length > 0) formatted = '(' + digits.substring(0, 3);
            if (digits.length >= 4) formatted += ') ' + digits.substring(3, 6);
            if (digits.length >= 7) formatted += '-' + digits.substring(6, 8);
            if (digits.length >= 9) formatted += '-' + digits.substring(8, 10);

            phoneInput.value = formatted;
        });
    }

    // --- RSVP Form ---
    const rsvpForm = document.getElementById('rsvpForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!rsvpForm.checkValidity()) {
                formStatus.style.display = 'block';
                formStatus.style.color = 'var(--error-color)';
                formStatus.innerText = t('formErrorRequired');
                return;
            }

            const formData = new FormData(rsvpForm);
            const currentPhone = formData.get('phone');
            formData.set('phone', '+7 ' + currentPhone);
            const data = Object.fromEntries(formData.entries());

            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.innerText;
            btnText.innerText = t('submitting');
            submitBtn.disabled = true;

            // Replace with your own Google Apps Script URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbyumghbao9RRQib5MLxvsLAdAdAi6r7FpYN3s_QKnC17ZnZFEM0ueLCWs4pn6DwU6M/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    const statusMessage = data.attendance === 'no'
                        ? t('formSuccessNo')
                        : t('formSuccessYes');

                    formStatus.style.display = 'block';
                    formStatus.style.color = 'var(--success-color)';
                    formStatus.innerText = statusMessage;

                    rsvpForm.reset();
                    btnText.innerText = t('submitBtn');
                    submitBtn.disabled = false;

                    setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
                })
                .catch(error => {
                    formStatus.style.display = 'block';
                    formStatus.style.color = 'var(--error-color)';
                    formStatus.innerText = t('formError');

                    btnText.innerText = t('submitBtn');
                    submitBtn.disabled = false;
                });
        });
    }
});
