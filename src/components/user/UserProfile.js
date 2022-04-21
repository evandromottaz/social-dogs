import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../feed/Feed';
import { Title } from '../styles/Text.styled';
import StyledUserProfile from '../styles/StyledUserProfile.styled';
import Head from '../helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <StyledUserProfile>
      <Head title={user} />
      <Title>{user}</Title>
      <Feed user={user} />
    </StyledUserProfile>
  );
};

export default UserProfile;
