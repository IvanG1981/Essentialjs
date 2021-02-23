import Home from './pages/Home';
import Compose from './pages/Compose';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <header>
        <NavBar/>
      </header>
      <Switch>
        <Route exact path ="/" component={ Home }/>
        <Route exact path ="/compose" component={ Compose } />
        <Redirect from='*' to='/'/>
      </Switch>
    </Router>
  );
}

export default App;
