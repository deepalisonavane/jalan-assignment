const func = (i, p, n) => {
  //intialisation
  var temp = new Array(n);

  let k = 0;

  // Storing the shifted elements into temp[]
  for (let i = p; i < n; i++) {
    temp[k] = arr[i];
    k++;
  }

  // Storing the elements before the poistion into temp
  for (let i = 0; i < p; i++) {
    temp[k] = arr[i];
    k++;
  }
  //Printing the temp array which stores the result
  for (let i = 0; i < n; i++) {
    console.log(temp[i]);
  }
};

let arr = [1, 3, 2, 7, 4, 6];
let n = arr.length;
let p = 3; //poistion
func(arr, p, n);
