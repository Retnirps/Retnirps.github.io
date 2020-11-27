function swap(arr, leftIndex, rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)], // middle element
        i = left, // left pointer
        j = right; // right pointer
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right); // index returned from partition
        if (left < index - 1) { // more elements on the left side of the pivot
            quickSort(arr, left, index - 1);
        }
        if (index < right) { // more elements on the right side of the pivot
            quickSort(arr, index, right);
        }
    }
    return arr;
}

class MyArray extends Array {
    randomIntegers(n) {
        for (let i = 0; i < this.length; i++) {
            this[i] = Math.floor(Math.random() * Math.floor(n));
        }
    }

    min() {
        // return Math.min.apply(null, arr);
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < this.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    max() {
        // return Math.max.apply(null, arr);
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < this.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    median() {
        let sortedArray = this.sort(function (a, b) {
            return a - b;
        })
        if (sortedArray.length % 2 === 1) {
            return sortedArray[Math.ceil(sortedArray.length / 2)];
        } else {
            return 0.5 * (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]);
        }
    }
}


let arr = new MyArray(1000);
arr.randomIntegers(5000);

alert("array:\n" + arr);
alert("min of array:\n" + arr.min());
alert("max of array:\n" + arr.max());
alert("median of array:\n" + arr.median());
alert("sorted array:\n" + quickSort(arr, 0, arr.length - 1));
