function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

function makeSquare(size){
  let square = '';
  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
          square += makeRectangle(size,size);
      }
      return square;
  }

  
}

function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle;
    
 
}

function newMakeSquare(width,height){
  let newSquare = '';
  if (width === height){
  newSquare = makeRectangle(width,height);
  return newSquare;}
  else {console.log('Height and width do not make a square.');

  }

}

 
function makeDownwardStairs(height){
  let stairs = ''
  for (i = 0; i < height; i++){
    stairs += (makeLine(i+1) + '\n');
  } 
  return stairs
}


function makeSpaceLine(numSpaces,numChars){
  let chars = ''
  let spaces = ''
  
  for (i = 0; i < numSpaces; i++){
    spaces += ' ';
    }

  for (j = 0; j < numChars; j++){
    chars += '#';
  }

  return (spaces + chars + spaces);
  
}



function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle;
}
function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
      reversed = str[i] + reversed;
  }
  return reversed;
}

function makeDiamond (height){
let diamond = ''
diamond =(makeIsoscelesTriangle(height).trimEnd() + reverse(makeIsoscelesTriangle(height).trimStart()));
return diamond;
}

console.log(makeDiamond(6));