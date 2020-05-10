export function debounce(func, delay) {  //防抖 第一个参数是函数的名称，第二个参数是等多少时间
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}