type TranslationKey = string;

interface Translations {
  [key: string]: {
    [key: TranslationKey]: string;
  };
}

export const translations: Translations = {
  en: {
    // zcal
    bookJapaneseTrialLink: "Japanese Assessment/Free Trial - Schedule a meeting",
    bookDiscoveryCallLink: "Discovery Call - CarlosCoordinator - Schedule a meeting",
    
    // Navigation
    home: "Home",
    teachers: "Teachers",
    courses: "Courses",
    radical: "Radical",
    japanIntern: "Japan Intern",
    travel: "Travel to Japan",
    
    // My Narrow Road to the Interior 
    narrowRoadDescription: "Read how I did Basho's trip of 1689: 2,200 km across Japan",

    // Travel
    travelJapanTitle: "Travel to Japan",
    travelJapanDescription: "Cheap accomodation. Endless adventures. Help me get that ready for you.",
    travelHimalayasTitle: "Travel to the Himalayas",
    travelHimalayasDescription: "Find the best adventure 5,000 m over sea level, hike until you find your true self, and meditate where Buddhism was born",
    travelSpainTitle: "Travel to Spain",
    travelSpainDescription: "Find adventure, hiking, and culture in Spain",
    
    // Hero
    heroTitle: "Learn Languages with Expert Teachers",
    heroSubtitle: "Become fluent in Japanese, Spanish, English, or Chinese with personalized lessons",
    heroSubtitle1: "Are you ready to become fluent in Japanese? Pass the JLPT you've been hoping to pass for the past few months? Overwhelmed by thousands of characters, lack of clear guidance, or unmotivated teachers that just say \"Oh, this is just how the language works. You just have to memorize that\"?",
    heroSubtitle2: "Maybe you're not sure what resources to use, or you've been looking for an online community to help you learn with more motivation?",
    heroButton: "Book a Trial Lesson",
    watchVideo: "Watch Video",
    bookTrialButton: "Book a trial class",
    meetTeachersButton: "Meet our teachers",
    seeReviewsButton: "See our reviews",
    
    // Resource filtering
    all: "All",
    books: "Books",
    apps: "Apps",
    resources: "Resources",
    videos: "Videos",
    checkFreeResources: "Check our free resources here",
    comingSoon: "To be released soon",
    introVideoComingSoon: "Our introduction video is on its way!",
    followerCount: "Over 15,000 followers across all my platforms cannot be wrong",
    
    // Features
    whatMakesUsDifferent: "What Makes Us Different",
    whatMakesUsDifferentSubtitle: "Our unique approach to language learning sets us apart",
    featureMethod: "Unique Teaching Method",
    featureMethodDesc: "Focus on early fluency development and exam preparation with proven techniques",
    featureApps: "Language Learning Apps",
    featureAppsDesc: "Access to our specialized apps like Radical for Japanese learning",
    featureExperience: "Experienced Teachers",
    featureExperienceDesc: "Learn from native speakers with years of teaching experience",
    featureFlexibility: "Flexible Learning",
    featureFlexibilityDesc: "Online lessons that fit your schedule, with personalized curriculum",
    
    // Teachers
    meetOurTeachers: "Meet Our Teachers",
    teachersSubtitle: "Our expert teachers are passionate about helping you achieve fluency",
    carlosTitle: "Japanese & Spanish Teacher",
    carlosDesc: "Focused on early fluency development and JLPT preparation",
    eikoTitle: "Japanese Teacher",
    eikoDesc: "Focused on oral development at any level",
    caolanTitle: "English Teacher",
    caolanDesc: "Native Irish teacher specializing in conversational English",
    yuluTitle: "Chinese Teacher",
    yuluDesc: "Expert in Mandarin Chinese for beginners to advanced learners",
    
    // Testimonials
    testimonials: "What Our Students Say",
    testimonialsSubtitle: "Read authentic reviews from our Google Business profile",
    viewAllReviews: "View all reviews on Google",
    reviewsRating: "Rated 5.0 on Google",
    reviewsRatingSub: "Read what students really think — straight from my Google profile.",

    // Hero (redesign)
    heroEyebrow: "Japanese · English · Spanish · Chinese",
    heroTitle2: "Japanese lessons that finally make sense",
    heroLead: "Most Japanese teachers make you memorise endlessly and hope it sticks. I teach differently — personalised lessons in your own language, built around kanji radicals, real texts and clear logic. My students pass the JLPT N1 and N2, get into top universities, and actually use Japanese with confidence.",
    showMore: "Show more",
    showLess: "Show less",
    trustGoogle: "on Google",
    trustLinkedIn: "on LinkedIn",
    trustYears: "10+ years teaching Japanese",
    studentsWorkAt: "My students work at",
    meetCarlos: "Meet Carlos",
    meetCarlosRole: "Japanese teacher · Author · App creator · PhD candidate",
    meetCarlosP1: "I've taught Japanese for almost 10 years — I'm the Japanese course creator at Spain's Institute for Translation (ISTRAD) and an adjunct professor at the University of Salamanca. My students pass the JLPT N1 and N2, get into university, and work at companies like Rakuten, Dentsu and Boston Consulting Group — including the President of the Spanish Chamber of Commerce in Japan and the Spain Men's National Basketball Team.",
    meetCarlosP2: "Where I find friction, I build. Radical teaches kanji through meaning and phonetic radicals; Keigo Pro demystifies Japanese honorifics; I wrote the first Spanish biography of Bashō, the creator of haiku; and my teaching method is the basis of the PhD I'm completing at the Autonomous University of Barcelona.",

    // Resources (redesign)
    resourcesEyebrow: "Free & premium resources",
    resourcesHeading: "Everything I've built to help you learn",
    resourcesSubtitle: "Books, apps, videos and travel — filter by what you're looking for.",
    followAlong: "Follow along:",
    filterAll: "All",
    filterRead: "Read",
    filterStudy: "Study",
    filterWatch: "Watch",
    filterTravel: "Travel",
    filterWork: "Work",
    ctaRead: "Read",
    ctaWatch: "Watch",
    ctaOpen: "Open",
    radicalCardDesc: "English–Japanese dictionary that breaks kanji into radicals to speed up vocab acquisition. On the web, iOS and Android.",
    keigoCardDesc: "Master Japanese honorifics (keigo) with guided lessons and practice. Now on iOS and Android.",
    hiraganaCardDesc: "Learn hiragana and katakana with memorable hints and mnemonics.",
    internCardDesc: "Find the internship of your dreams in Japan — a free service for students.",
    jlptN1CompDesc: "A detailed guide to mastering JLPT N1 reading comprehension.",
    jlptN2CompDesc: "Comprehensive strategies for the JLPT N2 reading section.",
    jlptN3CompDesc: "Essential techniques for JLPT N3 reading success.",
    jpsScratchDesc: "Learn hiragana and katakana through mnemonics, from zero.",
    jpDesdeCeroDesc: "Aprende japonés desde cero (Spanish-language series).",
    beNiceTitle: "Please be nice when booking your trial class",
    beNiceDesc: "The short video with over 13,000 views.",
    tokyoTalesDesc: "Follow Carlos's adventures learning Japanese in Tokyo.",
    interview1Title: "Passing the JLPT N2: a student's story",
    interview1Desc: "One of my students shares how we worked together — and how they passed the JLPT N2.",
    interview2Title: "Passing the JLPT N3: a student's story",
    interview2Desc: "One of my students shares how we worked together — and how they passed the JLPT N3.",

    // Banners (redesign)
    japanInternBannerDesc: "Find your dream internship in Japan with our free service for students.",
    japanInternBannerCta: "Learn more",
    radicalBannerCta: "Try Radical",
    n1n2BannerCta: "Explore the course",
    radicalReviewsEyebrow: "From the app stores",
    radicalReviewsTitle: "What learners say about Radical",
    
    // Courses
    ourCourses: "Our Courses",
    jlptTitle: "JLPT N1/N2 Course",
    jlptDesc: "10-hour course specially for N1 and N2 takers, focusing on advanced-level texts comprehension",
    jlptButton: "View Course",
    japaneseTitle: "Japanese Lessons",
    japaneseDesc: "Personalized Japanese lessons with experienced teachers",
    japaneseButton: "Book Now",
    otherTitle: "English, Spanish & Chinese",
    otherDesc: "Learn other languages with our expert teachers",
    otherButton: "Book Now",
    
    // Apps
    ourApps: "Our Apps & Resources",
    radicalTitle: "Radical Dictionary",
    radicalDescription: "English-Japanese dictionary with kanji radical analysis",
    radicalButton: "Try Radical",
    keigoTitle: "Keigo Pro",
    keigoDescription: "Learn Japanese honorifics (keigo) with our specialized app",
    keigoButton: "Coming Soon",
    hiraganaTitle: "Hiragana Hero",
    hiraganaDescription: "Learn hiragana and katakana quickly and efficiently",
    hiraganaButton: "Coming Soon",
    
    // Books
    publishedBooks: "Published Books",
    bashoTitle: "Basho: Maestro del haiku",
    bashoDescription: "The first biography of Matsuo Basho in Spanish",
    jlptBookTitle: "JLPT N5 Kanji Book",
    jlptBookDescription: "Comprehensive guide for JLPT N5 kanji preparation",
    jlptBookButton: "Coming Soon",
    
    // Travel
    travelTitle: "Travel to Japan & Asia",
    travelDescription: "Expert advice and services for travel to Japan and Asia",
    travelButton: "Explore",
    travelEyebrow: "Travel & adventures",
    travelPageIntro: "I share tips and hands-on services for travelling Japan on a budget — from unforgettable adventures to accommodation that normally requires speaking Japanese (I handle that for you). I also build fully customised itineraries and partner with local agencies for long-term travellers and digital nomads.",
    travelJapanBox: "Advice on travel, budget accommodation, and insider tips for adventures across Japan — plus fully customised trip planning. Through Walk the World I also guide walking trips like the Kumano Kodo.",
    travelHimalayasBox: "I'm a brand ambassador for Himalaya Explore Line, and I climbed the Himalayas in March 2025. Read about the adventure in my LinkedIn newsletter.",
    travelSpainBox: "Trip planning for Spain: local experiences, hiking and culture. Through Walk the World I've walked the Camino de Santiago with Johns Hopkins University.",
    travelContactCta: "Contact me",
    travelNewsletterCta: "Read the newsletter",
    walkTheWorldCta: "Walk the World",
    
    // Japan Intern
    internTitle: "JapanIntern.Net",
    internDescription: "Find your dream internship in Japan with our free service for students",
    internButton: "Learn More",
    
    // FAQ
    faq: "Frequently Asked Questions",
    faqSubtitle: "Find answers to commonly asked questions",
    faqQuestion1: "How do the lessons work?",
    faqAnswer1: "Our lessons are conducted online via Zoom or other platforms. You can book a time that suits you, and we'll send you materials before the lesson. Each lesson is personalized to your needs and learning goals.",
    faqQuestion2: "What is your teaching method?",
    faqAnswer2: "We focus on early fluency development and practical use of the language. For Japanese specifically, we have methods aimed at JLPT preparation and kanji acquisition through our unique radical approach.",
    faqQuestion3: "Do you offer group lessons?",
    faqAnswer3: "Yes, we offer both private and group lessons. Group lessons are available at specific times and for specific levels.",
    faqQuestion4: "How much do lessons cost?",
    faqAnswer4: "Lesson prices vary depending on the teacher, language, and whether it's a private or group lesson. We offer competitive rates and package discounts.",
    faqQuestion5: "Can I try a lesson before committing?",
    faqAnswer5: "Absolutely! We offer trial lessons at a reduced rate so you can experience our teaching style before committing to a package.",
    
    // CTA
    bookLesson: "Book a Lesson",
    bookLessonSubtitle: "Choose the language you want to master and book a trial class with one of our expert teachers",
    bookTrialJapanese: "Book a Trial Japanese Lesson",
    bookTrialOther: "Book a Trial for English/Spanish/Chinese",
    
    // Footer
    copyright: "© 2024 CarlosCoordinator. All rights reserved.",
    footerTagline: "Professional language learning with expert teachers.",
    navHeading: "Navigation",
    rightsReserved: "All rights reserved.",
    comingSoonShort: "Soon",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact Us",
    followUs: "Follow Us",

    //Banners
    radicalBannerTitle: "Radical",
    radicalBannerDesc: "The ultimate English-Japanese dictionary to boost your kanji and vocab acquisition",
    n1n2BannerTitle: "N1-N2 Reading Course",
    n1n2BannerDesc: "Pass the JLPT with our 10-hour course focusing on advanced-level texts comprehension",
  },
  es: {
    // Navigation
    home: "Inicio",
    teachers: "Profesores",
    courses: "Cursos",
    radical: "Radical",
    japanIntern: "Japan Intern",
    travel: "Viajar a Japón",

        // zcal
    bookJapaneseTrialLink: "Clase de prueba de japonés gratis",
    bookDiscoveryCallLink: "Toma de contacto: inglés, español o chino ",

        // My Narrow Road to the Interior
    narrowRoadDescription: "Así caminé 2200 km para recrear el viaje de Basho de 1689",

    // Travel
    travelJapanTitle: "Viaja a Japón",
    travelJapanDescription: "Ayúdame a preparar el viaje de tus sueños en Japón",
    travelHimalayasTitle: "Viaja al Himalaya",
    travelHimalayasDescription: "Encuentra la mejor aventura a 5.000 m sobre el nivel del mar, camina hasta encontrar tu verdadero ser y medita donde nació el budismo",
    travelSpainTitle: "Viaja a España",
    travelSpainDescription: "Encuentra aventura, senderismo y cultura en España",

    // Hero
    heroTitle: "Aprende Idiomas con Profesores Expertos",
    heroSubtitle: "Aprende japonés, español, inglés o chino con clases personalizadas",
    heroSubtitle1: "¿Estás listo para hablar japonés con fluidez? ¿Aprobar el JLPT que has estado esperando aprobar durante los últimos meses? ¿Abrumado por miles de caracteres, falta de orientación clara o profesores desmotivados que solo dicen \"Oh, así es como funciona el idioma. Solo tienes que memorizar eso\"?",
    heroSubtitle2: "¿Quizás no estás seguro de qué recursos usar, o has estado buscando una comunidad en línea para ayudarte a aprender con más motivación?",
    heroButton: "Reservar una Clase de Prueba",
    watchVideo: "Ver Vídeo",
    bookTrialButton: "Reservar una clase de prueba",
    meetTeachersButton: "Conoce a nuestros profesores",
    seeReviewsButton: "Ver nuestras reseñas",
    
    // Resource filtering
    all: "Todos",
    books: "Libros",
    apps: "Apps",
    resources: "Recursos",
    videos: "Videos",
    checkFreeResources: "Consulta nuestros recursos gratuitos aquí",
    comingSoon: "Próximamente",
    introVideoComingSoon: "¡Nuestro vídeo de introducción está en camino!",
    followerCount: "Más de 15.000 seguidores en todas mis plataformas no pueden estar equivocados",
    
    // Features
    whatMakesUsDifferent: "Qué Nos Hace Diferentes",
    whatMakesUsDifferentSubtitle: "Nuestro enfoque único del aprendizaje de idiomas nos distingue",
    featureMethod: "Método de Enseñanza Único",
    featureMethodDesc: "Enfoque en el desarrollo temprano de la fluidez y preparación para exámenes con técnicas probadas",
    featureApps: "Apps de Aprendizaje",
    featureAppsDesc: "Acceso a nuestras aplicaciones especializadas como Radical para aprender japonés",
    featureExperience: "Profesores con Experiencia",
    featureExperienceDesc: "Aprende con hablantes nativos con años de experiencia docente",
    featureFlexibility: "Aprendizaje Flexible",
    featureFlexibilityDesc: "Clases online que se adaptan a tu horario, con currículum personalizado",
    
    // Teachers
    meetOurTeachers: "Conoce a Nuestros Profesores",
    teachersSubtitle: "Nuestros profesores expertos están comprometidos en ayudarte a lograr fluidez",
    carlosTitle: "Profesor de Japonés y Español",
    carlosDesc: "Especializado en desarrollo temprano de fluidez y preparación JLPT",
    eikoTitle: "Profesora de Japonés",
    eikoDesc: "Especializada en desarrollo oral en cualquier nivel",
    caolanTitle: "Profesor de Inglés",
    caolanDesc: "Profesor nativo irlandés especializado en inglés conversacional",
    yuluTitle: "Profesora de Chino",
    yuluDesc: "Experta en chino mandarín para principiantes hasta niveles avanzados",
    
    // Testimonials
    testimonials: "Lo Que Dicen Nuestros Estudiantes",
    testimonialsSubtitle: "Lee reseñas auténticas de nuestro perfil de Google Business",
    viewAllReviews: "Ver todas las reseñas en Google",
    reviewsRating: "Valorado con 5.0 en Google",
    reviewsRatingSub: "Lee lo que piensan de verdad los estudiantes, directo de mi perfil de Google.",

    // Hero (redesign)
    heroEyebrow: "Japonés · Inglés · Español · Chino",
    heroTitle2: "Clases de japonés que por fin tienen sentido",
    heroLead: "La mayoría de los profesores de japonés te hacen memorizar sin parar y esperar a que se quede. Yo enseño de otra forma: clases personalizadas en tu propio idioma, construidas alrededor de los radicales de los kanji, textos reales y una lógica clara. Mis alumnos aprueban el JLPT N1 y N2, entran en las mejores universidades y usan el japonés con confianza.",
    showMore: "Ver más",
    showLess: "Ver menos",
    trustGoogle: "en Google",
    trustLinkedIn: "en LinkedIn",
    trustYears: "Más de 10 años enseñando japonés",
    studentsWorkAt: "Mis alumnos trabajan en",
    meetCarlos: "Conoce a Carlos",
    meetCarlosRole: "Profesor de japonés · Autor · Creador de apps · Doctorando",
    meetCarlosP1: "Llevo casi 10 años enseñando japonés: soy el creador del curso de japonés del Instituto Superior de Estudios Lingüísticos y Traducción (ISTRAD) y profesor asociado en la Universidad de Salamanca. Mis alumnos aprueban el JLPT N1 y N2, entran en la universidad y trabajan en empresas como Rakuten, Dentsu o Boston Consulting Group, incluido el Presidente de la Cámara de Comercio Española en Japón y la Selección Española de Baloncesto masculino.",
    meetCarlosP2: "Donde encuentro fricción, construyo. Radical enseña kanji a través del significado y los radicales fonéticos; Keigo Pro desmitifica los honoríficos japoneses; escribí la primera biografía en español de Bashō, el creador del haiku; y mi método de enseñanza es la base del doctorado que estoy terminando en la Universidad Autónoma de Barcelona.",

    // Resources (redesign)
    resourcesEyebrow: "Recursos gratuitos y premium",
    resourcesHeading: "Todo lo que he creado para ayudarte a aprender",
    resourcesSubtitle: "Libros, apps, vídeos y viajes: filtra por lo que buscas.",
    followAlong: "Sígueme:",
    filterAll: "Todos",
    filterRead: "Leer",
    filterStudy: "Estudiar",
    filterWatch: "Ver",
    filterTravel: "Viajar",
    filterWork: "Trabajar",
    ctaRead: "Leer",
    ctaWatch: "Ver",
    ctaOpen: "Abrir",
    radicalCardDesc: "Diccionario inglés–japonés que descompone los kanji en radicales para acelerar tu vocabulario. En web, iOS y Android.",
    keigoCardDesc: "Domina los honoríficos japoneses (keigo) con lecciones guiadas y práctica. Ya en iOS y Android.",
    hiraganaCardDesc: "Aprende hiragana y katakana con pistas y mnemotécnicas fáciles de recordar.",
    internCardDesc: "Encuentra las prácticas de tus sueños en Japón: un servicio gratuito para estudiantes.",
    jlptN1CompDesc: "Una guía detallada para dominar la comprensión lectora del JLPT N1.",
    jlptN2CompDesc: "Estrategias completas para la sección de lectura del JLPT N2.",
    jlptN3CompDesc: "Técnicas esenciales para triunfar en la lectura del JLPT N3.",
    jpsScratchDesc: "Aprende hiragana y katakana con mnemotécnicas, desde cero.",
    jpDesdeCeroDesc: "Aprende japonés desde cero (serie en español).",
    beNiceTitle: "Por favor, sé amable al reservar tu clase de prueba",
    beNiceDesc: "El vídeo corto con más de 13.000 visualizaciones.",
    tokyoTalesDesc: "Sigue las aventuras de Carlos aprendiendo japonés en Tokio.",
    interview1Title: "Aprobar el JLPT N2: la historia de un alumno",
    interview1Desc: "Uno de mis alumnos cuenta cómo trabajamos juntos y cómo aprobó el JLPT N2.",
    interview2Title: "Aprobar el JLPT N3: la historia de un alumno",
    interview2Desc: "Uno de mis alumnos cuenta cómo trabajamos juntos y cómo aprobó el JLPT N3.",

    // Banners (redesign)
    japanInternBannerDesc: "Encuentra las prácticas de tus sueños en Japón con nuestro servicio gratuito para estudiantes.",
    japanInternBannerCta: "Saber más",
    radicalBannerCta: "Prueba Radical",
    n1n2BannerCta: "Descubre el curso",
    radicalReviewsEyebrow: "Desde las tiendas de apps",
    radicalReviewsTitle: "Lo que dicen los usuarios de Radical",
    
    // Courses
    ourCourses: "Nuestros Cursos",
    jlptTitle: "Curso JLPT N1/N2",
    jlptDesc: "Curso de 10 horas especialmente para estudiantes de N1 y N2, enfocado en la comprensión de textos de nivel avanzado",
    jlptButton: "Ver Curso",
    japaneseTitle: "Clases de Japonés",
    japaneseDesc: "Clases de japonés personalizadas con profesores experimentados",
    japaneseButton: "Reservar Ahora",
    otherTitle: "Inglés, Español y Chino",
    otherDesc: "Aprende otros idiomas con nuestros profesores expertos",
    otherButton: "Reservar Ahora",
    
    // Apps
    ourApps: "Nuestras Apps y Recursos",
    radicalTitle: "Diccionario Radical",
    radicalDescription: "Diccionario inglés-japonés con análisis de radicales de kanji",
    radicalButton: "Probar Radical",
    keigoTitle: "Keigo Pro",
    keigoDescription: "Aprende los honoríficos japoneses (keigo) con nuestra app especializada",
    keigoButton: "Próximamente",
    hiraganaTitle: "Hiragana Hero",
    hiraganaDescription: "Aprende hiragana y katakana de forma rápida y eficiente",
    hiraganaButton: "Próximamente",
    
    // Books
    publishedBooks: "Libros Publicados",
    bashoTitle: "Basho: Maestro del haiku",
    bashoDescription: "La primera biografía del creador del haiku en español",
    jlptBookTitle: "Libro de Kanji JLPT N5",
    jlptBookDescription: "Guía completa para la preparación de kanji JLPT N5",
    jlptBookButton: "Próximamente",
    
    // Travel
    travelTitle: "Viajar a Japón y Asia",
    travelDescription: "Consejos expertos y servicios para viajar a Japón y Asia",
    travelButton: "Explorar",
    travelEyebrow: "Viajes y aventuras",
    travelPageIntro: "Comparto consejos y ofrezco servicios para viajar por Japón sin gastar de más: desde aventuras inolvidables hasta alojamiento que normalmente exige hablar japonés (de eso me encargo yo). También diseño itinerarios totalmente personalizados y colaboro con agencias locales para viajeros de larga estancia y nómadas digitales.",
    travelJapanBox: "Consejos de viaje, alojamiento económico y trucos de experto para aventuras por todo Japón, además de planificación de viajes a medida. Con Walk the World también guío rutas a pie como el Kumano Kodo.",
    travelHimalayasBox: "Soy embajador de marca de Himalaya Explore Line y escalé el Himalaya en marzo de 2025. Lee sobre la aventura en mi newsletter de LinkedIn.",
    travelSpainBox: "Planificación de viajes por España: experiencias locales, senderismo y cultura. Con Walk the World he hecho el Camino de Santiago con la Universidad Johns Hopkins.",
    travelContactCta: "Contáctame",
    travelNewsletterCta: "Leer la newsletter",
    walkTheWorldCta: "Walk the World",

    // Japan Intern
    internTitle: "JapanIntern.Net",
    internDescription: "Encuentra  prácticas en Japón con nuestro servicio gratuito para estudiantes",
    internButton: "¡Mira!",
    
    // FAQ
    faq: "Preguntas Frecuentes",
    faqSubtitle: "Encuentra respuestas a preguntas comunes",
    faqQuestion1: "¿Cómo funcionan las clases?",
    faqAnswer1: "Nuestras clases se realizan en línea a través de Zoom u otras plataformas. Puedes reservar un horario que te convenga, y te enviaremos materiales antes de la clase. Cada clase está personalizada según tus necesidades y objetivos de aprendizaje.",
    faqQuestion2: "¿Cuál es vuestro método de enseñanza?",
    faqAnswer2: "Nos centramos en el desarrollo temprano de la fluidez y el uso práctico del idioma. Para el japonés específicamente, tenemos métodos dirigidos a la preparación del JLPT y la adquisición de kanji a través de nuestro enfoque único de radicales.",
    faqQuestion3: "¿Ofrecéis clases en grupo?",
    faqAnswer3: "Sí, ofrecemos clases privadas y en grupo. Las clases en grupo están disponibles en horarios específicos y para niveles específicos.",
    faqQuestion4: "¿Cuánto cuestan las clases?",
    faqAnswer4: "Los precios de las clases varían según el profesor, el idioma y si es una clase privada o en grupo. Ofrecemos tarifas competitivas y descuentos por paquetes.",
    faqQuestion5: "¿Puedo probar una clase antes de comprometerme?",
    faqAnswer5: "¡Absolutamente! Ofrecemos clases de prueba a un precio reducido para que puedas experimentar nuestro estilo de enseñanza antes de comprometerte con un paquete.",
    
    // CTA
    bookLesson: "Reservar una Clase",
    bookLessonSubtitle: "Elige el idioma que quieres dominar y reserva una clase de prueba con uno de nuestros profesores expertos",
    bookTrialJapanese: "Reservar una Clase de Prueba de Japonés",
    bookTrialOther: "Reservar una Prueba de Inglés/Español/Chino",
    
    // Footer
    copyright: "© 2024 CarlosCoordinator. Todos los derechos reservados.",
    footerTagline: "Aprendizaje de idiomas profesional con profesores expertos.",
    navHeading: "Navegación",
    rightsReserved: "Todos los derechos reservados.",
    comingSoonShort: "Pronto",
    privacyPolicy: "Política de Privacidad",
    terms: "Términos de Servicio",
    contact: "Contáctanos",
    followUs: "Síguenos",

    //Banners
    radicalBannerTitle: "Radical",
    radicalBannerDesc: "El diccionario inglés-japonés definitivo para impulsar tu adquisición de kanji y vocabulario",
    n1n2BannerTitle: "Curso de Lectura N1-N2",
    n1n2BannerDesc: "Aprueba el JLPT con nuestro curso de 10 horas centrado en la comprensión de textos de nivel avanzado",
  },
  fr: {
    // Navigation
    home: "Accueil",
    teachers: "Professeurs",
    courses: "Cours",
    radical: "Radical",
    japanIntern: "Japan Intern",
    travel: "Voyage au Japon",

        // zcal
    bookJapaneseTrialLink: "Japanese Assessment/Free Trial - Schedule a meeting",
    bookDiscoveryCallLink: "Discovery Call - CarlosCoordinator - Schedule a meeting",

    // My Narrow Road to the Interior
    narrowRoadDescription: "J'ai marché 2200 km pour recréer le voyage de Bashō de 1689",
    
    // Travel
    travelJapanTitle: "Voyagez au Japon",
    travelJapanDescription: "Aidez-moi à créer le voyage de vos rêves au Japon, y compris la recherche d'un hébergement bon marché, le parapente au Mont Fuji, la méditation zazen dans les temples",
    travelHimalayasTitle: "Voyagez à l'Himalaya",
    travelHimalayasDescription: "Trouvez la meilleure aventure à 5 000 m d'altitude, randonnez jusqu'à trouver votre véritable moi et méditez là où le bouddhisme est né",
    travelSpainTitle: "Voyagez en Espagne",
    travelSpainDescription: "Trouvez l'aventure, la randonnée et la culture en Espagne",
    
    // Hero
    heroTitle: "Apprenez des Langues avec des Professeurs Experts",
    heroSubtitle: "Devenez fluent en japonais, espagnol, anglais ou chinois avec des cours personnalisés",
    heroSubtitle1: "Êtes-vous prêt à parler couramment le japonais ? Réussir l'examen JLPT que vous espériez passer depuis des mois ? Dépassé par des milliers de caractères, un manque d'orientation claire, ou des enseignants démotivés qui disent simplement \"Oh, c'est comme ça que fonctionne la langue. Tu dois juste mémoriser ça\"?",
    heroSubtitle2: "Peut-être n'êtes-vous pas sûr des ressources à utiliser, ou avez-vous cherché une communauté en ligne pour vous aider à apprendre avec plus de motivation?",
    heroButton: "Réserver un Cours d'Essai",
    watchVideo: "Regarder la Vidéo",
    bookTrialButton: "Réserver un cours d'essai",
    meetTeachersButton: "Rencontrer nos professeurs",
    seeReviewsButton: "Voir nos avis",
    
    // Resource filtering
    all: "Tous",
    books: "Livres",
    apps: "Apps",
    resources: "Ressources",
    videos: "Vidéos",
    checkFreeResources: "Consultez nos ressources gratuites ici",
    comingSoon: "Bientôt disponible",
    introVideoComingSoon: "Notre vidéo de présentation est en préparation!",
    followerCount: "Plus de 15 000 abonnés sur toutes mes plateformes ne peuvent pas se tromper",
    
    // Features
    whatMakesUsDifferent: "Ce Qui Nous Rend Différents",
    whatMakesUsDifferentSubtitle: "Notre approche unique de l'apprentissage des langues nous distingue",
    featureMethod: "Méthode d'Enseignement Unique",
    featureMethodDesc: "Concentration sur le développement précoce de la fluidité et la préparation aux examens avec des techniques éprouvées",
    featureApps: "Applications d'Apprentissage",
    featureAppsDesc: "Accès à nos applications spécialisées comme Radical pour l'apprentissage du japonais",
    featureExperience: "Professeurs Expérimentés",
    featureExperienceDesc: "Apprenez avec des locuteurs natifs ayant des années d'expérience dans l'enseignement",
    featureFlexibility: "Apprentissage Flexible",
    featureFlexibilityDesc: "Cours en ligne qui s'adaptent à votre emploi du temps, avec un programme personnalisé",
    
    // Teachers
    meetOurTeachers: "Rencontrez Nos Professeurs",
    teachersSubtitle: "Nos professeurs experts sont passionnés par l'aide qu'ils vous apportent pour atteindre la fluidité",
    carlosTitle: "Professeur de Japonais et Espagnol",
    carlosDesc: "Spécialisé dans le développement précoce de la fluidité et la préparation au JLPT",
    eikoTitle: "Professeure de Japonais",
    eikoDesc: "Spécialisée dans le développement oral à tous les niveaux",
    caolanTitle: "Professeur d'Anglais",
    caolanDesc: "Professeur irlandais natif spécialisé dans l'anglais conversationnel",
    yuluTitle: "Professeure de Chinois",
    yuluDesc: "Experte en chinois mandarin pour débutants jusqu'aux apprenants avancés",
    
    // Testimonials
    testimonials: "Ce Que Disent Nos Étudiants",
    testimonialsSubtitle: "Lisez des avis authentiques de notre profil Google Business",
    viewAllReviews: "Voir tous les avis sur Google",
    reviewsRating: "Noté 5,0 sur Google",
    reviewsRatingSub: "Découvrez ce que pensent vraiment les élèves, directement depuis mon profil Google.",

    // Hero (redesign)
    heroEyebrow: "Japonais · Anglais · Espagnol · Chinois",
    heroTitle2: "Des cours de japonais qui ont enfin du sens",
    heroLead: "La plupart des professeurs de japonais vous font mémoriser sans fin en espérant que ça tienne. J'enseigne autrement : des cours personnalisés dans votre propre langue, construits autour des radicaux des kanji, de textes réels et d'une logique claire. Mes élèves réussissent le JLPT N1 et N2, entrent dans les meilleures universités et utilisent le japonais avec confiance.",
    showMore: "Voir plus",
    showLess: "Voir moins",
    trustGoogle: "sur Google",
    trustLinkedIn: "sur LinkedIn",
    trustYears: "Plus de 10 ans à enseigner le japonais",
    studentsWorkAt: "Mes élèves travaillent chez",
    meetCarlos: "Rencontrez Carlos",
    meetCarlosRole: "Professeur de japonais · Auteur · Créateur d'applis · Doctorant",
    meetCarlosP1: "J'enseigne le japonais depuis presque 10 ans : je suis le créateur du cours de japonais de l'Institut espagnol de traduction (ISTRAD) et professeur associé à l'Université de Salamanque. Mes élèves réussissent le JLPT N1 et N2, entrent à l'université et travaillent dans des entreprises comme Rakuten, Dentsu ou Boston Consulting Group — dont le président de la Chambre de commerce espagnole au Japon et l'équipe nationale masculine espagnole de basket-ball.",
    meetCarlosP2: "Là où je trouve une friction, je construis. Radical enseigne les kanji par le sens et les radicaux phonétiques ; Keigo Pro démystifie les formules de politesse japonaises ; j'ai écrit la première biographie en espagnol de Bashō, le créateur du haïku ; et ma méthode d'enseignement est la base du doctorat que je termine à l'Université autonome de Barcelone.",

    // Resources (redesign)
    resourcesEyebrow: "Ressources gratuites et premium",
    resourcesHeading: "Tout ce que j'ai créé pour vous aider à apprendre",
    resourcesSubtitle: "Livres, applis, vidéos et voyages : filtrez selon vos besoins.",
    followAlong: "Suivez-moi :",
    filterAll: "Tous",
    filterRead: "Lire",
    filterStudy: "Étudier",
    filterWatch: "Regarder",
    filterTravel: "Voyager",
    filterWork: "Travailler",
    ctaRead: "Lire",
    ctaWatch: "Regarder",
    ctaOpen: "Ouvrir",
    radicalCardDesc: "Dictionnaire anglais–japonais qui décompose les kanji en radicaux pour accélérer l'acquisition du vocabulaire. Sur le web, iOS et Android.",
    keigoCardDesc: "Maîtrisez les formules de politesse japonaises (keigo) avec des leçons guidées et de la pratique. Désormais sur iOS et Android.",
    hiraganaCardDesc: "Apprenez les hiragana et katakana avec des astuces et des moyens mnémotechniques.",
    internCardDesc: "Trouvez le stage de vos rêves au Japon — un service gratuit pour les étudiants.",
    jlptN1CompDesc: "Un guide détaillé pour maîtriser la compréhension écrite du JLPT N1.",
    jlptN2CompDesc: "Des stratégies complètes pour la section lecture du JLPT N2.",
    jlptN3CompDesc: "Les techniques essentielles pour réussir la lecture du JLPT N3.",
    jpsScratchDesc: "Apprenez les hiragana et katakana par mnémotechnique, à partir de zéro.",
    jpDesdeCeroDesc: "Apprenez le japonais à partir de zéro (série en espagnol).",
    beNiceTitle: "Soyez gentil au moment de réserver votre cours d'essai",
    beNiceDesc: "La courte vidéo aux plus de 13 000 vues.",
    tokyoTalesDesc: "Suivez les aventures de Carlos apprenant le japonais à Tokyo.",
    interview1Title: "Réussir le JLPT N2 : le témoignage d'un élève",
    interview1Desc: "Un de mes élèves raconte comment nous avons travaillé ensemble et comment il a réussi le JLPT N2.",
    interview2Title: "Réussir le JLPT N3 : le témoignage d'un élève",
    interview2Desc: "Un de mes élèves raconte comment nous avons travaillé ensemble et comment il a réussi le JLPT N3.",

    // Banners (redesign)
    japanInternBannerDesc: "Trouvez le stage de vos rêves au Japon grâce à notre service gratuit pour les étudiants.",
    japanInternBannerCta: "En savoir plus",
    radicalBannerCta: "Essayer Radical",
    n1n2BannerCta: "Découvrir le cours",
    radicalReviewsEyebrow: "Depuis les stores d'applications",
    radicalReviewsTitle: "Ce que disent les utilisateurs de Radical",
    
    // Courses
    ourCourses: "Nos Cours",
    jlptTitle: "Cours JLPT N1/N2",
    jlptDesc: "Cours de 10 heures spécialement pour les candidats N1 et N2, axé sur la compréhension des textes de niveau avancé",
    jlptButton: "Voir le Cours",
    japaneseTitle: "Cours de Japonais",
    japaneseDesc: "Cours de japonais personnalisés avec des professeurs expérimentés",
    japaneseButton: "Réserver Maintenant",
    otherTitle: "Anglais, Espagnol et Chinois",
    otherDesc: "Apprenez d'autres langues avec nos professeurs experts",
    otherButton: "Réserver Maintenant",
    
    // Apps
    ourApps: "Nos Applications et Ressources",
    radicalTitle: "Dictionnaire Radical",
    radicalDescription: "Dictionnaire anglais-japonais avec analyse des radicaux de kanji",
    radicalButton: "Essayer Radical",
    keigoTitle: "Keigo Pro",
    keigoDescription: "Apprenez les honorifiques japonais (keigo) avec notre application spécialisée",
    keigoButton: "Bientôt Disponible",
    hiraganaTitle: "Hiragana Hero",
    hiraganaDescription: "Apprenez hiragana et katakana rapidement et efficacement",
    hiraganaButton: "Bientôt Disponible",
    
    // Books
    publishedBooks: "Livres Publiés",
    bashoTitle: "Basho: Maestro del haiku",
    bashoDescription: "La première biographie de Matsuo Basho en espagnol",
    jlptBookTitle: "Livre de Kanji JLPT N5",
    jlptBookDescription: "Guide complet pour la préparation des kanji JLPT N5",
    jlptBookButton: "Bientôt Disponible",
    
    // Travel
    travelTitle: "Voyage au Japon et en Asie",
    travelDescription: "Conseils d'experts et services pour voyager au Japon et en Asie",
    travelButton: "Explorer",
    travelEyebrow: "Voyages et aventures",
    travelPageIntro: "Je partage des conseils et propose des services pour voyager au Japon sans se ruiner — des aventures inoubliables jusqu'à l'hébergement qui exige normalement de parler japonais (je m'en occupe pour vous). Je conçois aussi des itinéraires entièrement personnalisés et je collabore avec des agences locales pour les voyageurs au long cours et les nomades numériques.",
    travelJapanBox: "Conseils de voyage, hébergement économique et astuces d'initié pour des aventures partout au Japon, ainsi que des itinéraires sur mesure. Avec Walk the World, je guide aussi des randonnées comme le Kumano Kodo.",
    travelHimalayasBox: "Je suis ambassadeur de la marque Himalaya Explore Line et j'ai gravi l'Himalaya en mars 2025. Découvrez l'aventure dans ma newsletter LinkedIn.",
    travelSpainBox: "Organisation de voyages en Espagne : expériences locales, randonnée et culture. Avec Walk the World, j'ai parcouru le Camino de Santiago avec l'université Johns Hopkins.",
    travelContactCta: "Contactez-moi",
    travelNewsletterCta: "Lire la newsletter",
    walkTheWorldCta: "Walk the World",
    
    // Japan Intern
    internTitle: "JapanIntern.Net",
    internDescription: "Trouvez votre stage de rêve au Japon avec notre service gratuit pour nos étudiants",
    internButton: "En Savoir Plus",
    
    // FAQ
    faq: "Questions Fréquentes",
    faqSubtitle: "Trouvez des réponses aux questions fréquemment posées",
    faqQuestion1: "Comment fonctionnent les cours?",
    faqAnswer1: "Nos cours sont dispensés en ligne via Zoom ou d'autres plateformes. Vous pouvez réserver un horaire qui vous convient, et nous vous enverrons du matériel avant le cours. Chaque cours est personnalisé selon vos besoins et objectifs d'apprentissage.",
    faqQuestion2: "Quelle est votre méthode d'enseignement?",
    faqAnswer2: "Nous nous concentrons sur le développement précoce de la fluidité et l'utilisation pratique de la langue. Pour le japonais spécifiquement, nous avons des méthodes visant à la préparation du JLPT et à l'acquisition des kanji grâce à notre approche unique des radicaux.",
    faqQuestion3: "Proposez-vous des cours en groupe?",
    faqAnswer3: "Oui, nous proposons des cours privés et en groupe. Les cours en groupe sont disponibles à des horaires spécifiques et pour des niveaux spécifiques.",
    faqQuestion4: "Combien coûtent les cours?",
    faqAnswer4: "Les prix des cours varient selon le professeur, la langue et s'il s'agit d'un cours privé ou en groupe. Nous offrons des tarifs compétitifs et des réductions pour les forfaits.",
    faqQuestion5: "Puis-je essayer un cours avant de m'engager?",
    faqAnswer5: "Absolument! Nous proposons des cours d'essai à tarif réduit pour que vous puissiez expérimenter notre style d'enseignement avant de vous engager dans un forfait.",
    
    // CTA
    bookLesson: "Réserver un Cours",
    bookLessonSubtitle: "Choisissez la langue que vous souhaitez maîtriser et réservez un cours d'essai avec l'un de nos professeurs experts",
    bookTrialJapanese: "Réserver un Cours d'Essai de Japonais",
    bookTrialOther: "Réserver un Essai d'Anglais/Espagnol/Chinois",
    
    // Footer
    copyright: "© 2024 CarlosCoordinator. Tous droits réservés.",
    footerTagline: "Un apprentissage des langues professionnel avec des professeurs experts.",
    navHeading: "Navigation",
    rightsReserved: "Tous droits réservés.",
    comingSoonShort: "Bientôt",
    privacyPolicy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    contact: "Contactez-Nous",
    followUs: "Suivez-Nous",

    //Banners
    radicalBannerTitle: "Radical",
    radicalBannerDesc: "Le dictionnaire anglais-japonais ultime pour booster votre acquisition de kanji et de vocabulaire",
    n1n2BannerTitle: "Cours de Lecture N1-N2",
    n1n2BannerDesc: "Réussissez le JLPT avec notre cours de 10 heures axé sur la compréhension de textes de niveau avancé",
  },
  gl: {
    // Navigation
    home: "Inicio",
    teachers: "Profesores",
    courses: "Cursos",
    radical: "Radical",
    japanIntern: "Japan Intern",
    travel: "Viaxar a Xapón",

        // zcal
    bookJapaneseTrialLink: "Clase de proba de xaponés de balde",
    bookDiscoveryCallLink: "Toma de contacto: inglés, español ou chinés ",

    // My Narrow Road to the Interior
    narrowRoadDescription: "Andei 2200 km para recrear a viaxe de Basho de 1689",
    

    // Travel
    travelJapanTitle: "Viaxa ó Xapón",
    travelJapanDescription: "Imos prepararche a viaxe dos teus soños ó Xapón. Fai as maletas!",
    travelHimalayasTitle: "Viaxa ó Himalaia",
    travelHimalayasDescription: "Atopa a mellor aventura a 5.000 m sobre o nivel do mar, camiña ata atopar o teu verdadeiro ser e medita onde naceu o budismo",
    travelSpainTitle: "Viaxa a España",
    travelSpainDescription: "Atopa aventura, sendeirismo e cultura en España",
    
    // Hero
    heroTitle: "Aprende Idiomas con Profesores Expertos",
    heroSubtitle: "Aprende xaponés, español, inglés ou chinés con clases personalizadas",
    heroSubtitle1: "Estás preparado para falar xaponés con fluidez? Aprobar o JLPT que levas esperando aprobar nos últimos meses? Abrumado por miles de caracteres, falta de orientación clara ou profesores desmotivados que só din \"Oh, así é como funciona o idioma. Só tes que memorizar iso\"?",
    heroSubtitle2: "Quizais non estás seguro de que recursos usar, ou estiveches buscando unha comunidade en liña para axudarche a aprender con máis motivación?",
    heroButton: "Reservar unha Clase de Proba",
    watchVideo: "Ver Vídeo",
    bookTrialButton: "Reservar unha clase de proba",
    meetTeachersButton: "Coñece aos nosos profesores",
    seeReviewsButton: "Ver as nosas recensións",
    
    // Resource filtering
    all: "Todos",
    books: "Libros",
    apps: "Apps",
    resources: "Recursos",
    videos: "Vídeos",
    checkFreeResources: "Consulta os nosos recursos gratuítos aquí",
    comingSoon: "Proximamente",
    introVideoComingSoon: "O noso vídeo de introdución está en camiño!",
    followerCount: "Máis de 15.000 seguidores en todas as miñas plataformas non poden estar equivocados",
    
    // Features
    whatMakesUsDifferent: "Que Nos Fai Diferentes",
    whatMakesUsDifferentSubtitle: "O noso enfoque único da aprendizaxe de idiomas distinguenos",
    featureMethod: "Método de Ensino Único",
    featureMethodDesc: "Enfoque no desenvolvemento temperán da fluidez e preparación para exames con técnicas probadas",
    featureApps: "Aplicacións de Aprendizaxe",
    featureAppsDesc: "Acceso ás nosas aplicacións especializadas como Radical para aprender xaponés",
    featureExperience: "Profesores con Experiencia",
    featureExperienceDesc: "Aprende con falantes nativos con anos de experiencia docente",
    featureFlexibility: "Aprendizaxe Flexible",
    featureFlexibilityDesc: "Clases en liña que se adaptan ao teu horario, con currículo personalizado",
    
    // Teachers
    meetOurTeachers: "Coñece aos Nosos Profesores",
    teachersSubtitle: "Os nosos profesores expertos están comprometidos en axudarche a lograr fluidez",
    carlosTitle: "Profesor de Xaponés e Español",
    carlosDesc: "Especializado en desenvolvemento temperán da fluidez e preparación JLPT",
    eikoTitle: "Profesora de Xaponés",
    eikoDesc: "Especializada en desenvolvemento oral en calquera nivel",
    caolanTitle: "Profesor de Inglés",
    caolanDesc: "Profesor nativo irlandés especializado en inglés conversacional",
    yuluTitle: "Profesora de Chinés",
    yuluDesc: "Experta en chinés mandarín para principiantes ata niveis avanzados",
    
    // Testimonials
    testimonials: "O Que Din os Nosos Estudantes",
    testimonialsSubtitle: "Le recensións auténticas do noso perfil de Google Business",
    viewAllReviews: "Ver todas as recensións en Google",
    reviewsRating: "Valorado con 5.0 en Google",
    reviewsRatingSub: "Le o que pensan de verdade os estudantes, directo do meu perfil de Google.",

    // Hero (redesign)
    heroEyebrow: "Xaponés · Inglés · Español · Chinés",
    heroTitle2: "Clases de xaponés que por fin teñen sentido",
    heroLead: "A maioría dos profesores de xaponés fanche memorizar sen parar e esperar a que quede. Eu ensino doutra forma: clases personalizadas na túa propia lingua, construídas arredor dos radicais dos kanji, textos reais e unha lóxica clara. Os meus alumnos aproban o JLPT N1 e N2, entran nas mellores universidades e usan o xaponés con confianza.",
    showMore: "Ver máis",
    showLess: "Ver menos",
    trustGoogle: "en Google",
    trustLinkedIn: "en LinkedIn",
    trustYears: "Máis de 10 anos ensinando xaponés",
    studentsWorkAt: "Os meus alumnos traballan en",
    meetCarlos: "Coñece a Carlos",
    meetCarlosRole: "Profesor de xaponés · Autor · Creador de apps · Doutorando",
    meetCarlosP1: "Levo case 10 anos ensinando xaponés: son o creador do curso de xaponés do Instituto Superior de Estudos Lingüísticos e Tradución (ISTRAD) e profesor asociado na Universidade de Salamanca. Os meus alumnos aproban o JLPT N1 e N2, entran na universidade e traballan en empresas como Rakuten, Dentsu ou Boston Consulting Group, incluído o Presidente da Cámara de Comercio Española no Xapón e a Selección Española de Baloncesto masculino.",
    meetCarlosP2: "Onde atopo fricción, constrúo. Radical ensina kanji a través do significado e os radicais fonéticos; Keigo Pro desmitifica os honoríficos xaponeses; escribín a primeira biografía en español de Bashō, o creador do haiku; e o meu método de ensino é a base do doutoramento que estou rematando na Universidade Autónoma de Barcelona.",

    // Resources (redesign)
    resourcesEyebrow: "Recursos gratuítos e premium",
    resourcesHeading: "Todo o que creei para axudarche a aprender",
    resourcesSubtitle: "Libros, apps, vídeos e viaxes: filtra polo que buscas.",
    followAlong: "Sígueme:",
    filterAll: "Todos",
    filterRead: "Ler",
    filterStudy: "Estudar",
    filterWatch: "Ver",
    filterTravel: "Viaxar",
    filterWork: "Traballar",
    ctaRead: "Ler",
    ctaWatch: "Ver",
    ctaOpen: "Abrir",
    radicalCardDesc: "Dicionario inglés–xaponés que descompón os kanji en radicais para acelerar o teu vocabulario. En web, iOS e Android.",
    keigoCardDesc: "Domina os honoríficos xaponeses (keigo) con leccións guiadas e práctica. Xa en iOS e Android.",
    hiraganaCardDesc: "Aprende hiragana e katakana con pistas e mnemotecnias fáciles de lembrar.",
    internCardDesc: "Atopa as prácticas dos teus soños no Xapón: un servizo gratuíto para estudantes.",
    jlptN1CompDesc: "Unha guía detallada para dominar a comprensión lectora do JLPT N1.",
    jlptN2CompDesc: "Estratexias completas para a sección de lectura do JLPT N2.",
    jlptN3CompDesc: "Técnicas esenciais para triunfar na lectura do JLPT N3.",
    jpsScratchDesc: "Aprende hiragana e katakana con mnemotecnias, desde cero.",
    jpDesdeCeroDesc: "Aprende xaponés desde cero (serie en español).",
    beNiceTitle: "Por favor, sé amable ao reservar a túa clase de proba",
    beNiceDesc: "O vídeo curto con máis de 13.000 visualizacións.",
    tokyoTalesDesc: "Segue as aventuras de Carlos aprendendo xaponés en Toquio.",
    interview1Title: "Aprobar o JLPT N2: a historia dun alumno",
    interview1Desc: "Un dos meus alumnos conta como traballamos xuntos e como aprobou o JLPT N2.",
    interview2Title: "Aprobar o JLPT N3: a historia dun alumno",
    interview2Desc: "Un dos meus alumnos conta como traballamos xuntos e como aprobou o JLPT N3.",

    // Banners (redesign)
    japanInternBannerDesc: "Atopa as prácticas dos teus soños no Xapón co noso servizo gratuíto para estudantes.",
    japanInternBannerCta: "Saber máis",
    radicalBannerDesc: "O diccionario inglés-xaponés definitivo para impulsar a túa adquisición de kanji e vocabulario.",
    radicalBannerCta: "Proba Radical",
    n1n2BannerDesc: "Aproba o JLPT co noso curso de 10 horas centrado na comprensión de textos de nivel avanzado.",
    n1n2BannerCta: "Descubre o curso",
    radicalReviewsEyebrow: "Desde as tendas de apps",
    radicalReviewsTitle: "O que din os usuarios de Radical",

    // Courses
    ourCourses: "Os Nosos Cursos",
    jlptTitle: "Curso JLPT N1/N2",
    jlptDesc: "Curso de 10 horas especialmente para estudantes de N1 e N2, enfocado na comprensión de textos de nivel avanzado",
    jlptButton: "Ver Curso",
    japaneseTitle: "Clases de Xaponés",
    japaneseDesc: "Clases de xaponés personalizadas con profesores experimentados",
    japaneseButton: "Reservar Agora",
    otherTitle: "Inglés, Español e Chinés",
    otherDesc: "Aprende outros idiomas cos nosos profesores expertos",
    otherButton: "Reservar Agora",
    
    // Apps
    ourApps: "As Nosas Aplicacións e Recursos",
    radicalTitle: "Dicionario Radical",
    radicalDescription: "Dicionario inglés-xaponés que che analiza os radicais dos kanjis",
    radicalButton: "Probar Radical",
    keigoTitle: "Keigo Pro",
    keigoDescription: "Aprende os honoríficos xaponeses (keigo) coa nosa aplicación especializada",
    keigoButton: "Proximamente",
    hiraganaTitle: "Hiragana Hero",
    hiraganaDescription: "Aprende hiragana e katakana de forma rápida e eficiente",
    hiraganaButton: "Proximamente",
    
    // Books
    publishedBooks: "Libros Publicados",
    bashoTitle: "Basho: Maestro del haiku",
    bashoDescription: "A primeira biografía do creador do haiku en castelán",
    jlptBookTitle: "Libro de Kanji JLPT N5",
    jlptBookDescription: "Guía completa para a preparación de kanji JLPT N5",
    jlptBookButton: "Proximamente",
    
    // Travel
    travelTitle: "Viaxar a Xapón e Asia",
    travelDescription: "Consellos expertos e servizos para viaxar a Xapón e Asia",
    travelButton: "Explorar",
    travelEyebrow: "Viaxes e aventuras",
    travelPageIntro: "Comparto consellos e ofrezo servizos para viaxar polo Xapón sen gastar de máis: desde aventuras inesquecibles ata aloxamento que normalmente esixe falar xaponés (diso encárgome eu). Tamén deseño itinerarios totalmente personalizados e colaboro con axencias locais para viaxeiros de longa estadía e nómades dixitais.",
    travelJapanBox: "Consellos de viaxe, aloxamento económico e trucos de experto para aventuras por todo o Xapón, ademais de planificación de viaxes á medida. Con Walk the World tamén guío rutas a pé como o Kumano Kodo.",
    travelHimalayasBox: "Son embaixador de marca de Himalaya Explore Line e escalei o Himalaia en marzo de 2025. Le sobre a aventura na miña newsletter de LinkedIn.",
    travelSpainBox: "Planificación de viaxes por España: experiencias locais, sendeirismo e cultura. Con Walk the World fixen o Camiño de Santiago coa Universidade Johns Hopkins.",
    travelContactCta: "Contáctame",
    travelNewsletterCta: "Ler a newsletter",
    walkTheWorldCta: "Walk the World",

    // Japan Intern
    internTitle: "JapanIntern.Net",
    internDescription: "Atopa prácticas no Xapón co noso servizo gratuíto para estudantes",
    internButton: "Saber Máis",
    
    // FAQ
    faq: "Preguntas Frecuentes",
    faqSubtitle: "Atopa respostas a preguntas frecuentes",
    faqQuestion1: "Como funcionan as clases?",
    faqAnswer1: "As nosas clases realízanse en liña a través de Zoom ou outras plataformas. Podes reservar un horario que che conveña, e enviarémosche materiais antes da clase. Cada clase está personalizada segundo as túas necesidades e obxectivos de aprendizaxe.",
    faqQuestion2: "Cal é o voso método de ensino?",
    faqAnswer2: "Centrámonos no desenvolvemento temperán da fluidez e o uso práctico do idioma. Para o xaponés especificamente, temos métodos dirixidos á preparación do JLPT e a adquisición de kanji a través do noso enfoque único de radicais.",
    faqQuestion3: "Ofrecedes clases en grupo?",
    faqAnswer3: "Si, ofrecemos clases privadas e en grupo. As clases en grupo están dispoñibles en horarios específicos e para niveis específicos.",
    faqQuestion4: "Canto custan as clases?",
    faqAnswer4: "Os prezos das clases varían segundo o profesor, o idioma e se é unha clase privada ou en grupo. Ofrecemos tarifas competitivas e descontos por paquetes.",
    faqQuestion5: "Podo probar unha clase antes de comprometerme?",
    faqAnswer5: "Absolutamente! Ofrecemos clases de proba a un prezo reducido para que poidas experimentar o noso estilo de ensino antes de comprometerte cun paquete.",
    
    // CTA
    bookLesson: "Reservar unha Clase",
    bookLessonSubtitle: "Elixe o idioma que queres dominar e reserva unha clase de proba cun dos nosos profesores expertos",
    bookTrialJapanese: "Reservar unha Clase de Proba de Xaponés",
    bookTrialOther: "Reservar unha Proba de Inglés/Español/Chinés",
    
    // Footer
    copyright: "© 2024 CarlosCoordinator. Todos os dereitos reservados.",
    footerTagline: "Aprendizaxe de idiomas profesional con profesores expertos.",
    navHeading: "Navegación",
    rightsReserved: "Todos os dereitos reservados.",
    comingSoonShort: "Pronto",
    privacyPolicy: "Política de Privacidade",
    terms: "Termos de Servizo",
    contact: "Contáctanos",
    followUs: "Síguenos",

    //Banners
    radicalBannerTitle: "Radical",
    radicalBannerDescription: "O dicionario inglés-xaponés definitivo para impulsar a túa adquisición de kanji e vocabulario",
    n1n2BannerTitle: "Curso de Lectura N1-N2",
    n1n2BannerDescription: "Aproba o JLPT co noso curso de 10 horas centrado na comprensión de textos de nivel avanzado",
  }
};

export const languageNames = {
  en: "English",
  es: "Español",
  fr: "Français",
  gl: "Galego"
};

export type Language = keyof typeof languageNames;
