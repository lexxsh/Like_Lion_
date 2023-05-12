
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import {BsList} from "react-icons/bs";
import Menu from "./Menu";
import { useState} from "react";

const Headbox = styled.div`
    background-color: ${(props) => (props.boxColor ? props.boxColor : "#343A40")};
    width: auto;
    color: white;
    margin: 0;
    padding: 9px 200px;
`;
const HeadALL = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
const HeadText = styled.strong`
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    .logo{
        position: relative;
        left: -0.5rem;
        top:0.05rem;
    }
    `;
const Headbutton = styled.button`
    width: 3.5rem;
    height: 2.5rem;
    margin: 0;
    background-color: #343A40;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    color: lightgrey;
    justify-content: center;
    &:hover{
        cursor: pointer;
    }
    `;
    

    const Head=()=>{
        const [showMenu, setshowMenu] = useState(false);
        const toggleMenu= ()=>{
            setshowMenu((prev)=>!prev);
        };
    return(

        <Headbox>
            {showMenu &&(<Menu showMenu={showMenu}/>)}
            <HeadALL>
            <HeadText><FiCamera className="logo"/>Album</HeadText>
            <Headbutton onClick={toggleMenu}><BsList size="2rem"/></Headbutton>
            
            </HeadALL>
        </Headbox>
        
    );
};

export default Head;