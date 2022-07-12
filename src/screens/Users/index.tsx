import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Card from '../../components/userCard';
import api from '../../services/api';
import { Container } from '../global_styles';
import { Content } from './styles';

type IUser = {
  email: string;
  firstname: string;
  id: number;
  image: string;
  ip: string;
  lastname: string;
  macAddress: string;
  password: string;
  username: string;
  uuid: string;
  website: string;
}

const UsersScreen = (props:any) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [fetchingUsers, setFetchingUsers] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setFetchingUsers(true);
    const data = await (await api.get('/users?_quantity=20')).data;
    setUsers(data.data);
    setFetchingUsers(false);
  };

  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Header pageTitle="Lista de usuários" />
      <Content>
        {fetchingUsers === true
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
          : users.map((item) => (
            <Card
              key={item.id}
              name={`${item.firstname} ${item.lastname}`}
              username={item.username}
              image={
                `https://placeimg.com/620/${Math.floor(Math.random() * (500 - 100)) + 100}/people`
              }
              site={item.website}
              email={item.email}
            />
          ))}
      </Content>
    </Container>
  );
};

export default UsersScreen;
