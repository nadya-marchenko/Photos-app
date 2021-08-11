import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import testImg from './assets/images/test-img.png';
import AlbumCard from './components/AlbumCard';
import Card from './components/Card';
import Input from './components/Input';
import SearchIcon from '@material-ui/icons/Search';
import Select from './components/Select';

const previewPhotos = [testImg, testImg, testImg];

const  App = () => 
    <BrowserRouter>
      <NavBar />
      <h1>Your profile</h1>
      <Grid col='2'>
        <Input type='search' label='Search by title' id='search' icon={<SearchIcon />} />
        <Input type='text' label='Name' id='Name' placeholder='test' />
        <Input type='email' label='Email' id='Email' />
        <Select label='Pre page' id='Page' options={[10, 20, 30, 40]} />
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
