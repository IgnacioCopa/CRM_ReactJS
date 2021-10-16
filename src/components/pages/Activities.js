import React from "react";
import { useEffect, useState } from 'react';

//estilos
import "../css/Activities.css";

//firebase
import app from "../../firebase";

//traer documentopd de firebase
import { getFirestore , doc, getDocs, collection, setDoc, updateDoc } from "@firebase/firestore";



//firebase BaseDeDatos
const firestore = getFirestore(app);


const Activities = ({user_mail})=>{

    
    console.log(user_mail);

    //ESTADO MOSTRAR DATOS
    const [print, setPrint] = useState([]);

    //ESTADO AGREGAR DATOS

    useEffect(()=>{

        obtenerDatos();
        //enviarDatos();
        

    },[])


    //mostrar datos del servidor
    const obtenerDatos = async () =>{

        const datos = await getDocs(collection(firestore,'Usuarios'));
        //console.log(datos.docs[0]._document.data.value.mapValue.fields.activities.arrayValue.values);

        const data = await datos.docs[0]._document.data.value.mapValue.fields.activities.arrayValue.values;
        console.log(data);
        setPrint(data);

    }

    //enviar datos al servidor
    const enviarDatos = async () =>{

        try{

        const addData = await setDoc(doc(firestore,`Usuarios`,user_mail),{

            activities:   
            [{
    
                Area: "Ada",
                estado: "Lovelace",
                fecha_entrega: "2021-08-12",
                fecha_inicio: "2021-09-12",
                feedback: "",
                reporte: "",
                tarea_realizar: "",
    
    
            },
            {
                Area: "Ada",
                estado: "Lovelace",
                fecha_entrega: "2021-08-12",
                fecha_inicio: "2021-09-12",
                feedback: "",
                reporte: "",
                tarea_realizar: "",
            
        
            }]

            

        })
                
        } 

        catch(e){

            console.error("Error adding document: ", e);
        }

    }



    //FUNCIONES---------------------------------------------------------------------------------------------------->

    //enviar reporte
    function sendReport() {
            
        let report=document.getElementById('report');

        if(report.style.display==="block"){

            report.style.display="none";
        }

        else{

            report.style.display="block"
        }
           
    }

    //checkbox
    function checkReport(){

        let exito = document.getElementById('exito');
        let inconvenientes = document.getElementById('inconvenientes');
        let noRealizada = document.getElementById('noRealizada');

        if(exito.checked){

            inconvenientes.checked=false;
            noRealizada.checked=false;
        }

        else if(inconvenientes.checked){

            exito.checked=false;
            noRealizada.checked=false;
        }

        else if(noRealizada.checked){

            inconvenientes.checked=false;
            exito.checked=false;
        }

    }
        

    //interface--------------------------------------------------------------------------------->

    return (


            <div className="container-fluid">

                <div className="d-flex row" style={{background: 'aliceblue'}} action="" method="" id="">

                    <div className="col-1 text-center nav_act">
                    <p>Fecha De Inicio</p>   
                    </div>

                    <div className="col-1 text-center nav_act">
                    <p>Area</p>   
                    </div>

                    <div className="col-6 text-center nav_act">
                    <p>Tarea A Realizar</p>
                    </div>

                    <div className="col-1 text-center nav_act">
                    <p>Fecha De Entrega</p>  
                    </div>

                    <div className="col-1 text-center nav_act">
                    <p>Estado</p>
                    </div>

                    <div className="col-2 text-center nav_act">
                    <p>Reportes</p>
                    </div>

                </div>


                <form className="select d-flex row pt-2 pb-2" id="">

                    <div className="col-1 text-center nav_act">
                    {print.map( data =>( <p >{(data.mapValue.fields.fecha_inicio.timestampValue).slice(0,-10)}</p>  ))}
                    </div>

                    <div className="col-1 text-center nav_act">
                    {print.map( data =>( <p >{(data.mapValue.fields.Area.stringValue)}</p>  ))} 
                    </div>

                    <div className="col-6 text-center nav_act">
                    {print.map( data =>( <p >{(data.mapValue.fields.tarea_realizar.stringValue)}</p>  ))}
                    </div>

                    <div className="col-1 text-center nav_act">
                    {print.map( data =>( <p >{(data.mapValue.fields.fecha_entrega.timestampValue).slice(0,-10)}</p>  ))}
                    </div>

                    <div className="col-1 text-center nav_act">
                    {print.map( data =>( <p >{(data.mapValue.fields.estado.stringValue)}</p>  ))}
                    </div>

                    <div className="col-2 text-center nav_act">
                    <input type="button" value="Enviar Reporte" onClick={()=>sendReport()}/>
                    </div> 

                    <div className="text-center pt-3 pb-4 ps-0 pe-0" id="report" style={{position: 'absolute', background: 'aliceblue', borderRadius: '25px', width: '50%', left: '24%' , display: 'none'}}>
                        <p className="text-center pb-3">Reporte</p>
                        <textarea placeholder=" Mensaje" name="report_message" id="" cols="30" rows="10" style={{outline: 'none', width: '80%'}}></textarea>

                        <div>

                            <p>Marque El estado de la actividad extregada con:</p>
                            <div className="d-flex" style={{alignItems: 'center', justifyContent: 'center'}}><input type="checkbox" name="" id="exito" value="Exito" onClick={()=>checkReport()}/><p>Exito</p></div>
                            <div className="d-flex" style={{alignItems: 'center', justifyContent: 'center'}}><input type="checkbox" name="" id="inconvenientes" value="Inconvenientes" onClick={()=>checkReport()}/><p>Inconvenientes</p></div>
                            <div className="d-flex" style={{alignItems: 'center', justifyContent: 'center'}}><input type="checkbox" name="" id="noRealizada" value="No realizada" onClick={()=>checkReport()}/><p>No realizada</p></div>
                            
                            <div className="d-flex justify-content-center mt-3">
                            <input className="me-3" type="submit" value="Enviar" method="post"/>
                            <input className="ms-3" type="button" value="Cancelar" onClick={()=>sendReport()}/>
                            </div>

                        </div>

                    </div>
                     
                </form>



            </div>
        )
    

}

export default Activities;