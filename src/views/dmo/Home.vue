<template>
  <div class="home">
    <div class="action">
      <b-icon-folder-plus class="icon"></b-icon-folder-plus>Ajouter des données sur une officine
    </div>
    <div class="action">
      <b-icon-list-ul class="icon"></b-icon-list-ul>Prix des médicaments
    </div>
    <div class="action">
      <b-icon-cart-2 class="icon"></b-icon-cart-2>Vendre des médicaments
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: 2px solid #004660;
  padding: 15px 0;
  margin-bottom: 30px;
  border-radius: 10px;
  color: #004660;
  transition-duration: 0.4s;
}
.action:hover {
  background-color: #004660;
  color: white;
  cursor: pointer;
}

.icon {
  font-size: 24px;
  margin-right: 8px;
}
</style>
