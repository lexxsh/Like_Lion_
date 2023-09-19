/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    var answer = 0;
    let gop=1;
    for(let i = 1;i<11;i++){
        gop*=i;
        if(gop>n) {
            answer =  i-1;
            break;
        }
    }
    return answer;
}