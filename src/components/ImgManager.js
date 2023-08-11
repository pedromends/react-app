import React, { Component } from 'react';
import "./ImgManager.css"
import one from '../galeria/imagem1.jpg'
import two from '../galeria/imagem2.jpg'
import three from '../galeria/imagem3.jpg'
import four from '../galeria/imagem4.jpg'
import five from '../galeria/imagem5.jpg'
import six from '../galeria/imagem1.jpg'
import eight from '../galeria/imagem8.jpg'
import nine from '../galeria/imagem9.jpg'
import ten from '../galeria/imagem10.jpg'
export default class ImgManager extends Component {

	constructor(props) {
		super(props);
		this.state = {
				name: '',
				imgArray: [one,two,three,four,five,six,eight,nine,ten],
				input: 0,
		}
	}

	handleChange = event => {
		this.setState({
				input: event.target.value
		});
	}

	novaImagem = () => {

		let id = this.state.input
		let imgsDisplay = document.getElementById('imgs');
		let newImg = this.state.imgArray[id]
		this.state.imgArray.push(newImg);

		let child = document.createElement('img')
		child.src = newImg
		child.style.width="300px";
		child.style.height="300px";
		child.style.marginBottom="10px"


		imgsDisplay.append(child)
		this.setState({ input: 0 });
		return child;

	};

	render() {
		return (
			<div>
				<div class="main-page-data">
					<input type="number" id="img-input" value={this.state.input} onChange={this.handleChange} />
					<button onClick={this.novaImagem} id="add-img">Adicionar Imagem</button>
					<button id="rmv-img">Remover Imagem</button>
				</div>
				<ul class="grid-container" id="imgs">
				</ul>
			</div>
		)
	}

}
