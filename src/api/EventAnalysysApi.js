/* eslint-disable no-console */
import apiUtils from './index.js'

export async function getEventData(params) {
  console.log('getEventData')
  const result = await apiUtils.post('/eventAnalysys', params)
  return result
}
export async function getConverData(params) {
  console.log('getEventData')
  const result = await apiUtils.get('/converanalysis', params)
  return result
}

export async function reqPwdLogin(params) {
  const result = await apiUtils.post(`/login_pwd`, params)
  return result
}
