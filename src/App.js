import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import testImg from './assets/images/test-img.png';
import Photos from './pages/Photos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NoResult from './components/NoResult';
import Loader from './components/Loader';

const API_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredValue, setFilteredValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkErrorsFromAPI = (response) => {
    if(response.status !== 200) {
      setIsError(true);
      throw new Error(response.statusText);
    }
  };

  useEffect(() => {
    const getPhoto = () => {
      axios.get(API_URL)
      .then(response => {
        setPhotos(response.data)
      })
      .catch(() => checkErrorsFromAPI())
      .finally(() => setIsLoading(false));
    } 
    setIsLoading(true);
    getPhoto();
  }, [filteredValue]);

  const filterData = (newFilteredValue) => {
    setFilteredValue(newFilteredValue);
  };

  const getFilteredPhotos = (photos, filteredValue) => photos.filter(photoEl => photoEl.title.includes(filteredValue));

  const filteredPhotos = getFilteredPhotos(photos, filteredValue);

  return (
    <BrowserRouter>
      <NavBar />
      {isError 
        ? <NoResult message='Problems with API. Please try again' />
        : (isLoading 
            ? <Loader />
            : <Photos images={filteredPhotos} filterImages={filterData} />)}
      
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
    </BrowserRouter>
  );
}
    ;

export default App;
