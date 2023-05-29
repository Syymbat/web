// Задние 5-1
// let x = parseInt(prompt())
// alert(x*x + 2*x -1)
// console.log(x*x + 2*x -1)

// Задние 5-2  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseInt(prompt())
// let b = parseInt(prompt())
// if(a%b==0){
// alert("Divisible")
// }else{
//     alert("Not Divisible")
// }

// Задние 5-3  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let Name = prompt('What is your name');
// let Surname = prompt('What is your surname');
// let City = prompt('What city do you live in?');
// let Age = prompt('How old are you?');
// alert("Name: " + Name + "\n"+ "Surname: " + Surname + "\n" + 'City: '+City +"\n" + 'Age: '+Age  )

// Задние 5-4  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseInt(prompt())
// let b = parseInt(prompt())
// let c = parseInt(prompt())
// let ans=""
// let ansPlus=a+b+c
// let ansMines=a-b-c
// let ansMulti=a*b*c

// alert('a + b + c = ' + ansPlus + "\n" + 'a - b - c = ' + ansMines + "\n" + 'a * b * c = ' + ansMulti)

// Задние 5-5  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let n = parseInt(prompt())
// let k = parseInt(prompt())
// if(k%n!=0){
//     alert(n)
// }else{alert(k/n)}

// Задание 5-6  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseInt(prompt())
// let b = parseInt(prompt())
// alert(Math.sqrt(a*a + b*b))

// Задание 5-7  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let V = parseFloat(prompt())
// let S = parseFloat(prompt())
// result= S/V
// if(result<=2.25){
//    alert( "YES, YOU CAN REACH")
// } else{
//    alert("NO, YOU CAN NOT REACH")
// }

// Задание 5-8  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseInt(prompt())
// let b = 120
// result=a*b
// if(result>=4000){
//     alert(result-resalt*0.1)
// }else{
//     alert(result)
// }

// Задание 5-9  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a=parseInt(prompt("Enter amount"))
// let b= parseInt(prompt("1- CONVERT TO USD" + "\n"+ "2- CONVERT TO EUR"+"\n"+"3- CONVERT TO GBP"))
// if (b==1){
//     number=a/380
//     alert(number.toFixed(2)+" USD")
// }
// if(b==2){
//     number2=a/430
//     alert(number2.toFixed(2) + " EUR")
// }
// if(b==3){
//     number3=a/480
//     alert(number3.toFixed(2) + " GBP")
// } 


// Задание 5-10  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a=prompt("Enter login")
// let b=prompt("Enter password")
// let c='user'
// let d='qwerty'
// if(a ==c && b==d){
//     alert('Authentication completed')
// }else{
//     alert('Invalid login or password')
// }

// Задание 5-11  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a=prompt("Enter year")
// if(a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 ){
//     alert('YES')
// }else{
//     alert("NO")
// }

// Задание 5-12  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a=prompt("Enter rating")
// if(a>=90 && a<=100){
//     alert("A")
// } else if(a<=89 && a>=75){
//    alert("B") 
// } else if(a<=74 && a>=60){
//     alert("C")
// }else if(a<=59 && a>=50){
//     alert("D")
// } else if(a<=49){
//     alert("F")
// }

// Задание 5-13  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let fut = prompt("Choose your branch:" + "\n" + "1 - Science"+ "\n " +  "2 - Humanitarian subjects" + "\n" + " 3 - Art" + "\n" + " 4 - Sport")
// if(fut==1){
//  let two1 = prompt("You clicked on 1" + "\n" +"Choose an item" + "\n" + "1 - Math "+ "\n" +  "2 - Physics")
//  if(two1==1){
//     alert("You can become:" + "\n" + "-You are Financier.")
//  } else{
//     alert("You can become:" + "\n" + "-You are Engineer.")
//  }
// }

// if(fut==2){
//     let two2 = prompt("You clicked on 2" + "\n" +"Choose an item" + "\n" + "1 - History "+ "\n" +  "2 - Foreign Languages")
//     if(two2==1){
//        alert("You can become:" + "\n" + "-You are Historic or Diplomat.")
//     } else{
//        alert("You can become:" + "\n" + "-You are Translator.")
//     }
//  }

//  if(fut==3){
//     let two3 = prompt("You clicked on 3" + "\n" +"Choose an item" + "\n" + "1 - Drawing "+ "\n" +  "2 - Singing")
//     if(two3==1){
//        alert("You can become:" + "\n" + "-You are Painter or Architect.")
//     } else{
//        alert("You can become:" + "\n" + "-You are Singer or Tamada.")
//     }
//    }

//    if(fut==4){
//     let two4 = prompt("You clicked on 4" + "\n" +"Choose an item" + "\n" + "1 - Team "+ "\n" +  "2 - Individual")
//     if(two4==1){
//        alert("You can become:" + "\n" + "-You are footballer or Basketball player.")
//     } else{
//        alert("You can become:" + "\n" + "-You are boxer or tennis player.")
//     }
//    }

// Задание 5-14  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseFloat(prompt("Write the number a:")) 
// let b = parseFloat(prompt("Write the number b:"))
// let c = parseFloat(prompt("Write the number c:"))

// if (a + b > c && a + c > b && b + c > a){
//     alert("YES")
// } else {
//     alert("NO")
// }

// Задание 5-15  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseInt(prompt("Write the amount"))
// let result=Math.floor(a / 380)
// let res=a % 380
// if(res > 0){
//     alert(result + " USD and " + res + " cents")
// } else {
//     alert("ONLY " + result + " USD")
// }

// Задание 5-16  --------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = parseInt(prompt("Write the time"))
// let hours=Math.floor(a / 60)
// let minute=a % 60
// if(minute>0){
//     alert(hours + " HOURS and " + minute +" MINUTES")
//     }else{
//         alert("ONLY " + hours + " HOURS")
//     }
