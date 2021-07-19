import React, { useState } from 'react'
import styled from 'styled-components'
import {Link,BrowserRouter} from 'react-router-dom'


const SidebarLink =styled(Link)`
display: flex;
color:#e1e9fc;
padding-left: 30px;
`;
const DropdownLink = styled(Link)`
background:#9e292b;
height:60px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:#f5f5f5;
font-size 18px;

&:hover{
    background:#632ce4;
    cursor:pointer;
    colour:black;
}
`;
const SidebarLable = styled.span`
margin-left:10px;
`;
const Sider = styled.span`
margin-left:10px;
`;
const SubMenu = ({item}) => {
    const [subnav ,setSubnav] = useState(false)

    const showSubnav = ()=> setSubnav(!subnav)
    return (
       <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            
                <div>
                    {item.icon}
                    <SidebarLable>{item.title}</SidebarLable>
                     <Sider>{item.subNav && subnav ? item.iconOpened : item.subNav?item.iconClosed : null}</Sider>
                </div>  
            </SidebarLink>
            {subnav && item.subNav.map((item,index) =>{
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLable>{item.title}</SidebarLable>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu
