"use strict";

/**
 * Definition quick sort function.
 * 
 * @param {number[]} num
 *        {number} startIndex (optional, default to 0)
 *        {number} endIndex (optional, default to num.length-1)
 ***/
var quickSort = function(num, startIndex, endIndex) {
    if (startIndex === undefined) {
        startIndex = 0;
    }
    if (endIndex === undefined) {
        endIndex = num.length - 1;
    }
    if (startIndex < 0 || endIndex >= num.length || startIndex >= endIndex) {
        return;
    }
    var partion = startIndex;
    var cur = endIndex;
    while (partion != cur) {
        if (cur > partion)
        {
            if (num[partion] > num[cur]) {
                var temp = num[cur];
                num[cur] = num[partion];
                num[partion] = temp;
                temp = cur;
                cur = partion + 1;
                partion = temp;
            }
            else {
                cur--;
            }
        }
        else {
            if (num[partion] < num[cur]) {
                var temp = num[cur];
                num[cur] = num[partion];
                num[partion] = temp;
                temp = cur;
                cur = partion - 1;
                partion = temp;
            }
            else {
                cur++;
            }
        }
    }
    quickSort(num, startIndex, partion-1);
    quickSort(num, partion+1, endIndex);
}

var printArray = function(num) {
    for (var i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
}

var num = [4, 5, 8, 2, 1, 3, 11];
quickSort(num);
printArray(num);