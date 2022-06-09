import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function HomePage() {
    
    return (
        <div className="main flex justify-start">
            <Sidebar />
            <div className="mainContent flex-auto p-5">
                <Header title="Inicio" />
                <div className="content w-full">
                    Inicio
                </div>
            </div>
        </div>
    )
}

export default HomePage