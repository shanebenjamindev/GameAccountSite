import styled from 'styled-components';

export const WrapperButton = styled.button`
  padding: 10px 25px;
  align-items: center;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
  
  border-radius: ${(props) =>
        props.variant === 'primary-outlined-rev' ? '4px' : null};

  background-color: ${(props) =>
        props.variant === 'primary-outlined-rev' ? 'transparent' :
            props.variant === 'primary' ? 'var(--primary-color)' :
                props.variant === 'primary-outlined' ? 'white'
                    : props.variant === 'facebook-outlined'
                        ? '#4267B2'
                        : props.variant === 'google-outlined'
                            ? '#DC3545'
                            : 'inherit'};
  
  border: 1px solid
    ${(props) =>
        props.variant === 'primary-outlined-rev' ? 'white' :
            props.variant === 'primary-outlined'
                ? 'var(--primary-color)'
                : props.variant === 'google-outlined'
                    ? '#DC3545'
                    : props.variant === 'facebook-outlined'
                        ? '#4267B2'
                        : 'inherit'}; 
  
  color: ${(props) =>
        props.variant === 'primary-outlined' ? 'var(--primary-color)' : 'inherit'};

  &:hover {
    box-shadow: inset rgba(100, 100, 111, 0.2) 0px 7px 50px 10px;
    background-color: ${(props) =>
        props.variant === 'primary-outlined' ? 'var(--primary-color)' : ''};
    color: ${(props) =>
        props.variant === 'primary-outlined'
            ? 'white' : null}
    }
`;
