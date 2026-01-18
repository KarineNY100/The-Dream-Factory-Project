
export interface Theme {
  id: string;
  name: string;
  description: string;
  image: string;
  video?: string; // New optional field for video URLs
  tags: string[];
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}
