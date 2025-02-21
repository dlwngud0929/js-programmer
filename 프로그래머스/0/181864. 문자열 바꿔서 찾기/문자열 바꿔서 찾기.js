function solution(myString, pat) {
  // myString의 각 문자를 반대 문자로 변환(A <-> B)
  const swapped = myString.replace(/[AB]/g, char => (char === 'A' ? 'B' : 'A'));
  
  // 변환한 문자열에서 pat가 부분 문자열로 존재하면 1, 아니면 0 반환
  return swapped.includes(pat) ? 1 : 0;
}

// 예시
console.log(solution("AABBA", "ABB")); // 결과에 따라 1 또는 0 출력
