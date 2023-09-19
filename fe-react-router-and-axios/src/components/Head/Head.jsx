import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import Menu from "./Menu";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
`;
const HeadText = styled.strong`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  .logo {
    position: relative;
    left: -0.5rem;
    top: 0.05rem;
  }
  .text-link {
    text-decoration: none;
    color: white;
  }
`;
const Headbutton = styled.button`
  width: 3.5rem;
  height: 2.5rem;
  margin: 0;
  background-color: #343a40;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  color: lightgrey;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  &:focus{
    border: 1px solid white;
  }
`;
const Backtop = () => {
  window.scrollTo(0, 0);
};

const Head = () => {
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu((prev) => !prev);
  };
  return (
    <Router>
      <Headbox>
        <AnimatePresence>
          {showMenu && <Menu showMenu={showMenu} />}
        </AnimatePresence>
        <HeadALL>
          <HeadText>
            <Link className="text-link" onClick={Backtop}>
              <FiCamera className="logo" />
              Album
            </Link>
          </HeadText>
          <Headbutton onClick={toggleMenu}>
            <BsList size="2rem" />
          </Headbutton>
        </HeadALL>
      </Headbox>
    </Router>
  );
};

export default Head;
