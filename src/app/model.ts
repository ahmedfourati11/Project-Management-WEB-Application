export interface Activite {
    nom: string;
    dateDebut: Date;
    dateFin: Date;
    budget: number;
    lieu: string;
    // Ajoutez d'autres propriétés d'activité au besoin
  }
  
  export interface Projet {
    id: number;
    nom: string;
    coordinateur: string;
    dateDebut: Date;
    dateFin: Date;
    budget: number;
    rapport: string;
    activites: Activite[];
  }
  