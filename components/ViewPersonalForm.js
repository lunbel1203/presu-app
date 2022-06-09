import { useState, useEffect } from 'react';

export function PersonalForm(props) {

    return(
        <form className="w-full flex flex-wrap justify-start gap-x-5 gap-y-5">
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="descipcion">Descripción</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="descripcion" 
                    placeholder="Descripción" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="sueldo">Sueldo</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="sueldo" 
                    placeholder="Sueldo" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="hora_hombre">Hora hombre</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="hora_hombre" 
                    placeholder="Hora hombre" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="salario_navidad">Salario navidad</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="salario_navidad" 
                    placeholder="Salario navidad" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="vacaciones">Salario Vacaciones</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="salario_vacaciones" 
                    placeholder="Salaraio Vacaciones"  
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="bono_vacaciones">Bono vacaciones</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="bono_vacaciones" 
                    placeholder="Bono vacaciones" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="bono_anual">Bono anual</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="bono_anual" 
                    placeholder="Bono anual" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="cesantia">Cesantia</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="cesantia" 
                    placeholder="Cesantia" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="preaviso">Preaviso</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="preaviso" 
                    placeholder="Preaviso" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="ars">ARS</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="ars" 
                    placeholder="ARS" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="afp">AFP</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="afp" 
                    placeholder="AFP" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="riesgo_laboral">Riesgo laboral</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="riesgo_laboral" 
                    placeholder="Riesgo laboral" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="infotep">Infotep</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="infotep" 
                    placeholder="Infotep" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="uniforme">Uniforme</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="uniforme" 
                    placeholder="Uniforme" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="herramientas_pequenas">Herramientas pequeñas</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="herramientas_pequenas" 
                    placeholder="Herramientas pequeñas" 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="subtotal">Subtotal</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="subtotal" 
                    placeholder="Subtotal" 
                    value={parseFloat(personal.subtotal).toFixed(2)}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="beneficio">Beneficio</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="beneficio" 
                    placeholder="Beneficio"
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="precio_venta">Precio venta</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="precio_venta" 
                    placeholder="Precio venta" 
                    value={parseFloat(precioVenta).toFixed(2)}
                />
            </div>
        </form>
    )
}