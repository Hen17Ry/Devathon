<template>
    <div>
      <div class="heros">
        <div class="circle"></div>
        <div class="contain">
          <h1>{ Relevez le défi du Devathon 2024 }</h1>
          <h3>72 heures pour innover, coder et créer l'avenir.</h3>
          <div class="bouton">
            <button class="b1" @click="joinus()">
              < Participer />
            </button>
            <button class="b2">
              < En savoir plus >
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Heros",
    data() {
      return {};
    },
    methods: {
      joinus() {
        this.$router.push('/inscription');
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap');
  
  .heros {
    background-color: transparent;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url("/Bit.png");
    background-size: cover;
    background-position: center;
    background-color: black;
    position: relative;
  }
  
  .heros .contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 0 20px; /* Padding pour éviter que le contenu touche les bords */
  }
  
  .heros h1 {
    font-size: 4rem;
    color: white;
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  
  .heros h3 {
    font-size: 1.5rem;
    color: white;
    font-weight: lighter;
    margin-bottom: 40px;
  }
  
  .heros .bouton {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }
  
  .heros .bouton .b1,
  .heros .bouton .b2 {
    height: 52px;
    width: 201px;
    font-size: 16px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
  }
  
  .heros .bouton .b1 {
    background: linear-gradient(to right, #E13AB5, #E3A171);
    color: #16171B;
    border: none;
  }
  
  .heros .bouton .b2 {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .heros .circle {
    width: 800px;
    height: 500px;
    border-radius: 50%;
    background-color: #000540;
    position: absolute;
    filter: blur(18.5rem);
    margin-top: 350px;
  }
  
  @media (max-width: 1024px) {
    .heros {
      height: auto; /* Ajuste la hauteur pour les écrans plus petits */
      background-position: top;
    }
  
    .heros h1 {
      font-size: 3rem; /* Réduit la taille du texte */
      margin-bottom: 10px;
    }
  
    .heros h3 {
      font-size: 1.2rem; /* Réduit la taille du sous-titre */
      margin-bottom: 30px;
    }
  
    .heros .bouton {
      flex-direction: column;
      width: 100%;
    }
  
    .heros .bouton .b1,
    .heros .bouton .b2 {
      width: 100%; /* Les boutons occupent toute la largeur sur les petits écrans */
      margin-bottom: 10px;
    }
  
    .heros .circle {
      width: 600px;
      height: 400px;
      margin-top: 250px;
      filter: blur(12rem); /* Réduit l'effet de flou sur les petits écrans */
    }
  }
  
  @media (max-width: 768px) {
    .heros h1 {
      font-size: 2.5rem; /* Réduit encore la taille du titre */
    }
  
    .heros h3 {
      font-size: 1rem; /* Réduit la taille du sous-titre */
    }
  
    .heros .bouton .b1,
    .heros .bouton .b2 {
      font-size: 14px; /* Réduit la taille de la police des boutons */
    }
  
    .heros .circle {
      width: 500px;
      height: 350px;
      margin-top: 200px;
      filter: blur(8rem); /* Réduit encore le flou */
    }
  }
  
  @media (max-width: 480px) {
    .heros h1 {
      font-size: 2rem; /* Taille optimale pour les petits écrans */
      margin-bottom: 10px;
    }
  
    .heros h3 {
      font-size: 0.9rem; /* Réduit encore la taille du sous-titre */
      margin-bottom: 20px;
    }
  
    .heros .bouton .b1,
    .heros .bouton .b2 {
      font-size: 14px;
      height: 45px;
      width: 90%;
      margin-bottom: 10px;
    }
  
    .heros .circle {
      width: 400px;
      height: 300px;
      margin-top: 150px;
      filter: blur(6rem); /* Réduit encore le flou */
    }
  }
  </style>
  