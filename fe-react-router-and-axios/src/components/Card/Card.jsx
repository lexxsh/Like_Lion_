import styled from "styled-components";
import Button from "../Button/Button";
const Cardbox = styled.div`
  background-color: #f8f9fa;
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;
const Cardbody = styled.div`
  height: 24rem;
  margin: 0.9rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 2px 0.5px #dadce0;
`;
const Cardimg = styled.div`
  width: 21.5rem;
  height: 14rem;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
  background: url(${(props) => props.imageurl});
  background-position: center;
  background-size: contain;
`;
const Cardtext = styled.div`
  width: 21.5rem;
  height: 9rem;
  background: white;
`;
const CardMaintext = styled.p`
  font-size: 1rem;
  position: relative;
  margin: 1rem;
  line-height: 1.5rem;
`;
const CardDown = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardTime = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 1rem;
  color: #6c757d;
`;
const Card = () => {
  return (
    <Cardbox>
      <Cardbody>
        <Cardimg imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlPjQApSQ9y4iOQoG05T66O9HgpeMO7s58g&usqp=CAU"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepVHb3ueTJHK3I49n5BK7mzMGvsuVgDeMTOec7WEo_ez-AX-1eboR7_NC97jLG4gHEJo&usqp=CAU"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVcC5hopsUPvkTOLuyw59YVKZsl3vGbQa4A&usqp=CAU"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkviezOZmDXiSToG24vY8nuIvsDe-4ShLytw&usqp=CAU"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJtwy66EnzHAHnrSHvNTx5ro-0z36L7_-7JRk_KLC5n6R-aDn0sVxkIgQ0oWk03AFzD4&usqp=CAU"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3u58gpWGC0R7nzg66Fu_SKd5nNNCu_iq4A&usqp=CAU"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://velog.velcdn.com/images/heelieben/post/3fc7f9ea-228e-4f3f-8335-903f6cde8ca9/image.png"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://cdn.imweb.me/upload/S20221018154123b27d57d/ec57e66d0f563.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://www.cuonet.com/data/file/job/thumb-1925922832_WlgGOts6_dac17e6b0bf647414bfd8736fe074d1e0c26e018_700x525.jpg"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
            <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
    </Cardbox>
  );
};

export default Card;
