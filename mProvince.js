// NOT ACTIVE
// Cannot figure out how to connect through require yet.

var mProvinces  = [
  ["Centre","Cenral","CEN","Yaounde"],
  ["Extreme-Nord","Extreme North","EXN","Maroua"],
  ["Littoral","Littoral","LIT","Douala"],
  ["Nord","North","NOR","Garoua"],
  ["Nord-Oueste","North West","NOU","Bamenda"],
  ["Ouest","West","OUE","Bafoussam"],
  ["Sud-Oueste","South West","SOU","Buea"],
  ["Adamaoua","Adamawa","ADA","Ngaoundere"],
  ["Est","East","EST","Bertoua"],
  ["Sud","South","SUD","Ebolowa"]
];

exports.getProvince = function (tCode) {
  for (var i = mProvinces.length - 1; i >= 0; i--) {
    if (tCode == mProvinces[i][2]){
      var o = {
        fr:mProvinces[i][0],
        en:mProvinces[i][1],
        code:mProvinces[i][2],
        capital:mProvinces[i][3]
      }
      return(o);
    }
  };
  console.log (' mising Province ID ----- ')
}

