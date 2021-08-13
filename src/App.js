import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import testImg from './assets/images/test-img.png';
import Photos from './pages/Photos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NoResult from './components/NoResult';

const App = () => {
  

  return (
    <BrowserRouter>
      <NavBar />
      
      <Photos profile={'1'} />
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
