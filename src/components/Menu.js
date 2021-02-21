import styled from 'styled-components';


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
        <Li id={1} onClick={ handleClick }>What is Javascript and what is EcmaScript?</Li>
        <Li id={2} onClick={ handleClick }>Compare real DOM and Virtual DOM?</Li>
        <Li id={3} onClick={ handleClick }>What is Hoisting?</Li>
        <Li id={4} onClick={ handleClick }>What is Scope?</Li>
        <Li id={5} onClick={ handleClick }>What is Lexical Scope?</Li>
        <Li id={6} onClick={ handleClick }>What is Closure?</Li>
        <Li id={7} onClick={ handleClick }>What is the difference between == and ===?</Li>
        <Li id={8} onClick={ handleClick }>What are the phases in the lifecycle of a component?</Li>
      </Ul>
    </MainMenu>
  );
}

export default Menu;
