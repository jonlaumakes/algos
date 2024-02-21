
// ===== RULE ======
// when the while loop is finished and we don't find the element
    // OVERLAP
    // start === end + 1

// ---- example -----
// [1, 3, 8, 10, 15] key = 12
// s=0 m=2 e=4   diff = 4
// s=3 m=3 e=4   diff = 2
// s=4 m=4 e=4   diff = 3
// s=4 m=4 e=3

// =================

// if k < the smallest number arr[0] -> return smallest num
// if k > the largest number -> return largest num
// run normal binary search
    // use terminal start (end + 1) AND end
    // return whichever number has the lowest difference