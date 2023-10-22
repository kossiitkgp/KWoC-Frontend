import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Snowfall from 'react-snowfall'
import snowflake_particle from "./assets/snowflake.png"
import './main.css'

const snowflake = document.createElement('img')
snowflake.src = snowflake_particle

const images = [snowflake]


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div>

    </div>
    <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        minHeight: '100vh',
        zIndex:-1
      }}
      // Controls the number of snowflakes that are created (defaults to 150).
      snowflakeCount={100}
      images={images}
      radius={[0.5, 30.0]}
      speed={[0.5, 6.0]}
      wind={[-0.5, 1.0]}
      rotationSpeed={[-1.0, 2.0]}
    />,
    document.querySelector('#app'),
  </React.StrictMode>,
);
