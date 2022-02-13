import './App.css';
import {Fragment} from 'react'
import Routes from './components/rootRoutes/rootRoutes'; 
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <Fragment>
      <BrowserRouter>
    
          <Routes />

        </BrowserRouter> 
     
    </Fragment>

  );
}

export default App;
