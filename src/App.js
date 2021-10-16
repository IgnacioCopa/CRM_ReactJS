//cargar solo una vez la peticion a firebase
import { useEffect } from 'react'

//conectar a firebase
import db from './firebase'
import { collection, getDocs } from "firebase/firestore"; //acceder a la coleccion y los documentos almacenados
import {  addDoc } from "firebase/firestore"; //agregar documentos a las colecciones
import { updateDoc,doc} from "firebase/firestore" //actualizar documentos a las colecciones
import { deleteDoc } from '@firebase/firestore'; //borrar documentos completo de las colecciones
import { deleteField } from '@firebase/firestore'; //borrar campos especificos de las colecciones
import { setDoc } from '@firebase/firestore'; //borrar y actualizar documento 


//BASE DE DATOS-------------------------------------------->

const App = () =>{

    

    useEffect(()=>{

        //traer datos del servidor------------------------------------------------------------------------------>


        const obtenerDatos = async () =>{

            const datos = await getDocs(collection(db,'Usuarios'));
            console.log(datos.docs[0]._document.data.value.mapValue.fields);
        }


        //agregar datos del servidor------------------------------------------------------------------------------>

        /*const enviarDatos = async () =>{
            try{

                const addData = await addDoc(collection(db, "Usuarios"), {
                contact: "Ada",
                emails: "Lovelace",
                });
                
                console.log("Document written with ID: ", addData.id);
            } 
            catch(e){

                console.error("Error adding document: ", e);
            }

        }*/


        //actualizar datos--------------------------------------------------------------------------------------->

        /*const actualizarDatos = async () =>{

            try{

                const updateData = await updateDoc(doc(db,'Usuarios','nGFyPq5n2FXni3sRaurZ'),{
                contact: "Osas",
                emails: "ufuwewewe",
                });
                
                //console.log("Document written with ID: ", doc(db,'Usuarios',updateData[1].id));
            } 
            catch(e){

                console.error("Error adding document: ", e);
            }

        }*/

        //borrar documento completo------------------------------------------------------------------------------>

        /*const borrarDatos = async () =>{

            try{

                const deleteData = await deleteDoc(doc(db,'Usuarios','UV93u93Fm9IlvikqEqov'));
                
            } 
            catch(e){

                console.error("Error adding document: ", e);
            }

        }*/

        //borrar campos del documento padre------------------------------------------------------------------------------>

        /*const borrarCampos = async () =>{

            try{

                const deleteData = await updateDoc(doc(db,'Usuarios','UV93u93Fm9IlvikqEqov'),{

                    prueba: deleteField(),

                });
                
            } 
            catch(e){

                console.error("Error adding document: ", e);
            }

        }*/

        //borrar colecciones del documento padre------------------------------------------------------------------------------>

        const borrarColecciones = async () =>{
            
            try{

                const deleteData = await updateDoc(doc(db,'Usuarios','HGFAvIZfLHsE3ssihul7'),{

                    "prueba.usu1.asd": deleteField(),

                });
                
            } 
            catch(e){

                console.error("Error adding document: ", e);
            }

        }  

        obtenerDatos();
        //enviarDatos();
        //actualizarDatos();
        //borrarDatos();
        //borrarCampos();
        borrarColecciones();

    },[])


    



    return (<h1>asdasdas</h1>)

}

export default App;