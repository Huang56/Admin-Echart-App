/* eslint-disable no-console */
import apiUtils from './index.js'

export async function getEventData () {
  console.log('getEventData')
  const result = await apiUtils.get('/eventAnalysys')
  return result
}

export async function reqPwdLogin (params) {
  const result = await apiUtils.post(`/login_pwd`, params)
  return result
}
