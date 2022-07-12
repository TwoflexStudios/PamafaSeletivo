import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import HomeScreen from './screens/Home';
import ProductsScreen from './screens/Products';
import UsersScreen from './screens/Users';

const Routers = (props:any = null) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/users" element={<UsersScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
