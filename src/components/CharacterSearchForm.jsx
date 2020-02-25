import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";

const CharacterSearchForm = props => {
	const handleChange = e => {
		console.log("event: ", e);
		props.setSearch(e.target.value);
	};

	console.log("props", props);

	return (
		<div>
			<h1>Form</h1>
			<StyledForm>
				<Field
					type="text"
					name="search"
					placeholder="search for character..."
					onChange={handleChange}
					value={props.search}
				/>
			</StyledForm>
		</div>
	);
};

const StyledForm = styled(Form)`
	input {
		padding: 1rem;
		font-size: 1.5rem;
		width: 70%;
		margin-bottom: 1rem;
	}
`;

export default withFormik({})(CharacterSearchForm);
