import React from "react";
import "../../styles/home.css";
import { MyCard } from "../component/cards";
import { Title } from "../component/titulo";



export const Home = () => (
	
	<div className="mt-5">
		<div className="titulo1">
		<Title title='Characters' />
		</div>
		<div className="mt-5 d-flex overflow-scroll" style={{overflow: 'auto', whiteSpace: 'nowrap'}}>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		</div>
		<div className="titulo2">
		<Title title='Planets'/>
		<div className="mt-5 d-flex overflow-scroll" style={{overflow: 'auto', whiteSpace: 'nowrap'}}>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		<MyCard/>
		</div>
		</div>
	</div>

);


