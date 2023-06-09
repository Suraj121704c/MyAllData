var romanToInt = function (s) {
    let romanValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        const currentValue =  romanValue[current]
        const next = s[i+1]
        const nextValue = romanValue[next]
        if(next && nextValue > currentValue) {
             ans  += nextValue - currentValue
             i++;
        }else{
            ans += currentValue
        }
    }
};

romanToInt("IV")