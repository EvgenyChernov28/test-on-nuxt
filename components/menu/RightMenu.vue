<template>
  <div class="rigth-menu">
    <div class="">
      <NuxtLink class="logo-link" to="/">
        <div class="logo"></div>
      </NuxtLink>
    </div>

    <div>
      <div class="element-menu">
        <NuxtLink to="/polls" class="element-menu-link">
          <img :src="document" alt="document" />
          <div>опросы</div>
        </NuxtLink>
      </div>
      <div class="element-menu">
        <NuxtLink to="/users" class="element-menu-link"
          ><img :src="users" alt="users" />
          <div>пользователи</div>
        </NuxtLink>
      </div>
      <div class="element-menu">
        <NuxtLink to="/blackList" class="element-menu-link">
          <img :src="flag" alt="flag" />
          <div>черные списки</div></NuxtLink
        >
      </div>
      <div class="element-menu">
        <NuxtLink to="/callСentre" class="element-menu-link">
          <img :src="phone" alt="phone" />
          <div>колл-центр</div></NuxtLink
        >
      </div>
    </div>

    <div class="answer">
      <NuxtLink to="/" class="answer-link">?</NuxtLink>
    </div>
  </div>
</template>
<script>
import document from '../../assets/file-document-outline-black.png'
import users from '../../assets/users-black.png'
import flag from '../../assets/flag-black.png'
import phone from '../../assets/phone-black.png'
export default {
  data() {
    return {
      document,
      users,
      flag,
      phone,
    }
  },
}
</script>

<style scoped>
.rigth-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logo-link {
  width: 40px;
}
.logo {
  margin-top: 30px;
  background-color: #f00;
  max-width: 40px;
  max-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.logo:hover {
  background-color: #006;
}
.element-menu {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: solid 3px #000;
  border-radius: 15px;
}
.element-menu:hover {
  border: solid 3px #555;
}
.element-menu-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
}
.answer {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: solid 3px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
}
.answer-link {
  text-decoration: none;
  font-size: 20px;
}
</style>
