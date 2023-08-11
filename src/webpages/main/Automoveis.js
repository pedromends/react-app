import React, { Component } from 'react';
import '../styles/Automoveis.css'
import Carro from '../../assets/carro.jpg'
import Prime from '../../assets/caminhao.jpg'
import Ninja from '../../assets/moto.jpg'

export default class Automoveis extends Component{

	constructor(props){
		super(props);
		this.state = {
			imgAtual: Carro,
			desc: ''
		}
	}

	vehicleAlert = e => {
		console.log(e.src)
		if(this.state.imgAtual === Carro){
			alert("Este veículo é um Koenigsegg")
		}
		else if(this.state.imgAtual === Ninja){
			alert("Este veículo é uma Kawasaki Ninja")
		}
		else{
			alert("Se você não sabe qual é este veículo, você não é digno de saber")
		}

	}

	handleChange = e => {
		let btnPress = e.target.innerHTML;
		let btnmoto = document.getElementById("btn-moto")
		let btncarro = document.getElementById("btn-car")
		let btntruck = document.getElementById("btn-truck")

		if(btnPress === "Ver Moto"){
			this.setState({imgAtual: Ninja, desc: "Esse é um tipo Moto" });
			btnmoto.style.display = "none";
			btncarro.style.display = ''
			btntruck.style.display = ''
		}
		else if(btnPress === "Ver Carro"){
			this.setState({imgAtual: Carro, desc: "Esse é um tipo Carro" })
			btnmoto.style.display = '';
			btncarro.style.display = 'none'
			btntruck.style.display = ''
		}
		else if(btnPress === "Ver Caminhão"){
			this.setState({imgAtual: Prime, desc: "Esse é um tipo Caminhão"})
			btnmoto.style.display = '';
			btncarro.style.display = ''
			btntruck.style.display = 'none'
		}
	}

	render(){
		return(
			<body>
					<div className='main-container'>
						<img onClick={e => this.vehicleAlert(e)} className='img' src={this.state.imgAtual} alt="#"/>
						<p className='vehicle-tooltip'>{ this.state.desc }</p>
						<div className='btn-list'>
							<button id="btn-moto" onClick={e => this.handleChange(e)}>Ver Moto</button>
							<button id="btn-car" onClick={e => this.handleChange(e)}>Ver Carro</button>
							<button id="btn-truck" onClick={e => this.handleChange(e)}>Ver Caminhão</button>
							<input className='input-fruta' placeholder='Digite um automóvel...'></input>
							<button id="btn-truck" onClick={e => this.handleChange(e)}>Incluir Veículo</button>
							<button id="btn-truck" onClick={e => this.handleChange(e)}>Excluir Veículo</button>

							</div>
					</div>
			</body>
	);
	}
}
