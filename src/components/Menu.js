import styled from 'styled-components';
import { data }  from '../data'


const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  width: 30rem;
  background-color: #706c61;
  color: #e1f4f3;
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

function Menu({ handleClick }) {

  return (
    <MainMenu>
      <h1>Questions</h1>
      <Ul>
        {
          !!data && data.length >0 && data.map(el => {
            return(
              <Li
                id={el.id}
                onClick={ handleClick }
              >
                { el.question }
              </Li>
            )
          })
        }
      </Ul>
    </MainMenu>
  );
}

export default Menu;
