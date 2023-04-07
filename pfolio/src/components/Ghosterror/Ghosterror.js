import React from 'react'
import './ghost.css'
import ghost from '../Images/ghost.gif'





function Ghosterror() {
    return (
        <div className='ghost'>
            <div className='row justify-content-center'>
                <div className='col-md-4 ghr'>
                    <h1>Page not found </h1>
                    <h3>404 error .....!</h3>
                </div>
                <div className='col-md-4'>
                    <img className='gimg' src={ghost} alt='Ghost img' /> 
                </div>
            </div>





        </div>
    )
}

export default Ghosterror
