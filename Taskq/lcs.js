const a = process.argv
let r = ''
if (a.length > 2) {
    if (a.length == 3) r = a[2]
    else {
        let s = a[2]
        a.map(x => { if (x.length < s.length) s = x })
        for (let l = s.length; l > 0 && !r; l--)
            for (let j = 0; j <= s.length - l && !r; j++) {
                let t = s.substr(j, l), f = 1
                for (let k = 2; k < a.length; k++)if (a[k].indexOf(t) < 0) { f = 0; break }
                f && (r = t)
            }
    }
}
console.log(r)