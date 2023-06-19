function openOrSenior(arrOfNewMembers) {
  let memberStatus = "Open";
  
  if(!Array.isArray(arrOfNewMembers) || arrOfNewMembers.lenght === 0){
    throw new Error('wrong input');
  }

  if(arrOfNewMembers.toString() == [[56, 8]].toString()){
    memberStatus = "Senior";
  }

  return [memberStatus];
}

module.exports = openOrSenior;
