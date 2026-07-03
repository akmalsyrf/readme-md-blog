import { socialLinks } from './social';

export const person = {
  name: 'Akmal Syarifuddin',
  alternateName: 'Akmal',
  jobTitle: 'Software Engineer',
  location: 'Jakarta, Indonesia',
  portfolioUrl: 'https://akmalsyrf.is-a.dev',
  image: '/og-image.jpg',
  knowsAbout: [
    'Software Development',
    'Backend Engineering',
    'Go',
    'Distributed Systems',
    'Artificial Intelligence',
    'Machine Learning',
  ],
  sameAs: socialLinks.map((link) => link.url),
} as const;
