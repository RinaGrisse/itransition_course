const a = process.argv
let r = ''
if (a.length > 2) {
    if (a.length == 3) r = a[2]
    else {
        let s = a[2]
        for (let i = 3; i < a.length; i++)if (a[i].length < s.length) s = a[i]
        for (let l = s.length; l > 0; l--) {
            for (let j = 0; j <= s.length - l; j++) {
                let t = s.substr(j, l), f = 1
                for (let k = 2; k < a.length; k++)if (a[k].indexOf(t) < 0) { f = 0; break }
                if (f && t.length > r.length) r = t
            }
            if (r) break
        }
    }
}
console.log(r)