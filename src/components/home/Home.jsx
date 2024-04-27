import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'


function Home() {
    return (
        <div>
            <Navbar />
            <Home1 />
            <Home2 />
            <Home3 />
            <Footer />

        </div>
    )
}

export default Home
