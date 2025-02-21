import { Category } from "../entities/category";
import { Produit } from "../entities/produit";
import { getItem, setItem } from "./localStorage";

export const loadProduits=(): Produit[]  =>{
    const produits = getItem('produits') || [];;
    return produits as Produit[];
    }

    export const loadCategories = (): Category[] => {
        let categories = getItem('categories') || [] ;
      
       
        
        
        if (Array.isArray(categories) && categories.length === 0) {
          
          categories = [
            { id: 1, name: "maintenance", description: "" },
            { id: 2, name: "category2", description: "" },
            { id: 3, name: "category3", description: "" }
          ];
          setItem('categories', categories);
        }
      
        return categories as Category[]; 
      };