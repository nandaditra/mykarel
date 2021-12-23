/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

/** This Function to get Karel diagonal **/

function main(){
   first();
   second();
}

function first() {
 putBeeper();
 move();
 turnLeft();
 move();
 putBeeper();

}

function second() {
 pindah();
 pindah();
 pindah();

}

function pindah() {
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();

}

/** This Function to get Karel chess Problem **/

function main(){
   putBeeper();
   moveUpThreeBeeper();
   moveUpTwoBeeper();
   moveUpThreeBeeper();
   moveUpTwoBeeper();
   moveUpThreeBeeper();
}

function moveUpThreeBeeper() {
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function moveUpTwoBeeper() {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    putBeeper();
    turnRight();
}
