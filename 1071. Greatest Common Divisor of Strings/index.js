function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1)
        return "";
    var gcd = function (a, b) {
        if (b === 0) {
            return Math.abs(a);
        }
        return gcd(b, a % b);
    };
    console.log(gcd(str1.length, str2.length));
    return str1.substring(0, gcd(str1.length, str2.length));
}
console.log(gcdOfStrings("abcabc", "abc"));
