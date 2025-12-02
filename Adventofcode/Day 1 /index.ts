import * as fs from "fs"

function getInput(sourceName: string): string[] {
  const content: string = fs.readFileSync(sourceName, { encoding: "utf-8" })

  return content.split("\n")
}

function mainPartOne() {
  const minOrderOfDial: number = 0
  const maxOrderOfDial: number = 100
  const initOrderOfDial: number = 50
  let result: number = 0
  const dataSet: string[] = getInput("./input.txt")

  dataSet.reduce((previous, current, index) => {
    let pointLocation: number
    const direction: string = current.charAt(0)
    const value = parseInt(current.substring(1)) % 100

    if (direction == "R") {
      pointLocation = previous + value
    } else {
      pointLocation = previous - value
    }

    if (pointLocation < minOrderOfDial) {
      pointLocation += maxOrderOfDial
    }

    if (pointLocation > maxOrderOfDial) {
      pointLocation -= maxOrderOfDial
    }

    if (pointLocation == maxOrderOfDial) {
      pointLocation = minOrderOfDial
    }

    if (pointLocation == minOrderOfDial) result++

    return pointLocation
  }, initOrderOfDial)

  console.log(result)
}

// mainPartOne()

function mainPartTwo() {
  const minOrderOfDial: number = 0
  const maxOrderOfDial: number = 100
  const initOrderOfDial: number = 50
  let result: number = 0
  const dataSet: string[] = getInput("./input.txt")

  dataSet.reduce((previous, current, index) => {
    let pointLocation: number
    const direction: string = current.charAt(0)
    const value = parseInt(current.substring(1)) % 100
    result += Math.floor(parseInt(current.substring(1)) / 100)

    if (direction == "R") {
      pointLocation = previous + value
    } else {
      pointLocation = previous - value
    }

    if (pointLocation < minOrderOfDial) {
      if (previous != 0) {
        result++
      }
      pointLocation += maxOrderOfDial
    }

    if (pointLocation > maxOrderOfDial) {
      if (previous != 0) {
        result++
      }
      pointLocation -= maxOrderOfDial
    }

    if (pointLocation == maxOrderOfDial) {
      pointLocation = minOrderOfDial
    }

    if (pointLocation == minOrderOfDial) result++

    console.log(pointLocation)
    console.log(`Cycle: ${result}`)

    return pointLocation
  }, initOrderOfDial)

  console.log(result)
}

mainPartTwo()
