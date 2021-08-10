import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Card from './components/Card';
import testImg from './assets/images/test-img.png';

const  App = () => 
    <BrowserRouter>
      <NavBar />
      <h1>Your photos</h1>
      <Grid col='4'>
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
        <Card url={testImg} title='Test image' />
      </Grid>
      <Switch>
        {/* <Route path="/" component={Loader}/> */}
        <Route path="/profile/1/photos" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>;

export default App;
