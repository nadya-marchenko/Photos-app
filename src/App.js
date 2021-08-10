import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import testImg from './assets/images/test-img.png';
import AlbumCard from './components/AlbumCard';

const previewPhotos = [testImg, testImg, testImg];

const  App = () => 
    <BrowserRouter>
      <NavBar />
      <h1>Your photos</h1>
      <Grid col='3'>
        <AlbumCard previewPhotos={previewPhotos} link={'/album/1'} title='Test image' />
        <AlbumCard previewPhotos={previewPhotos} link={'/album/2'} title='Test image' />
        <AlbumCard previewPhotos={previewPhotos} link={'/album/3'} title='Test image' />
        <AlbumCard previewPhotos={previewPhotos} link={'/album/4'} title='Test image' />
        <AlbumCard previewPhotos={previewPhotos} link={'/album/5'} title='Test image' />
        <AlbumCard previewPhotos={previewPhotos} link={'/album/6'} title='Test image' />
      </Grid>
      <Switch>
        {/* <Route path="/" component={Loader}/> */}
        <Route path="/profile/1/photos" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>;

export default App;
