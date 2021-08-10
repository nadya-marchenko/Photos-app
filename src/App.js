import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Button from './components/Button';

const  App = () => 
    <BrowserRouter>
      <NavBar />
      <Grid col='2'>
        <Button color='default'>Search</Button>
        <Button color='primary'>See more</Button>
      </Grid>
      <Switch>
        {/* <Route path="/" component={Loader}/> */}
        <Route path="/profile/1/photos" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>;

export default App;
