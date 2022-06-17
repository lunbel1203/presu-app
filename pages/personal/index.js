import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'
import { FaTrash, FaRegEye, FaPencilAlt } from "react-icons/fa";
import DataTable from 'react-data-table-component'

import Header from '../../components/Header'
import { PersonalForm } from '../../components/PersonalForm'
import Sidebar from '../../components/Sidebar';

function PersonalPage({personalData}) {

    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [dataDetails, setDataDetails] = useState();

    const columns = [
        {
            name: 'Descripción',
            selector: row => row.descripcion,
            width: '15%',
        },
        {
            name: 'Hora Hombre',
            selector: row => row.hora_hombre,
        },
        {
            name: 'Salario Navidad',
            selector: row => row.salario_navidad
        },
        {
            name: 'Bono Anual',
            selector: row => row.bono_anual
        },
        {
            name: 'Cesantia',
            selector: row => row.cesantia
        },
        {
            name: 'Preaviso',
            selector: row => row.preaviso
        },
        {
            name: 'ARS',
            selector: row => row.ars,
            width: '4%'
        },
        {
            name: 'AFP',
            selector: row => row.afp,
            width: '4%'
        },
        {
            name: 'Infotep',
            selector: row => row.infotep,
            width: '5%'
        },
        {
            name: 'Subtotal',
            selector: row => row.subtotal
        },
        {
            name: 'Beneficio',
            selector: row => row.beneficio
        },
        {
            name: 'Precio Venta',
            selector: row => row.precio_venta
        },
        {
            name: 'Acción',
            cell: row =>
            <>
                <button className="text-[20px] text-gray-500" onClick={() => modalView(row)}><FaRegEye /></button>
                <button className="text-[20px] text-gray-500 px-3" onClick={() => ModalEdit(row.idPersonal)}><FaPencilAlt /></button>
                <button className="text-[20px] text-red-500" onClick={() => handleDelete(row.idPersonal)}><FaTrash /></button>
            </>,
            ignoreRowClicks: true,
            allowOverflow: true,
            button: true,
        }
    ]

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#235789',
                color: '#FFFFFF',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
        },
        rows: {
            style: {
                minHeight: '50px', 
                '&:nth-child(even)': {
                    backgroundColor: '#F5F5F5'
                },
                padding: '0px 10px',
                '&:hover': { 
                    backgroundColor: '#f2f2f2',
                }
            }
        },
        cells: {
            style: {
                paddingLeft: '8px', 
                paddingRight: '8px',
            },
        }
    };

    const paginationComponent = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllItem: true,
        selectAllRowItemText: 'Todos'
    }

    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete('api/personal/' + id);
        router.push('/personal');
    }
    
    const modalCreate = () => {
        setOpenModalCreate(true);
    }
    
    const ModalEdit = (id) => {
        setOpenModalEdit(true);
    }

    // const modalView = row => {
    //     setOpenModalCreate(true);
    //     setDataDetails(row);
    // }

    return (
        <div className="main flex justify-start">
            <Sidebar />
            <div className="mainContent flex-auto">
                <Header title="Personal" />
                <div className="w-full flex flex-wrap justify-between p-5">
                    <div className="options w-full flex justify-end items-center gap-x-5 border-b pb-5 mb-10">
                        <div className="searchData flex flex-auto justify-start items-center">
                            <input type="text" placeholder="¿Que desea buscar?" className="w-full bg-gray-100 p-3 rounded-l-md" />
                            <a className="bg-yellow-400 border px-10 py-3 rounded-r-md">X</a>
                        </div>
                        <button 
                            className="flex justify-center items-center text-white px-10 py-3 bg-green-600 cursor-pointer hover:bg-green-700 rounded-md" 
                            onClick={() => modalCreate()}
                        >Crear</button>
                    </div>
                    <div className="w-full">
                        <DataTable 
                            columns={columns}
                            data={personalData}
                            customStyles={customStyles}
                            fixedHeader={true}
                            fixedHeaderScrollHeight="400px"
                            noDataComponent="No hay datos disponibles"
                            // pagination
                            // striped="red"
                            // paginationComponentOptions={paginationComponent}
                        />
                    </div>
                </div> 
            </div>

            <div className={`w-screen h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center z-50 ${openModalCreate ? '' : 'hidden' }`}>
                <div className="w-9/12 bg-white px-10 py-5 rounded-lg">
                    <div className="modalheader w-full flex justify-between items-center mb-10">
                        <h4 className="text-3xl text-blue-600 font-bold">Crear personal</h4>
                        <span 
                            className="w-5 h-5 flex justify-center items-center bg-[#a4a4a4] text-white p-3 cursor-pointer rounded-full" 
                            onClick={() => setOpenModalCreate(false)}
                        >X</span>
                    </div>
                    <div className="modalBody">
                        <PersonalForm closeModal={() => setCloseModalCreate(false)} />
                    </div>
                </div>
            </div>

            <div className={`w-screen h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center z-50 ${openModalEdit ? '' : 'hidden' }`}>
                <div className="w-9/12 bg-white p-5 rounded-lg">
                    <div className="modalheader w-full flex justify-between items-center mb-10">
                        <h4 className="text-3xl text-blue-600 font-bold">Editar personal</h4>
                        <span 
                            className="w-5 h-5 flex justify-center items-center bg-gray-400 text-white p-3 cursor-pointer rounded-full" 
                            onClick={() => setOpenModalCreate(false)}
                        >X</span>
                    </div>
                    <div className="modalBody">
                        <PersonalForm />
                    </div>
                </div>
            </div>

        </div>
    )
}

export const getServerSideProps = async (context) => {
    const { data: personalData } = await axios.get(
        "http://localhost:3000/api/personal"
    )

    return {
        props: {
            personalData,
        }
    }
}

export default PersonalPage