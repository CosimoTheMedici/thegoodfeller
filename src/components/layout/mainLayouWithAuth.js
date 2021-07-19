import React, { useContext } from "react";

import Sidebar from "../commons/Sidebar2";
import Nav from "../commons/Nav";



//user must be authenticatted to be able to extend this layout



export default function mainLayouWithAuth(Component) {
  return class mainLayoutWithAuth extends React.Component {
  
    render() {
      


      //if (1 +1==2) {
        return (
          <div>
            <div className="text-left">
              <div className="app-admin-wrap layout-sidebar-large">
                <Nav/>
                
                <Sidebar></Sidebar>
               
                <div style={{ paddingLeft:"0px" }}>
              
                  <div class="main-content"  >
                  <Component />
                 {/*
                    <Alert />
                    
                    <Component />
                    
                    <Footer />
                    
                 */}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        );
      {/*} else {
      return <Login />(<div>not there</div>);*/} 
     
    }
  };
}
