<template>
  <div class="allcon">
    <div class="container">
    <Navbar class="navbar" />
    <Heros />
    <About />
    <Who style="margin-bottom: 100px;" />
    <Foooter />
  </div>
  </div>
</template>

<script>
import About from '@/components/about.vue';
import Foooter from '@/components/footer.vue';
import Heros from '@/components/heros.vue';
import Navbar from '@/components/navbar.vue';
import Who from '@/components/who.vue';
export default {
  name: "home",
  components: {
    About, Foooter, Heros, Navbar, Who,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    joinus(){
      this.$router.push('/inscription'); 
  },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap');

.allcon{
  background-color: black;
  justify-content: center;
  align-items:center;
  display: flex;
}

.container{
  background-color: black;
  width: 80%;
}

.navbar{
  position: sticky;
  z-index: 1;
}
</style>
