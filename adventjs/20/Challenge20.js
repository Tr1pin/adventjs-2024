function fixGiftList(received, expected) {
  let result = {
    missing: {},
    extra: {}
  };

  let expectedCount = {};
  expected.forEach(e => {
    if (!expectedCount[e]) {
      expectedCount[e] = 1;
    } else {
      expectedCount[e]++;
    }
  });

  let receivedCount = {};
  received.forEach(e => {
    if (!receivedCount[e]) {
      receivedCount[e] = 1;
    } else {
      receivedCount[e]++;
    }
  });

  for (const i in receivedCount) {
    if (receivedCount[i] !== (expectedCount[i] || 0)) {
      if (receivedCount[i] > (expectedCount[i] || 0)) {
        
        result.extra[i] = (result.extra[i] || 0) + (receivedCount[i] - (expectedCount[i] || 0));
      } else {
        
        result.missing[i] = (result.missing[i] || 0) + ((expectedCount[i] || 0) - receivedCount[i]);
      }
    }
  }

  
  for (const i in expectedCount) {
    if (!receivedCount[i]) {
      result.missing[i] = (result.missing[i] || 0) + expectedCount[i];
    }
  }

  return result;
}


console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']));
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }


/*
fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }*/