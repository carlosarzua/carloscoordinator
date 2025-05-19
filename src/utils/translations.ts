import { type } from "os";

type TranslationKey = string;

interface Translations {
  [key: string]: {
    [key: TranslationKey]: string;
  };
}

export const translations: Translations = {
  en: {
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
    featureMethodDescription: "Focus on early fluency development and exam preparation with proven techniques",
    featureApps: "Language Learning Apps",
    featureAppsDescription: "Access to our specialized apps like Radical for Japanese learning",
    featureExperience: "Experienced Teachers",
    featureExperienceDescription: "Learn from native speakers with years of teaching experience",
    featureFlexibility: "Flexible Learning",
    featureFlexibilityDescription: "Online lessons that fit your schedule, with personalized curriculum",
    
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
