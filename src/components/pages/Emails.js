import React from "react";
import { Link } from "react-router-dom";


class Emails extends React.Component{

    render(){

        return (

            
        <div className="container-fluid">

            <p className="container-fluid text-center mt-2 mb-4">Bandeja de Entrada</p>

            <div className="d-flex row pt-2 pb-2" style={{background: 'aliceblue'}} action="" method="" id="">

                <div className="col-1 text-center nav_act p">
                <p>ID</p>   
                </div>

                <div className="col-2 text-center nav_act">
                <p>Usuario</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>Cargo</p>  
                </div>

                <div className="col-2 text-center nav_act">
                <p>Asunto</p>
                </div>

                <div className="col-5 text-center nav_act">
                <p>Mensaje</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>Hora</p>
                </div>

            </div>

            <form className="select d-flex row pt-2 pb-2" action="" method="post" id="">

            <div className="col-1 text-center nav_act p">
                <p>1</p>   
                </div>

                <div className="col-2 text-center nav_act">
                <p>Jorge Lopez</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>Jefe RR.HH</p>  
                </div>

                <div className="col-2 text-center nav_act">
                <p>Informes de nuevos ingresantes</p>
                </div>

                <div className="col-5 text-center nav_act">
                <p>hola queria saber como iban los informes...</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>11:22 pm</p>
                </div>
            </form>

            <div className="text-center mt-5 mb-5">
                <Link to="/emails/send">
                <input type="button" value="Nuevo Email"/>
                </Link>
            </div>
                
        </div>

            

            
        )
    }

}

export default Emails;