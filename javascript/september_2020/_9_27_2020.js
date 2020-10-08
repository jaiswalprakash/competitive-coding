//Sort the given arr according to its id

let arr = [{ id: 1, price: 300 },  { id: 3, price: 400 }, { id: 5, price: 600 },{ id: 2, price: 40 },{id:7,price:80}]
 
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].id > arr[j + 1].id) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr)
