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
