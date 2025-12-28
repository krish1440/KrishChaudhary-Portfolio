
export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  link?: string;
  github?: string;
  live?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  certificate?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  points?: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}
