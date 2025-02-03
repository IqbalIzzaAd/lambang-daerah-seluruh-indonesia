//Menampilkan Deret Fibonacci
const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };
  
  //Sorting Array
  const sortArray = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  
  //Cek Palindrom
  const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
  };
  
  //Contoh Penggunaan
  console.log("Fibonacci 10:", generateFibonacci(10));
  console.log("Sorting Array:", sortArray([5, 2, 9, 1, 6]));
  console.log("Apakah 'Kasur ini rusak' Palindrom?", isPalindrome("Kasur ini rusak"));
  