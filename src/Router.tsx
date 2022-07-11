import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import HomeScreen from './screens/Home';

const Routers = (props:any = null) => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
