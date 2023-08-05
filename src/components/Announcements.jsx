import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:35px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:800;
` 
const Announcements = () => {
  return (
    <Container>Super Deal ! Free Shipping on Orders over Rs1000</Container>
  )
}

export default Announcements