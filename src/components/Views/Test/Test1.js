import React from 'react'
import mainLayouWithAuth from '../../layout/mainLayouWithAuth'
import '../../commons/styles.css';
export function Test1  ()  {
    return (
        <>  
            <div class="content">
            <h1>Famous Cities</h1>

            <h2>Tokyo</h2>

            <p>
             Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
             and the most populous metropolitan area in the world.
             It is the seat of the Japanese government and the Imperial Palace,
             and the home of the Japanese Imperial Family.
            </p>
            </div>
        </>
    )
}

export default mainLayouWithAuth(Test1)
