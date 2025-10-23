// Importamos el hook personalizado que trae los datos de los Pokémon
import { usePokemon } from '../../applications/useCases/usePokemon';
import PokemonCard from '../components/PokemonCard';
import '../styles/home.css';
import '../styles/pokemonGrid.css';
const Home = () => {
  // Usamos el hook para obtener la lista de Pokémon, y también el estado de carga y errores
  const { pokemons, loading, error } = usePokemon();
// Si todavía está cargando, mostramos un mensaje
  if (loading) return <p className="loading">Cargando...</p>;
  // Si hubo un error al traer los datos
  if (error) return <p className="error">{error}</p>;
// Si todo salió bien, mostramos el título y la cuadrícula de tarjetas
  return (
    <div className="home-container">
      {/* Título principal de la página */}
  <h1 className="home-title">Pokédex React</h1>
  {/* Contenedor de las tarjetas en forma de cuadrícula */}
  <div className="pokemon-grid">
    {pokemons.map(p => (
      // Mostramos cada Pokémon con su información
      <PokemonCard
        key={p.name}
        name={p.name}
        image={p.image}
        types={p.types}
        id={p.id}
      />
    ))}
  </div>
</div>

  );
};

export default Home;
