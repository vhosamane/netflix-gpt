import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './utils/RoutesConfig/RoutesConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  );
}

export default App;
