import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { IconsStyles, SubHeadlineStyles, TitleStyles } from "./styles";

const Headline = () => {
    return (
        <div>
            <TitleStyles>Pokédex</TitleStyles>
            <SubHeadlineStyles>Descubra e explore o mundo dos Pokémon como nunca antes com a Pokédex: a sua companheira essencial para mergulhar na vastidão dos Pokémons. Pesquise, aprenda e mergulhe na riqueza da história e das características de cada criatura, enquanto viaja pelos diferentes universos. Desde os clássicos aos mais recentes, a Pokédex oferece uma experiência imersiva e informativa, permitindo que você se torne um verdadeiro mestre!</SubHeadlineStyles>
            
            <IconsStyles>
                <a 
                    href="https://github.com/costa-Italo/pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                >    
                        <GithubLogo 
                            size={25}
                            fill="black"
                        />
                        </a>

                    <a 
                        href="https://www.linkedin.com/in/italo-costa-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >        
                        <LinkedinLogo 
                            size={25}
                            fill="black"
                        />   
                    </a>   
            </IconsStyles>
        </div>
    )
}

export default Headline;