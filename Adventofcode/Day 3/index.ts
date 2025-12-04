import * as fs from "fs"

function getInput(sourceName: string): string[] {
  const content: string = fs.readFileSync(sourceName, { encoding: "utf-8" })

  return content.split("\n")
}

function mainPartOne() {
  const dataSet: string[] = getInput("./input.txt")
  let result: number = 0

  dataSet.forEach((item: string) => {
    let largest: number = 0
    let secondLargestOnLeft: number = 0
    let secondLargestOnRight: number = 0
    let pivot: number = 0

    for (let i = 0; i < item.length; i++) {
      const num: number = parseInt(item[i]!)
      if (num > largest) {
        largest = num
        pivot = i
      }
    }

    for (let i = pivot + 1; i < item.length; i++) {
      const num: number = parseInt(item[i]!)
      secondLargestOnRight = num > secondLargestOnRight ? num : secondLargestOnRight
    }

    for (let i = pivot - 1; i >= 0; i--) {
      const num: number = parseInt(item[i]!)
      secondLargestOnLeft = num > secondLargestOnLeft ? num : secondLargestOnLeft
    }

    if (secondLargestOnRight == 0) {
      result += secondLargestOnLeft * 10 + largest
    } else {
      result += largest * 10 + secondLargestOnRight
    }
  })

  console.log(`Result: ${result}`)
}

// mainPartOne()

function mainPartTwo() {
  const dataSet: string[] = getInput("./input.txt")
  let result: bigint = BigInt(0)

  dataSet.forEach((item: string) => {
    let largestFirstNumber: number = 0
    let pivot: number = 0
    let expectEach: number[] = []

    for (let i = 0; i < item.length - 11; i++) {
      const num: number = parseInt(item[i]!)
      if (num > largestFirstNumber) {
        largestFirstNumber = num
        pivot = i
      }
    }

    expectEach.push(largestFirstNumber)

    let remainNumber: number = 10

    while (expectEach.length < 12) {
      let largest: number = 0

      for (let i = pivot + 1; i < item.length - remainNumber; i++) {
        const num: number = parseInt(item[i]!)

        if (num > largest) {
          largest = num
          pivot = i
        }
      }

      expectEach.push(largest)
      remainNumber--
    }

    result += BigInt(expectEach.join(""))
  })

  console.log(`Result: ${result}`)
}

mainPartTwo()
