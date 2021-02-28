import styled from 'styled-components';
import { useState } from 'react';
import Content from './Content';
import axios from 'axios';



const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2.5rem;
  width: 100% ;
  background-color: #706c61;
  color: #e1f4f3;
`;
const Questions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Answers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`;
const Ul = styled.ul`
  text-align: left;
`;
const Li = styled.li`
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #a4ebf3;
  }
`;

function Menu({ data }) {
  const [ chosen, setChosen ] = useState(null);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const handleChosen = async (e) => {
    const postId = e.target.id;
    setLoading( prev => !prev );
    try {
      const response = await axios({
        method: 'GET',
        url:`http://localhost:8000/posts/${postId}`
      })
      const { data } = response.data;
      setChosen( data );
      setLoading( prev => !prev );
    }
    catch(err) {
      setError( prev => !prev );
      setLoading( prev => !prev );
    }
  }
  if(error) return(<h1>Something went wrong</h1>)
  if(loading) {
    return (<h1>...loading chosen data</h1>)
  }
  else {
    return (
      <MainMenu>
        <Questions>
          <h1>Questions</h1>
          <Ul>
            {
              !!data && data.length >0 && data.map(el => {
                return(
                  <Li
                    key={ el._id }
                    id={ el._id }
                    onClick={ handleChosen }
                  >
                    { el.question }
                  </Li>
                )
              })
            }
          </Ul>
        </Questions>
        {
          !chosen ?
            <Answers>
              <h1>Pick a question</h1>
            </Answers>
            :
            <Answers>
              <Content chosenContent={ chosen } />
            </Answers>
        }
      </MainMenu>
    );
  }
}

export default Menu;
