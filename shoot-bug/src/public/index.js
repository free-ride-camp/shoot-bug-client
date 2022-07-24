function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

function emailFormatCheck(email) {
    let reg =
    /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    if (reg.test(email)) {
        return true
    }
    return false
}

export default {
    bin2String,
    emailFormatCheck
}