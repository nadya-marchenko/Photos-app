import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import testImg from './assets/images/test-img.png';
import AlbumCard from './components/AlbumCard';
import Input from './components/Input';
import SearchIcon from '@material-ui/icons/Search';
import Select from './components/Select';
import Button from './components/Button';
import Photos from './pages/Photos';

const previewPhotos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": testImg,
    "thumbnailUrl": testImg
  }];

const App = () => 
    <BrowserRouter>
      <NavBar />
      <Photos images={previewPhotos} />
      {/* <h1>Your profile</h1> */}
      {/* <Grid col='3'> */}
        {/* <Input type='search' label='Search by title' id='search' icon={<SearchIcon />} />
        <Input type='text' label='Name' id='Name' placeholder='test' />
        <Input type='email' label='Email' id='Email' />
        <Select label='Pre page' id='Page' options={[10, 20, 30, 40]} /> */}
        {/* <Button color='default'>Find</Button> */}
        {/* <AlbumCard previewPhotos={previewPhotos} link={'/album/6'} title='Test image' /> */}
      {/* </Grid> */}
      {/* <Switch> */}
        {/* <Route path="/" component={Loader}/> */}
        {/* <Route path="/profile/1/photos" /> */}
        {/* <Route component={NotFound} /> */}
      {/* </Switch> */}
    </BrowserRouter>;

export default App;
