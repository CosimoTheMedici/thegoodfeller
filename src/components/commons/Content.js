import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mainLayouWithAuth from '../layout/mainLayouWithAuth';
import {faCoffee,faDesktop,faSlidersH,faCogs,faTable,faTh,faInfoCircle,faBars} from '@fortawesome/free-solid-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './styles.css'
library.add(fab, fas,faCoffee)

export function Content  ()  {
    return (

        <>
    <div class="content">
             orem Ipsum is simply
      <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
    </div>
        </>
        
    )
}

export default mainLayouWithAuth(Content)
