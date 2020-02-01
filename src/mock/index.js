/* eslint-disable no-console */
import Mock from 'mockjs'
// import mockData from './mockData'
import eventAnalysis from './eventAnalysis/eventAnalysis'
import eventAnalysis2 from './eventAnalysis/eventAnalysis2'
Mock.mock('/eventAnalysys', 'post', (options) => {
  console.log('options', options)
  if (options.body.includes('true')) {
    return eventAnalysis2
  }
  return eventAnalysis
})
// 输出结果
