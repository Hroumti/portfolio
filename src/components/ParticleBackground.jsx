import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // Optional callback when particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.8,
            straight: true,
            angle: {
              offset: 10,
              value: 90,
            },
            drift: {
              min: -0.2,
              max: 0.2,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 150,
          },
          opacity: {
            value: { min: 0.4, max: 0.9 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.2,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false,
            },
          },
          wobble: {
            distance: 5,
            enable: true,
            speed: 0.3,
          },
        },
        detectRetina: true,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        },
      }}
    />
  );
};

export default ParticleBackground;