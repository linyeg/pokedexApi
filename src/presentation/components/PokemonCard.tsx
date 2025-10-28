import { Pokemon } from "../../domain/models/pokemon";

// Definimos las propiedades que recibe el componente

interface Props extends Pokemon {}
// Componente que muestra la tarjeta de cada uno
const PokemonCard = ({ name, image, types, id }: Props) => (
  <div className="pokemon-card">
    {/* Imagen del Pokemon */}
    <img src={image} alt={name} />
    {/* Nombre del Pokemon, ID, tipos*/}
    <h2>{name}</h2>
    <p>ID: {id}</p>
    <p>Tipo: {types.join(', ')}</p>
  </div>
);


export default PokemonCard;
