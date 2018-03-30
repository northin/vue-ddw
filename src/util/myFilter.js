let myFilter = {
  toMoney: function (value) {
   if (!value) return ''
   value = value.toString()
   return value+".00"
 },
 capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}



export default myFilter
