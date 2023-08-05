
import React,{useState} from 'react'
import { useLocation } from "react-router";

import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from "../responsive";

const Container = styled.div`
`
const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
margin:20px;
${mobile({margin:"0px 20px",display:"flex",flexDirection:"column"})};

`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-size:14px;
  ${mobile({margin:"10px 0px"})};


`;
const Option = styled.option``;
const FilterText = styled.span`
font-size:18px;
font-weight:600;
margin-right: 20px;
${mobile({marginRight:"0px"})};


`
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");
  const handleFilter = (e)=>{
    const value = e.target.value;
    setFilters({...filters,[e.target.name]:value});
  }
  console.log(filters);

  return (
    <Container>
        <Navbar/>

        <Announcements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilter}>
            <Option disabled >
              Colour
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select onChange={(e)=>{setSort(e.target.value)}}>
            <Option value = "newest">Newest</Option>
            <Option value = "asc">Price (asc)</Option>
            <Option value = "desc">Price (desc)</Option>
          </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList