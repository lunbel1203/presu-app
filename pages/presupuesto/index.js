import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

function PresupuestoPage() {
    
    return (
        <div className="main flex justify-start">
            <Sidebar />
            <div className="mainContent flex-auto p-5">
                <Header title="Presupuesto" />
                <div className="content w-full">
                    Presupuesto
                </div>
            </div>
        </div>
    )
}

export default PresupuestoPage