/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    var answer = [];
    let hol=0;
    let jjak=0;
    for(let i = 0;i<num_list.length;i++){
        if((num_list[i]%2)==0) jjak++;
        else hol++;
    }
    answer[0] =jjak;
    answer[1] =hol;
    return answer;
}