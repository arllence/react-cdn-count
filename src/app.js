//JSX javascript xml
import { useState } from "react";
let app = {
    title: 'Todo Decisions',
    subtitle: "things to focus on",
    options: ["baseball","soccer","tennis","golf"],
};

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle &&<p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "here are your options" : "no options here"}</p>
        <ul>
            <li>Nairobi</li>
            <li>Malindi</li>
        </ul>
    </div>
);


let count = 0
const addOne = () => {
    console.log("addone");
};
const minusOne = () => {
    console.log("minusonne");
};
const reset = () => {
    console.log("reset");
};

let templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

let appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
