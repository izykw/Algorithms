{
	const selectionSort = (arr: number[]): number[] => {
		for (let i = 0; i < arr.length; i++) {
			let minValueIndex = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[minValueIndex] > arr[j]) {
					minValueIndex = j;
				}
			}
			let temp = arr[i];
			arr[i] = arr[minValueIndex];
			arr[minValueIndex] = temp;
		}

		return arr;
	};
	const arr = [
		0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
		3, 32,
	];
	console.log(selectionSort(arr));
}
