# Knights_Travails
A project, which checks the knights chess piece, the shortest path to a selected board's end.
Pseudo Code.
1. Make a function which takes two paramaters, start and end, both will
2. Make a list of all possible knight moves, using nested arrays.
3. Make a queue that will be taking the start parameter inside the function.
4. Make while loop, which will until the queue is empty, so queue.length > 0;
5. Inside that loop we will get the current path using the queue.shift() method, which takes the first paramater from an array and returns it.
6. Then I will make a currentPosition variable which stores the position.
7. Make an if statement that checks if the currentPositon[0],[1] are equal to the positon we gave as an end[0],[1]
8. Create a for of loop which takes all the moves for(move of moves), so when the queue is finished it will print all the steps one by one, not only the starting and ending one(got that bug once.)
9. Inside that loop create 2 variables one that takes the nextX positon, that positon will be the sum of the current + move[0].
10. Do the same for the nextY positon, the nextY variable will be the sum of the currentPositon + move[1].
11. Check if the nextX and nextY are inside the board's range, bigger than or equal to 0 and smaller than 8
12. Create a newPath variable, that will use the .slice() method that will make the currentPath into an array.
13. Push the [newX, newY] variables inside the newPath array.
14. Push the newPath array into the queue, then the queue will print out all the moves until the position is reached.

