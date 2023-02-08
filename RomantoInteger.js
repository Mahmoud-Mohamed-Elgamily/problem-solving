var romanToInt = function(s) {
      
    const digitLib = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    } 
        
    let n = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] < s[i+1]) {
            n += (s[i+1] - s[i])
            i++
        } else {
            n += s[i]
        }
    }

    return n
 }

console.log(romanToInt("MCMXCIV"))