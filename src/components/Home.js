import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to KWoC React
              </h1>
            <h2 class="subtitle">
              The truth Redefined
              </h2>
          </div>
        </div>
      </section>
    </div>
  )
}