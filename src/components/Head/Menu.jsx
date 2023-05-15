
import styled from 'styled-components';
import {motion} from "framer-motion";

const MenuBox = styled(motion.div)`
    width: 100%;
    height: 0px;
    display: flex;
    justify-content: space-around;
`;
;
const About = styled(motion.div)`
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
const Contact = styled(motion.div)`
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

const animationHeader = {
    open: {height: 0,
        transition: {
            duration: 1,
            type: 'spring',
    }},
    
    closed: {height: 170, 
        transition: {
            duration: 1,
            type: 'spring',
    }}

};
const textHeader = {
    open: {overflow:"hidden"},
    
    closed: {overflow:"hidden"}

};

const Menu = ({showMenu}) => {
    return (
            <MenuBox className={showMenu}
                initial='start' 
                animate={showMenu === 'open' ? 'open' : 'closed'} 
                exit='open'
                variants={animationHeader}
                >
                <About className={showMenu}
                initial='start' 
                animate={showMenu === 'open' ? 'open' : 'closed'} 
                exit='open'
                variants={textHeader}>
                    <AboutTop>About</AboutTop>
                    <AboutText>Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</AboutText>
                </About>
                <Contact className={showMenu}
                initial='start' 
                animate={showMenu === 'open' ? 'open' : 'closed'} 
                exit='open'
                variants={textHeader}>
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