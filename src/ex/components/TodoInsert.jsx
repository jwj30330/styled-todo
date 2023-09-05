import React, { useState } from 'react';
import { css, styled } from 'styled-components';

const Form = styled.form`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	opacity: 0;

	${(props) =>
		props.active === 'false' &&
		css`
			opacity: 1;
		`}

	>input {
		background: none;
		border: none;
		outline: none;

		width: 100%;
		height: 50px;
		font-size: 16px;
		background-color: #fff;
	}
`;

const TodoInsert = ({ active }) => {
	const [plan, setPlan] = useState;
	return (
		<Form active={`${active}`}>
			<input
				type="text"
				id="plan"
				placeholder="할 일 입력 후 엔터키를 누르세요. "
				autoCapitalize="off"
				autoFocus
				value={plan}
				onChange={(evt) => {
					setPlan(evt.target.value);
				}}
			></input>
		</Form>
	);
};

export default TodoInsert;
