
import { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import styled from 'styled-components';

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
  const [ content, setContent ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);


  const postsRequest = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url:'http://localhost:8000/posts'
      })
      const { data } = response.data;
      setContent( prev => [...data]);
      setLoading( prev => !prev );
    }
    catch(err) {
      setError( prev=> !prev );
      setLoading( prev=> !prev );
    }
  }

  useEffect(()=> {
    postsRequest();
  },[]);



  if(loading) return (<h1>...Loading content</h1>)
  if(error) return(<h1>Sometihng went wrong</h1>)

  return (
    <Wraper >
      <Container>
        <Menu data= { content } />
      </Container>
    </Wraper>
  );
}

export default Home;
