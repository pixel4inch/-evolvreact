import React from 'react'
import { useLayoutEffect } from 'react';

function Admin({setShowNavbar, setFooter, setAdminNavbar }) {
    // Receive setShowNavbar as props and set it to false
    useLayoutEffect(() => {
        setShowNavbar(false);
        setFooter(false);
        setAdminNavbar(true)
    }, [])

  return (
    <div>Admin</div>
  )
}

export default Admin