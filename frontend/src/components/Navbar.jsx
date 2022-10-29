import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom"
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}

`;

const SearchContainer = styled.div`
  /* border: 0.5px solid lightgray;
  display: flex;
  justify-content: center;
  margin-left: 25px;
  padding: 5px; */
    
    height: 40px;
    background-color: white;
    display: flex;
    margin-left: 25px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    width: 90%;
  ${mobile({height: "30px",marginLeft: "10px"})}

`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  height: 90%;
  width: 90%;
  ${mobile({width: "90px", paddingLeft: "5px", fontSize:"10px"})}

  &:hover{
    border-bottom: "1px solid red";
  }

`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize: "22px"})}
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center",flex:2})}

`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "10px", marginLeft: "8px"})}
  
`;
const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Center>
          <Link to="/" style={{textDecoration:"none"}}><Logo>KAMBLE</Logo></Link>
        </Center>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search for products"/>
            <SearchIcon style={{color:"gray", fontSize:"16px", margin:"0px 10px"}} />
          </SearchContainer>
        </Left>
        <Right>
          <MenuItem><Link style={{textDecoration:"none"}} to="/register">REGISTER</Link></MenuItem>
          <MenuItem><Link style={{textDecoration:"none"}} to="/login">LOGIN</Link></MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
