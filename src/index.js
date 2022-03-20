import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextStateProvider } from './hooks/ContextState';
import './index.css';
import "./assets/icons/icons.css"

ReactDOM.render(
	<React.StrictMode>
		<ContextStateProvider>
					<App />
		</ContextStateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
