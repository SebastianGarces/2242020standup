import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import "./App.css";
import CharacterSearchForm from "./components/CharacterSearchForm";

function App() {
	const [apiData, setApiData] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(res => {
				setApiData(res.data.results);
				console.log("response", res);
			})
			.catch(err => console.log("error: ", err));
	}, []);

	console.log("data: ", apiData);

	const filteredCharacters = apiData.filter(character =>
		character.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="App">
			<CharacterSearchForm search={search} setSearch={setSearch} />
			<StyledCardContainer>
				{filteredCharacters.map(
					({ id, name, species, status, image }) => (
						<StyledCard className="card" key={id}>
							<img src={image} alt={name} />
							<div className="text">
								<h3>{name}</h3>
								<p>{species}</p>
								<p>{status}</p>
							</div>
						</StyledCard>
					)
				)}
			</StyledCardContainer>
		</div>
	);
}

const StyledCard = styled.div`
	border: 1px solid #333;
	margin: 1rem;
	.text {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
`;

const StyledCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export default App;
