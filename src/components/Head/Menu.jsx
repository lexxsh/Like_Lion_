import React from 'react';
import { styled } from 'styled-components';
const MenuBox = styled.div`
    overflow: hidden;
    transition: 0.25s ease-in-out;
    display: flex;
    justify-content: space-between;
`;
const About = styled.div`
    display: flex;
    flex-direction: column;
`;
const AboutTop = styled.h1`
    font-size: 1.5rem;
`;
const AboutText = styled.p`
    font-size: 1rem;
`;
const Menu = () => {
    return (
        <div>
            <MenuBox>
                <About>
                    <AboutTop>wdqwd</AboutTop>
                    <AboutText>wdwdwd</AboutText>
                    </About>

            </MenuBox>
        </div>
    );
};

export default Menu;