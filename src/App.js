import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import { API_URL } from './global/app-config-constants';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import Profile from './pages/Profile';

const App = () => 
  <BrowserRouter>
      <NavBar />
      <GlobalStyle />
      <Switch>
        <Route path="/profile/:album/photos" render={({match}) => <Photos apiUrl={API_URL} match={match} />} />
        <Route path='/profile/:user/albums' render={({match}) => <Albums apiUrl={API_URL} match={match} />} />
        <Route exact path='/profile/:user' component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>;

export default App;
