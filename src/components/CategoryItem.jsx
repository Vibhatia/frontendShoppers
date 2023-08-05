import React from 'react'
import styled from 'styled-components';
import {mobile} from "../responsive";
import {Link} from 'react-router-dom';
const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"20vh"})};

`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
    color:white;
    font-weight:bold;
    letter-spacing:2px;
    margin-bottom:20px;
`
const Button = styled.button`
    padding:10px;
    background-color:transparent;
    color:white;
    font-weight:600;
    letter-spacing:2px;
    cursor:pointer;

`
const CategoryItem = (props) => {
  return (
    <Container>
        <Link to={`/products/${props.item.cat}`}>
        <Image src = {props.item.img}></Image>
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  );
}

export default CategoryItem