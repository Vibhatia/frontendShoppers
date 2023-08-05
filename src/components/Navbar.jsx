import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate,Navigate } from 'react-router-dom';
import {logout} from '../redux/apiCalls'
const Container = styled.div`
height:60px;
${mobile({ height: "50px" })};
${mobile({ backgroundColor: "pink" })};

`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({ padding: "10px 0px" })};

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ justifyContent: "center", flex: "2" })};

`
const Language = styled.span`
font-size:16px;
cursor:pointer;
${mobile({ display: "none" })};

`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
outline:none;
${mobile({ width: "50px" })};


`
const Logo = styled.h1`
font-weight:bold;

${mobile({ fontSize: "24px" })};

`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })};

`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const [user,setUser] = useState(useSelector(state => state.user))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e)=>{
        e.preventDefault();
        try{
        logout(dispatch);
        setUser(user => ({
            ...user,
            currentUser: null
          }));
        }
        catch{}        
    }
    const handleLog = ()=>{
    navigate("/login");
    }
    const handleReg = ()=>{
    navigate("/register");
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>Shoppers</Logo></Center>
                <Right>
                    {user.currentUser ?
                        (<MenuItem onClick={handleLogout}>LOGOUT</MenuItem>)
                        :
                        (<>
                            <MenuItem onClick={handleReg}> REGISTER</MenuItem>
                            <MenuItem onClick={handleLog}>LOGIN</MenuItem>
                        </>
                        )
                    }

                    <Link to='/cart'>
                        <MenuItem> <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar