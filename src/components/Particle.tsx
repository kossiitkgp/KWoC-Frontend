import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from 'react-particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Particle(){
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles className="absolute top-0 w-full h-screen -z-50"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{ 
                background: { 
                  color: "rgb(10,10,25)", 
                }, 
                fullScreen: {
                    "enable": true,
                    "zIndex": -2
                },
                interactivity: {
                    "detectsOn": "window",
                    "events": {
                      "onClick": {
                        "enable": false,
                        "mode": []
                      },
                      "onDiv": {
                        "selectors": [],
                        "enable": false,
                        "mode": [],
                        "type": "circle"
                      },
                      "onHover": {
                        "enable": true,
                        "mode": [],
                        "parallax": {
                          "enable": true,
                          "force": 15,
                          "smooth": 5
                        }
                      },
                      "resize": {
                        "delay": 0.5,
                        "enable": true
                      }
                    },
                    "modes": {
                      "trail": {
                        "delay": 1,
                        "pauseOnStop": false,
                        "quantity": 1
                      },
                      "attract": {
                        "distance": 200,
                        "duration": 0.4,
                        "easing": "ease-out-quad",
                        "factor": 1,
                        "maxSpeed": 50,
                        "speed": 1
                      },
                      "bounce": {
                        "distance": 200
                      },
                      "bubble": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "divs": {
                          "distance": 200,
                          "duration": 0.4,
                          "mix": false,
                          "selectors": []
                        }
                      },
                      "connect": {
                        "distance": 80,
                        "links": {
                          "opacity": 0.5
                        },
                        "radius": 60
                      },
                      "grab": {
                        "distance": 100,
                        "links": {
                          "blink": false,
                          "consent": false,
                          "opacity": 1
                        }
                      },
                      "push": {
                        "default": true,
                        "groups": [],
                        "quantity": 4
                      },
                      "remove": {
                        "quantity": 2
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "divs": {
                          "distance": 200,
                          "duration": 0.4,
                          "factor": 100,
                          "speed": 1,
                          "maxSpeed": 50,
                          "easing": "ease-out-quad",
                          "selectors": []
                        }
                      },
                      "slow": {
                        "factor": 3,
                        "radius": 200
                      },
                      "light": {
                        "area": {
                          "gradient": {
                            "start": {
                              "value": "#ffffff"
                            },
                            "stop": {
                              "value": "#000000"
                            }
                          },
                          "radius": 1000
                        },
                        "shadow": {
                          "color": {
                            "value": "#000000"
                          },
                          "length": 2000
                        }
                      }
                    }
                  },
                fpsLimit: 60, 
                particles: { 
                  shape: { 
                    type: "circle", 
                  }, 
                  size: { 
                    random: { 
                      enable: true, 
                      minimumValue: 0.5, 
                    }, 
                    value: 1.4, 
                  }, 
                  color: { 
                    value: "#f1f1f1", 
                  }, 
                  number: { 
                    density: { 
                      enable: true, 
                      area: 1080, 
                    }, 
                    limit: 0, 
                    value: 500, 
                  }, 
                  opacity: { 
                    animation: { 
                      enable: true, 
                      minimumValue: 0.5, 
                      speed: 1.6, 
                      sync: false, 
                    }, 
                    random: { 
                      enable: true, 
                      minimumValue: 0.1, 
                    }, 
                    value: 1, 
                  }, 
                  interactivity: { 
                    detectsOn: "canvas", 
                    events: { 
                      resize: true, 
                    }, 
                  }, 
                }, 
              }} 
        />
    );
}