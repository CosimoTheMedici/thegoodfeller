import React from 'react'
import * as Fonti from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee,faDesktop,faSlidersH,faCogs,faTable,faTh,faInfoCircle,faBars} from '@fortawesome/free-solid-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './styles.css'
library.add(fab, fas,faCoffee)

const Sidebar = () => {
    return (
        <>
             
    <div class="mobile_nav">
      <div class="nav_bar">
        <img src="1.png" class="mobile_profile_image" alt=""/>
        <i class="fa fa-bars nav_btn"></i>
      </div>
      <div class="mobile_nav_items">
        <a href="#"><i class="fas fa-desktop"><FontAwesomeIcon icon={fab,faDesktop} /></i><span>Dashboard</span></a>
        <a href="#"><i class="fas fa-cogs"><FontAwesomeIcon icon={fab,faCogs} /></i><span>Components</span></a>
        <a href="#"><i class="fas fa-table"><FontAwesomeIcon icon={fab,faTable} /></i><span>Tables</span></a>
        <a href="#"><i class="fas fa-th"><FontAwesomeIcon icon={fab,faTh} /></i><span>Forms</span></a>
        <a href="#"><i class="fas fa-info-circle"><FontAwesomeIcon icon={fab,faInfoCircle} /></i><span>About</span></a>
        <a href="#"><i class="fas fa-sliders-h"><FontAwesomeIcon icon={fab,faSlidersH} /></i><span>Settings</span></a>
      </div>
    </div>
    
    <div class="sidebar">
      <div class="profile_info">
        <img src="1.png" class="profile_image" alt=""/>
        <h4>Jessica</h4>
      </div>
      <a href="#"><i class="fas fa-desktop"><FontAwesomeIcon icon={fab,faDesktop} /></i><span>Dashboard</span></a>
      <a href="#"><i class="fas fa-cogs"><FontAwesomeIcon icon={fab,faCogs} /></i><span>Components</span></a>
      <a href="#"><i class="fas fa-table"><FontAwesomeIcon icon={fab,faTable} /></i><span>Tables</span></a>
      <a href="#"><i class="fas fa-th"><FontAwesomeIcon icon={fab,faTh} /></i><span>Forms</span></a>
      <a href="#"><i class="fas fa-info-circle"><FontAwesomeIcon icon={fab,faInfoCircle} /></i><span>About</span></a>
      <a href="#"><i class="fas fa-sliders-h"><FontAwesomeIcon icon={fab,faSlidersH} /></i><span>Settings</span></a>
    </div>
    </>
        
    )
}

export default Sidebar
