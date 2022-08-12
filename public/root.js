const { useState } = React 

function App() {
    const [count, setCount] = useState(0)
    function add() {
        setCount(count + 1)
    }
    function subtract() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={add}>+1</button> 
            &nbsp;
            <button onClick={subtract}>-1</button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))