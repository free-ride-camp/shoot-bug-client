function bin2String(array) {
  return String.fromCharCode.apply(String, array);
}

//day为维持的天数
function setCookie(name, value, day) {
  var odate = new Date();
  odate.setDate(odate.getDate() + day);
  document.cookie = name + "=" + value + ";expires=" + odate;
}

function getCookie(name) {
  var str = document.cookie;
  var arr = str.split("; ");
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split("=");
    if (arr1[0] == name) {
      return arr1[1];
    }
  }
}

function removeCookie(name) {
  setCookie(name, 1, -1); //给value随便赋值
}

export default {
  bin2String,
  setCookie,
  getCookie,
  removeCookie,
};
