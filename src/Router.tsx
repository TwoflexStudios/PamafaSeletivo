import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import HomeScreen from './screens/Home';
import UsersScreen from './screens/Users';

const Routers = (props:any = null) => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/users" element={<UsersScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
