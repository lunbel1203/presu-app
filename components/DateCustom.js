import React, { useState, useEffect } from 'react'
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'

export default function DateCustom() {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className="w-full absolute bottom-0 p-5">
            <div className="dateTime flex justify-start items-center py-2">
                <FaRegCalendarAlt />
                <span className="pl-3 uppercase">{`${dateState.toLocaleDateString('es-ES', { weekday: 'long', month: 'short', day: 'numeric'})}`}</span>
            </div>
            <div className="dateTime flex justify-start items-center py-2">
                <FaRegClock />
                <span className="pl-3 uppercase">{`${dateState.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true })}`}</span>
            </div>
        </div>
    )

}