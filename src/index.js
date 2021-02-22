module.exports = function check(str, bracketsConfig) {
  let need = [];
  let cntr = true;

  need = youNeedThis(str, bracketsConfig); // строки для сплита

  while(cntr){
      for(let elem of need){
          while (str.indexOf(elem) > -1)
              str = delBrackets(str, bracketsConfig, elem);
      }
      for(let elem of need){
          if(str.indexOf(elem) == -1)
              cntr = false;
          else{
              cntr = true;
              break;
          }     
      }
  }

  if(str.length == 0)
      return true;
  else 
      return false;


  function youNeedThis(str, arr)
  {        
      let strArr = []; //хранит строки массива с закрытыми строками
      let val = "";

      for(let x = 0 ; x < arr.length; x++){
          for(let elem of arr[x])
              val += elem;
          
          strArr.push(val);
          val = "";
      }

      return strArr;
  }
  function delBrackets(str, arr, elm){

      let arrDel; //новый массив


      
          arrDel = str.split(elm);


      strArr = [];   
      str = ""; 

      for (let elem of arrDel){
          if (elem != "")
              str += elem;
      }

      return str;
  }
}
