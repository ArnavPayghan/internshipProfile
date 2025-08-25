import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [ style, setStyle ] = React.useState();
    
    function handleStyle() {
        setStyle(true);
    }
    
    return (
        <div>
            <p className={ style ? "active" : ""}>Style me!</p>
            <button onClick={handleStyle}>Toggle style</button>
        </div>
    );
}
