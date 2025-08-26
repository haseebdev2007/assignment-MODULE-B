//MARKSHEET

const totalMarks = 500; 

let math = 87;
let physics = 78;
let chemistry = 70;
let english = 83;
let urdu = 97;

const subjects = [math,physics,chemistry,english,urdu];

const obtainedMarks = math + physics + chemistry + english + urdu;
const percentage = (obtainedMarks / totalMarks)* 100;

let grade ;
if (percentage >= 90){
    grade = "A+";
} else if (percentage >= 80){
    grade ="A";
} else if (percentage >= 70){
    grade = "B";
} else if (percentage >= 60){
 grade = "C";

} else if (percentage >= 50){
    grade = "D"
} else  if(percentage <= 50){
   grade = "FAIL";
}

console.log(`       Student Mark Sheet
       
       Math : ${math};
       physics : ${physics};
       chemistry : ${chemistry};
       english : ${english};
       urdu : ${urdu};
       --------------------------------
       totalMarks : ${totalMarks}
       percentage : ${percentage}% 
       obtainedMarks : ${obtainedMarks} 
       grade :  ${grade}`);


    // Showing result in the document
    document.write(`<h2>Student Mark Sheet</h2>`);
    document.write(`<p><strong>Math:</strong> ${math}</p>`);
    document.write(`<p><strong>Physics:</strong> ${physics}</p>`);
    document.write(`<p><strong>Chemistry:</strong> ${chemistry}</p>`);
    document.write(`<p><strong>English:</strong> ${english}</p>`);
    document.write(`<p><strong>Urdu:</strong> ${urdu}</p>`);
    document.write(`<hr>`);
    document.write(`<p><strong>Total Obtained Marks:</strong> ${obtainedMarks} / ${totalMarks}</p>`);
    document.write(`<p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>`);
    document.write(`<p><strong>Grade:</strong> ${grade}</p>`);
