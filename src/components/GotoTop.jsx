import React, { useEffect, useState } from 'react'
import './gotoTop.css'

export const GotoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const gotoTop =() =>{
        window.scrollTo({top: 0 , left:0 , behavior:'smooth'})
    }
    const listenToScroll = () =>{
        let heightToShow = 250;
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop ;
        
        if (scrollTop > heightToShow) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll" , listenToScroll);

        // Clean up
        return() => window.removeEventListener('scroll' , listenToScroll)
        
    }, []);
    
  return (
    
    isVisible && (
    <div className='gotoTop' onClick={gotoTop}>
    <button className="button" >
    <svg className="svgIcon" viewBox="0 0 384 512">
    <path
    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
    </svg>
    </button> 
    </div>    )
  

  )
}

export default GotoTop