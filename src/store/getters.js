/* eslint-disable no-console */
const doneTodosCount = (state) => {
    return state.add_one * 2
  }
const reduceCount = (state) => {
    return state.reduce_one * 2
  }

export default {
    doneTodosCount,
    reduceCount
}