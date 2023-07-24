function calculateMinCost() {
  //your code here
  
  // function connectRopes(arr) {
  // Create a min-heap and insert all the ropes
  let heap = [];
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
  }
  buildMinHeap(heap);

  let totalCost = 0;

  // While there is more than one rope in the heap
  while (heap.length > 1) {
    // Extract the two ropes with the shortest lengths
    let rope1 = extractMin(heap);
    let rope2 = extractMin(heap);

    // Connect the ropes and update the total cost
    let cost = rope1 + rope2;
    totalCost += cost;

    // Insert the new rope back into the heap
    insertMin(heap, cost);
  }

  return totalCost;
}

// Helper function to build a min-heap
function buildMinHeap(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

// Helper function to maintain min-heap property
function heapify(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    swap(arr, i, smallest);
    heapify(arr, n, smallest);
  }
}

// Helper function to extract the minimum element from the heap
function extractMin(arr) {
  if (arr.length === 0) {
    return -1; // Heap is empty
  }

  let min = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  heapify(arr, arr.length, 0);
  return min;
}

// Helper function to insert an element into the min-heap
function insertMin(arr, value) {
  arr.push(value);
  let i = arr.length - 1;
  let parent = Math.floor((i - 1) / 2);

  while (i > 0 && arr[parent] > arr[i]) {
    swap(arr, i, parent);
    i = parent;
    parent = Math.floor((i - 1) / 2);
  }
}

// Helper function to swap two elements in an array
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
let arr = [4, 2, 7, 6, 9];
let result = calculateMinCost(arr);
console.log(result); // Output: 62
  
}  