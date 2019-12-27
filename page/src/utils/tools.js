function isEmpty (formData) {
   if(Object.prototype.toString.call(formData) !== '[object Object]') {
      return false; // 不是对象范围false
   }

   for (let key in formData) {
      if (formData[key]) {
         return false;
      }
   }
   return true;
}

function isFull (formData) {
   for(let key in formData) {
      if (!formData[key]) return false;
   }
   return true;
}

function recoverObserver (observerArr) {
   // observerArr是类数组
   let targetArr = [];
   for (let key in observerArr) {
      let target = {};
      const origin = observerArr[key];
      for (let tKey in origin) {
         target[tKey] = origin[tKey];
      }
      targetArr.push(target);
   }
   return targetArr;
}

module.exports = {
   isEmpty,
   isFull,
   recoverObserver
}