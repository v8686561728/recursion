const sequenceSum = (arr, result, k, i, sum) => {
  if (i >= arr.length) {
    if (sum === k) {
      console.log(result);
      return;
    }
    return;
  }

  result.push(arr[i]);
  sum = sum + arr[i];
  sequenceSum(arr, result, k, i + 1, sum);
  result.pop();
  sum = sum - arr[i];
  sequenceSum(arr, result, k, i + 1, sum);
};
sequenceSum([1, 3, 4, 2], [], 7, 0, 0);
