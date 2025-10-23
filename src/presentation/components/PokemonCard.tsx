// Definimos las propiedades que recibe el componente
interface Props {
  name: string;
  image: string;
  types: string[];
  id: number;
}
// Componente que muestra la tarjeta de cada Pokémon
const PokemonCard = ({ name, image, types, id }: Props) => (
  <div className="pokemon-card">
    {/* Imagen del Pokémon */}
    <img src={image} alt={name} />
    {/* Nombre del Pokémon e ID, tipos de pokemon*/}
    <h2>{name}</h2>
    <p>ID: {id}</p>
    <p>Tipo: {types.join(', ')}</p>
  </div>
);


export default PokemonCard;
