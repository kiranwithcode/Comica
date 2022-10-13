import React from "react";
import Send from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
  ${mobile({textAlign: "center",fontSize: "50px"})}

`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  ${mobile({textAlign: "center",fontSize: "18px",padding:"0px 10px"})}
    
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
  ${mobile({width: "80%"})}

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;

    &:hover{
      background-color: #4141da;
    }
`

const Newsletter = () => {
  return (
    <Container>
      <Title>KIRAN NEWSLETTER</Title>
      <Description>India's biggest store opened by your near hub</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
            <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
