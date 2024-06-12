import React from 'react'
import { useLocation } from 'react-router-dom';

function EventcommonStrip() {
    const location = useLocation();
    // Hide this component on the home page
    if (location.pathname === '/') {
      return null;
    }
  
  return (
    <>
        <div class="eventprogamheader">
            <h4>EVOLVE 2024</h4>
            <h5>FutureTech Summit</h5>
            <h6>A Global Innovator Community</h6>
            <a href="Evolve2024_Program.html">Program Details</a>
        </div>
    </>
  )
}

export default EventcommonStrip