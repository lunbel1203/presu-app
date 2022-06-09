import { pool } from '../../../config/db';

export default async function handler (req, res) {
    switch (req.method) {
        case 'GET':
            return await getPersonal(req, res);

        case 'DELETE':
            return await deletePersonal(req, res);

        default:
            break;

    }
}

const getPersonal = async (req, res) => {

    const { id } = req.query;

    const [resultado] = await pool.query('SELECT * FROM personal WHERE id = ?', [id] );
    return res.status(200).json(resultado[0]);

}

const deletePersonal = async (req, res) => {

    const { id } = req.query;

    const [resultado] = await pool.query('DELETE FROM personal WHERE idPersonal = ?', [id] );
    return res.status(204).json();

}