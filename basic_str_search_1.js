
exports.str_search = function(strs, txt){

    var res = {};

    for (var i = strs.length - 1; i >= 0; i--) {
        var n = 0,
            currentPos = 0;

        while (
        (currentPos < txt.length - strs[i].length) &&
        (currentPos = txt.indexOf(strs[i], currentPos) + 1)
            )++n;

        res[strs[i]] = n;
    }
    return res;
};