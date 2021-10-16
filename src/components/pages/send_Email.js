import React from "react";

class send_Email extends React.Component{

    render(){

        return(

            <div className="Help_us">
            <p className="container-fluid text-center" >Envie los mails nesesarios desde la plataforma sin nesesidad de salir de la aplicación!</p>
            <form className=""  action="#" method="post">

                <div className="container-fluid text-center" style={{display: 'grid', width: '60%'}}>
                <input className="mt-4 pt-1 pb-1" type="text" placeholder=" Nombre o Empresa" name="name"/>
                <input className="mt-3 pt-1 pb-1" type="text" placeholder=" Asunto" name="asunto"/>
                <input className="mt-3 pt-1 pb-1" type="email" placeholder=" E-mail Del Destinatario" name="email"/>
                </div>

                <div className="text-center pt-4">
                <textarea placeholder=" Mensaje" name="message" id="" cols="30" rows="10" style={{outline: 'none', width: '60%'}}></textarea>
                <p className="mail_status"></p>
                </div>

                <div className='text-center mt-2 mb-2'>
                <input className="" type="submit" value="Enviar" name="sendmesagge"/>
                </div>

            </form>
        </div>
        
        )
    }
}

export default send_Email; 