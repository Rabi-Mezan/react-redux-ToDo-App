import React, { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import { useDispatch, useSelector } from "react-redux"
import './todo.css'

const Todo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list)

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)} />
                    <i className="fa fa-plus add-btn" title="Add Item" onClick={() => dispatch(addTodo(input), setInput(''))}></i>
                </div>
                <div className='showItems'>
                    {
                        list.map(elem => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <i className="far fa-trash-alt delete-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text='remove-all'
                        onClick={() => dispatch(removeTodo())}>
                        <span>Check ALl</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Todo;