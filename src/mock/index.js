/* eslint-disable no-console */
import Mock from 'mockjs'
// import mockData from './mockData'
import eventAnalysis from './eventAnalysis/eventAnalysis'
Mock.mock('/eventAnalysys', () => {
  return eventAnalysis
})
// 输出结果
