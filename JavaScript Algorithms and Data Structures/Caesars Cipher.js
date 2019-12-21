function rot13(str) { // LBH QVQ VG!

  function mapRot(x){
    let firststr = "ABCDEFGHIJKLM"
    let secondstr = "NOPQRSTUVWXYZ"
    if(firststr.indexOf(x) == -1){
      if(secondstr.indexOf(x) == -1){
        return x
      } else {
        return firststr.charAt(secondstr.indexOf(x))
      }
    } else {
      return secondstr.charAt(firststr.indexOf(x))
    }
  }

  str = str.split('').map(mapRot).join('')

  return str
}

// Change the inputs below to test
rot13("SERR PBQR PNZC")
