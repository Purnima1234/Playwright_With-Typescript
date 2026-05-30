/*Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT.
*/

function classifyJsBasicsScore(score) {
if(score>=90){
    console.log("Excellent");  
    
}
else if(score>=75 && score<=89) {
    console.log("Good");
}
else if (score >=50 && score<= 74) {
    console.log("Needs Practice");
  
}
else {
    console.log("Revisit");
}
}
classifyJsBasicsScore(70)








