var testHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (heights) {
    var left = 0;
    var right = heights.length - 1;
    var maxArea = 0;
    // l [8,3]-> r [8,8]-> l [8,8]
    // walk the pointers towards each other while left < right
    while (left < right) {
        var maxHeight = (heights[left] > heights[right]) ? heights[right] : heights[left];
        var calcArea = maxHeight * (right - left);
        if (calcArea > maxArea)
            maxArea = calcArea;
        // if left > right -> move right Idx left
        if (heights[left] < heights[right]) {
            left += 1;
        }
        else {
            // opposite or equal -> move left right
            right -= 1;
        }
    }
    return maxArea;
};
console.log(maxArea(testHeights));
var waterWells = function (heights) {
    var area = 0;
    var highestLeftAtIdx = [];
    var highestLeft = 0;
    for (var i = 0; i < heights.length; i++) {
        if (heights[i] > highestLeft)
            highestLeft = heights[i];
        highestLeftAtIdx.push(highestLeft);
    }
    var reverseHighestRightAtIdx = [];
    var highestRight = 0;
    for (var i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > highestRight)
            highestRight = heights[i];
        reverseHighestRightAtIdx.push(highestRight);
    }
    var highestRightAtIdx = [];
    for (var i = heights.length - 1; i >= 0; i--) {
        highestRightAtIdx.push(reverseHighestRightAtIdx[i]);
    }
    return area;
};
