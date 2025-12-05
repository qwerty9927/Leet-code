import * as fs from "fs"

function getInput(sourceName: string): string[] {
  const content: string = fs.readFileSync(sourceName, { encoding: "utf-8" })

  return content.split("\n")
}

function mainPartOne() {
  const dataSet: string[] = getInput("./input.txt")
  const matrix: number[][] = dataSet.map((item) =>
    item.split("").map((symbol) => (symbol == "@" ? 1 : 0))
  )
  let result: number = 0

  // console.table(matrix)

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i]!.length; j++) {
      if (matrix[i]![j] == 0) continue

      let counter: number =
        (matrix[i]?.[j - 1] ?? 0) +
        (matrix[i]?.[j + 1] ?? 0) +
        (matrix[i - 1]?.[j - 1] ?? 0) +
        (matrix[i - 1]?.[j] ?? 0) +
        (matrix[i - 1]?.[j + 1] ?? 0) +
        (matrix[i + 1]?.[j - 1] ?? 0) +
        (matrix[i + 1]?.[j] ?? 0) +
        (matrix[i + 1]?.[j + 1] ?? 0)

      // console.log(counter, [i, j])

      if (counter < 4) {
        result++
      }
    }
  }

  console.log(`Result: ${result}`)
}

// mainPartOne()

function mainPartTwo() {
  const dataSet: string[] = getInput("./input.txt")
  let matrix: number[][] = dataSet.map((item) =>
    item.split("").map((symbol) => (symbol == "@" ? 1 : 0))
  )
  let shadowMatrix: number[][] = matrix
  let result: number = 0

  const sumMatrix = (input: number[][]): number => {
    return input.reduce((sum, row) => sum + row.reduce((rSum, r) => rSum + r, 0), 0)
  }

  do {
    matrix = shadowMatrix.map((item) => [...item])
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i]!.length; j++) {
        if (matrix[i]![j] == 0) continue

        let counter: number =
          (matrix[i]?.[j - 1] ?? 0) +
          (matrix[i]?.[j + 1] ?? 0) +
          (matrix[i - 1]?.[j - 1] ?? 0) +
          (matrix[i - 1]?.[j] ?? 0) +
          (matrix[i - 1]?.[j + 1] ?? 0) +
          (matrix[i + 1]?.[j - 1] ?? 0) +
          (matrix[i + 1]?.[j] ?? 0) +
          (matrix[i + 1]?.[j + 1] ?? 0)

        // console.log(counter, [i, j])

        if (counter < 4) {
          shadowMatrix[i]![j] = 0
          result++
        }
      }
    }
  } while (sumMatrix(matrix) != sumMatrix(shadowMatrix))

  // console.table(matrix)

  console.log(`Result: ${result}`)
}

mainPartTwo()
