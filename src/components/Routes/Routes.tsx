import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../../App.styled';
import Albums from '../../pages/Albums/Albums';
import Photos from '../../pages/Photos/Photos';
import Profile from '../../pages/Profile/Profile';
import NavBar from '../NavBar/NavBar';
import NotFound from '../NotFound/NotFound';

const Routes = () => (
  <>
    <NavBar />
    <GlobalStyle />
    <Switch>
      <Route path="/profile/:album/photos" component={Photos} />
      <Route path="/profile/:user/albums" component={Albums} />
      <Route exact path="/profile/:user/user" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Routes;
