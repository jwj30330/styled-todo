import React, { useRef, useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import TodoHead from '../components/TodoHead';
import TodoBody from '../components/TodoBody';
import TodoList from '../components/TodoList';
import TodoInsert from '../components/TodoInsert';

const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;}ul,ol,li{list-style:none}.sr-only{position:absolute;left:-9999px}button{cursor: pointer;}body{font-size:12;}`;

const TodoContainer = styled.div`
	position: relative;
	width: 400;
	margin: 30px auto;
	border: 1px solid #ccc;
`;

const initialData = [
	{ id: 1, title: '리액트', done: false },
	{ id: 2, title: '자바스크립트', done: false },
	{ id: 3, title: '제이쿼리', done: false },
];

const TodoPlus = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 50%);
`;

const App = () => {
	const [todos, setTodos] = useState(initialData);
	const nextId = useRef(4);

	//추가함수
	const fnAdd = (plan) => {
		setTodos((prevTodos) => {
			return [...prevTodos, { id: nextId, title: plan, done: false }];
		});
		nextId.current++;
	};

	//삭제함수
	const fnDel = (id) => {
		setTodos.filter((todo) => {
			return todo.id !== id;
		});
	};

	//체크함수
	const fnChk = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => (todo.id !== id ? todo : { ...todo, done: !todo.done }));
		});
	};

	const [active, setActive] = useState('true');

	const $plan = useRef(null);

	return (
		<div>
			<GlobalStyle>
				<TodoContainer>
					<TodoHead>오늘 할 일</TodoHead>
					<TodoBody>
						<TodoList todos={todos} fnDel={fnDel} fnChk={fnChk}></TodoList>
						<TodoInsert fnAdd={fnAdd} active={active} $plan={$plan}></TodoInsert>
					</TodoBody>
					<TodoPlus
						active={`${active}`}
						onClick={() => {
							setActive((prev) => !prev);
							$plan.current.focus();
						}}
					></TodoPlus>
				</TodoContainer>
			</GlobalStyle>
		</div>
	);
};

export default App;
