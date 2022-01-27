import styled from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => theme.container}
`;

export const StyledUser = styled.header`
  ${({ theme }) => theme.container}
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: relative;
`;

export const UserNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background-color: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.ctaShadow};
    border-color: ${(props) => props.theme.colors.primary};

    svg > * {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;
