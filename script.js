function knightMoves(start, end) {
    const moves = [
        [2,1],
        [1,2],
        [-1,2],
        [2,-1],
        [1,-2],
        [-2,1],
        [-1,-2],
        [-2,-1]
    ]

    const queue = [[start]];

    while(queue.length > 0) {
        const currentPath = queue.shift();
        const currentPosition = currentPath[currentPath.length - 1];

        if(currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            return currentPath;
        }

        for(let move of moves) {
        const nextX = currentPosition[0] + move[0];
        const nextY = currentPosition[1] + move[1];

        if(nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
      const newPath = currentPath.slice()
      newPath.push([nextX, nextY])
      queue.push(newPath);
     }
    }
  }
}

console.log(knightMoves([0,0], [7,7]))