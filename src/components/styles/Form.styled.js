import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
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
    border-color: #fb1;
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const StyledError = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background-color: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 6rem;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #feb, 0 0 0 4px #fb1;
  }
  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;