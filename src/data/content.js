// ============================================================
// EMBRYOGEN — single source of truth for all site copy.
// Edit text here; components read from this file.
// ============================================================

export const site = {
  name: 'Embryogen',
  url: 'https://www.embryogen.in',
  // Change this one line to redirect every "Request a Demo" button.
  contactEmail: 'akr6447@gmail.com',
  demoSubject: 'Embryogen Demo Request',
};

export const demoMailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(site.demoSubject)}`;

export const meta = {
  home: {
    title: 'Embryogen — Explainable AI for Embryo Assessment',
    description:
      'Embryogen analyzes time-lapse embryo development, detects key developmental events, and gives embryologists viability insights they can see and verify.',
  },
  team: {
    title: 'Team — Embryogen',
    description: 'Meet the people building Embryogen, explainable AI for embryo assessment.',
  },
  achievements: {
    title: 'Achievements — Embryogen',
    description: 'Milestones and recognition earned by the Embryogen team.',
  },
  notFound: {
    title: 'Page Not Found — Embryogen',
    description: 'The page you are looking for does not exist.',
  },
};

export const hero = {
  title: 'EMBRYOGEN',
  subtitle: 'Explainable AI for Embryo Assessment',
  text: 'Embryogen analyzes time-lapse embryo development, detects key developmental events, and gives embryologists viability insights they can see and verify.',
  primaryCta: { label: 'Request a Demo', href: '/#cta' },
  secondaryCta: { label: 'See How It Works', href: '/#how-it-works' },
  quickLinks: [
    { label: 'Problem', href: '/#problem' },
    { label: 'Solution', href: '/#solutions' },
    { label: 'How It Works', href: '/#how-it-works' },
  ],
};

export const positioning = {
  badge: "WHAT WE'RE BUILDING",
  heading: 'Biology-aware AI for the IVF lab.',
  subtext: 'Built to support embryologists, not replace them.',
  pills: ['Time-lapse analysis', 'Explainable results', 'Built for embryologists'],
};

export const problem = {
  badge: 'THE PROBLEM',
  heading: 'Why Current Methods Fall Short',
  cards: [
    {
      icon: 'users',
      title: 'Subjective Grading',
      description:
        'Embryo selection still depends on individual experience, so two embryologists can grade the same embryo differently.',
    },
    {
      icon: 'alert',
      title: 'Costly Failed Cycles',
      description:
        'A misjudged selection can cost a patient an entire cycle, with real emotional and financial consequences.',
    },
    {
      icon: 'eye',
      title: 'Snapshots Miss the Story',
      description:
        'Static images capture one moment. The developmental timing that separates embryos is lost between frames.',
    },
  ],
};

export const limitations = {
  badge: 'EXISTING SOLUTIONS',
  heading: 'Limitations of Current Approaches',
  cards: [
    {
      icon: 'adjustments',
      title: 'Manual Grading',
      description:
        'High inter-observer variability and difficulty interpreting subtle developmental changes across embryo growth stages.',
    },
    {
      icon: 'cube',
      title: 'Static AI Models',
      description:
        'Use single-frame classification and may produce biologically implausible predictions without temporal context.',
    },
    {
      icon: 'desktop',
      title: 'Heavy Sequence Models',
      description:
        'Computationally expensive and sensitive to noisy or missing clinical data, limiting real-world deployment.',
    },
  ],
};

export const solution = {
  badge: 'OUR SOLUTION',
  heading: 'How Embryogen Works',
  cards: [
    {
      icon: 'layers',
      title: 'Automated Tracking',
      description:
        'Follows each embryo across the full time-lapse sequence, so development is assessed as a timeline, not a single snapshot.',
    },
    {
      icon: 'dna',
      title: 'Developmental Event Detection',
      description:
        'Identifies key events such as pronuclei appearance and cavity formation, reducing reliance on subjective visual grading.',
    },
    {
      icon: 'focus',
      title: 'Explainable Timelines',
      description:
        "Shows each embryo's developmental timeline alongside the frames and regions that influenced its assessment.",
    },
  ],
};

export const howItWorks = {
  badge: 'HOW IT WORKS',
  heading: 'Simple & Scalable',
  subtext: 'Three steps, from incubator export to a decision you can explain.',
  steps: [
    {
      num: '01',
      icon: 'upload',
      title: 'Upload Embryo Images',
      desc: 'Securely upload multi-focal embryo images from your time-lapse incubator or microscopy system.',
    },
    {
      num: '02',
      icon: 'search',
      title: 'AI Analyzes Patterns',
      desc: 'Our deep learning model processes temporal and spatial features across multiple focal planes.',
    },
    {
      num: '03',
      icon: 'check',
      title: 'Review Ranked Results',
      desc: 'Get viability rankings with the timeline and visual evidence behind each one.',
    },
  ],
};

export const explainability = {
  badge: 'EXPLAINABILITY',
  heading: 'See why, not just what.',
  paragraphs: [
    'Every assessment is paired with the evidence behind it: the developmental timeline Embryogen reconstructed, the frames where key events were detected, and the regions the model attended to.',
    'Embryologists can verify the reasoning against what they see down the scope, instead of accepting a score on trust.',
  ],
  bullets: [
    'Detected events mapped onto the time-lapse sequence',
    'Frame-level evidence for each developmental milestone',
    'Region highlights showing what influenced the assessment',
  ],
  // Only a REAL screenshot of our own model output belongs here.
  // TODO: export a real Embryogen model-output screenshot to
  // public/showcase/explainability.png (no stock or mocked-up images).
  // Until that file exists, the section does not render at all.
  image: '/showcase/explainability.png',
  imageAlt:
    'Embryogen model output showing an embryo developmental timeline with highlighted evidence frames',
};

export const whyEmbryogen = {
  badge: 'WHY EMBRYOGEN',
  heading: 'What Makes Embryogen Different',
  cards: [
    {
      icon: 'shield',
      title: 'Biology-First Approach',
      description:
        'Built around biological reasoning and observable developmental milestones, not black-box scores.',
    },
    {
      // TODO: confirm with the ML team that the model actually consumes multiple
      // focal planes before this claim goes in front of a clinic.
      icon: 'eye',
      title: 'Multi-Plane Depth Modeling',
      description:
        'Reads multiple focal planes, mirroring how an embryologist focuses up and down through the embryo.',
    },
    {
      icon: 'workflow',
      title: 'Built for the Lab Workflow',
      description:
        'Designed around how embryo review already happens in the lab, so it fits the day instead of interrupting it.',
    },
  ],
};

export const whoItsFor = {
  badge: "WHO IT'S FOR",
  heading: 'Built for the People in the Lab',
  cards: [
    {
      icon: 'building',
      title: 'IVF Clinics',
      description: 'Bring consistency to embryo assessment across every embryologist on your team.',
    },
    {
      icon: 'microscope',
      title: 'Embryologists',
      description: 'See the developmental evidence behind each ranking and keep the final call.',
    },
    {
      icon: 'network',
      title: 'IVF Chains & Hospital Networks',
      description: 'Apply one assessment standard across every centre in the network.',
    },
  ],
};

export const trustNote =
  'Embryogen is a decision-support tool. Final embryo selection always remains with the embryologist. Embryogen is under development and not yet approved as a medical device. Patient data is handled securely and never shared without consent.';

export const cta = {
  heading: 'Bring Embryogen to your lab',
  text: "We're partnering with IVF clinics for early pilots.",
  button: 'Request a Demo',
};

export const team = {
  badge: 'OUR TEAM',
  heading: 'The People Behind Embryogen',
  subtext: 'A small team of engineers and researchers building explainable AI for the IVF lab.',
  // TODO: replace every role: 'TODO' with the real role and fill in the LinkedIn URLs.
  // An empty linkedin string just hides that card's hover overlay, so blanks are safe
  // to leave in the meantime. Order here is the order shown on /team.
  members: [
    { name: 'Rishav Singh', role: 'TODO', photo: '/team/rishav.webp', linkedin: '' },
    { name: 'Ayush Kumar Singh', role: 'TODO', photo: '/team/ayush.webp', linkedin: '' },
    { name: 'Aryan Raj', role: 'TODO', photo: '/team/aryan.webp', linkedin: '' },
    { name: 'Amrit Arya', role: 'TODO', photo: '/team/amrit.webp', linkedin: '' },
  ],
  mentor: {
    name: 'Ayes Chinmay',
    // TODO: add Ayes Chinmay's real designation.
    designation: 'TODO',
    photo: '/team/ayes-chinmay.webp',
    linkedin: '',
  },
};

export const achievements = {
  badge: 'ACHIEVEMENTS',
  heading: 'Milestones & Recognition',
  subtext: 'What the team has built, shipped and been recognised for so far.',
  emptyMessage: 'More coming soon',
  // TODO: replace all three placeholder entries below with real achievements.
  // Nothing in this array is real — do not publish the page as-is.
  // Fields: { title, organization, date (ISO yyyy-mm-dd, used for sorting), description, image?, link? }
  items: [
    {
      title: 'TODO: achievement title',
      organization: 'TODO: organization',
      date: '2026-01-01',
      description: 'TODO: one or two lines describing what this achievement was.',
    },
    {
      title: 'TODO: achievement title',
      organization: 'TODO: organization',
      date: '2025-09-01',
      description: 'TODO: one or two lines describing what this achievement was.',
    },
    {
      title: 'TODO: achievement title',
      organization: 'TODO: organization',
      date: '2025-03-01',
      description: 'TODO: one or two lines describing what this achievement was.',
    },
  ],
};

export const nav = {
  links: [
    { label: 'Problem', to: '/#problem' },
    { label: 'Solution', to: '/#solutions' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'Team', to: '/team' },
    { label: 'Achievements', to: '/achievements' },
  ],
  cta: { label: 'Request a Demo', to: '/#cta' },
};

export const footer = {
  sections: [
    { label: 'Problem', to: '/#problem' },
    { label: 'Solution', to: '/#solutions' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'Team', to: '/team' },
    { label: 'Achievements', to: '/achievements' },
  ],
  copyright: '© 2026 Embryogen. All rights reserved.',
};

export const notFound = {
  badge: '404',
  heading: 'This page does not exist.',
  text: 'The link may be out of date, or the page may have moved.',
  button: 'Back to Home',
};
