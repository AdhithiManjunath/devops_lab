function maxnum(num1,num2){
      if(num1>num2){
        console.log(num1);
      }
      else { console.log(num2);}
}
function maxof3( num1, num2, num3){
  var ans;
  ans = (num1>num2)?num1:num2;
  ans = (ans>num3)?ans:num3;
  // console.log(ans);
  return ans;
}

vowels = ['a','e','i','o','u','A','E','I','O','U'];
function checkVowels(ch){
      const ind = vowels.indexOf(ch);
      // if(ind==-1) console.log(" its not a vowel");
      // else console.log("it is a vowel "+ ch);
      if(ind == -1) return 0;
      else return 1;
}
// to get the user input 
// const userI = prompt("enter ur name:");
// const input = document.getElementById("textInput")
// const ip = input.value;
// console.log(ip);
function submitForm(){ 
const inputElement = document.getElementById('textInput').value;
console.log(inputElement);}

function translate(sen){
  var str = "";
  for(let i=0; i<sen.length-1; i++){
        var vow = checkVowels(sen[i]);
        if(vow ==0 ){
          if(i!=0){ str+=sen[i-1];}
          str+=sen[i];
          str+="o";
        }
        else{
          if(i!=0){ str+=sen[i-1];}
          str+=sen[i];
          str+=sen[i+1];
          str+="o";
        }
  }
  console.log(str);
}

function sumAmul(arr){
      var sum =0, mul =1;
      for(let i=0; i<arr.length;i++){
        sum+=arr[i];
        mul*=arr[i];
      }
      console.log(sum);
      console.log(mul);
}

function reverse(str){
      var ch = "";
      for(let i=str.length-1; i>=0; i--){
          ch+=str[i];
      }
      console.log(ch);
}

class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

// Create an object using the class
const p = new Person("John", 30, "john@example.com");


function changeAge(person, newVal){
      person.age = newVal;
}
function findLongWord( arr){
          var max =0;
       for(let i=0; i<arr.length; i++){
            max = max>arr[i].length? max: arr[i].length;
       }
       console.log(max);
}




maxnum(3,5);
console.log(maxof3(9,7,2));
checkVowels('A');
translate("this is fun");
const arr = [1,2,3,4];
sumAmul(arr);
reverse("this is fun");
console.log(p);
changeAge(p,45);
console.log(p);
const arr1 = ["adhi", "mouli", "divssssssss"];
findLongWord(arr1);



