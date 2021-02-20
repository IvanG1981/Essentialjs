import styled from 'styled-components';

const NavigationBar = styled.div`
  font-size: 1.5em;
  text-align: center;
  background-color: #706c61;
  color: #e1f4f3;

`;

function NavBar() {
  return (
    <NavigationBar>
      <h1>Navbar overhere</h1>
    </NavigationBar>
  );
}

export default NavBar;
