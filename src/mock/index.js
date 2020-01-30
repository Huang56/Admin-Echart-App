/* eslint-disable no-console */
import Mock from 'mockjs'
// import mockData from './mockData'
import echartData from './echartData'
Mock.mock('/eventAnalysys', ()=>{
    return {code:0,data: echartData}
})
// 输出结果
