function quadratic(a, b, c){
    var i = -1;
    // var d = Math.pow(b,2) - 4*a*c;
    //     if (d > 0){
            var x1 = (i*b + Math.sqrt(d)) / 2*a;
            var x2 = (i*b + i*Math.sqrt(d)) / 2*a;
            var x = (a*x1*x2 - c) / (b + a*x1 + a*x2);
        return x;    
        // } else if (d === 0){
        //     var x = i*b / 2*a;
        // return x;
        // } else 
        //     document.write('Discriminant is a negative number' + d);
        // }
        
var num1 = Number(prompt('Input variable a:'));
document.write('a = ' + num1 + ';  ');
var num2 = Number(prompt('Input variable b:'));
document.write('b = ' + num2 + ';  ');
var num3 = Number(prompt('Input variable c:'));
document.write('c = ' + num3 + ';  ');
var result = quadratic(num1, num2, num3);
document.write('x = ' + result);