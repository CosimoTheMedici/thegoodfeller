/*
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab, faCoffee)
export const Test = () => (
  <div>
   
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    dd<FontAwesomeIcon icon={[fab, faCoffee]} />gg
  </div>
)*/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee,faDesktop,faSlidersH} from '@fortawesome/free-solid-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab, fas,faCoffee)
export const Test = () => (
  <div>
   
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    dd<FontAwesomeIcon icon={fab, faCoffee} style={{color: "red",fontSize:'2rem'}} />gg
    fas<FontAwesomeIcon icon={fas,faCoffee} />fas
    <i class="fab fa-desktop"></i><span>Dashboard</span>
    dd<FontAwesomeIcon icon={fab,faDesktop} />ggllll
    dd<FontAwesomeIcon icon={fab,faSlidersH} />ggllll
    <a href="#"><i><FontAwesomeIcon icon={fab,faDesktop} /></i><span>Dashboard</span></a>
    
  </div>
)
