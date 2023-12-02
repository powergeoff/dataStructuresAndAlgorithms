
//takes a SORTED array
//return the FIRST PAIR where the sum is zero
//ret type is array or undefined if pair does not exist
//looking for O(n)
function sumZero(arr){
    //two pointers one at each end
    let right = arr.length - 1;
    let left = 0;
    while(left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-2,0,2]);