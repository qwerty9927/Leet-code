import * as fs from "fs"

function getInput(sourceName: string): string[] {
  const content: string = fs.readFileSync(sourceName, { encoding: "utf-8" })

  return content.split(",")
}

function mainPartOne() {
  const dataSet: string[] = getInput("./input.txt")
  let result: number = 0

  const symmetricString = (input: string): boolean => {
    const pivot = Math.floor(input.length / 2)

    return input.substring(0, pivot) == input.substring(pivot)
  }

  dataSet.forEach((item: string, index: number) => {
    const [start, end] = item.split("-").map(Number) as [number, number]

    for (let i = start; i <= end; i++) {
      if (symmetricString(i.toString())) {
        result += i
      }
    }
  })

  console.log(`Result: ${result}`)
}

// mainPartOne()

function mainPartTwo() {
  const dataSet: string[] = getInput("./input.txt")
  let result: number = 0

  const repeatedString = (input: string): boolean => {
    return (input + input).substring(1, input.length * 2 - 1).includes(input)
  }

  dataSet.forEach((item: string, index: number) => {
    const [start, end] = item.split("-").map(Number) as [number, number]

    for (let i = start; i <= end; i++) {
      if (repeatedString(i.toString())) {
        result += i
      }
    }
  })

  console.log(`Result: ${result}`)
}

mainPartTwo()
