module.exports = function countByMultiples(numItems, multiplesOf) {
  const multiples = [ ];

  for (let i = multiplesOf; i <= numItems * multiplesOf; i++) {
    if (i % multiplesOf === 0) {
      multiples.push(i);
    }
  }
  
  return multiples;
}