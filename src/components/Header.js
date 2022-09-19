import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const Header = () => {

  const [burgerState, setBurgerState] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerState(true)}/>
      </RightMenu>

      <BurgerNav show={burgerState}>
        <CloseWrapper>
            <CustomClose onClick={() => setBurgerState(false)}/>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Power Wall</a></li>
        <li><a href="#">semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Commertial Energy</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>

      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: black;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0 ;
    right: 0;
    background: white;
    
    width: 300px;
    list-style: none;
    padding:20px;
    disply: flex;
    flex-direction: column;
    text-align:start;
    // justify-content: flex-start;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);

      a{
        font-weight: 600;
      }
    }

`

const CustomClose = styled(CloseIcon)`


`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
