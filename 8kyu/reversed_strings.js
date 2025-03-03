// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  const res = str.split('').reverse().join('');
  return res;
}

console.log(solution('Hello world!'));
