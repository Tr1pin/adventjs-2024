function isTreesSynchronized(tree1, tree2) {

    if (!tree1 && !tree2) return [true, null];
    if (!tree1 || !tree2) return [false, null];
  
    if (tree1.value !== tree2.value) {
        return [false, tree1.value];
    }
  
    //Bucle recursivo hasta que se cumpla una de las condiciones o ya no haya más subnodos
    const left = isTreesSynchronized(tree1.left, tree2.right);
    const right = isTreesSynchronized(tree1.right, tree2.left);
  
   
    const isSynchronized = left[0] && right[0];
    return [isSynchronized, tree1.value];
  }
  
  // Ejemplo de árboles
  const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
  };
  
  const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' }
  };
  
  console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']
  