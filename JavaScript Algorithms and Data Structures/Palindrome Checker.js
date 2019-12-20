function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let len = str.length
  let firstPart=""
  for (let i=0;i<len/2;i++){
    firstPart+=str.charAt(i)
  }
  for (let i=len;i>len/2;i--){
    if (firstPart.charAt(len-i)!=str.charAt(i-1)){
      return false
    }
  }
  return true
}

palindrome("eye")
