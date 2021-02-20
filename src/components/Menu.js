import styled from 'styled-components';


const MainMenu = styled.div`
  display: flex;
  font-size: 1.5em;

  text-align: left;
  background-color: #706c61;
  color: #e1f4f3;
`;

function Menu() {
  return (
    <MainMenu>
      <h1>I'm the Menu </h1>
    </MainMenu>
  );
}

export default Menu;
