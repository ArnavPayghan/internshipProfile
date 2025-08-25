import React from 'react';
import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <section>
        <ul>
            {DUMMY_TODOS.map((taskItem) => (
                <Todo key={""} text={taskItem} />
            ))};
        </ul>
      </section>
    );
}

{/* Todo.jsx */}

{/*
    
import React from 'react';

export default function Todo({ text }) {
    return <li>{ text }</li>;
}
    
*/}