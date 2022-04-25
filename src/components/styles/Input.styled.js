import styled from 'styled-components';

const Input = styled.input`
  margin: 0.5rem 0 1rem;
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: white;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.ctaShadow};
  }
`;

export const Label = styled.label`
  display: block;
  line-height: 1;
  padding-bottom: 0.5rem;
  margin: 0.5rem 0;
`;

export default Input;
