// Importamos los hooks de React para manejar estado y efectos secundarios
import { useEffect, useState } from 'react';

// Importamos la función que obtiene los datos de los Pokémon desde la API
import { getPokemons } from '../../infrastructure/repositories/pokeRepository';

// Importamos el tipo de dato que representa un Pokémon
import { Pokemon } from '../../domain/models/pokemon';

// Creamos un hook personalizado que se encarga de traer la lista de Pokémon
export const usePokemon = () => {
  // Estado para guardar la lista de Pokémon
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Estado para saber si los datos están cargando
  const [loading, setLoading] = useState(true);

  // Estado para guardar un posible error si la petición falla
  const [error, setError] = useState<string | null>(null);

  // Usamos useEffect para ejecutar la petición cuando el componente se monta
  useEffect(() => {
    // Función asincrónica que trae los datos
    const fetchData = async () => {
      try {
        // Llamamos a la función que obtiene los Pokémon
        const data = await getPokemons();

        // Guardamos los datos en el estado
        setPokemons(data);
      } catch (err) {
        // Si algo falla, guardamos un mensaje de error
        setError('Error fetching Pokémon data');
      } finally {
        // Cuando termina (con éxito o error), cambiamos el estado de carga
        setLoading(false);
      }
    };

    // Ejecutamos la función al montar el componente
    fetchData();
  }, []);

  // Retornamos los datos y los estados para que se usen en el componente
  return { pokemons, loading, error };
};
