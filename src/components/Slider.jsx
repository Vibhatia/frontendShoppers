import React,{useState} from 'react';
import styled from "styled-components";
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import {mobile} from "../responsive";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
// background-color:lightgray;
position:relative;
overflow: hidden;
${mobile({display:"none"})};

`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0px;
bottom:0px;
left:${props => props.direction === 'left' && '10px'};
right:${props => props.direction === 'right' && '10px'};
margin:auto;
cursor:pointer;
z-index:2;
opacity:0.5;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.75s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);

`
const Slide = styled.div`
display:flex;
align-items:center;
height:100vh;
width:100vw;
background-color:#${props=>props.bg}
`
const ImgContainer = styled.div`
flex:1;
height:100%;

`
const InfoContainer = styled.div`
flex:1;
padding:50px;

`
const Image = styled.img`
height:80%;

`
const Title = styled.h1`
font-size:70px;
font-weight:800;
letter-spacing:3px;

`
const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:600;
letter-spacing:3px;

`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
letter-spacing:1px;
`
const Slider = () => {
    const [slideIndex,setSlidIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            if(slideIndex>0)
            setSlidIndex(slideIndex-1);
            else
            setSlidIndex(3);
        }
        else{
            if(slideIndex<3){
                setSlidIndex(slideIndex+1);
            }
            else
            setSlidIndex(0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick = {()=>{handleClick("left")}}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                             <Slide bg={item.bg}>
                             <ImgContainer>
                                 <Image src ={item.img} />
                             </ImgContainer>
                             <InfoContainer>
                                 <Title>{item.title}</Title>
                                 <Desc>{item.desc}</Desc>
                                 <Button>SHOP NOW</Button>
                             </InfoContainer>
                         </Slide>
                ))}
           
            
               


            </Wrapper>
            <Arrow direction="right" onClick = {()=>{handleClick("right")}}>
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}

export default Slider