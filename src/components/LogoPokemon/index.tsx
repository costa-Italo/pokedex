import Logo from "../PokeBall"
import SecondSection from "../SecondSection"
import { FirstSectionStyle, LogoContainer } from "./style"

const FirtSection = () => {
    return (
        <FirstSectionStyle>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <SecondSection />
            
        </FirstSectionStyle>
    )
}

export default FirtSection