const decreaseBtn = document.getElementById(`decreaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const countlabel = document.getElementById(`count_label`);
let count = 0;

decreaseBtn.onclick = function(){
    if(count <=0){
        count = 0;
        countlabel.textContent = count;
    }
    else{
        count-- ;
        countlabel.textContent = count;
    }
}
increaseBtn.onclick = function(){
    count++ ;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0 ;
    countlabel.textContent = count;
}
