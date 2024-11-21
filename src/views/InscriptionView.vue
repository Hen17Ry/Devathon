<template>
  <div>
    <div class="inscription">
    <div class="datal">
      <div>
        <img src="/logo.png" alt="" width="300px" height="250px">
      <div style="display: flex; margin-top: -70px;"><h3 id="kwabo">Kwaabô &nbsp;</h3><h3>c'est le début de</h3></div>
      <h3 style="margin-top: -30px;">l'aventure du devathon!</h3>
      <ul style="color: white; margin-left: -40px; margin-bottom: 180px;">
        <li style="align-items: center; justify-content: center; display: flex; font-size: 16px; margin-left: -80px; margin-bottom: 10px; font-weight: 600;"> <img src="/icon.png"  width="24px" height="24px"alt="" style="margin-right: 10px;">Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</li>
        <li style="align-items: center; justify-content: center; display: flex; font-size: 16px; margin-left: -80px; margin-bottom: 10px; font-weight: 600;"> <img src="/icon.png"  width="24px" height="24px"alt="" style="margin-right: 10px;">Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</li>
        <li style="align-items: center; justify-content: center; display: flex; font-size: 16px; margin-left: -80px; margin-bottom: 10px; font-weight: 600;"> <img src="/icon.png"  width="24px" height="24px"alt="" style="margin-right: 10px;">Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</li>
      </ul>
      <img src="/insri.png" alt="" width="476.94px" height="315.05px" style="margin-bottom: 20px;">
      </div>
    </div>
    <div class="datar">
      <div v-show="c11" style="width: 100%; height: 100%;" class="contain">
        <div class="marquee">
          <span id="active" ></span>
          <span id="noactive"></span>
          <span id="noactive"></span>
          <span id="noactive"></span>
        </div>
        <div style="display: flex; flex-direction: column; margin:0 210px 0 210px;">
          <h2>Inscription</h2>
          <h6>Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</h6>
          <label for="">Adresse e-mail</label>
          <input type="email" id="email" name="email" required placeholder="Ex:henry.gossou17@gmail.com" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;"> 
          <label for="">Université représenté</label>
          <select id="pet-select" style="width: 475px; height: 56px; border-radius: 6px;background-color: white; border-color: #325C6A; border-style: none; ">
            <option value="">Choisir parmi les université</option>
            <option value="IFRI">IFRI</option>
            <option value="EPITECH">EPITECH</option>
            <option value="ESGIS">ESGIS</option>
            <option value="parrot">EPAC</option>
            <option value="PIGIER">PIGIER</option>
            <option value="UCAO">UCAO</option>
          </select>
          <button class="join-button" @click="c2()">< Suivant /></button>
        </div>
      </div>
      <div v-show="c22" style="width: 100%; height: 100%;" class="contain">
        <div class="marquee">
          <span id="active" ></span>
          <span id="active"></span>
          <span id="noactive"></span>
          <span id="noactive"></span>
        </div>
        <div style="display: flex; flex-direction: column; margin:0 210px 0 210px;">
          <h2>Team</h2>
          <h6>Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</h6>
          <label for="" style="font-weight: bold;">Membre 1</label>
          <label for="">Nom et Prénom</label>
          <input type="text" name="nom" id="nom" placeholder="Henry GOSSOU" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;">
          <label for="">Adresse e-mail</label>
          <input type="email" id="email" name="email" required placeholder="Ex: henry.gossou17@gmail.com" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;"> 
          <label for="">Numéro de téléphone</label>
          <input type="text" name="number" id="number" placeholder="97272235" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;">
          <button class="join-button" @click="c3()">< Suivant /></button>
        </div>
      </div>
      <div v-show="c33" style="width: 100%; height: 100%;" class="contain">
        <div class="marquee">
          <span id="active" ></span>
          <span id="active"></span>
          <span id="active"></span>
          <span id="noactive"></span>
        </div>
        <div style="display: flex; flex-direction: column; margin:0 210px 0 210px;">
          <h2>Inscription</h2>
          <h6>Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</h6>
          <label for="" style="font-weight: bold;">Membre 2</label>
          <label for="">Nom et Prénom</label>
          <input type="text" name="nom" id="nom" placeholder="Henry GOSSOU" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;">
          <label for="">Adresse e-mail</label>
          <input type="email" id="email" name="email" required placeholder="Ex: henry.gossou17@gmail.com" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;"> 
          <label for="">Numéro de téléphone</label>
          <input type="text" name="number" id="number" placeholder="97272235" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;">
          <button class="join-button" @click="c4()">< Suivant /></button>
        </div>

      </div>
      <div v-show="c44" style="width: 100%; height: 100%;" class="contain">
        <div class="marquee">
          <span id="active" ></span>
          <span id="active"></span>
          <span id="active"></span>
          <span id="active"></span>
        </div>
        <div style="display: flex; flex-direction: column; margin:0 210px 0 210px;">
          <h2>Inscription</h2>
          <h6>Lorem Ipsum has been the industry's standard dummy <br> text ever since the 1500s</h6>
          <label for="" style="font-weight: bold;">Membre 3</label>
          <label for="">Nom et Prénom</label>
          <input type="text" name="nom" id="nom" placeholder="Henry GOSSOU" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;">
          <label for="">Adresse e-mail</label>
          <input type="email" id="email" name="email" required placeholder="Ex: henry.gossou17@gmail.com" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;"> 
          <label for="">Numéro de téléphone</label>
          <input type="text" name="number" id="number" placeholder="97272235" style="width: 475px; height: 56px;border-radius: 6px; background-color: white; border-color: #325C6A; border-style: none;">
          <button class="join-button">< Finir /></button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        c11:true,
        c22:false,
        c33:false,
        c44:false,
      }
  },
  methods: {
    c2() {
      this.c11 = false;
      this.c22 = true;
    },
    c3() {
      this.c22 = false;
      this.c33 = true;
    },
    c4() {
      this.c33 = false;
      this.c44 = true;
    },
  },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Sora:wght@100..800&display=swap');
.inscription{
  display: flex;
  width: 100%;
  height: 100%;
}
.inscription .datal{
  width: 50%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.inscription .datar{
  width: 50%;
  height: 100%;
  background-color: #F8E7E1;
}

.inscription .datal h3{
  font-weight: bolder;
  font-size: 36px;
  font-family: "Open Sans", sans-serif;
  color: white;
}

.inscription .datal #kwabo{
  background: linear-gradient(to right, #E13AB5, #E3A171);
  background-clip: text;
  font-weight: bolder;
  font-size: 36px;
  font-family: "Open Sans", sans-serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.inscription .datar .contain .marquee{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 60px;
}
.inscription .datar .contain .marquee #active{
  width: 106.75px;
  height: 6px;
  background-color: #E13AB5;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 5px;
}
.inscription .datar .contain .marquee #noactive{
  width: 106.75px;
  height: 6px;
  background-color: #E13AB5;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 5px;
  opacity: 0.2;
}

.inscription .datar .contain h2{
  font-size: 32px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  color: black;
}
.inscription .datar .contain h6{
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  color: black;
  margin-top: -20px;
}

label, select, #email{
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 10px;
}
.join-button {
  background: linear-gradient(to right, #E13AB5, #E3A171);
  color: #000540;
  padding: 0.5rem 1rem;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  height: 56px;
  width: 475px;
  margin-top: 20px;
  margin-bottom: 354px
}
</style>
