import React from 'react'
import './style.css'
import insta from './instaicon.png'
import lindin from './linkedin-removebg-preview.png'
import github from './github.png'
import profile from './profile.jpg'

const Page1 = () => {
    return (

        <div className='pg1'>
            <div className='pg1-container'>
                <div>                    
                <img src={profile} alt="" />                
                </div>
                <div>
                    <h1>Sakshi choudhary</h1>
                    <h3>I'M a</h3>
                </div>
                <div className='pg1-icons'>
                <div>   <img src={insta} alt=""/></div> 
                <div>   <img src={github} alt=""/></div> 
                <div>   <img src={lindin} alt=""/></div> 

                </div>
                
            </div>
           
        </div>

    )
}
export default Page1