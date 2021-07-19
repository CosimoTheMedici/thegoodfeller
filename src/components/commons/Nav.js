import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee,faDesktop,faSlidersH,faCogs,faTable,faTh,faInfoCircle,faBars} from '@fortawesome/free-solid-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {Link} from 'react-router-dom'
import './styles.css'
import Dropdown from './Dropdown'
import styled from 'styled-components'
import  logo from './equity1.png';

library.add(fab, fas,faCoffee)

const Imgs = styled.img`
height:75px;
width:125px;
top: 0px;
padding-left:0px;
margin:0;
position: absolute;
left: 0rem;
float: left;
`;

const Nav = () => {

const [showResults, setShowResults] = useState(false)
const showDropdown = () => setShowResults(!showResults)//{console.log("my name is ")}//

    return (
        <>
    <input type="checkbox" id="check"/>
    {/*<!--header area start-->*/}
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"><FontAwesomeIcon icon={fab,faDesktop} /></i>
      </label>
      <Imgs src={logo} alt="Logo" />
      <div class="left_area">
      
      <Link to ="/"> <h3>Billing <span>Portal</span></h3></Link>
      </div>
      <input type="checkbox" id="check" placeholder="lllmmmmlm"/>
      <div class="ioi">
        
      
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn" onClick={showDropdown}>Logout2</a>
      </div>
      { showResults ? <Dropdown /> : null }
    </header>
 
    
    {/*<!--header area end-->
    <!--mobile navigation bar start-->*/}
    
    {/*<!--sidebar end-->*/}

    </>
    )
} 

export default Nav
