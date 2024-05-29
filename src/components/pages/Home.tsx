    import { useEffect, useState } from "react"
    import CardPokemon from "../../components/Card"
    import { CardsContainer } from "../../components/Card/styles"
    import Header from "../../components/Header"
    import Input from "../../components/Input"
    import { GlobalStyle } from "../../globals/Globals"

    const Home = () => {
        interface PokemonData {
            name: string;
            sprites: {
            front_default: string;
            };
        }
        
        const [pokemons, setPokemons] = useState<PokemonData[]>([]);

        const [filterPokemon, setFilterPokemon] = useState("");
        
        const filteredPokemon = (nome: string) => {
            setFilterPokemon(nome)
        }
        
        const getApiData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
                const data = await response.json();
    
                const pokemonDetails = await Promise.all(data.results.map((pokemon: { url: string }) => fetch(pokemon.url).then(res => res.json())));
    
                setPokemons(pokemonDetails);
            } catch (error) {
                console.log(error);
            }
        };
        
        useEffect(() => {
            const fetchData = async () => {
                await getApiData();
            };
        
            fetchData();
        }, []);
    
        
        return (
        
            <div>
                <GlobalStyle/> 
                <Header />
                <Input filteredPokemon={filteredPokemon}/>  
                <CardsContainer> 
                {pokemons.filter((pokemon) => pokemon.name.includes(filterPokemon)).map((pokemon, index) =>(
                    <CardPokemon 
                    pokemon={pokemon}
                    key={index}
                    />
                ))}      
                </CardsContainer> 
            </div>
        )
    }
    export default Home;