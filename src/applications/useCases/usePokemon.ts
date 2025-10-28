// Importamos los hooks de React para manejar estado y efectos secundarios
// Importamos la función que obtiene los datos de los Pokemon desde la API
// Importamos el tipo de dato que representa un Pokemon
import { useEffect, useState } from 'react';
import { getPokemons } from '../../infrastructure/repositories/pokeRepository';
import { Pokemon } from '../../domain/models/pokemon';

// Creamos un hook personalizado que se encarga de traer la lista
export const usePokemon = () => {
  // Estado para guardar la lista
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Estado para saber si los datos están cargando
  const [loading, setLoading] = useState(true);

  // Estado para guardar un posible error si la petición falla
  const [error, setError] = useState<string | null>(null);

  // Usamos useEffect para ejecutar la petición cuando el componente se monta
  useEffect(() => {
    // Función asincronica que trae los datos
    const getData = async () => {
      try {
        // Llamamos a la función que obtiene los Pokemon
        const data = await getPokemons();

        // Guardamos los datos en el estado
        setPokemons(data);
      } catch (err) {
        // Si algo falla, mensaje de error
        setError('Error al obtener los pokemones');
      } finally {
        // Cuando termina (exito o error), cambiamos el estado de carga
        setLoading(false);
      }
    };

    // Ejecutamos la función al montar el componente
    getData();
  }, []);

  // Retornamos los datos y los estados para que se usen en el componente
  return { pokemons, loading, error };
};
