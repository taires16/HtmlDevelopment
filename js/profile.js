function soNguyenTo(n){
    if(n<2){
        return false;
    }
    else{
        for(i=2;i<n-1;i++){
            if(n%i==0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}
var array=[3,4,1,2,5,7,8,6,9,13,11,19,14]
var arraySnt=[]
var snt=[]
array.forEach(item =>{
    arraySnt.push(item,soNguyenTo(item))
    if(soNguyenTo(item)){
        snt.push(item)
    }
})
