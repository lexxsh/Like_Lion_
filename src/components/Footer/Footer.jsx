import styled from "styled-components";
const Footerbox = styled.footer`
    background-color: ${(props) => (props.boxColor ? props.boxColor : "white")};
    color: #6c757d;
    align-items: center;
    display: flex;
    width: auto;
    height: 10rem;
    justify-content: space-around;
`;

const FooterText = styled.p`
    font-size: 1rem;
    max-width: 38rem;
    line-height: 1.8rem;
    `;

const Footer = (props) => {
    return(
        
        <Footerbox boxColor = {props.boxColor}>
            <FooterText>"Album example is © Bootstrap, but please dounload and customize it for yourself!
             New to Bootstrp? Visit the homepage or read our getting started guide."</FooterText>
             <FooterText>Back to top"</FooterText>
        </Footerbox>
        
    );
};

export default Footer;