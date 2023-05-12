import styled from "styled-components";
import App from "../../App"
const Mainbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;
const Maintoptext = styled.h1`
  margin: 0rem 0rem -1rem;
  font-size: 2.5rem;
  font-weight: 300;
  color: #212529;
`;

const Mainbottomtext = styled.p`
  max-width: 38rem;
  font-size: 1.25rem;
  font-weight: 100;
  color: #67757D;
  line-height: 1.9rem;
`;
const Button = styled.div`
  display: flex;
  
`;
const Mainbutton1 = styled.button`
  background-color: #007bff;
  margin: 0.25rem 0.15rem ;
  padding: 0.5rem 0.75rem;
  color: white;
  border-radius: 0.25rem;
  border: 1px;
  font-size: 1rem;
  text-align: center;
  &:hover{
        transition: 0.1s ease-in;
        filter: brightness(0.7);
        cursor: pointer;
    }
    &:not(:hover) {
        transition: 0.1s ease-out;
    }
    &:focus{
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
`;
const Mainbutton2 = styled.button`
  background-color: #6c757d;
  margin: 0.25rem 0.15rem ;
  padding: 0.5rem 0.75rem;
  color: white;
  border-radius: 0.25rem;
  border: 1px;
  font-size: 1rem;
  text-align: center;
  &:hover{
        transition: 0.1s ease-in;
        filter: brightness(0.7);
        cursor: pointer;
    }
    &:not(:hover) {
        transition: 0.1s ease-out;
    }
    &:focus{
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
`;
const Main = () => {
  return (
    <div>
      <Mainbox>
        <Maintoptext>Album example</Maintoptext>
        <Mainbottomtext>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short
          so folks don’t simply skip over it entirely.
        </Mainbottomtext>
        <Button>
          <Mainbutton1 onClick={App}>Main call to action</Mainbutton1>
          <Mainbutton2 onClick={App}>Secondary action</Mainbutton2>
        </Button>
      </Mainbox>
    </div>
  );
};

export default Main;
