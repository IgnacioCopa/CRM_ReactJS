import React from "react";

class Contact extends React.Component{

    render(){

        function newContact(){

            let contact=document.getElementById('contact');

            if(contact.style.display==="flex"){

                contact.style.display="none";
            }

            else{

                contact.style.display="flex"
            }
        }

        return (

            <div className="container-fluid">

            <div className="d-flex row pt-2 pb-2" style={{background: 'aliceblue'}} action="" method="" id="">

                <div className="col-1 text-center nav_act ">
                <p>ID</p>   
                </div>

                <div className="col-2 text-center nav_act">
                <p>Nombre</p>
                </div>

                <div className="col-2 text-center nav_act">
                <p>Telefono</p>  
                </div>

                <div className="col-2 text-center nav_act">
                <p>E-mail</p>
                </div>

                <div className="col-2 text-center nav_act">
                <p>Empresa / Sector</p>
                </div>

                <div className="col-2 text-center nav_act">
                <p>Detalles de Referencia</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>Opciones</p>
                </div>

            </div>


            <form className="select d-flex row pt-2 pb-2" action="" method="post" id="">

                <div className="col-1 text-center nav_act ">
                <p>1</p>   
                </div>

                <div className="col-2 text-center nav_act">
                <p>Marcos</p>
                </div>

                <div className="col-2 text-center nav_act">
                <p>11-2756-5532</p>  
                </div>

                <div className="col-2 text-center nav_act">
                <p>Marcos2021@gmail.com</p>
                </div>

                <div className="col-2 text-center nav_act">
                <p>Inmoviliaria Suarez</p>
                </div>

                <div className="col-2 text-center nav_act">
                <p>Alquileres en GBA-Zona Norte</p>
                </div>

                <div className="col-1 text-center">
                <input type="submit" value="Editar"/>
                </div>  

            </form>

            <div className="row" id="contact" style={{background: 'aliceblue',display: 'none'}}>

                <div className="col-1 text-center ">
                <input className="container" type="text" name=""/>   
                </div>

                <div className="col-2 text-center ">
                <input className="container" type="text" name=""/>
                </div>

                <div className="col-2 text-center ">
                <input className="container" type="text" name=""/>
                </div>

                <div className="col-2 text-center ">
                <input className="container" type="text" name=""/>
                </div>

                <div className="col-2 text-center ">
                <input className="container" type="text" name=""/>
                </div>

                <div className="col-2 text-center ">
                <input className="container" type="text" name=""/>
                </div>

                <div className="col-1 text-center">

                    <div className="d-flex justify-content-center">
                    <input className="me-3" type="submit" value="Crear" method="post"/>
                    <input className="" type="button" value="Cancelar" onClick={()=>newContact()}/>
                    </div>

                </div>

            </div>

            <div className="container-fluid text-center pt-5 pb-5">
            <input type="submit" value="Nuevo Contacto" onClick={()=>newContact()}/>
            </div>


        </div>

        )
    }

}

export default Contact;