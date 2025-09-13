export interface Product {
  title: string;
  description: string;
  applications: string[];
  features: string[];
  image: string;
  certifications: string[];
  datasheets?: string[]; // Array of datasheet file paths
}
