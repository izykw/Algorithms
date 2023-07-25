{
	function combSort(array: number[]): number[] {
		const factor = 1.247;

		let gap = Math.round(array.length / factor);
		while (gap >= 1) {
			for (let i = 0, j = gap; j < array.length; i++, j++) {
				if (arr[i] > arr[j]) {
					const temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
			gap = Math.floor(gap / factor);
		}

		return array;
	}

	const arr = [
		0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
		3, 32,
	];
	console.log(combSort(arr));
}
