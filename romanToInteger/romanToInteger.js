var romanToInt = function(s) {
    let integerValue = 0;
      const conversionChart = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
    
      for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const nextChar = s[i + 1];
        if (
          (char === 'I' && nextChar === 'X') ||
          (char === 'I' && nextChar === 'V') ||
          (char === 'X' && nextChar === 'L') ||
          (char === 'X' && nextChar === 'C') ||
          (char === 'C' && nextChar === 'D') ||
          (char === 'C' && nextChar === 'M')
        ) {
          integerValue -= conversionChart[char];
        } else {
          integerValue += conversionChart[char];
        }
      }
    
      return integerValue;
    };
    
    console.log(romanToInt("MCMXCIV"))
    