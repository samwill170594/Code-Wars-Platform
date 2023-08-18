//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

*/



  function productFib(prod){
    let counter = 0;
    while(Fib(counter) * Fib(counter+1) < prod){
        counter++;
    }

    return [Fib(counter),Fib(counter+1),Fib(counter)*Fib(counter+1) === prod]

  }


  function Fib(integer){
    if(integer <= 1) return integer;
    return Fib(integer - 1) + Fib(integer - 2);

  }

  result = productFib(800);
  console.log(result);