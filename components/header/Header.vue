<template>
  <div class="">
    <div class="search-and-user">
      <div>
        <input type="text" />
      </div>
      <div class="user-info">
        <div class="user-info-foto">
          <img src="../../assets/home.png" alt="home" width="30px" />
        </div>
        <div class="user-info-name">Администратор</div>
      </div>
    </div>

    <div class="breadcrumb">
      <NuxtLink to="/"
        ><img src="../../assets/home.png" alt="home" width="30px"
      /></NuxtLink>

      <span v-for="(crumb, index) in this.crumbs" :key="index">
        <img
          src="../../assets/arrow-right-thin.png"
          alt=""
          width="20px"
          v-if="crumb.fullPath !== '/'"
        />
        <NuxtLink :to="crumb.fullPath">
          {{ crumb.title }}
        </NuxtLink>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {},
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: param,
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>
<style scoped>
.search-and-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px 15px;
}
.user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-info-foto {
  background-color: rgb(255, 147, 147);
  border-radius: 50%;
  margin: 0 10px;
}
.user-info-name {
  margin-right: 20px;
}
.breadcrumb {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
}
.breadcrumb a {
  text-decoration: none;
}
</style>
