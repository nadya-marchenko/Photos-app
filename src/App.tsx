import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import Profile from './pages/Profile';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <GlobalStyle />
    <Switch>
      <Route path="/profile/:album/photos" component={Photos} />
      <Route path="/profile/:user/albums" component={Albums} />
      <Route exact path="/profile/:user/user" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
