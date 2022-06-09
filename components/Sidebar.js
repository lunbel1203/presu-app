import React from 'react'
import Link from 'next/Link'
import Image from 'next/Image'
import { FaHome, FaUserTie, FaFileInvoiceDollar } from 'react-icons/fa'

import DateCustom from './DateCustom'
import ItemMenu from './ItemMenu'

export default function Sidebar() {
    
    return (
        <div className="w-60 h-screen py-5 shadow-md border-r-2 relative">
            <div className="logo px-5 pb-5 border-b-2 border-gray-100">
                <Link href="/">         
                    <a className="flex justify-between items-center"> 
                        <Image src="/presupuesto.png" width={60} height={60} />
                        <h1 className="w-full text-2xl font-bold px-5 text-green-600">PresuApp</h1>
                    </a>
                </Link>
            </div>
            <div className="navLinks">
                <ItemMenu 
                    url="/"
                    name="Inicio"
                >
                    <FaHome />
                </ItemMenu>
                <ItemMenu 
                    url="/presuepuesto"
                    name="Presuepuesto"
                >
                    <FaFileInvoiceDollar />
                </ItemMenu>
                <ItemMenu 
                    url="/personal"
                    name="Personal"
                >
                    <FaUserTie />
                </ItemMenu>
            </div>
            <div className="sidebarFooter">
                <DateCustom />
            </div>
        </div>
    )

}