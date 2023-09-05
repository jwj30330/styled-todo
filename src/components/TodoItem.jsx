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
	order: 200;
	flex: 1 1 0; /* 빈공간을 차지*/
	text-indent: 20px;

	${(props) =>
		props.done === 'true' &&
		css`
			text-decoration: line-through;
		`}
`;

const Input = styled.input`
	order: 100;
`;

const Button = styled.button`
	padding: 5px 8px;
	order: 300;
`;
const TodoItem = ({ todo, fnDel, fnChk }) => {
	const { id, title, done } = todo;

	return (
		<Item>
			<Title
				// done={done ? 'true' : 'false'}
				done={`${done}`}
				onClick={() => {
					fnChk(id);
				}}
			>
				{title}
			</Title>
			<Input
				type="checkbox"
				checked={done}
				onChange={() => {
					fnChk(id);
				}}
			/>
			{/* checked={true} ->모두체크표시됨 */}
			{/* checked={false} -> 체크표시 안됨 */}
			{/* checked={done} -> true인것만 표시됨 */}
			<Button
				onClick={() => {
					fnDel(id);
				}}
			>
				삭제
			</Button>
		</Item>
	);
};

export default TodoItem;
