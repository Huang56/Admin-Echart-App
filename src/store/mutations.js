import * as TYPES from './mutation-types'

export default {
    [TYPES.ADD_KEEPALIVE](state, payload) {
        if (!state.keepAliveComponents.includes(payload.component)) {
            state.keepAliveComponents.push(payload.component)
        }
    },
    [TYPES.DEL_KEEPALIVE](state, payload) {
        let index = state.keepAliveComponents.indexOf(payload.component)
        if (index >= 0) {
            state.keepAliveComponents.splice(index, 1)
        }
    },
    [TYPES.ADD_ONE](state, payload) {
        state.add_one = state.add_one + payload
    },
    [TYPES.REDUCE_ONE](state, payload) {
        state.reduce_one = state.reduce_one - payload
    },
}