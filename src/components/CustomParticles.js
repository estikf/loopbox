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
            id="tsparticles"
            init={particlesInit}
            options={{
                "particles": {
                  "number": {
                    "value": 30,
                    "density": {
                      "enable": false,
                      "value_area": 10
                    }
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
                    "value": 1,
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
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 200,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 340.839926962873,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": false
              }}
        />
    );
};


