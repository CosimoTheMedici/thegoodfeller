import React from 'react'
import styled from 'styled-components'
import  logo from './images.png';

const Appsed = styled.div`
    background:red;
    height:400px;
    width:300px;
    border-style: solid;
    border-width: 5px;
    color: blue,
    top: 0px;
    position: absolute;
    right: 2.5rem;
    float: right;
    border-radius: 25px;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.3))

`;
const Cardsl = styled.div`

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;

`;
const Butan = styled.button`

border: none;
outline: 0;
display: inline-block;
padding: 8px;
color: white;
background-color: #000;
text-align: center;
cursor: pointer;
width: 100%;
font-size: 18px;

&:hover{
    opacity: 0.7;
}

`;
const Img = styled.img`
height:20%;
width:20%;
`;
const Dropown = () => {
    return (
        <>
           <Appsed>
               <Cardsl>
               <Img src={logo} alt="Logo" style={{width:"10"}}/>
                 <h1>John Doe</h1>
                 <p class="title">CEO & Founder, Example</p>
                 <p>Harvard University</p>
                 <p><Butan>Profile</Butan></p>
                 <p><Butan>Change Password</Butan></p>
                 <p><Butan>Logout</Butan></p>
                 </Cardsl>
            </Appsed> 
        </>
    )
}

export default Dropown
