function solution(num_list) {
    const sorted = num_list.slice().sort((a,b)=>a-b);
    return sorted.slice(0,5);
}