function quadratic(a, b, c){
    var d, x1, x2;
        d = Math.pow(b,2) - 4*a*c;
        if (d > 0){
            x1 = (-b + Math.sqrt(d))/(2*a);
            x2 = (-b - Math.sqrt(d))/(2*a);
            return [d, x1 , x2 ];
            } else if (d === 0) {
                x1 = -b / 2*a;
                x2 = x1;
                return [d, x1, x2];
                } else {
                    document.write('Discriminant is a negative number ');
                    }
    }
        
var num1 = Number(prompt('Input variable a:'));
var num2 = Number(prompt('Input variable b:'));
var num3 = Number(prompt('Input variable c:'));
var result = quadratic(num1, num2, num3);
document.write(' d, x1, x2 = ', result);