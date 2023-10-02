import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./pages/card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world! This is the new wave of the future
			</h1>
			<h2 className="my-6">
				I am a new developer and I am learning how to use React and Vite
			</h2>

			<div className="bg-green-500">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<div
				style={{
					paddingTop: "10px",
					paddingRight: "20px",
					paddingBottom: "30px",
					paddingLeft: "40px",
				}}>
				This element has 10 pixels of padding on the top, 20 pixels on the
				right, 30 pixels on the bottom, and 40 pixels on the left.
			</div>

			<h1>Vite + React</h1>

			<div className="card bg-red-500">
				<button onClick={() => setCount((count) => count + 20)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
				<p>
					Hi Im nafis. And this is my first input into this site. Smily Face x
				</p>
				<h1 className="text-3xl font-bold underline">Hello world!</h1>

				<Card />
			</div>

			<div className="bg-blue-100 max-w-sm rounded overflow-hidden shadow-lg">
				TEST
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
