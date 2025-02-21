export interface Produit {
    id: number,
    image: string; // URL or base64 string
    name: string;
    description: string;
    status: boolean; // Default: true (Active)
    typeTva: number; // TVA percentage
    prix: number; // Price
    id_category?:number;
  }