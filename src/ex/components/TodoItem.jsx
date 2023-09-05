import React from 'react';
import { css, styled } from 'styled-components';

const Item = styled.li`
	display: flex;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #ddd;
	&:hover {
		background-color: #dedede;
		cursor: pointer;
	}
`;

const Title = styled.h2`
	flex: 1 1 0;
	text-indent: 20px;

	${(props) =>
		props.done === 'true' &&
		css`
			text-decoration: line-through;
		`}
`;

const Input = styled.input``;

const Button = styled.button`
	padding: 5px 8px;
`;

const TodoItem = ({ todo }) => {
	const { id, title, done } = todo;
	return (
		<Item>
			<Title done={`${done}`} onClick={() => {}}>
				{title}
			</Title>

			<Input type="checkbox" checked="done"></Input>
			<Button>삭제</Button>
		</Item>
	);
};

export default TodoItem;
