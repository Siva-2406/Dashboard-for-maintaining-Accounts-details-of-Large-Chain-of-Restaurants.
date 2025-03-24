import './App.css';
import Landing from './components/Landing';
import { RouterProvider } from 'react-router-dom';
import router from './components/routes/router';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div className="App">
 
    <DataProvider>
    <RouterProvider router={router}>
    <Landing/>
    </RouterProvider>
    </DataProvider>
  
    </div>
  );
}

export default App;