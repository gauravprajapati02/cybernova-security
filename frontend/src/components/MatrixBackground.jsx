import Particles from "react-tsparticles";

function MatrixBackground() {

  return (

    <Particles

      id="tsparticles"

      options={{

        background: {

          color: {
            value: "#000000",
          },

        },

        fpsLimit: 60,

        particles: {

          color: {
            value: "#00ff00",
          },

          links: {

            enable: true,

            color: "#00ff00",

            distance: 150,

            opacity: 0.3,

            width: 1,

          },

          move: {

            enable: true,

            speed: 1,

          },

          number: {

            value: 70,

          },

          opacity: {

            value: 0.5,

          },

          size: {

            value: 2,

          },

        },

      }}

      className="fixed inset-0 -z-10"

    />

  );

}

export default MatrixBackground;