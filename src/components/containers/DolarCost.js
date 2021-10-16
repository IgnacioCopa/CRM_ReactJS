import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class DolarCost extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            compraOfi: "",
            ventaOfi: "",
            compraBlue: "",
            ventaBlue: "",
            compraLiq: "",
            ventaLiq: "",
            compraBol: "",
            ventaBol: "",
            compraSol: "",
            ventaSol: "",

        }
    }

    componentDidMount(){

        let url ="https://www.dolarsi.com/api/api.php?type=valoresprincipales";
    
        fetch(url)
        .then(response => {return response.json()})
        .then(data => {

            console.log(data);

            this.setState( { 
                compraOfi: `${data[0].casa.compra}`,
                ventaOfi: `${data[0].casa.venta}`,
                compraBlue: `${data[1].casa.compra}`,
                ventaBlue: `${data[1].casa.venta}`,
                compraLiq: `${data[3].casa.compra}`,
                ventaLiq: `${data[3].casa.venta}`,
                compraBol: `${data[4].casa.compra}`,
                ventaBol: `${data[4].casa.venta}`,
                compraSol: `${data[6].casa.compra}`,
                ventaSol: `${data[6].casa.venta}`,
            })

        })
    }
        

    render(){

        return (

            <div className="container d-flex justify-content-center">
                <div className="container">
                        <p className="text-center">Dólar Blue</p>
                    <div>
                        <div className="d-flex justify-content-between"><p>Compra</p><p>{this.state.compraBlue}</p></div>
                        <div className="d-flex justify-content-between"><p>Venta</p><p>{this.state.ventaBlue}</p></div>
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-between"><p>Dólar Oficial Promedio</p><p>Compra</p><p>{this.state.compraOfi}</p><p>Venta</p><p>{this.state.ventaOfi}</p></div>
                    <div className="d-flex justify-content-between"><p>Dólar Bolsa</p><p>Compra</p><p>{this.state.compraBol}</p><p>Venta</p><p>{this.state.ventaBol}</p></div>
                    <div className="d-flex justify-content-between"><p>Dólar Contado Con Liqui</p><p>Compra</p><p>{this.state.compraLiq}</p><p>Venta</p><p>{this.state.ventaLiq}</p></div>
                    <div className="d-flex justify-content-between"><p>Dólar Solidario</p><p>Compra</p><p>{this.state.compraSol}</p><p>Venta</p><p>{this.state.ventaSol}</p></div>
                </div>
            </div>
        )

    }


}

export default DolarCost;