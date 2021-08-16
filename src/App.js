import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Photos from './pages/Photos';

const API_URL = `https://jsonplaceholder.typicode.com`;

const App = () => 
  <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/profile/:album/photos" render={({match}) => <Photos apiUrl={API_URL} match={match} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>;

export default App;
