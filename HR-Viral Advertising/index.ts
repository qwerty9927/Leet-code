function viralAdvertising(n: number): number {
  let recipient = 5
  let like = 0
  
  for(let i = 0; i < n;i++){
      like += Math.floor(recipient/2)  
      recipient = Math.floor(recipient/2) * 3
  }
  
  return like
}

console.log("Result: ", viralAdvertising(3))