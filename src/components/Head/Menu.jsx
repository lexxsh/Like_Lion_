
import styled from 'styled-components';

const MenuBox = styled.div`
    width: auto;
    height: 0;
    display: flex;
    justify-content: space-around;
    transition: height 0.5s ease;
    &.open {
    height: 11rem;
    transition: height 0.5s ease;
    }
`;
;
const About = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px -200px;
`;
const AboutTop = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`;
const AboutText = styled.p`
    font-size: 1rem;
    color:  #6c757d;
    max-width: 40rem;
    margin: -8px 0px;
    line-height: 25px;
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`
const ContactTop = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`;
const ContactText = styled.a`
    font-size: 1rem;
    line-height: 25px;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
        }
`;

const Menu = (showMenu) => {

    return (
            <MenuBox className={showMenu ? 'open' : ''}>
                <About>
                    <AboutTop>About</AboutTop>
                    <AboutText>Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</AboutText>
                </About>
                <Contact>
                    <ContactTop>Contact
                    </ContactTop>
                    <ContactText>Follow on Twitter</ContactText>
                        <ContactText>Like on Facebook</ContactText>
                        <ContactText>Email me</ContactText>
                </Contact>
            </MenuBox>
        
    );
};

export default Menu;