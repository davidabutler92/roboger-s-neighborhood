# robogers-neighborhood
## Goal 

#### The goal is to show an understanding of arrays and looping.
#### By _**David Butler**_

## Description
#### Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

#### These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|  1. The program returns a number | 4 | 4 | 
|  2. The program returns a range of numbers from 0 to the users inputted number | 4 | 0, 1, 2, 3, 4 | 
|  3. The program will replace the numbers containing 3 with "wont you be my neighbor?" | 4 | 0, 1, 2, won't you be my neighbor?, 4 | 
|  4. The program will replace the numbers containing 2 with "boop" | 4 | 0, 1, boop, won't you be my neighbor?, 4 |
|  5. The program will replace numbers containing 1 with "beep | 4 | 0, beep, boop, won't you be my neighbor?, 4 |
|  5. The program prioritizes 3 over 2 and 1 | 321 | won't you be my neighbor? |
|  6. The program prioritizes 3 over 2 and 1 | 21 |boop |
|  7. The programs range should look like this with above logic | 5 | 0, beep, boop, won't you be my neighbor? 4, 5---9, beep, beep, boop, won't you be my neighbor? 14 |
| The program ignores non numerical values | Hello | 0 |


## Setup/Installation Requirements
* Sign into your github and navigate to this link [click here](https://github.com/davidabutler92/robogers-neighborhood.git) 
* Under the repository name, click Clone, 'green button'
* Then click the copy button next to the URL
* Open the terminal and type, git clone https://github.com/davidabutler92/robogers-neighborhood.git
* Navigate to the root directory in the terminal and type ‘open index.html’ to view project in browser
* Open project in text editor to view code
* To see on gh-pages [Click here](https://davidabutler92.github.io/robogers-neighborhood/)

## Known Bugs 
#### There are no known bugs at the time.

## Support and Contact Details
* davidabutler92@yahoo.com

## Technologies Used 
#### HTML
#### CSS
#### Git 
#### Bootstrap
#### Javascript
#### jQuery 
#### Markdown

#### Copyright (c) 2020 **_David Butler_**
#### The software is licensed under the MIT license [Click here](LICENSE.md)
