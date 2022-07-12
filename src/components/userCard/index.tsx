import { CardContainer, CardImage } from './styles';

type ICardProps = {
    name: string;
    username: string;
    image: string;
    email: string;
    site: string;
}

const Card = ({
  name, username, image, email, site,
}:ICardProps) => (
  <CardContainer>
    <CardImage>
      <img src={image} alt={`foto de ${name}`} />
    </CardImage>
    <h1 className="card-people-name">{name}</h1>
    <p className="username">
      Usuário:
      {' '}
      <b>{username}</b>
    </p>
    <p className="email">
      Email:
      {' '}
      <b>{email}</b>
    </p>

    <a className="website" href={site}>
      {site}
    </a>
  </CardContainer>
);

export default Card;
