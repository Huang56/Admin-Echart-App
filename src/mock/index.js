/* eslint-disable no-console */
import Mock from 'mockjs'
import echartData from './echartData'
import eventAnalysis from './eventAnalysis/eventAnalysis'
import eventAnalysis2 from './eventAnalysis/eventAnalysis2'
Mock.mock('/eventAnalysys', 'post', options => {
  console.log('options', options)
  if (options.body.includes('true')) {
    return eventAnalysis2
  }
  return eventAnalysis
})
Mock.mock('/converanalysis', 'get', options => {
  return echartData
})
// 输出结果
