import { Link } from 'react-router-dom';
import {
  Container, Division, MenuItem, NavArea,
} from './styles';

type HeaderProps = {
  pageTitle: string;
}

const Header = ({ pageTitle }:HeaderProps) => (
  <Container>
    <Division>
      <img src={require('../../assets/logo.jpg')} alt="business logo" />
      <NavArea>
        <MenuItem>
          <Link to="/home" className="link">
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/users" className="link">
            Usuários
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products" className="link">
            Produtos
          </Link>
        </MenuItem>
      </NavArea>
    </Division>
    <Division>
      {pageTitle}
    </Division>
  </Container>
);

export default Header;
