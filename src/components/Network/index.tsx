import { GithubLogo, LinkedinLogo} from "@phosphor-icons/react"
import { NetworkContainer, NetworkStyles } from "./styles"

const Network = () => {
    return(
        <NetworkContainer>
            <NetworkStyles>
                <a
                    href="https://www.linkedin.com/in/italo-costa-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinLogo fill="white" size={25}/>              
                </a>

                <p>italosiqueiradacosta@gmail.com</p>
                
                <a 
                    href="https://www.linkedin.com/in/italo-costa-dev/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <GithubLogo 
                            fill="white" 
                            size={25}
                        />
                </a>
                
                
            </NetworkStyles>
        </NetworkContainer>
    )
}

export default Network