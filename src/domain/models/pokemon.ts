// Esta interfaz define el tipo de dato para un Pokémon
// La usamos para que TypeScript sepa qué propiedades debe tener cada Pokémon
export interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: string[];
}
