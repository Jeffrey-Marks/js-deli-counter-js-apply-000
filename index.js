var katzDeliLine = [];                                                         
var currentNumber = 0;

/*                                                                               
function takeANumber(currentLine, custName) {                                  
  currentLine.push(custName);                                                  //add custName to the end of currentLine
  return `Welcome, ${custName}. You are number ${currentLine.length} in line.` 
}                                                                              
*/

function takeANumber(line) {
  line.push(++currentNumber);
  return `Welcome! You are number ${currentNumber} in line.`;
}

function nowServing(currentLine) {                                             
  if (currentLine.length == 0) {                                               
    return "There is nobody waiting to be served!"                             
  } else {                                                                     
    var currentCust = currentLine[0];                                          //store first customer name temporarily
    currentLine.shift();                                                       //remove first customer from currentLine
    return `Currently serving ${currentCust}.`;                                
  }                                                                            
}                                                                              
                                                                               
function currentLine(line) {                                                   
  if (line.length == 0) {                                                      
    return "The line is currently empty."                                      
  } else {                                                                     
    var lineString = 'The line is currently: '                                 
    for (let i=0; i<line.length; i++) {                                        
      lineString = lineString + `${[i + 1]}. ${line[i]}, `;                    //adds #. Name to lineString for each customer
    }                                                                          
    lineString = lineString.slice(0,-2);                                       //this string will end with "...4. Jim, " so remove last 2 characters
    return lineString;                                                         
  }                                                                            