function rot13(str) {
  return str.split('')
  .map.call(str, function(char) {
    x = char.charCodeAt(0);
    if (x <65 || x > 90) {
      return String.fromCharCode(x);
    }
    else if(x < 78) {
      return String.fromCharCode(x + 13);
    }
    return String.fromCharCode( x -13);
  }).join('');
}

console.log(rot13('LBH QVQ VG'));
//YOU DID IT

function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray).join();
  return str;
}

console.log(rot13('LBH QVQ VG'));

function rot13(str) {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
console.log(rot13('LBH QVQ VG'));