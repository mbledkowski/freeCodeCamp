function convertToRoman(num) {
    let result = ""
    let characters="IVXLCDM"

    for (let i = 6; i >= 0; i--){
        if (i%2 == 0){
            let charNum = Math.pow(10, i/2)
            while(num >= charNum){
                result += characters.charAt(i)
                num -= charNum
            }
            if(num >= charNum*9/10){
                result += characters.charAt(i-2)+characters.charAt(i)
                num -= charNum*9/10
            }
        } else {
            let charNum = Math.pow(10, (i+1)/2)/2
            if(num >= charNum){
                result += characters.charAt(i)
                num -= charNum
            }
            if(num >= charNum*4/5){
                result += characters.charAt(i-1)+characters.charAt(i)
                num -= charNum*4/5
            }
        }
    }
    
    return result
}

convertToRoman(36)

