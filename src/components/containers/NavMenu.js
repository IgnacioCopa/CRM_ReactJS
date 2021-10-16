//usar hook estados de react
import { React, useState } from "react";

//router para cambiar paginas
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

//firebase
import app from "../../firebase";
//autenticacion
import {getAuth, signOut , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

//estilos
import "bootstrap/dist/css/bootstrap.css"
import "../css/Nav_Menu.css"

//paginas
import Home from "../pages/Home"
import Contact from "../pages/Contact";
import Activities from "../pages/Activities";
import Emails from "../pages/Emails";
import Chat from "../pages/Chat";
import AccountManager from "../pages/AccountManager";
import Statistics from "../pages/Statistics";
import send_Email from "../pages/send_Email";

import NotFound from "../pages/NotFound";


const NavMenu = () =>{

    //firebase Autenticacion (mail)
    const auth = getAuth(app);

    //firebase Autencication (google)
    const googleProvider = new GoogleAuthProvider();
  
    //estados del usuario
    const [usuario, setUsuario] = useState(null); 



        var open=false;
        let res_menu;

        window.onload = function() {
            document.getElementById("change").addEventListener("click",open_menu);
            res_menu= document.getElementById("block_menu");
            
        }

        function open_menu(){
    
            if(open===false){
        
                document.querySelector(".container_box").style.display="none";
                document.querySelector(".menu").style.display="block";
                document.querySelector(".user").style.display="none";
                document.getElementById("search").style.display="none";
                document.getElementById("box_content").style.display="block";
                document.getElementById("change").style.padding="1.5% 2.5%";
        
                res_menu.style.display="block";
                res_menu.style.position="absolute";
                res_menu.style.zIndex="1";
                res_menu.style.minHeight="100vh";
                open=true;
            }
            else{
        
                document.querySelector(".container_box").style.display="block";
                document.querySelector(".menu").style.display="none";
                document.querySelector(".user").style.display="flex";
                document.getElementById("box_content").style.display="flex";
                document.getElementById("search").style.display="flex";
                document.getElementById("change").style.padding="0 15px";
                document.getElementById("change").style.margin="0 15px";
                res_menu.style.display="block";
                res_menu.style.position="relative";
                res_menu.style.zIndex="0";
                res_menu.style.minHeight="0";
                open=false;
        
            }
        
        }

        //login ------------------------------------------------------------------------------------------------------->

        //Login (MAIL)--------->

        let login = ()=>{

            let entry = document.getElementById('LOGIN');
            let entry2 = document.getElementById('REGISTER');
            let entry3 = document.querySelector('.turnOff_container');

            if(usuario){

                if(entry3.style.display==="flex"){

                    entry.style.display="none";
                    entry2.style.display="none";
                    entry3.style.display="none";
                }

                else{

                    entry.style.display="none";
                    entry2.style.display="none";
                    entry3.style.display="flex";
                }
            }

            else{

                if(entry.style.display==="block"){

                    entry.style.display="none";
                    entry2.style.display="none";
                }

                else if(entry2.style.display==="block"){

                    entry.style.display="none";
                    entry2.style.display="none";
                }
    
                else{
    
                    entry.style.display="block";
                    
                }
            }
        }

        
        let UserHandler = async(e) =>{

            e.preventDefault(); //evita la recarga de la pagina
        
            const u_mail = e.target.mail_in.value; //tomar el valor de mail
        
            const u_password = e.target.password_in.value; //tomar el valor de password
            
            //logea un usuario en firebase
            const user = await signInWithEmailAndPassword(auth,u_mail,u_password);
            console.log(user);


        }

        //register---------------------------------------------------------------------------------------------------->

        let register = ()=>{

            let entry = document.getElementById('LOGIN');
            let entry2 = document.getElementById('REGISTER');
            let entry3 = document.querySelector('.turnOff_container');

            if(usuario){

                if(entry3.style.display==="flex"){

                    entry.style.display="none";
                    entry2.style.display="none";
                    entry3.style.display="none";
                }

                else{

                    entry.style.display="none";
                    entry2.style.display="none";
                    entry3.style.display="flex";
                }
            }

            else{

                if(entry.style.display==="block"){

                    entry.style.display="none";
                    entry2.style.display="block";
                }

                else{

                    entry.style.display="block";
                    entry2.style.display="none";

                }

            }


        }       

        //recive un evento "e"
        let submitHandler = async(e) => {

            e.preventDefault(); //evita la recarga de la pagina
        
            const mail = e.target.mail_to.value; //tomar el valor de mail
        
            const password = e.target.password_to.value; //tomar el valor de password
            
            //crear un usuario en firebase
            const user = await createUserWithEmailAndPassword(auth,mail,password);
            console.log(user);

        }
        
        //ESTADO DE USUARIO ACTIVO O NO (GOOGLE)------------------------------------------------------------------------------>

        //recive la salida de google y trae el usuario
        onAuthStateChanged(auth,(user)=>{

            if(user){

                setUsuario(user);
                document.getElementById('LOGIN').style.display="none";
                

            }
            else{
                setUsuario(null);
                document.querySelector('.turnOff_container').style.display="none";
                
            }
        })

        return(
            <BrowserRouter>
            <div>
               <nav className="Position_nav" aria-label="breadcrumb">
               <ol style={{position: 'relative'}} className="breadcrumb mb-5 justify-content-between container-fluid bg-primary p-3" id="block_menu">
               <div className="justify-content-between container-fluid" id="box_content">
               <h1 className="text-center m-0 align-items-center fs-3 text-light me-3" style={{display: 'flex', justifyContent: 'center'}}>CRM</h1>
               

               <div className="search_" id="search">
                <input type="text" className="form-control" id="name"/>
                <i className="fas fa-search" style={{ alignSelf: 'center', opacity: '0.7', marginLeft: '-30px'}}></i>
               </div>
               


               <div className="responsive_menu">
                        <button id="change" style={{border: 'none', borderRadius: '5px', padding: '0 15px',margin: '0 15px'}}>
                            <i className="fas fa-bars"></i>
                        </button>
                </div>

                <div className="container-fluid menu align-items-center text-center justify-content-around" id="menu">
                
                    <Link className="nav_bar text-light p-2" to={{pathname: "/activities", }} style={{textDecoration: 'none',display: 'flex' ,justifyContent: 'center'  }}>
                    <li className=" breadcrumb-item " aria-current="page"></li>
                    <i className="fas fa-clipboard-check me-2" style={{color: 'white',fontSize: '25px'}}></i>
                    <p className="char">Actividades</p>
                    </Link>
                    

                    <Link className="nav_bar text-light p-2" to="/contact" style={{textDecoration: 'none',display: 'flex' ,justifyContent: 'center' }}>
                    <li className=" breadcrumb-item " aria-current="page"></li>
                    <i className="far fa-address-card me-2" style={{color: 'white',fontSize: '25px'}}></i>
                    <p className="char">Contactos</p>
                    </Link>
                    
                    <Link className="nav_bar text-light p-2" to="/emails" style={{textDecoration: 'none',display: 'flex' ,justifyContent: 'center'  }}>
                    <li className=" breadcrumb-item" aria-current="page"></li>
                    <i className="far fa-envelope me-2" style={{color: 'white',fontSize: '25px'}}></i>
                    <p className="char">E-mails</p>
                    </Link>
                    
                    <Link className="nav_bar text-light p-2" to="/chat" style={{textDecoration: 'none',display: 'flex' ,justifyContent: 'center'  }}>
                    <li className=" breadcrumb-item" aria-current="page"></li>
                    <i className="far fa-comment-alt me-2" style={{color: 'white',fontSize: '25px'}}></i>
                    <p className="char">Chat</p>
                    </Link>
                    
                    <Link className="nav_bar text-light p-2" to="/accountManager" style={{textDecoration: 'none',display: 'flex' ,justifyContent: 'center'  }}>
                    <li className=" breadcrumb-item" aria-current="page"></li>
                    <i className="fas fa-users-cog me-2" style={{color: 'white',fontSize: '25px'}}></i>
                    <p className="char">Cuentas Administradas</p>
                    </Link>

                    <Link className="nav_bar text-light p-2" to="/statistics" style={{textDecoration: 'none',display: 'flex' ,justifyContent: 'center'  }}>
                    <li className=" breadcrumb-item" aria-current="page"></li>
                    <i className="fas fa-chart-line me-2" style={{color: 'white',fontSize: '25px'}}></i>
                    <p className="char">Estadisticas</p>
                    </Link>
                
                </div>

                <Link to="#" className="char2" style={{textDecoration: 'none' ,color: "white"}} onClick={login}>
                    <i className="fas fa-user user" style={{ fontSize: '20px',background: 'gray',padding: '10px', borderRadius: '30px', marginRight: '15px'}}></i>
                    <div >
                        <p className="perfil" style={{margin: '0',fontSize: '20px'}}>Roberto Valverde</p>
                        <p className="perfil" style={{margin: '0',fontSize: '10px'}}>Administrador de Proyecto</p>
                    </div> 
                </Link>

               </div>
               </ol>
                </nav>

                <div className="container_box">

                    <div className="turnOff_container" onClick={() =>signOut(auth)}>
                        <p className="turnOff"><i className="fas fa-power-off turnOff_logo"/>Cerrar sesión</p>
                    </div>

                    <Switch>
                       { usuario ? <Route exact path="/"> <Activities user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/activities" > <Activities user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/contact" > <Contact user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/emails" > <Emails user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/emails/send" > <send_Email user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/chat" > <Chat user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/accountManager" > <AccountManager user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>}
                       { usuario ? <Route exact path="/statistics"  ><Statistics user_mail={usuario.email}/> </Route> : <Route exact path="/" component={Home}/>} 
                        
                       { usuario ? <Route component={NotFound}/> : <Route component={Home}/>}
                        
                    </Switch>
            
                </div>

                <form id="LOGIN" className="login" onSubmit={UserHandler}  >

                    <div>
                        <p className="text-center mb-3" style={{color: 'white', fontSize: '25px'}}>Iniciar Sesión</p>
                        <i className="fas fa-user user" style={{ justifyContent: 'center', display: 'flex', fontSize: '127px', color: 'white', padding: '10px', marginBottom: '30px'}}></i>
                        <input id="mail_in" className="container" type="email" placeholder="Email" style={{outline: 'none'}}/>
                        <input id="password_in" className="container mt-3 mb-3" type="password" placeholder="Contraseña"  style={{outline: 'none'}}/>
                        <input className="container mb-3" type="submit" value="Ingresar" />
                        <input className="container btn-primary mb-3" type="submit" value="Ingresar con google" onClick={ () => signInWithRedirect(auth,googleProvider) }/>
                    </div>

                    <div className="text-center">
                        <p>¿Aun no estas registrado?</p>
                        <a href="#" onClick={register} style={{textDecoration: 'none', color: 'white'}}>Haz click aquí</a>
                    </div>

                </form>

                <form id="REGISTER" className="login" onSubmit={submitHandler}>

                    <div>
                        <p className="text-center mb-3" style={{color: 'white', fontSize: '25px'}}>Registrate</p>
                        <i className="fas fa-user user" style={{ justifyContent: 'center', display: 'flex', fontSize: '127px', color: 'white', padding: '10px', marginBottom: '30px'}}></i>
                        <input id="mail_to" className="container" type="email" placeholder="Email" style={{outline: 'none'}}/>
                        <input id="password_to" className="container mt-3 mb-3" type="password" placeholder="Contraseña"  style={{outline: 'none'}}/>
                        <input className="container mb-3" type="submit" value="Registrarse" />
                    </div>

                    <div className="text-center">
                        <p>¿Estas registrado?</p>
                        <a href="#" onClick={register} style={{textDecoration: 'none', color: 'white'}}>Haz click aquí</a>
                    </div>

                </form>

            </div>
            </BrowserRouter>
        )
    

}

export default NavMenu; 