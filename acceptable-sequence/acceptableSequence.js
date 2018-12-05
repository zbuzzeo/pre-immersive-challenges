module.exports = function acceptableSequence(str) {
      // write your code here
      /*
            Acceptable Sequence Test:
            1) should return true for "++a++===+b+=+c+==+"
            2) should return false for "x++===+y+=+z+==+"
            3) should return false for "lmnop"
      */
     console.log ( `${ str.length } characters`);
     // string.match() method to check if str[i] is a letter a-z.
     // take the index - 1 and index + 1 and check if the charAt() is a +.
     var paddedString = `+${ str }+`;  // formatting precaution just in case the first or last character is a letter.
     for( var i = 0; i < paddedString.length; i++ ) {
            var beatTheCase = `+${ paddedString[i] }+`;
            if ( paddedString[i].match( /[a-z]/i ) !== null ) {
                  if ( paddedString[i - 1] === '+' || paddedString[i + 1] === '+' ) {
                        return true;

                  }

            }

     }

     return false;

}