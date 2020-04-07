import React, {useState} from 'react'


const Todoform = ({addTodo}) => {
	const [value,setValue] = useState('');

	const  handleSubmit = (e) => {
		e.preventDefault();
		if(!value) return;
		addTodo(value);
		setValue('');
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="add todo item" className="input" value={value} onChange={e => setValue(e.target.value)} />
			<button>Add item</button>
		</form>
	)
}


export default Todoform;