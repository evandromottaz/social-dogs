import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../feed/Feed';
import { Title } from '../styles/Text.styled';
import Head from '../helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section>
      <Head title={user} />
      <Title>{user}</Title>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
