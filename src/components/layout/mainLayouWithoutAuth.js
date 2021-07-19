import React from 'react';

export default function mainLayouWithoutAuth(Component){
    return class MainLayoutWithoutAuth extends React.Component{
        render(){
            return (<div>
                 <div className="auth-layout-wrap">
                    <div className="auth-content">
                        <Component/>
                    </div>
                </div>
            </div>)
        }
    }   

}