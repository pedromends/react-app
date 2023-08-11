import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SLJackson from "../assets/SLJ.jpg"
import IcecreamWhite from '../assets/icecreamWhite.png'
import Imagens from '../webpages/main/Imagens'
import Sorvetes from '../webpages/main/Sorvetes'
import Automoveis from '../webpages/main/Automoveis'
import Autores from '../webpages/main/Autores'
import "./Navbar.css"

// Essa Navbar é a minha obra prima............................ até agora
export default function Navbar() {

	const [isActive, setActive] = useState();/* React Hooks mtfk! */

	const toggleClass = () => {
		setActive(!isActive);
	}

	const activestyle = { backgroundColor: "#fff", color: 'black' }

	return (
		<div>
			<Router>
				<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
				<nav className={`sidebar ${isActive ? "active" : ""}`}>
					<div className="top-content">
						<div className="logo-box">
							<i className='bx bxl-c-plus-plus' />
							<p className='title'> ctos_Systems</p>
						</div>
						<i className='bx bx-menu' id="oc-btn" onClick={toggleClass}></i>
					</div>

					<ul className="nav_list">
						<li>
							<i className='bx bx-search' onClick={toggleClass} />
							<input type="text" placeholder="Search..." />
							<span className="tooltip">Pesquisar</span>
						</li>

						<li>
							<Link activeStyle={activestyle} to="/imagens">
								<i class='bx bx-image-alt' />
								<span className="link-name">Imagens</span>
							</Link>
							<span className="tooltip">Imagens</span>
						</li>

						<li>
							<Link activeStyle={activestyle} to="/sorvetes">
								<i><img className="custom-icon" id="icecream-icon" src={IcecreamWhite} alt="#"></img></i>
								<span className="link-name">Lista de Sorvetes</span>
							</Link>
							<span className="tooltip">Lista de Sorvetes</span>
						</li>

						<li>
							<Link activeStyle={activestyle} to="/automoveis">
								<i class='bx bx-car' />
								<span className="link-name">Automóveis</span>
							</Link>
							<span className="tooltip">Automóveis</span>
						</li>

						<li>
							<Link activeStyle={activestyle} to="/autores">
								<i className='bx bx-user-pin' />
								<span className="link-name">Autores</span>
							</Link>
							<span className="tooltip">Autores</span>
						</li>

					</ul>

					<div className="profile-content">
						<div className="profile">
							<div className="profile-details">
								<img src={SLJackson} alt="#" />
								<div className="name-box">
									<div className="name">Bad Motherfucker</div>
									<div className="job">@_pedromend</div>
								</div>
							</div>
							<i className='bx bx-log-out' id="log-out"></i>
						</div>
					</div>

				</nav>

				<Routes>
					<Route path="/imagens" element={<Imagens />} />
					<Route path="/sorvetes" element={<Sorvetes />} />
					<Route path="/automoveis" element={<Automoveis />} />
					<Route path="/autores" element={<Autores />} />
				</Routes>
			</Router>
		</div>
	);
}
