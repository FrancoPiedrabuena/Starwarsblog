import React, { useEffect, useState } from "react";
import { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
const {store, actions}= useContext(Context);
const [characters, setCharacters] = useState([]);
	
	
	const url = "https://www.swapi.tech/api/people/";
	
	const fetchCharacters = (url) => {
	
		fetch(url)
		.then(res => res.json())
		.then(data => setCharacters(data.results))
		.catch(e => console.error(new Error (e)));
	
	};
	
	useEffect ( () => {
		fetchCharacters(url);
	}, []);





	const [planets, setPlanets] = useState([]);
	
	
	const urls = "https://swapi.dev/api/planets";
	
	const fetchPlanets = (urls) => {
	
		fetch(urls)
		.then(res => res.json())
		.then(data => setPlanets(data.results))
		.catch(e => console.error(new Error (e)));
	
	};
	
	useEffect ( () => {
		fetchPlanets(urls);
	}, []);

return(
		<div className="container">
			<div className="container"></div>
			<div className="card1">
                <h1 style={{ color: "white" }}>Characters</h1>
            </div>
			<div className="Grupo1 d-flex">
				{store.people.map((character, index) => {
					return (
						<Card key={character.uid} item={character} resource={"people"} />
					)
				})}
			</div>
			<div className="d-flex justify-content-right"></div>
			<div className="card1">
                <h1 style={{ color: "white" }}>Planets</h1>
            </div>
			<div className=" Grupo1 d-flex">
				{store.planets.map((planet, index) => {
					return (
						<Card key={planet.uid} item={planet} resource={"planets"} />
					)
				})}
			</div>
		</div>
)}

	

