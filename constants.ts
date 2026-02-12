
import { Program, Benefit, PartnershipFeature } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Master the MERN stack and build scalable full-stack applications with modern architecture.',
    duration: '12 Weeks',
    icon: 'code',
    color: 'blue',
    link: '#'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analyze complex datasets and derive actionable insights using Python, SQL, and Tableau.',
    duration: '14 Weeks',
    icon: 'database',
    color: 'purple',
    link: '#'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems using deep learning, neural networks, and computer vision techniques.',
    duration: '16 Weeks',
    icon: 'psychology',
    color: 'green',
    link: '#'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Design and deploy highly available, fault-tolerant systems on AWS and Azure platforms.',
    duration: '10 Weeks',
    icon: 'cloud',
    color: 'orange',
    link: '#'
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    description: 'Protect digital infrastructures by mastering ethical hacking and threat mitigation strategies.',
    duration: '12 Weeks',
    icon: 'security',
    color: 'red',
    link: '#'
  }
];

export const PARTNERSHIP_FEATURES: PartnershipFeature[] = [
  {
    title: 'Industry Mentors',
    description: 'Learn directly from experts working at FAANG and top product-based companies.',
    icon: 'person_outline'
  },
  {
    title: 'Real-world Projects',
    description: 'Go beyond theory with hands-on projects that mirror industry challenges and build your portfolio.',
    icon: 'terminal'
  },
  {
    title: 'GUVI x KEC Certification',
    description: 'Earn a co-branded certificate recognized by top recruiters across the global tech landscape.',
    icon: 'verified_user'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Internships',
    description: 'Direct referral to partner companies for 3-6 month internships.',
    icon: 'work'
  },
  {
    title: 'Hackathons',
    description: 'Exclusive access to KEC-GUVI quarterly coding challenges.',
    icon: 'emoji_events'
  },
  {
    title: 'Community',
    description: 'Join a private discord community of high-achieving peers.',
    icon: 'forum'
  },
  {
    title: 'Portfolio Review',
    description: 'One-on-one sessions to polish your GitHub and LinkedIn.',
    icon: 'history_edu'
  }
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY2e0AYIQaQm28LKOBSbetHRNYD0kwJYNs7rYYBNvfnFm006lp3zdPMjDaNF1PFna3fkPCKUcYprsW3CSQ76Alr7wxMS7vEkSHoe6M6AKtN06IslFtfEnblN0umkGCBzQgj5d-_0b0PxQyQ6BF1D1sY1akVIfuq4-zaI-hBuvqBJBezJec7QWBJQD_1fzo38j-Owure4DwhR1n34bUWkKQxGbAu3AuapmfBaNckcE5TsvuhOVX63bxpBUFC9sBUnosbmguIsOcm00B',
  partnership1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv_VGErxSjymtssEUTHpc7bpaYqh5ii_4Kl4VfjX6wV55hzLb_F6yPM3jKqyKuTENQoPOKApI4FdWf1MQb8Crcnh-_8VV-UoUyYtg0IYoNhZtPS6akG2H15kJUn2yQDy9Rdytc085IILdTl3JGvSE2E8ldB4VFRfH4xSsBLEHkR6iXWpwld2KAs9zIJKWEB42y_8ldgFZOOXLWg_LGm0EoIsTGTXaqcNzwQrOZHRcDpcG0VLPYrXr5PSxjv7xdpyyXHNZQvNbJu0FT',
  partnership2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR53daxi4q5Qnlp-Rm0dDDcmSKuARLgSYjLGzfndFhd_Re1q9KuZ6dBoBG9vqNBmSKpoBdjulcnyAbeuCw__4FzJBlDimqnpg3uKMJ6D8P5OBxUrItwURStHLin6YJpSwjvpHNvMJwjAfa2UE9l72WeQ5TIffDPqFsh0XdsuF_MAz7JmUmh1obUYiftdUnxwVx2kAu2L9fOjzaeIfyYRzy3PiaAefJCH8170vTNfAy7dXI0E_lu4P4-4BCNkK2040mAxswyXETZLuw'
};
