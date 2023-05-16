import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
  .text-link {
    color: #007bff;
    text-decoration: none;
    &:hover {
      filter: brightness(0.5);
      text-decoration: underline;
    }
  }
`;

const Backtop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Footer = (props) => {
  return (
    <Router>
      <Footerbox boxColor={props.boxColor}>
        <FooterText>
          Album example is © Bootstrap, but please dounload and customize it for
          yourself! New to Bootstrap?{" "}
          <Link className="text-link" to="https://getbootstrap.com/">
            Visit the homepage
          </Link>{" "}
          or read our{" "}
          <Link
            className="text-link"
            to="https://getbootstrap.com/docs/4.3/getting-started/introduction/"
          >
            getting started guide.
          </Link>
        </FooterText>
        <FooterText>
          <Link className="text-link" onClick={Backtop}>
            Back to top
          </Link>
        </FooterText>
      </Footerbox>
    </Router>
  );
};

export default Footer;
