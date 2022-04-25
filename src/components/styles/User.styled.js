import styled, { css } from 'styled-components';

const User = styled.section`
  ${({ theme }) => theme.container}
`;

export const Header = styled.div`
  margin: ${({ margin }) => margin};
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: relative;
`;

const userNavDesktop = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0;
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
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.ctaShadow};
    border-color: ${({ theme }) => theme.colors.primary};

    svg > * {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const userNavMobile = css`
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;

  a,
  button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  a:hover svg > *,
  button:hover svg > * {
    fill: ${({ theme }) => theme.colors.primary};
  }

  button {
    border-bottom: none;
  }

  svg {
    margin-right: 0.5rem;
  }

  ${({ active }) => active && userNavMobileActive}
`;
const userNavMobileActive = css`
  transition: 0.3s;
  transform: initial;
  opacity: 1;
  z-index: 100;
  pointer-events: initial;
`;

export const UserNav = styled.nav`
  /* if state mobile is true, load mobile css else desktop */
  ${({ mobile }) => (mobile ? userNavMobile : userNavDesktop)}
`;

// mobile styled's -----------------

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  padding: 0;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  // three lines
  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.ctaShadow};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${(props) => props.visible} {
    &::after {
      transform: rotate(-90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
`;

export default User;
