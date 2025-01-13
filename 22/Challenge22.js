function generateGiftSets(gifts) {
    const inds = {}
    const q = gifts.map((x, i) => {
      inds[x] = i
      return [x]
    })
    const l = [...q]
  
    while (q.length) {
      const g = q.shift()
  
      const i = inds[g?.at(-1)]
  
      const nG = gifts.slice(i + 1)
      for (const pg of nG) {
        l.push([...g, pg])
        q.push([...g, pg])
      }
    }
  
    return l
  }
  

// Ejemplos de uso:
console.log(generateGiftSets(['car', 'doll', 'puzzle']));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']));
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
