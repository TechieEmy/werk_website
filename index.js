let a = 4;
let b= 5;
function num(){
console.log(a*b)
}
num();

// assignment 1

function maxNumber(num1, num2){
                    if(num1 > num2){
                                        return num1;
                    }else{
                                        return num2;
                    }
}
console.log(maxNumber(5,10));

// 2

for(i=1; i<=100; i++){
                    if(i===33 && i===55){
                                        console.log('FizzBuzz');
                    }else if(i===3){
                                        console.log('Fizz')
                    }else if(i===5){
                                        console.log('Buzz')
                    }else{
                                        console.log(i)
                    }
}

// 3

function showStars(rows){
                    for(let row = 1; row<rows;row++){
                                        let pattern=""
                                        for(let i=0;i<row;i++){
                                                            pattern +='*';

                                        }
                                        console.log(pattern);
                    }
}
showStars(5)

// 4
function nearestPowerOf2(num){
                    let pwr = Math.pow(2, Math.round(Math.log2(num)));
                    if(Math.abs(pwr-num) > Math.abs(pwr/2-num)){
                                        pwr = pwr/2
                    }
                    console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);
}
nearestPowerOf2(40)