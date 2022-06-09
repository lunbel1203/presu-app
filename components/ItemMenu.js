import React, { useState, useEffect }from 'react'
import Link from 'next/Link'

export default function ItemMenu(props) {

    const { url, name, children } = props
    
    return (
        <div className="w-full border-b border-gray-20">
            <Link href={`${url}`}>
                <a className={`w-full flex justify-start items-center px-5 py-3 hover:border-r-4 hover:border-green-600 text-xl hover:text-green-600 hover:bg-green-100`}>
                    {children}
                    <span className="pl-5">{name}</span>
                </a>
            </Link>
        </div>
    )

}