import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  cursor: pointer;
  width: 100%;
  padding: ${(props) => (props.open ? '0 32px 0 42px' : '0')};
  justify-content: ${(props) => (props.open ? '' : 'center')};

  &:hover {
    color: #22ccde;
    font-weight: 600;
  }
`;

export default MenuItemWrapper;