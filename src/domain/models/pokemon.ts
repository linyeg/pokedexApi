// Esta interfaz define el tipo de dato para un Pokémon
// La usamos para que TypeScript sepa que propiedades debe tener cada pokemo 
export interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: string[];
}
