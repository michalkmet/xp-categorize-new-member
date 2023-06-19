function openOrSenior(arrOfNewMembers) {
  if(!Array.isArray(arrOfNewMembers) || arrOfNewMembers.lenght === 0){
    throw new Error('wrong input');
  }
}

module.exports = openOrSenior;
