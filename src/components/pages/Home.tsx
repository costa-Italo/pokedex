    // Importações
    import { useEffect, useState } from "react"
    import CardPokemon from "../../components/Card"
    import { CardsContainer } from "../../components/Card/styles"
    import Header from "../../components/Header"
    import Input from "../../components/Input"
    import { GlobalStyle } from "../../globals/Globals"

    const Home = () => {
        // Interface que define os dados de um pokemon
        interface PokemonData {
            name: string;
            sprites: {
            front_default: string;
            };
        }
        
        // Estado para armazenar a lista de pokemons obtida pela api
        const [pokemons, SetPokemons] = useState<PokemonData[]>([]);

        // Armazenando o valor atual do filtro, para pesquisar pro nome. Começando vazio.
        const [filterPokemon, setFilterPokemon] = useState("");
        
        // Função que atualiza o estado do filtro.
        const filteredPokemon = (nome: string) => {
            setFilterPokemon(nome)
        }
        

        // Função assíncrona para buscar dados de um api
        const getApiData = async () => {
            const endpoints: string[] = [];
        
            try {
                // Iterando os id's da api e chamando apenas 50 pokemons
            for (let i = 1; i <= 50; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            }

            // Utilizando o 'Promise.all' para enviar todas as solicitações. Essa solução teve que ser usada por uma peculiaridade da api.
            await Promise.all(endpoints.map((endpoint => fetch(endpoint))))
            .then ((res: Response[]) => Promise.all(res.map(async r => r.json())))
            .then ((res: PokemonData[]) => SetPokemons(res))
            } catch (error) {
            console.log(error)
            } 
        }
        
        // Hook para chamar a função fetchData, esta função chama o 'getApiData' bara buscar os dados da api.
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