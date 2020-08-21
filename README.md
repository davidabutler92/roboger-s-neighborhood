# robogers-neighborhood
## Goal 

#### The goal is to show an understanding of arrays and looping.
#### By _**{David Butler}**_

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
|  3. The program will replace the numbers container 3 with "wont you be my neighbor?" | 4 | 0, 1, 2, won't you be my neighbor?, 4 | 
|  4. The program will replace the numbers containing 2 with "boop" | 4 | 0, 1, boop, won't you be my neighbor?, 4 |
|  5. The program will replace numbers containing 1 with "beep | 4 | 0, beep, boop, won't you be my neighbor?, 4 |
|  5. The program prioritizes 3 over 2 ad 1 | 321 | won't you be my neighbor? |
|  6. The program prioritizes 3 over 2 ad 1 | 21 |boop |
|  7. The programs range should look like this with above logic | 5 | 0, beep, boop, won't you be my neighbor? 4, 5---9, beep, beep, boop, won't you be my neighbor? 14 |
| The program ignores non numerical values | Hello | "ERROR, ENTER NUMBERS ONLY! BEEP-BOOP |


## Setup/Installation Requirements
* Sign into your github and click on this link below
* Click on fork on the top right corner @ [Click here](https://github.com/davidabutler92/robogers-neighborhood.git)
* Now you have a copy of the repo and can edit it how you please.
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

#### Copyright (c) 2020 **_{David Butler}_**
#### The software is licensed under the MIT license [Click here](LICENSE.md)
