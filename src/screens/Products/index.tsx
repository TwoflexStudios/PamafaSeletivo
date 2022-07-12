import Header from '../../components/header';
import { Container } from '../global_styles';
import { Content } from './styles';

const ProductsScreen = (props:any) => (
  <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Header pageTitle="Lista de produtos" />
    <Content>
      <h1>
        Nothing to show
      </h1>
    </Content>
  </Container>
);

export default ProductsScreen;
