<template>
    <div>
        <div class="about">
            <div class="why">
                <h1>[Pourquoi participer au Devathon?]</h1>
                <p>
                    Le Devathon est une compétition de <br>
                    développement et d'innovation technologique qui <br>
                    rassemble des esprits créatifs. Pendant 72 heures, <br>
                    chaque équipe devra résoudre des problèmes en <br>
                    codant pour progresser dans un jeu. 
                </p>
                <button class="join-button" @click="joinus()">< Rejoignez-nous /></button>
            </div>
            <div class="abouimg">
                <img src="/t3.png" alt="" class="responsive-img">
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  name: "About",
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

/* Bouton Rejoignez-nous */
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
  transition: background 0.3s ease;
}

.join-button:hover {
  background: linear-gradient(to right, #E3A171, #E13AB5);
}

/* Conteneur principal */
.about {
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  justify-content: center;
  margin-bottom: 250px;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center; /* Centrer le contenu */
}

/* Section texte */
.about .why {
  width: 100%;
  max-width: 600px; /* Ajout d'une largeur maximale pour le texte */
  color: white;
  margin-bottom: 20px;
  text-align: center;
}

.about .why h1 {
  font-family: "Sora", sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
}

.about .why p {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  line-height: 1.5;
}

/* Image section */
.about .abouimg {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  justify-content: center; /* Centrer l'image */
}

.responsive-img {
  width: 100%;
  height: auto;
  max-width: 100%; /* Limiter la largeur à 100% */
  object-fit: cover; /* Assurer que l'image couvre sans déformation */
}

/* Styles pour les écrans plus larges (>=768px) */
@media (min-width: 768px) {
  .about {
    flex-direction: row; /* Layout en ligne pour les grands écrans */
    align-items: center;
    justify-content: space-between; /* Espacement entre texte et image */
    padding: 30px; /* Plus d'espace sur les grands écrans */
  }

  .about .why {
    width: 50%;
    text-align: left; /* Texte aligné à gauche pour une meilleure lisibilité */
  }

  .about .abouimg {
    width: 50%;
  }

  .about .why h1 {
    font-size: 40px;
  }

  .about .why p {
    font-size: 24px;
  }

  .join-button {
    width: 249px;
  }
}

/* Styles pour les écrans plus petits (<= 767px) */
@media (max-width: 767px) {
  .about .abouimg {
    display: none; /* Masquer l'image sur les petits écrans */
  }

  .about .why h1 {
    font-size: 30px;
  }

  .about .why p {
    font-size: 18px;
    text-align: left;
  }

  .join-button {
    width: 100%;
    font-size: 18px;
  }
}

/* Styles pour les très petits écrans (<= 480px) */
@media (max-width: 480px) {
  .about .why h1 {
    font-size: 26px;
  }

  .about .why p {
    font-size: 16px;
    text-align: left;
  }

  .join-button {
    width: 100%;
    font-size: 20px;
  }

  .about .abouimg {
    display: none; /* Masquer l'image sur les très petits écrans */
  }
}
</style>
