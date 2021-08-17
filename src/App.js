import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import { API_URL } from './global/app-config-constants';
import Albums from './pages/Albums';
import Photos from './pages/Photos';

const App = () => 
  <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/profile/:album/photos" render={({match}) => <Photos apiUrl={API_URL} match={match} />} />
        <Route path='/profile/:user/albums' render={({match}) => <Albums apiUrl={API_URL} match={match} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>;

export default App;
