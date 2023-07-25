{
	function insertionSort(arr: number[]): number[] {
		for (let i = 1; i < arr.length; i++) {
			let sorted = i - 1;
			while (sorted > -1 && arr[sorted] > arr[sorted + 1]) {
				let temp = arr[sorted];
				arr[sorted] = arr[sorted + 1];
				arr[sorted + 1] = temp;
				sorted--;
			}
		}
		return arr;
	}

	const arr = [
		0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
		3, 32,
	];
	console.log(insertionSort(arr));
}
