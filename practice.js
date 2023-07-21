import { useState } from "react";
import image from './Screenshot 2023-06-13 at 4.40.52 PM.png';
function Practice()
{
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');
    const [visible, setVisibility] = useState(1)
    const imageVisibility = () => 
    {
        setVisibility((visible) => !visible)
    }
    const changeColor = () =>
    {
        // setColor((color) => color === 'red' ? 'blue'? 'blue' : 'pink' : 'red')
        setColor((color) => color === 'red' ? 'blue' : color === 'blue' ? 'pink' : 'red')

    }
    const incrementCount = () => 
    {
        setCount((count) => count += 1); 
    }
    return <div>
        <h3>{count}</h3>
        <button onClick={incrementCount}>Increment</button>
        <div style={{backgroundColor: color, height: '200px', width: '200px', marginTop: '25px', marginBottom: '25px'}}></div>
        <button style={{marginBottom: '10px'}} onClick={changeColor}>Change Color</button>
        <img style={{visibility: visible ? 'visible' : 'hidden', height: '200px'}} alt="bootman" src={image}></img>
        <button style={{marginBottom: '10px'}} onClick={imageVisibility}>Image Poof</button>


    </div>
}

export default Practice