/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\logic\logic.ts
 * @Descripttion:
 * @version:
 * @Date: 2022-05-06 18:38:27
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 21:57:08
 */


// 防抖debounce
/**
 *
 * @param func 返回一个函数
 * @param wait 等待时间
 * @returns
 */
let timer:any=null
export function debounce(func: Function, wait: number) {
  return function () {
    clearTimeout(timer);
      timer = setTimeout(func, wait);
  };
}

// 节流throttle


export function throttle(func: Function, wait: number) {
    let previous = 0;
    return function () {
        let now = Date.now();
        if (now - previous > wait) {
        func();
        previous = now;
        }
    };
    }
    
