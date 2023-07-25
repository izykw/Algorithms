{
	function bubbleSort(arr: number[]): number[] {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j <= i; j++) {
				if (arr[j] > arr[j + 1]) {
					const temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}

		return arr;
	}

	const arr = [
		0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
		3, 32,
	];
	console.log(bubbleSort(arr));
}
console.log('dasdas');
