import React from 'react'

// router
import { Link } from 'react-router-dom'

 function HomePage()  {
    return (
        <div>
            <h1>React Friends With Auth</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default HomePage