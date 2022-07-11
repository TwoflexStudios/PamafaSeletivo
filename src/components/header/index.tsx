import {
  Container, Division, MenuItem, NavArea,
} from './styles';
import menu from './menu.json';

const NavBar: IMenuProps[] = menu;

const Header = (props:any) => {
  console.log(props);
  const callBackMenuItem = (item:IMenuProps) => {
    window.location.href = item.link;
  };

  return (
    <Container>
      <Division>
        <img src={require('../../assets/logo.jpg')} alt="business logo" />
        <NavArea>
          {
            NavBar.map((item, index) => (
              <MenuItem key={index} onClick={() => { callBackMenuItem(item); }}>
                {item.link.charAt(0).toUpperCase() + item.link.slice(1)}
              </MenuItem>
            ))
        }
        </NavArea>
      </Division>
      <Division>
        Lista de Usuarios
      </Division>
    </Container>
  );
};

export default Header;
