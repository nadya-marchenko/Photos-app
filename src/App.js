import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import testImg from './assets/images/test-img.png';
import AlbumCard from './components/AlbumCard';
import Card from './components/Card';
import Input from './components/Input';

const previewPhotos = [testImg, testImg, testImg];

const  App = () => 
    <BrowserRouter>
      <NavBar />
      <h1>Your profile</h1>
      <Grid col='2'>
        <Input type='text' label='Name' id='Name' />
        <Input type='email' label='Email' id='Email' />
        <Input type='url' label='Website' id='Website' />
        {/* <Card url={testImg} title={'Test image'}/> */}
        {/* <AlbumCard previewPhotos={previewPhotos} link={'/album/6'} title='Test image' /> */}
      </Grid>
      <Switch>
        {/* <Route path="/" component={Loader}/> */}
        <Route path="/profile/1/photos" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>;

export default App;
