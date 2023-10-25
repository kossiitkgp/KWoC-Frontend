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
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{ 
                background: { 
                  color: "#0a0a19", 
                }, 
                fullScreen: {
                    "enable": true,
                    "zIndex": -10
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
                    value: 200, 
                  }, 
                  opacity: { 
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