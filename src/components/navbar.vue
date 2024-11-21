<template>
    <div>
      <div class="navigation">
        <nav class="navbar">
          <!-- Logo -->
          <div class="logo">
            <img src="/logo.png" alt="DEVATHON Logo" />
          </div>
  
          <!-- Menu Navigation -->
          <ul class="nav-links" :class="{ 'show-links': isMenuOpen }">
            <li><a href="#">< Accueil ></a></li>
            <li><a href="#">< À propos> </a></li>
            <li><a href="#">< Déroulement ></a></li>
          </ul>
  
          <!-- Bouton Rejoignez-nous -->
          <button class="join-button" @click="joinus">Rejoignez-nous</button>
  
          <!-- Menu Burger -->
          <div class="burger-menu" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
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
      joinus() {
        this.$router.push("/inscription");
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap');
  
  .navigation {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
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
    transition: all 0.3s ease;
  }
  
  /* Logo */
  .logo img {
    height: 120px;
    max-height: 150px;
    object-fit: contain;
    transition: height 0.3s ease-in-out;
  }
  
  /* Liens de navigation */
  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    font-weight: 500;
    flex-grow: 1;
    justify-content: center;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    transition: color 0.3s;
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
    transition: background 0.3s ease;
    margin-left: 1rem;
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
  
  @media (max-width: 1024px) {
    /* Lorsque l'écran est moyen ou plus petit (tablettes et petites desktops) */
    .navbar {
      padding: 1rem;
    }
  
    .nav-links {
      gap: 1rem;
      font-size: 14px;
    }
  
    .join-button {
      width: auto;
      font-size: 14px;
      padding: 0.5rem 1rem;
      height: 40px;
      margin-left: 0;
    }
  
    .logo img {
      height: 100px;
    }
  }
  
  @media (max-width: 768px) {
    /* Lorsque l'écran est plus petit que 768px (tablettes portrait) */
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
      z-index: 1;
    }
  
    .nav-links.show-links {
      display: flex;
    }
  
    .burger-menu {
      display: flex;
    }
  
    .logo img {
      height: 80px;
    }
  
    .join-button {
      width: 100%;
      font-size: 14px;
      height: 40px;
    }
  }
  
  @media (max-width: 480px) {
    /* Très petits écrans (mobiles) */
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
      height: 40px;
      font-size: 14px;
      margin-left: 0;
    }
  
    .burger-menu {
      align-self: flex-end;
    }
  
    .nav-links a {
      font-size: 14px;
    }
  }
  
  </style>
  