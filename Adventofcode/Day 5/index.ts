import * as fs from "fs"

function getInput(sourceName: string): [string[], string[]] {
  const content: string[] = fs.readFileSync(sourceName, { encoding: "utf-8" }).split("\n\n")

  const sessionOne: string[] = content[0]!.split("\n")
  const sessionTwo: string[] = content[1]!.split("\n")

  return [sessionOne, sessionTwo]
}

function mainPartOne() {
  const [idRanges, ids] = getInput("./input.txt")
  let idsNum: number[] = ids.map(Number)
  let result: number = 0

  idRanges.forEach((range) => {
    const [start, end] = range.split("-").map(Number) as [number, number]
    for (let i = 0; i < idsNum.length; i++) {
      if (idsNum[i]! >= start && idsNum[i]! <= end) {
        result++
        idsNum.splice(i, 1)
        i--
      }
    }
  })

  console.log(`Result: ${result}`)
}

// mainPartOne()

function mainPartTwo() {
  const [idRanges] = getInput("./input.txt")

  const idRangesNumber = idRanges
    .map((r) => r.split("-").map(Number) as [number, number])
    .sort((a, b) => a[0] - b[0])

  let handHold = -Infinity
  let result = 0

  for (const [start, end] of idRangesNumber) {
    const effectiveStart = Math.max(start, handHold + 1)

    if (effectiveStart <= end) {
      result += end - effectiveStart + 1
      handHold = end
    }
  }

  console.log(`Result: ${result}`)
}

mainPartTwo()
