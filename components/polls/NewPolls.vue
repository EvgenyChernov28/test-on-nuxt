<template>
  <div>
    <header class="newpoll-header">
      <div class="poll-parametr">Параметры</div>
      <div class="poll-parametr">Вопросы</div>
      <div class="poll-parametr">Логика</div>
      <div class="poll-parametr">Условия</div>
      <div class="poll-parametr" v-bind:class="{ active: true }">
        Респонденты
      </div>
    </header>

    <section class="newpoll-body">
      <div class="newpoll-body_head">
        <h4>Добавить опрос</h4>
      </div>

      <div class="newpoll-body_condition">
        <PollsPollCondition />
      </div>
      <div class="newpoll-body_add-condition" @click="createNewCondition">
        Нажмите, чтобы добавить новое условие выборки. <br />
        Все условия связываются между собой логическим "И"
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'pollCondition',
  data() {
    let calculateBackground = () => {
      let a = Math.random() * 255
      let b = Math.random() * 255
      let c = Math.random() * 255
      return `rgb(${a} ${b} ${c} / 21%)`
    }
    let calculateColor = () => {
      let a = Math.random() * 255
      let b = Math.random() * 255
      let c = Math.random() * 255
      return `rgb(${a} ${b} ${c})`
    }
    return {
      calculateBackground,
      calculateColor,
    }
  },
  mounted() {},
  unmounted() {},
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    ...mapMutations({
      SET_NEW_CONDITIONS: 'pollCondition/SET_NEW_CONDITIONS',
    }),
    createNewCondition() {
      this.SET_NEW_CONDITIONS({
        styles: {
          backgroundColor: this.calculateBackground(),
          textColor: this.calculateColor(),
        },
      })
    },
  },
}
</script>
<style scoped>
.newpoll-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: green;
  font-weight: bolder;
}
.poll-parametr {
  padding: 10px 15px;
}
.active {
  border-bottom: solid 4px rgb(0, 182, 0);
  color: #000;
}
.newpoll-body {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.newpoll-body_head {
  font-weight: bolder;
  width: 100%;
  background-color: rgb(253, 253, 253);
  color: rgb(105, 105, 105);
  box-sizing: content-box;
}
.newpoll-body_head h4 {
  padding-left: 30px;
}
.newpoll-body_condition {
  width: 100%;
}
.newpoll-body_add-condition {
  text-align: center;
  width: 90%;
  padding: 10px;
  border: solid 2px rgb(235, 235, 235);
  border-radius: 10px;
  color: green;
  margin: 30px;
  cursor: pointer;
}
</style>
