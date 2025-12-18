import * as fs from "fs"

function getInput(sourceName: string): string[] {
  const content: string[] = fs.readFileSync(sourceName, { encoding: "utf-8" }).split("\n")

  return content
}

function mainPartOne() {
  const dataset: string[] = getInput("./input.txt")
  const signSet: string[] = dataset[dataset.length - 1]!.trim().split(/\s+/)
  const matrix: number[][] = dataset
    .splice(0, dataset.length - 1)
    .map((d) => d.trim().split(/\s+/).map(Number))
  let result: number = 0

  // console.log(matrix, signSet)

  for (let i = 0; i < matrix[0]!.length; i++) {
    let temp: number = matrix[0]![i]!
    for (let j = 1; j < matrix.length; j++) {
      switch (signSet[i]) {
        case "+":
          temp += matrix[j]![i]!
          break
        case "*":
          temp *= matrix[j]![i]!
          break
      }
    }
    // console.log(temp)
    result += temp
  }

  console.log(`Result: ${result}`)
}

// mainPartOne()

function mainPartTwo() {
  const dataset: string[] = getInput("./input.txt")
  const signSet: string[] = dataset[dataset.length - 1]!.trim().split(/\s+/)
  const matrix: string[][] = dataset.splice(0, dataset.length - 1).map((d) => d.split(""))
  const stack: number[] = []
  let result: number = 0

  for (let i = matrix[0]!.length - 1; i >= 0; i--) {
    let temp: string = ""
    for (let j = 0; j < matrix.length; j++) {
      temp = temp.concat(matrix[j]![i]!.trim())
    }
    stack.push(Number(temp))
  }

  stack.push(0)
  console.table(stack)

  let marker: number = signSet.length - 1
  let temp: number = stack[0]!

  for (let i = 1; i < stack.length; i++) {
    if (stack[i] == 0) {
      result += temp
      temp = stack[++i]!
      marker--
    } else {
      switch (signSet[marker]) {
        case "+":
          temp += stack[i]!
          break
        case "*":
          temp *= stack[i]!
          break
      }
    }
  }

  console.log(`Result: ${result}`)
}

mainPartTwo()
