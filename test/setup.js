//要先于enzyme加载,react-16依赖此方法,没有会有个warning
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};