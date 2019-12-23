//by github.com/mmble
function telephoneCheck(str) {
  return str.match(/^(1 ?)?((\(\d{3}\))|\d{3})( |\-)?\d{3}( |\-)?\d{4}$/) ? true : false
  //if string matches regex, return true
}

console.log(telephoneCheck("1 555-555-5555"))
