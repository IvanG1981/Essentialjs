import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';


const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  font-size: 2rem;
  text-align: center;
  background-color: #706c61;
  font-weight: bold;
  color: #dddddd;
  padding-left: 5rem;
  padding-right: 5rem;
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`;
const StyledLink = styled(Link)`
  padding-left: 1rem;
  color: #e1f4f3;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
`;
function NavBar() {
  return (
    <NavigationBar>
      <p>Essential Web Development </p>
      <NavLinks>
        <p><StyledLink to='/'>Home</StyledLink ></p>
        <p><StyledLink to='/compose'>Compose</StyledLink></p>
      </NavLinks>
    </NavigationBar>
  );
}

export default NavBar;
