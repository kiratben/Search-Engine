exports.subStrSearch = function (strs, txt) {
    var res = {},
        i = strs.length,
        e = '', 
        pos = 0, 
        cmp = 0;

while (i--) {
        e = strs[i]; cmp = 0;
        if (e.length === 0) { 
            pos = -1;
        } else {
            pos = txt.indexOf(e);
        }
        while (pos !== -1) {
            cmp++;
            pos = txt.indexOf(e, pos + e.length); 
        }
        res[e] = cmp;
    }

    return res;
}