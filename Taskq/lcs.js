const str = process.argv;
let result = "";

if (str.length > 2) {
    str.length === 3 ? result = str[2] : (() =>
    {
        let s = str[2], minLen = str[2].length;
        for (let i = 3; i < str.length; i++)
        {
            str[i].length < minLen && (s = str[i], minLen = str[i].length);
        }

        for (let len = s.length; len > 0; len--)
        {
            for (let start = 0; start <= s.length - len; start++)
            {
                let substr = "";
                for (let i = start; i < start + len; i++)
                {
                    substr += s[i];
                }

                let foundInAll = true;
                for (let k = 2; k < str.length; k++)
                {
                    if (str[k].indexOf(substr) === -1)
                    {
                        foundInAll = false;
                        break;
                    }
                }

                if (foundInAll)
                {
                    result = substr;
                    break;
                }
            }
           if (result) break;
        }
    })();
}

console.log(result);