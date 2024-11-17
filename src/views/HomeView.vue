<template>
  <div class="navigation">
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo">
        <img src="/logo.png" alt="DEVATHON Logo" />
      </div>

      <!-- Menu Navigation -->
      <ul class="nav-links" :class="{ 'show-links': isMenuOpen }">
        <li><a href="#">< Accueil ></a></li>
        <li><a href="#">< À propos ></a></li>
        <li><a href="#">< Déroulement ></a></li>
      </ul>

      <!-- Bouton Rejoignez-nous -->
      <button class="join-button">< Rejoignez-nous /></button>

      <!-- Menu Burger -->
      <div class="burger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
  <div style="display: flex; justify-content: center; background-color: black; flex-direction: column; align-items: center;">
    <div class="heros">
      <div class="circle">
      </div>
      <div class="contain">
        <h1>{relevez le défi du devathon 2024}</h1>
        <h3>72 heures pour innover, coder et créer l'avenir.</h3>
        <div class="bouton">
          <button class="b1">< Participer /></button>
          <button class="b2">< En savoir plus ></button>
        </div>
      </div>
    </div>
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
        <button class="join-button">< Rejoignez-nous /></button>
      </div>
      <div class="abouimg">

      </div>
    </div>
    <div class="who">
      <div class="whoimg">

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
    <div class="partenaire">
      <h1>< Nos Partenaires /></h1>
      <div class="carousel">
        <img src="/ifri.png" alt="">
        <img src="/esgis.png" alt="">
        <img src="/epi.png" alt="">
        <img src="/ifri.png" alt="">
        <img src="/esgis.png" alt="">
        <img src="/epi.png" alt="">
        <img src="/ifri.png" alt="">
        <img src="/esgis.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Import des polices */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap');

.combo{
  
  height: auto;
  background-color: black;
  background-size: cover;
}

/* Conteneur principal */
.navigation {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 100;
}

/* Barre de navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
  color: white;
  font-family: 'Inter', sans-serif;
  position: relative;
  width: 90%;
  max-width: 1200px;
}

/* Logo */
.logo img {
  height: 120px; /* Taille par défaut */
  max-height: 150px;
  object-fit: contain;
}

/* Liens de navigation */
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  font-weight: 500;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 16px;
}

.nav-links a:hover {
  color: #E3A171;
}

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
}

.join-button:hover {
  background: linear-gradient(to right, #E3A171, #E13AB5);
}

/* Menu burger */
.burger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.burger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
}

.heros{
  background-color: transparent;
  width: 80%;
  height: 800px;
  display: flex;
  justify-content: center;
  background-image: url("/Bit.png");
  background-size: cover;
  background-color: black;
}

.heros .contain{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.heros .loco{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  background-color: transparent;
}

.heros h1{
  font-size: 64px;
  color: white;  
  text-transform:capitalize;
}

.heros h3{
  font-size: 24px;
  color: white;
  font-weight: lighter;
}

.heros .bouton{
  display: flex;
  width: 400px;
  height: auto;
}

.heros .bouton .b1{
  height: 52px;
  width: 201px;
  background: linear-gradient(to right, #E13AB5, #E3A171);
  font-size: 16px;
  color: #16171B;
  margin-right: 20px;
  border-radius: 4px;
}

.heros .bouton .b2{
  height: 52px;
  width: 201px;
  background: transparent;
  color: white;
  border-color: white;
  border-color: white;
  border-radius: 4px;
  font-size: 16px; 
}

.heros .circle{
  width: 800px;
  height: 500px;
  border-radius: 50%;
  background-color: #000540;
  position: absolute;
  filter: blur(18.5rem);
  margin-top: 350px;
  
}

.about{
  width: 80%;
  height: auto;
  background-color: black;
  display: flex;
  justify-content: center;
  margin-bottom: 250px;
}

.about .why{
  width: 50%;
  height: auto;
  color: white;
}

.about .why h1{
  font-family: "Sora", sans-serif;
  font-size: 40px;
  font-weight: bold;
}

.about .why p{
  font-family: "Inter", sans-serif;
  font-size: 24px;
}

.about .abouimg{
  width: 50%;
  background-image: url("/t3.png");
  background-size: cover;
  height: auto;
}

.who{
  width: 80%;
  height: auto;
  background-color: black;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.who .whoimg{
  width: 50%;
  height: auto;
  background-image: url("/who.png");
  background-size: cover;
}

.who .whot{
  width: 50%;
  height: auto;
  color: white;
  padding-inline-start: 50px;
}

.who .whot h1{
  font-family: "Sora", sans-serif;
  font-size: 40px;
  font-weight: bold;
}

.who .whot ul li{
  font-family: 'Inter', sans-serif;
  font-size: 20px;
}

.partenaire{
  height: 100vh;
  width: 80%;
  margin-top: 150px;
  text-align: center;
  color: white;
  font-family: "Sora", sans-serif;
  font-size: 40px;
  font-weight: bold;
}

.partenaire .carousel{
  width: 80%;
  overflow: hidden;
  position: absolute;
  display: flex;
  white-space: nowrap;
  justify-content: space-around;
  animation: scroll 20s linear infinite;
}

.partenaire .carousel img{
  width: 100px;
  border-radius: 14px;
}


@keyframes scroll {
  0%{
    left: 100%;
  }
  100%{
    left: -100%;
  }
}


/* Responsive - Petits écrans */
@media (max-width: 768px) {
  /* Liens masqués par défaut */
  .nav-links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    background: black;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Liens visibles en mode menu ouvert */
  .nav-links.show-links {
    display: flex;
  }

  /* Menu burger visible */
  .burger-menu {
    display: flex;
  }

  /* Bouton réduit */
  .join-button {
    width: 200px;
    height: 40px;
    font-size: 14px;
  }

  /* Logo ajusté */
  .logo img {
    height: 80px; /* Taille réduite pour mobile */
  }
}

/* Responsive - Très petits écrans */
@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .logo img {
    height: 70px;
  }

  .join-button {
    width: 100%;
    text-align: center;
  }

  .burger-menu {
    align-self: flex-end;
  }
}
</style>
