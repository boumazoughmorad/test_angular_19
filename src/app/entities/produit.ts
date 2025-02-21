export interface Produit {
    image: string; // URL or base64 string
    name: string;
    description: string;
    category: string; // Default: 'maintenance'
    status: boolean; // Default: true (Active)
    typeTva: number; // TVA percentage
    prix: number; // Price
  }