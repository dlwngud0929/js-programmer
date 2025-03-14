function solution(a, b, c) {
    const sum = a + b + c;
    const sumSq = a * a + b * b + c * c;
    const sumCube = a * a * a + b * b * b + c * c * c;
    
    // 세 숫자가 모두 다를 경우
    if (a !== b && b !== c && a !== c) {
        return sum;
    }
    // 두 숫자가 같고 나머지 하나가 다를 경우
    else if ((a === b && b !== c) || (a === c && a !== b) || (b === c && b !== a)) {
        return sum * sumSq;
    }
    // 세 숫자가 모두 같을 경우
    else if (a === b && b === c) {
        return sum * sumSq * sumCube;
    }
}

// 예시 테스트
console.log(solution(2, 6, 1)); // 9
console.log(solution(5, 3, 3)); // 473
console.log(solution(4, 4, 4)); // 110592
