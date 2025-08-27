import { styled } from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  border-color: ${({$invalid}) => $invalid ? '#f73f3f' : '#6b7280'} 
  background-color: ${({$invalid}) => $invalid ? '#fed2d2' : '#6b7280'} 
  color: ${({$invalid}) => $invalid ? '#ef4444' : 'white'} 
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export default Input;