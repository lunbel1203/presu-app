import React from 'react'
import Head from 'next/Head'

export default function Header({title}) {
    
    return (
        <>
            <Head>
                <title>PresuApp - {title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full flex justify-start items-center border-b p-5 bg-blue-50">
                <h1 className="pageTitle text-3xl text-blue-700 font-semibold">{title}</h1>
            </div>
        </>
    )

}