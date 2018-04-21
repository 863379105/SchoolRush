//浅拷贝对象
function copy(obj){
  var newobj = {}
  for ( var attr in obj) {
      newobj[attr] = obj[attr]
  }
  return newobj
}

//深拷贝对象
function deepCopy(obj) {
  if(typeof obj != 'object'){
    return obj
  }
  var newobj = {}
  for ( var attr in obj) {
      newobj[attr] = deepCopy(obj[attr])
  }
  return newobj
}

export default {
  copy,
  deepCopy,
}