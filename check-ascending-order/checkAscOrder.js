module.exports = function checkAscOrder(numArray) {
  // write your code in here
  // GOAL: numbers in each array are in ascending order.
  // loop through array
  // make sure that [i + 1] or [i - 1] is still an index in the array.
  // if [i + 1] is greater than [i] then return true.
  // create a variable to keep track of an array's ascending status.
  // after the loop, detect any changes with the variable and return the correct value.
  // alternative: to avoid if statements, just return the variable isCurrentlyAscending.

        console.log ( 'TEST ' );
        var isCurrentlyAscending = true;

        for ( var i = 1; i < numArray.length; i++ ) {
                if ( numArray[i] > numArray[i - 1] ) {

                } else {
                        isCurrentlyAscending = false;
                        return false;

                }

        }
        return isCurrentlyAscending;

}