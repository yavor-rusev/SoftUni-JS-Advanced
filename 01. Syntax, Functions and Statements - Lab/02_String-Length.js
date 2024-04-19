function stringLength(str1, str2, str3) {
    let sumLenghts = str1.length + str2.length + str3.length;
    let avgLength = (str1.length + str2.length + str3.length) / 3;

    console.log(sumLenghts);
    console.log(Math.floor(avgLength));
}

stringLength('chocolate', 'ice cream', 'cake');