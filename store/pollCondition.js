export const state = () => ({
  pollConditionType: [
    { id: 0, name: "Возраст респондента", ageRange: [{ lowerThreshold: null, upperThreshold: null }] },
    { id: 1, name: "Тип карты лояльности" },
    { id: 2, name: "Статус карты лояльности" },
    { id: 3, name: "еще одно условие" },
  ],
  currentPollConditionType: 0,
  conditions: [
    {
      id: 0,
      number: 1,
      idPollCondition: 0,
      styles: {
        backgroundColor: 'rgba(185, 188, 237, 0.21)',
        textColor: 'rgba(185, 88, 237)'
      }
    }
  ]
});

export const mutations = {
  SET_ACTIVE_CONDITION(state, obj) {
    state.conditions[obj.index].idPollCondition = +obj.conditionIDType;
  },
  SET_NEW_CONDITIONS(state, stylesObj) {

    function getMaxOfArrayId() {
      let max = 0
      state.conditions.forEach(element => {
        +element.id >= max ? max = element.id + 1 : max
      })
      return max
    }
    state.conditions.push({
      id: getMaxOfArrayId(),
      number: getMaxOfArrayId() + 1,
      idPollCondition: 0,
      styles: {
        backgroundColor: stylesObj.styles.backgroundColor,
        textColor: stylesObj.styles.textColor
      }

    })
    console.log(state.conditions);
  },
  DELETE_CONDITIONS(state, index) {

    state.conditions.splice(index, 1)
  }
};

export const actions = {
  setActiveConditionAC(vuexContext, obj) {
    vuexContext.commit('SET_ACTIVE_CONDITION', obj);
  }
};

export const getters = {
  getAllCondition(state) {
    return state.conditions;
  },
  getCondition(state) {
    return state.pollConditionType;
  },
  getCurrentCondition(state) {
    return state.currentPollConditionType;
  }
};