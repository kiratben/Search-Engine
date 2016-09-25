function occurP(s, subStr) {

    if (subStr.length <= 0) return 0;

    s += "";
    subStr += "";

    var n = 0, pos = 0, step = subStr.length;

    while (true) {
        pos = s.indexOf(subStr, pos);
        
        if (pos >= 0) {
            n++;
            pos += step;
        } else break;
    }
    return n;
}