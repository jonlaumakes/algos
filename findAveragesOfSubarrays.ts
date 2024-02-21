const findAveragesOfSubarrays = (arr: number[], k: number): number[] => {
    const averages = [];
    //create a sliding window
        // when the end position >= k -1  (init -> iterate after window has been established)
            // add the end val to the window windowSum
            // after each iteration
                // add end val to windowSum
                    // if the window has been created (k length)
                        // push the windowSum/k to the output
                        // reduce the subArray windowSum by the first window position
                        // advance the windowStart pos

    let windowSum = 0.0;
    let windowStart = 0;
    for (let end = 0; end < arr.length -1; end++) {
        windowSum += arr[end];
        if (end >= k-1) {
            averages.push(windowSum/k);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    };

    return averages;
}