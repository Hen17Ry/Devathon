<template>
    <div>
      <div class="who">
        <div class="whoimg">
          <img src="/who.png" alt="" width="100%" height="auto">
        </div>
        <div class="whot">
          <h1>< Qui peut participer ? /></h1>
          <ul>
            <li>Étudiants ou alumine en informatique, développement logiciel, IA, etc.</li>
            <li>Représenter une des écoles en informatique de la sous-région</li>
            <li>Travailler en équipe (4 à 5 membres par équipe)</li>
            <li>Être disponible pour toute la durée de l’événement</li>
          </ul>
          <ul style="list-style: none;">
            <li><img src="/people.png" alt="" width="200px"></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Who",
    data() {
      return {};
    },
    
    methods: {
      joinus(){
        this.$router.push('/inscription'); 
      },
    }
  };
  </script>
  
  <style scoped>
  /* Import des polices */
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap');
  
  /* Styles pour le bouton */
  .join-button {
    background: linear-gradient(to right, #E13AB5, #E3A171);
    color: #000540;
    padding: 0.5rem 1rem;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    height: 52px;
    width: 249px;
  }
  
  .join-button:hover {
    background: linear-gradient(to right, #E3A171, #E13AB5);
  }
  
  /* Styles principaux */
  .who {
    width: 100%;
    height: auto;
    background-color: black;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    box-sizing: border-box;
    flex-direction: column; /* Contenu en colonne sur petits écrans */
  }
  
  /* Image */
  .who .whoimg {
    width: 100%;  /* Pleine largeur */
    height: auto;
  }
  
  /* Contenu textuel */
  .who .whot {
    width: 100%;  /* Pleine largeur sur petits écrans */
    color: white;
    padding: 20px;
    text-align: center;  /* Alignement centré pour les petits écrans */
  }
  
  .who .whot h1 {
    font-family: "Sora", sans-serif;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .who .whot ul li {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  /* Styles pour les grands écrans (>=768px) */
  @media (min-width: 768px) {
    .who {
      flex-direction: row;  /* Layout en ligne pour les grands écrans */
      align-items: center;
      margin-top: -150px;
    }
  
    .who .whoimg {
      width: 50%;
    }
  
    .who .whot {
      width: 50%;
      text-align: left; /* Texte aligné à gauche */
      padding: 20px;
    }
  
    .who .whot h1 {
      font-size: 40px;
    }
  
    .who .whot ul li {
      font-size: 22px;
    }
  }
  
  /* Styles pour les très petits écrans (<= 480px) */
  @media (max-width: 480px) {
    /* Masquer les images */
    .who .whoimg,
    .who .whot ul li img {
      display: none;
    }
  
    /* Ajustement du texte */
    .who .whot h1 {
      font-size: 28px;
    }
  
    .who .whot ul li {
      font-size: 16px;
    }
  
    .who .whot ul {
      padding-left: 20px;
    }
  }
  </style>
  