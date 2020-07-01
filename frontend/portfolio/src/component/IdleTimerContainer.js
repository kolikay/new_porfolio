import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer'

function IdleTimerContainer(){
    const IdleTimerRef = useRef(null)

    const handleLogout = () => {
        localStorage.clear();
        window.location = "/signin"
      }
    return(
        <IdleTimer ref={IdleTimerRef} timeout={1000 * (60 * 10)} onIdle={handleLogout}></IdleTimer>
    )

}
export default IdleTimerContainer