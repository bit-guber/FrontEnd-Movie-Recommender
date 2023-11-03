import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './components/inner.css';
import options from './components/helper.tsx';

let body_section = { 
  method: "GET",    
  headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
  },
  priority: "high"
}
fetch(options.api_url + "/get_auth", body_section )
  .then(Response=>Response.json())
  .then(response => {
          options.auth_headers.headers.Authorization+=response.token;
      }
  )
  .catch( error=> console.log("problem lodding api token", error) )
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
