<template>
  <div class="wrapper">
    <MenuRightMenu class="right-menu" />
    <Header class="header" />
    <Nuxt class="main-page" />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-areas:
    'nav header'
    'nav article'
    'nav article';
  grid-template-rows: 100px 1fr;
  grid-template-columns: 180px 1fr;
  grid-gap: 10px;
  height: 100vh;
  margin: 0 40px 0 0;
  background: linear-gradient(#f8f8f8, #ffffff);
}
.right-menu {
  grid-area: nav;
  height: 100vh;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.header {
  grid-area: header;

  margin-left: 30px;
}
.main-page {
  grid-area: article;
  margin-left: 30px;
}
</style>