import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Components/Routes/Routers';


function App() {
  return (
    <div>
      <RouterProvider router={Routers}></RouterProvider>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
