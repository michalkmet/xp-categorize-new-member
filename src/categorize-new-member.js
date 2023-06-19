function openOrSenior(arrOfNewMembers) {
  let memberStatus = "Open";
  let result = [];
  
  if(!Array.isArray(arrOfNewMembers) || arrOfNewMembers.lenght === 0){
    throw new Error('wrong input');
  }

  for (member of arrOfNewMembers) {
    if(member[0] > 54 && member[1] > 7){
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }

  return result;
}

module.exports = openOrSenior;
