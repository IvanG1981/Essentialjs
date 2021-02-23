
import { useState } from 'react';
import Menu from '../components/Menu';
import Content from '../components/Content';
import styled from 'styled-components';
import { data }  from '../data'


const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  text-align: center;

`;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 3em;
  background-color: #e1f4f3;

`;

function Home() {
  const [ content, setContent ] = useState([])

  function handleClick(e){
    const chosenQuestion = data.filter(ele => ele.id === parseInt(e.target.id))
    setContent(...chosenQuestion);
  }
  return (
    <Wraper >
      <Container>
        <Menu handleClick= { handleClick }/>
        <Content content={ content }/>
      </Container>
    </Wraper>
  );
}

export default Home;
