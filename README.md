# Minesweeper Board Task
To run the project simply download the ZIP file containing the project files, unzip the ZIP file and open the HTML file using the browser of your choice.

## Brief
Build a program which generates and visualises the minesweeper (uncovered) game field. It must have 3 input parameters: number of rows, number of columns and number of mines. 

## Rules
* Each field is either empty, a mine, or a number.
* Mine means there is a mine in that field.
* Number means there is no mine in that field but the number tells you how many mines lay hidden in the eight surrounding squares.
* Empty means there is no mine and there are no mines in surrounding squares
* There can only be one mine in each field.
* Mines must be placed randomly in the field.

## Evaluation Criteria
A) Demonstrate understanding of problem/issue  
B) Identify what you need to do to solve problem (thought process)  
C) Approach and methodology used to solve the problem  
D) The result/outcome  
*(The generating functions are the focus, not the inputs, therefore the function calls can be hard-coded)*

## Project Notes
Once I understood the objective, I set about breaking the challenge down into components or steps, in order to make it more manageable. It was quickly apparent that there was three main components to generating the minesweeper board. 

1) Generating a grid based on the row / column inputs provided.  
2) Generating and randomly distributing a number of mines based on the mines input.  
3) Generating the clues based on a cells proximity to a number of mines and displaying this number, or displaying blank if number was zero.

I decided to use Javascript, along with HTML and CSS, to complete the challenge as I am most familiar with it and had confidence in my ability to write the required functions. I have also had some experience with writing Javascript functions to generate variably sized tables, which was a key component in my approach to this task.

It was important when generating a grid that it worked for any positive integer input for column and row, and that the cells generated could be accessed in a logical manner. Therefore I decided to use a table structure, using for loops to add rows and cells to the table. Cells were assigned a mine attribute upon generation, which was initially set to false. 

The function used for adding mines was more complex than I initially realised. I used a for loop to iterate a number of times based on the amount of mines required, the function would select a random cell in the grid and if the mine attribute was false it would set it to true. However, to meet the criteria that there could only be one mine per cell, I had to write some additional logic which meant that if a cell already contained a mine, random cells would continue to be generated until one of them had a mine attribute of false, which was then set to true. This was achieved using a while loop and break command. When generating a random cell, I also had to pass in the number of columns and rows to ensure that the random cell that was generated was one that lay inside of the grid.

Lastly, I had to write a function for generating the clues, which I named ‘countMines’ as it was effectively checking and counting the mines around the neighbouring eight cells. I used for loops to iterate over each cell in the grid, if there was not a mine in the cell, it would then iterate over the surrounding eight cells, and check for mines. Any mines found were added to a newly created variable called ‘mineCount’. If the end total of this variable was zero, the cell would display blank, otherwise it displayed the number of mines in the neighbouring 8 cells of the current cell.
