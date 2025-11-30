function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let approvedPlot: number = 0

  for (let i = 0; i < flowerbed.length; i++) {
    let isAvailableOnLeft: boolean = flowerbed[i - 1] == 0 || flowerbed[i - 1] == undefined
    let isAvailableOnRight: boolean = flowerbed[i + 1] == 0 || flowerbed[i + 1] == undefined

    if (isAvailableOnLeft && isAvailableOnRight && flowerbed[i] == 0) {
      flowerbed[i] = 1
      approvedPlot++
    }
  }

  console.log(approvedPlot)

  return approvedPlot == n
}

canPlaceFlowers([0, 0, 1, 0, 0], 1)
