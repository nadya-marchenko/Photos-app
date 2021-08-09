import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grid from './components/Grid';

const  App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Grid col='2'>
        <h4>Article 1</h4>
        <h4>Article 2</h4>
        <h4>Article 3</h4>
        <h4>Article 4</h4>
        <h4>Article 5</h4>
      </Grid>
      <Switch>
        {/* <Route path="/" component={Loader}/> */}
        <Route path="/profile/1/photos" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
