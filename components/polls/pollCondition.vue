<template>
  <div>
    <div
      class="condition"
      v-for="(conditions, index) in getAllCondition"
      :key="index"
      v-bind:style="{
        'background-color': conditions.styles.backgroundColor,
        color: conditions.styles.textColor,
      }"
    >
      <div class="condition-location">
        <h5 class="condition-name">Условие {{ conditions.number }}</h5>
        <select name="condition" @change="changeConditionType($event, index)">
          <option
            :value="condition.id"
            v-for="condition in getCondition"
            :key="condition.id"
            :selected="condition.id == conditions.idPollCondition"
          >
            {{ condition.name }}
          </option>
        </select>
      </div>

      <div>тело условия</div>

      <div class="condition-control-button">
        <button>добавить статус</button>
        <button @click="deleteCondition(conditions.id)">удалить условие</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'pollCondition',
  data() {
    return {}
  },
  mounted() {},
  unmounted() {},
  computed: {
    ...mapGetters({
      getCondition: 'pollCondition/getCondition',
      getCurrentCondition: 'pollCondition/getCurrentCondition',
      getAllCondition: 'pollCondition/getAllCondition',
    }),
  },
  methods: {
    ...mapActions({
      setActiveConditionAC: 'pollCondition/setActiveConditionAC',
    }),
    ...mapMutations({
      SET_NEW_CONDITIONS: 'pollCondition/SET_NEW_CONDITIONS',
      DELETE_CONDITIONS: 'pollCondition/DELETE_CONDITIONS',
    }),
    changeConditionType(event, index) {
      this.setActiveConditionAC({
        conditionIDType: event.target.value,
        index,
      })
    },
    deleteCondition(conditions) {
      this.DELETE_CONDITIONS(conditions)
    },
  },
}
</script>

<style scoped>
.condition {
  padding: 20px 0;
}
.condition-location {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.condition-name {
  margin: 0;
}
.condition-control-button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.condition-control-button button {
  cursor: pointer;
}
</style>
