import { Twitter, Facebook, Instagram, Room, MailOutline, Phone } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
    display:flex;    
    ${mobile({flexDirection:"column"})};


`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Center = styled.div`
    flex:1;  
    padding:20px;
    ${mobile({display:"none"})};


`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    width:100%;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    
`
const Right = styled.div`
    flex:1;    
    padding:20px;
    ${mobile({backgroundColor:"lightgray"})};


`
const ContactItem = styled.div`
    display:flex;
    margin-bottom:20px;
    align-items:center;
`
const Payment = styled.img`
    width:50%;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon= styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;    
align-items:center;
justify-content:center;
margin:7px;

`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shoppers</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, enim optio blanditiis voluptatibus beatae sequi est, animi quia pariatur dolores nesciunt. Id vero rerum, nemo natus eaque ea inventore ipsam consequatur eos voluptate? Maxime nobis aspernatur architecto mollitia ducimus impedit?</Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999"><Facebook/></SocialIcon>
                <SocialIcon color = "E4405F"><Instagram/></SocialIcon>
                <SocialIcon color = "55ACEE"><Twitter/></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>

                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style = {{marginRight:"10px"}}/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, sint.

            </ContactItem>
            <ContactItem>
                <Phone style = {{marginRight:"10px"}}/>
                +91 8864877301

            </ContactItem>
            <ContactItem>
                <MailOutline style = {{marginRight:"10px"}}/>
                bhatiavikas2001@gmail.com

            </ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer