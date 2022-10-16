import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export const CustomParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="particles"
            className="particles"
            init={particlesInit}
            options={{
                "particles": {
                  "number": {
                    "value": 40,
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.5,
                      "size_min": 0.2,
                      "sync": true
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 144.21690222094043,
                    "color": "#ffffff",
                    "opacity": 0.09614460148062694,
                    "width": 1.4421690222094041
                  },
                  "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
              }}
        />
    );
};


