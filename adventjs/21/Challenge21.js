function treeHeight(tree) {
    if (tree === null) {
      return 0;
    }
  
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
  
    
    //La altura sera la de la rama con mas altura + 1
    return Math.max(leftHeight, rightHeight) + 1;
}