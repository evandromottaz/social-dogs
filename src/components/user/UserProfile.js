import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../feed/Feed';
import { Title } from '../styles/Text.styled';
import StyledUserProfile from '../styles/StyledUserProfile.styled';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <StyledUserProfile>
      <Title>{user}</Title>
      <Feed user={user} />
    </StyledUserProfile>
  );
};

export default UserProfile;
