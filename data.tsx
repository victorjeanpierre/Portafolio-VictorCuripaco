import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Facebook, Instagram, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "www.linkedin.com/in/victor-jean-pierre-curipaco-marquez-197a112a0",
    },
    {
        id: 3,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador full stack",
        subtitle: "TechSolutions",
        description: "Colaboré en el desarrollo de una plataforma de aula virtual para colegios de bajos recursos, utilizando Figma, Gid, Github, Next.js, React, Tailwind CSS, TypeScript y Amazon Web Services (AWS) con arquitectura de microservicios. Trabajando en equipo, diseñamos y construimos una solución integral que brinda acceso a recursos educativos de calidad, mejorando la experiencia de aprendizaje para estudiantes y docentes, y reduciendo la brecha digital en la educación. Mi rol incluyó [mencionar tus responsabilidades específicas], contribuyendo a la creación de una plataforma escalable, segura y accesible que beneficia a comunidades educativas en necesidad.",
        date: "Nov 2024 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "Norkys Cañete",
        description: "Desarrollé una aplicación de escritorio para Pollería Norkis utilizando C# y Visual Studio, integrando SQL Server para gestionar pedidos, inventario, empleados y clientes, y mejorar la eficiencia del restaurante. Implementé funcionalidades como gestión de menús, control de stock, administración de empleados y reportes de ventas, demostrando mis habilidades en programación en C#, desarrollo de aplicaciones de escritorio con Windows Forms y diseño de bases de datos con SQL Server.",
        date: "May 2023",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Desarrollé un ecommerce como proyecto personal utilizando Laravel y el modelo Vista Controlador (MVC), permitiendo a usuarios navegar por categorías, realizar pedidos y pagos, y gestionar su cuenta. Utilicé tecnologías como PHP 7.x/8.x, MySQL/MariaDB, HTML5/CSS3/JavaScript y Bootstrap/Tailwind CSS. La plataforma cuenta con autenticación y autorización, gestión de productos y categorías, carrito de compras, checkout y pagos con PayPal/Stripe, y notificaciones personalizadas, demostrando mi capacidad para desarrollar aplicaciones web completas y escalables.",
        date: "Ago 2022",
    },
    {
        id: 4,
        title: "Diseño y Desarrollo web",
        subtitle: "Restaurant Huamancito en Chincha",
        description: "Diseñé y desarrollé una página web para el restaurant Huamancito del distrito de Chincha, una polleria que buscaba expandir su presencia en línea. Utilicé tecnologías básicas como HTML, CSS, JavaScript, Bootstrap y PHP para crear una plataforma atractiva y funcional.",
        date: "Mar 2021",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 20,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
      id: 1,
      name: "Juan Pérez, CEO de XYZ Corp.",
      description:
        "Trabajar con Victor ha sido una experiencia excepcional. Su capacidad para entender nuestros requisitos y desarrollar soluciones innovadoras ha superado nuestras expectativas.",
      imageUrl: "/profile1.png",
    },
    {
      id: 2,
      name: "María García, Líder de Proyecto en ABC Startups",
      description:
        "La atención al detalle y la calidad del código de Victor son impresionantes. Su capacidad para trabajar en equipo y resolver problemas complejos es invaluable.",
      imageUrl: "/profile2.png",
    },
    {
      id: 3,
      name: "Carlos Sánchez, Desarrollador Senior en DEF Tech",
      description:
        "Me impresiona la velocidad y eficiencia con la que Victor desarrolla aplicaciones escalables y seguras. Su conocimiento de las últimas tecnologías es destacado.",
      imageUrl: "/profile3.png",
    },
    {
      id: 4,
      name: "Laura Snow, Diseñadora UX en GHI Design",
      description:
        "La colaboración con Victor ha sido fantástica. Su capacidad para entender nuestros requisitos de diseño y desarrollar interfaces intuitivas es excepcional.",
      imageUrl: "/profile4.png",
    },
    {
      id: 5,
      name: "Antonio Martínez, Gerente de Proyecto en JKL Consulting",
      description:
        "La calidad del trabajo de Victor es consistente y excepcional. Su capacidad para gestionar proyectos y cumplir plazos es impresionante.",
      imageUrl: "/profile5.png",
    },
    {
      id: 6,
      name: "George Snow, Emprendedor y Mentor",
      description:
        "Considero a Victor como uno de los desarrolladores más talentosos que he conocido. Su pasión por la innovación y su ética laboral son ejemplares.",
      imageUrl: "/profile6.png",
    },
  ];
export const dataContact = [
    {
      title: "Contáctame",
      phone: "+51 993 754 272",
      email: "jeanpierrecuripaco@gmail.com",
      address: "Lima, Perú",
      linkedin: "www.linkedin.com/in/victor-jean-pierre-curipaco-marquez-197a112a0",
      image: "/imagen-de-contacto.jpg",
    },
    
  ];