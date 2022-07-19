function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

/*
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4! 

Ou seja, fórmula: 
n! = n x (n-1)! 

Exceto com 1, porque 1 fatorial é sempre 1: 
1! = 1 

*/