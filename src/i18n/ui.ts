export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang: keyof typeof languages = "de";

export const ui: Record<keyof typeof languages, { [key: string]: string }> = {
  de: {
    "hero.headline": "Immobilienanalyse mit künstlicher Intelligenz",
    "hero.body":
      "Funktionsübergreifende Lösungen für Asset Management, ESG & Nachhaltigkeit, Projektmanagement & Entwicklung",
    "hero.img":
      "End-to-End-Lösungen für jede Phase des Lebenszyklus einer Immobilie",
    "hero.book_demo": "Demo buchen",
    "feat.headline": "Einfach einzurichtende KI-Lösungen",
    "feat.head_one": "Renovierung",
    "feat.body_one":
      "Reno Solutions optimiert Renovierungsprojekte durch effiziente Planung, Ausführung und Abrechnung. Minimieren Sie Leerstände und steigern Sie die Portfolio-Performance mit 360°-Rundgängen und digitaler Dokumentation.",
    "feat.head_two": "Capex",
    "feat.body_two":
      "CapEx Solutions ermöglicht Vermögensverwaltern und -entwicklern eine präzise fünfjährige Investitionsplanung und -verwaltung. Optimieren Sie Investitionen mit automatisierten Workflows und Finanzkontrolle in Echtzeit von Anfang bis Ende.",
    "feat.head_three": "Dokumente",
    "feat.body_three":
      "Unsere Content-Collaboration-Plattform fördert die Teamarbeit mit sicherem, zentralem Zugriff auf Dateien, Zusammenarbeit in Echtzeit und effizienter Organisation. Dies gewährleistet nahtlose Arbeitsabläufe und maximale Produktivität für alle Teams und Partner.",
    "feat.head_four": "Künstliche Intelligenz",
    "feat.body_four":
      "Fragen Sie Ihre Daten für aussagekräftige Geschäftsentscheidungen ab. Greifen Sie auf die besten KI-Modelle zu: Mistral, Llama, ChatGPT, Gemini und feinabgestimmte Versionen von LocalMind. Alle Lösungen sind DSGVO-konform und in unserem deutschen Rechenzentrum oder on-premise verfügbar.",
    "advantage.headline": "Die Vorteile im Überblick",
    "advantage.head_one": "Partnerschaftliche Zusammenarbeit",
    "advantage.body_one":
      "Arbeiten Sie mit uns zusammen, um Ihren Erfolg zu beschleunigen. Unser kooperativer Ansatz schöpft Ihr volles Potential aus.",
    "advantage.head_two": "KI-Expertise",
    "advantage.body_two":
      "Unsere KI-gestützte Plattform ermöglicht es Ihnen, mit verwertbaren Erkenntnissen, automatisierten Aufgaben und einem Wettbewerbsvorteil intelligentere Entscheidungen zu treffen.",
  },
  en: {
    "hero.headline": "Real Estate Analysis powered by AI",
    "hero.body":
      "Cross-functional solutions for Asset Management, ESG & Sustainability, Project Management & Development",
    "hero.img":
      "End-to-end real estate solutions for every stage of the property lifecycle",
    "hero.book_demo": "Book a demo",
    "feat.headline": "Easy-to-deploy AI Solutions",
    "feat.head_one": "Renovation",
    "feat.body_one":
      "Reno Solutions streamlines renovation projects with efficient planning, execution, and billing. Minimize vacancies and boost portfolio performance with 360° tours and digital documentation.",
    "feat.head_two": "Capex",
    "feat.body_two":
      "CapEx Solutions empowers asset managers and developers with precise five-year Capex planning and management. Optimize investments with automated workflows and real-time financial control from start to finish.",
    "feat.head_three": "Documents",
    "feat.body_three":
      "Our Content-Collaboration Platform boosts teamwork with secure, centralized access to files, real-time collaboration, and efficient organization. This ensures seamless workflows and maximum productivity for all teams and partners.",
    "feat.head_four": "Artificial Intelligence",
    "feat.body_four":
      "Query your data for insightful business decisions. Access top AI models: Mistral, Llama, ChatGPT, Gemini and fine-tuned versions of LocalMind. All solutions are GDPR-compliant and available in our German data center or on-premise.",
    "advantage.headline": "Advantages at a glance",
    "advantage.head_one": "Collaborative Partnership",
    "advantage.body_one":
      "Partner with us for accelerated success. Our collaborative approach unlocks your full potential.",
    "advantage.head_two": "AI Expertise",
    "advantage.body_two":
      "Our AI-powered platform empowers you to make smarter decisions with actionable insights, automated tasks, and a competitive edge.",
  },
} as const;
