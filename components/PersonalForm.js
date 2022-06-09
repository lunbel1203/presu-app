import { useState, useEffect } from 'react';
import axios from "axios";

export function PersonalForm() {

    const [personal, setPersonal] = useState({
        descripcion: '',
        sueldo: 0,
        hora_hombre: 0,
        salario_navidad: 0,
        salario_vacaciones: 0,
        bono_vacaciones: 0,
        bono_anual: 0,
        cesantia: 0,
        preaviso: 0,
        ars: 0,
        afp: 0,
        riesgo_laboral: 0,
        infotep: 0,
        uniforme: 0,
        herramientas_pequenas: 0,
        subtotal: 0,
        beneficio: 0,
        precio_venta: 0,
    });

    const [sumaSubtotal, setSumaSubtotal] = useState(0);
    const [precioVenta, setPrecioVenta] = useState(0)

    const descriptionChange = ({ target: { name, value } }) => {
        setPersonal({...personal, [name]: value});
    }

    const handlerChange = ({ target: { name, value } }) => {
        setPersonal({...personal, [name]: parseFloat(value)});
        console.log(personal)
    }

    useEffect(() => {
        if(personal.descripcion === '') return;

        const {hora_hombre, salario_navidad, salario_vacaciones, bono_vacaciones, bono_anual, cesantia, preaviso, ars, afp, riesgo_laboral, infotep, uniforme, herramientas_pequenas} = personal;
        setSumaSubtotal(parseFloat(hora_hombre) + parseFloat(salario_navidad) + parseFloat(salario_vacaciones) + parseFloat(bono_vacaciones) + parseFloat(bono_anual) + parseFloat(cesantia) + parseFloat(preaviso) + parseFloat(ars) + parseFloat(afp) + parseFloat(riesgo_laboral) + parseFloat(infotep) + parseFloat(uniforme) + parseFloat(herramientas_pequenas))
        
        const {subtotal, beneficio} = personal;
        setPrecioVenta(parseFloat(subtotal) + parseFloat(beneficio))

    }, [personal])
    
    useEffect(() => {
        setPersonal({...personal, subtotal: sumaSubtotal})
        setPersonal({...personal, precio_venta: precioVenta})
    }, [sumaSubtotal, precioVenta])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await axios.post('/api/personal', personal);
    }

    return(
        <form onSubmit={handleSubmit} className="w-full flex flex-wrap justify-start gap-x-5 gap-y-5">
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="descipcion">Descripción</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="descripcion" 
                    placeholder="Descripción" 
                    onChange={descriptionChange} 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="sueldo">Sueldo</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="sueldo" 
                    placeholder="Sueldo" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="hora_hombre">Hora hombre</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="hora_hombre" 
                    placeholder="Hora hombre" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="salario_navidad">Salario navidad</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="salario_navidad" 
                    placeholder="Salario navidad" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="vacaciones">Salario Vacaciones</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="salario_vacaciones" 
                    placeholder="Salaraio Vacaciones" 
                    onChange={handlerChange} 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="bono_vacaciones">Bono vacaciones</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="bono_vacaciones" 
                    placeholder="Bono vacaciones" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="bono_anual">Bono anual</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="bono_anual" 
                    placeholder="Bono anual" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="cesantia">Cesantia</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="cesantia" 
                    placeholder="Cesantia" 
                    onChange={handlerChange} 
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="preaviso">Preaviso</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="preaviso" 
                    placeholder="Preaviso" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="ars">ARS</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="ars" 
                    placeholder="ARS" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="afp">AFP</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="afp" 
                    placeholder="AFP" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="riesgo_laboral">Riesgo laboral</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="riesgo_laboral" 
                    placeholder="Riesgo laboral" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="infotep">Infotep</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="infotep" 
                    placeholder="Infotep" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="uniforme">Uniforme</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="uniforme" 
                    placeholder="Uniforme" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="herramientas_pequenas">Herramientas pequeñas</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="herramientas_pequenas" 
                    placeholder="Herramientas pequeñas" 
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="subtotal">Subtotal</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="subtotal" 
                    placeholder="Subtotal" 
                    onChange={handlerChange}
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
                    onChange={handlerChange}
                />
            </div>
            <div className="wrapper-input w-2/12">
                <label className="text-[18px]" htmlFor="precio_venta">Precio venta</label>
                <input 
                    className="w-full bg-gray-200 placeholder:text-gray-600 border-2 py-2 px-3" 
                    type="text" 
                    name="precio_venta" 
                    placeholder="Precio venta" 
                    onChange={handlerChange}
                    value={parseFloat(personal.precio_venta).toFixed(2)}
                />
            </div>

            <div className="w-full mt-5">
                <button className="py-2 px-10 bg-green-500 text-lg text-white">Guardar personal</button>
            </div>
        </form>
    )
}