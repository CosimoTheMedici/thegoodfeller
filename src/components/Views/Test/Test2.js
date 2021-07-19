import React from 'react'
import mainLayouWithAuth from '../../layout/mainLayouWithAuth'
import '../../commons/styles.css';
export function Test2  () {
    return (
        <>
           <div class="content">
        <h1>Famous Cities</h1>

        <h2>London</h2>

        <p>
 

            London, the capital of England and the United Kingdom, s a 21st-century city with history stretching back to Roman times. 
            At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey,
            site of British monarch coronations. Across the Thames River, 
            the London Eye observation wheel provides panoramic views of the South Bank cultural complex, 
            and the entire city
        </p>
        </div>
        </>
    )
}

export default mainLayouWithAuth(Test2)
