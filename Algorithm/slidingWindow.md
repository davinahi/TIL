# Sliding window

배열이 주어지고 총 윈도우의 크기가 주어지면 그 크기만큼의 필요값을 계산한다.

- 배열의 길이만큼 전부 도는 게 아니라 윈도우의 크기의 마지막을 기준으로 돈다.

에시로

```javascript
const maxNumsSum = (arr, n) => {

}

console.log(maxNumsSum([2,6,3,6,5,7], 3))
```

이렇게 주어진다면, 배열의 길이인 6번을 도는 게 아니라, (2,6,3), (6,3,6), (3,6,5), (6,5,7) 이렇게까지만 총 네 번을 도는 것

이중배열로 처리하는 것 보다 O(n)으로 풀 수 있는 방법이 있다.
1. 배열의 첫 3 수를 더해주고
2. 더한 세 수를 기준으로 첫 번째 자리를 빼주고 4번째 자리의 수를 더하고, 또 새로 생성된 세 자리수 중 첫 번째  자리는 빼주고 5번째 자리를 더해 3개의 수를 구하는 방식으로 Math.max로 비교하여 가장 큰 합을 도출한다.

```javascript

const maxNumsSum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < n) return null;
  for(let i = 0; i < n; i++){
    maxSum += arr[i];
  };
  for(let i = n; i < arr.length; i++){
    tempSum = maxSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxNumsSum([2,6,3,6,5,7], 3))

```