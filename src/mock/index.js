/* eslint-disable no-console */
import Mock from 'mockjs'
// import mockData from './mockData'
Mock.mock('/eventAnalysys', ()=>{
    return {code:0,data: 213}
})
// 输出结果
