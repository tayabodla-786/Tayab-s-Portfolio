export const heroData = {
  subtitle: "BEHIND THE SCENE, BEYOND THE SCREEN",
  title: "Tayyab Imran",
  tagline: "Full-Stack Developer building thoughtful, reliable web experiences from idea to production.",
  description: "I turn ideas into responsive, scalable products with clean interfaces and dependable backend systems.",
  resumeLink: "/Resume/MyResume.txt"
};

export const servicesData = [
  {
    id: "service-1",
    icon: "lucide:workflow",
    color: "#AF52DE",
    title: "Full-Stack Web Development",
    description: "Building complete web products with polished interfaces, clear APIs, secure authentication, and maintainable code.",
    items: [
      {
        title: "Responsive Interfaces",
        description: "(React, Tailwind CSS, reusable components, accessible layouts, smooth interactions)"
      },
      {
        title: "REST APIs",
        description: "(Node.js, Express.js, authentication, validation, error handling, clean service boundaries)"
      },
      {
        title: "Database Integration",
        description: "(MongoDB, PostgreSQL, data modeling, queries, and practical performance decisions)"
      }
    ]
  },
  {
    id: "service-2",
    icon: "lucide:server-cog",
    color: "#0A84FF",
    title: "Product Engineering",
    description: "Taking a product from rough idea to a useful, deployed experience with an eye for both detail and delivery.",
    items: [
      {
        title: "MERN Applications",
        description: "(MongoDB, Express.js, React, Node.js, React Router)"
      },
      {
        title: "Admin Dashboards",
        description: "(Data tables, forms, role-aware screens, booking and content management workflows)"
      },
      {
        title: "Deployment",
        description: "(Vercel, responsive production builds, environment configuration, and iterative improvement)"
      }
    ]
  },
  {
    id: "service-3",
    icon: "lucide:shield-check",
    color: "#FF375F",
    title: "Secure Experiences",
    description: "Adding the practical security foundations that keep user accounts, forms, and application data protected as a product grows.",
    items: [
      {
        title: "User Authentication",
        description: "(Login flows, protected routes, password handling, sessions, and clear feedback)"
      },
      {
        title: "Protected Workflows",
        description: "(Role-aware dashboards, ownership checks, validation, and safe form handling)"
      },
      {
        title: "Reliable APIs",
        description: "(Consistent responses, error states, input validation, and maintainable endpoints)"
      }
    ]
  },
  {
    id: "service-4",
    icon: "lucide:database",
    color: "#2FD9C4",
    title: "Data & Performance",
    description: "Connecting products to well-structured data and keeping everyday interactions quick, readable, and dependable.",
    items: [
      {
        title: "MongoDB & SQL",
        description: "(Practical schemas, CRUD workflows, relationships, and clean data access)"
      },
      {
        title: "Efficient Queries",
        description: "(Useful indexes, focused queries, loading states, and responsive interfaces)"
      },
      {
        title: "Media & Content",
        description: "(Image handling, content workflows, reusable data-driven UI)"
      }
    ]
  },
  {
    id: "service-5",
    icon: "lucide:layout-panel-left",
    color: "#FF9F0A",
    title: "Frontend & Delivery",
    description: "Shipping the interface and the infrastructure underneath it as one system: responsive, deployed, and reproducible.",
    items: [
      {
        title: "Frontend Systems",
        description: "(React.js, Tailwind CSS, reusable components, GSAP, and accessible interaction)"
      },
      {
        title: "Deployment",
        description: "(Vercel, environment configuration, production builds, and responsive QA)"
      },
      {
        title: "Team-Ready Code",
        description: "(Git, clear naming, reusable patterns, and a codebase that is easy to extend)"
      }
    ]
  }
];

export const aboutData = {
  subtitle: "Code with purpose, Built to last",
  title: "About",
  intro: "I care about the details that make a product feel considered: clear structure, useful interactions, and code that remains easy to change as the idea grows.",
  highlights: [
    "Building full-stack applications with the MERN stack",
    "Creating responsive interfaces that feel clear and intentional",
    "Connecting practical APIs, authentication, and database workflows",
    "Learning continuously through real products and challenging builds"
  ]
};

export const projectsData = [
  {
    id: 1,
    name: "WSP",
    tagline: "Global Engineering Corporate Site",
    description: "Corporate website for one of the world's largest engineering and professional services firms, with multilingual content, project showcases, insights, and careers across dozens of regions.",
    solved: "Built reusable, CMS-driven page components so regional teams could publish in multiple languages without developer help, and tuned page weight and caching to keep large, image-heavy pages fast worldwide.",
    href: "https://www.wsp.com/",
    image: "/work/wsp.jpg",
    frameworks: [
      { id: 1, name: "Sitecore" },
      { id: 2, name: ".NET" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Cloudflare" }
    ]
  },
  {
    id: 2,
    name: "Bupa",
    tagline: "International Healthcare Group",
    description: "Group corporate site for an international healthcare company, covering news, financial results, sustainability impact, and links to Bupa's services in each country.",
    solved: "Delivered accessible, responsive templates for news and investor content, added interactive carousels and video heroes, and kept the site WCAG-friendly with keyboard support and an accessibility toolbar.",
    href: "https://www.bupa.com/",
    image: "/work/bupa.jpg",
    frameworks: [
      { id: 1, name: "Sitecore" },
      { id: 2, name: "Vue.js" },
      { id: 3, name: "Swiper" },
      { id: 4, name: "Accessibility" }
    ]
  },
  {
    id: 3,
    name: "Canadian Top Travel",
    tagline: "Travel Booking Website",
    description: "Travel agency website for searching and booking flights and holiday deals, with destination pages and enquiry forms for customers across Canada.",
    solved: "Made the search and deals pages fully responsive on mobile, added fast image sliders for featured destinations, and simplified the enquiry flow so more visitors turn into booking requests.",
    href: "https://www.canadiantoptravel.com/",
    image: "/work/canadiantoptravel.jpg",
    frameworks: [
      { id: 1, name: "ASP.NET" },
      { id: 2, name: "Bootstrap" },
      { id: 3, name: "jQuery" },
      { id: 4, name: "Slick Slider" }
    ]
  },
  {
    id: 4,
    name: "Library Coffee",
    tagline: "Coffee Roaster E-Commerce Store",
    description: "Online store and café website for a Canadian specialty coffee roaster, selling beans and gear with café hours and the brand story alongside the shop.",
    solved: "Customised the Shopify theme for a clean product-first layout, set up multi-currency checkout and a free-shipping banner to lift order value, and optimised hero media so the store loads quickly on phones.",
    href: "https://librarycoffee.ca/",
    image: "/work/librarycoffee.jpg",
    frameworks: [
      { id: 1, name: "Shopify" },
      { id: 2, name: "Liquid" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "E-Commerce" }
    ]
  },
  {
    id: 5,
    name: "Canadian Family Clinic",
    tagline: "Primary Care Clinic Website",
    description: "Website for a North York, Toronto family clinic offering in-person and virtual primary care, with patient registration and appointment booking.",
    solved: "Built a clear three-step registration process and prominent booking buttons so new patients can sign up without calling, and set up on-page SEO so the clinic ranks for local family-doctor searches.",
    href: "https://canadianfamilyclinic.com/",
    image: "/work/canadianfamilyclinic.jpg",
    frameworks: [
      { id: 1, name: "WordPress" },
      { id: 2, name: "Elementor" },
      { id: 3, name: "Rank Math SEO" },
      { id: 4, name: "Responsive" }
    ]
  }
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tayyabimran" },
  { name: "GitHub", href: "https://github.com/tayabodla-786" },
  { name: "Resume", href: "/Resume/MyResume.txt" }
];

export const contactInfo = {
  subtitle: "Let's Connect",
  title: "Contact",
  text: "Got a question or project idea?\nI'd love to hear from you and discuss further!",
  email: "tayabodla786@gmail.com",
  phone: "+92 307 0436858"
};

export const marqueeWords1 = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
export const marqueeWords2 = ["Contact", "Contact", "Contact", "Contact", "Contact"];
