import React from "react";

class Chat extends React.Component{

    render(){
        return(

        <div className="container-fluid">

            <div className="d-flex row pt-2 pb-2" style={{background: 'aliceblue'}} action="" method="" id="">

                <div className="col-1 text-center nav_act p">
                <p>ID</p>   
                </div>

                <div className="col-2 text-center nav_act">
                <p>Usuario</p>
                </div>

                <div className="col-5 text-center nav_act">
                <p>Ultimo Mensaje</p>  
                </div>

                <div className="col-2 text-center nav_act">
                <p>E-mail</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>Estado</p>
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
                <p>Marcelo Araujo</p>
                </div>

                <div className="col-5 text-center nav_act">
                <p>Como estas te llamaba porque nesesitaba saber que onda con...</p>  
                </div>

                <div className="col-2 text-center nav_act">
                <p>Marcelo201@gmail.com</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>Activo</p>
                </div>

                <div className="col-1 text-center nav_act">
                <p>11:47 pm</p>
                </div>

            </form>


        </div>
        )
    }

}

export default Chat;