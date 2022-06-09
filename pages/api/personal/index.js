import { pool } from '../../../config/db'

export default async function handler (req, res) {
    switch (req.method) {
        case 'GET': 
            return await getPersonal(req, res)
        case 'POST':
            return await savePersonal(req, res)
    }

}

const getPersonal = async (req, res) => {
    const [resultado] = await pool.query('SELECT * FROM personal')
    return res.status(200).json(resultado);
}

const savePersonal = async (req, res) => {
    const { 
        descripcion, 
        sueldo,
        hora_hombre,
        salario_navidad,
        salario_vacaciones,
        bono_vacaciones,
        bono_anual,
        cesantia, 
        preaviso,
        ars, 
        afp, 
        riesgo_laboral,
        infotep,
        uniforme,
        herramientas_pequenas,
        subtotal,
        beneficio,
        precio_venta
    } = req.body;

    const [resultado] = await pool.query('INSERT INTO personal SET ?', {
        descripcion: descripcion,
        sueldo: sueldo,
        hora_hombre: hora_hombre,
        salario_navidad: salario_navidad,
        salario_vacaciones: salario_vacaciones,
        bono_vacaciones: bono_vacaciones,
        bono_anual: bono_anual,
        cesantia: cesantia,
        preaviso: preaviso,
        ars: ars,
        afp: afp,
        riesgo_laboral: riesgo_laboral,
        infotep: infotep,
        uniforme: uniforme,
        herramientas_pequenas: herramientas_pequenas,
        subtotal: subtotal,
        beneficio: beneficio,
        precio_venta: precio_venta,
    });

    return res.status(200).json({
        descripcion,
        sueldo,
        hora_hombre,
        salario_navidad,
        salario_vacaciones,
        bono_vacaciones,
        bono_anual,
        cesantia,
        preaviso,
        ars,
        afp,
        riesgo_laboral,
        infotep,
        uniforme,
        herramientas_pequenas,
        subtotal,
        beneficio,
        precio_venta,
    });
} 