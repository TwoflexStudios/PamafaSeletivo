import { useEffect, useState } from 'react';
import Header from '../../components/header';
import api from '../../services/api';
import { Container } from '../global_styles';
import { CardImageContainer, Content } from './styles';

const HomeScreen = (props:any) => {
  const [images, setImages] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setFetching(true);
    const imagesData = await (await api.get('images?_quantity=21&_locale=pt_BR&_type=kittens&_height=500')).data;
    setImages(imagesData.data);
    setFetching(false);
  };
  return (
    <Container>
      <Header pageTitle="Pagina Inicial" />
      <Content>
        {fetching
          ? (
            <div className="lds-roller">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          )
          : (
            images.map((item:any) => (
              <CardImageContainer>
                <img src={item.url} alt="CAT " />
                <div className="card-content">
                  {
                    item.description
                  }
                </div>
              </CardImageContainer>
            ))
          )}
      </Content>
    </Container>
  );
};

export default HomeScreen;
