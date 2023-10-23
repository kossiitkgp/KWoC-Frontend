import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Snowfall from 'react-snowfall'
import snowflake_particle from "./assets/snowflake.png"
import snowflake_particle2 from "./assets/snowflake2.svg"
import snowflake_particle3 from "./assets/snowflake3.svg"
import snowflake_particle4 from "./assets/snowflake4.svg"
import './main.css'

const snowflake = document.createElement('img')
snowflake.src = snowflake_particle
const snowflake2 = document.createElement('img')
snowflake2.src = snowflake_particle2
const snowflake3 = document.createElement('img')
snowflake3.src = snowflake_particle3
const snowflake4 = document.createElement('img')
snowflake4.src = snowflake_particle4

const images = [snowflake, snowflake2, snowflake3, snowflake4]


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
      snowflakeCount={150}
      images={images}
      radius={[15.0, 40.0]}
      speed={[0.5, 4.0]}
      wind={[-0.5, 1.0]}
      rotationSpeed={[-1.0, 1.0]}
    />,
  </React.StrictMode>,
);
