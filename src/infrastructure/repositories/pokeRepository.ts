
import { pokeApi } from '../../api/pokeApi';
import { Pokemon } from '../../domain/models/pokemon';

// Esta interfaz representa la estructura básica que devuelve la API en la primera llamada
// Solo incluye el nombre y la URL para obtener más detalles de cada Pokémon
interface RawPokemon {
  name: string;
  url: string;
}

// Esta función obtiene una lista de Pokémon con sus datos completos
export const getPokemons = async (): Promise<Pokemon[]> => {
  // Hacemos una petición a la PokéAPI para obtener los primeros 20 Pokémon
  const response = await pokeApi.get('/pokemon?limit=20');

  // Guardamos la lista
  const rawList: RawPokemon[] = response.data.results;

  // varias peticiones al mismo tiempo
  const detailedList = await Promise.all(
    rawList.map(async (p) => {
      // Hacemos una petición a la URL de cada Pokémon para obtener sus datos completos
      const res = await pokeApi.get(p.url);

      // Retornamos solo los datos que necesitamos para mostrar en la app
      return {
        name: p.name,
        id: res.data.id,
        image: res.data.sprites.front_default,
        types: res.data.types.map((t: any) => t.type.name),
      };
    })
  );

  // Retornamos la lista completa 
  return detailedList;
};
