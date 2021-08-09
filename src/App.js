import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

const  App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" component={NavBar}/>
        <Route path="/profile/1/photos" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
