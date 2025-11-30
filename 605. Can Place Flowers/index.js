function canPlaceFlowers(flowerbed, n) {
    var approvedPlot = 0;
    for (var i = 0; i < flowerbed.length; i++) {
        var isAvailableOnLeft = flowerbed[i - 1] == 0 || flowerbed[i - 1] == undefined;
        var isAvailableOnRight = flowerbed[i + 1] == 0 || flowerbed[i + 1] == undefined;
        if (isAvailableOnLeft && isAvailableOnRight && flowerbed[i] == 0) {
            flowerbed[i] = 1;
            approvedPlot++;
        }
    }
    console.log(approvedPlot);
    return approvedPlot == n;
}
canPlaceFlowers([0, 0, 1, 0, 0], 1);
