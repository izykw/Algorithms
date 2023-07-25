{
	// Realization through a recursion
	type BinarySearch =
		| ((arr: number[], value: number, start?: number, end?: number) => number)
		| number
		| null;

	const recursiveBinarySearch = (
		arr: number[],
		value: number,
		start: number,
		end: number
	): BinarySearch => {
		if (start > end) {
			return null;
		}

		const middle = Math.floor((start + end) / 2);

		if (arr[middle] === value) {
			return middle;
		}

		if (value > arr[middle]) {
			return recursiveBinarySearch(arr, value, middle + 1, end);
		} else {
			return recursiveBinarySearch(arr, value, start, middle - 1);
		}
	};

	// Array must be sorted.
	const arr = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	];
	console.log(
		'Realization through a recursion',
		recursiveBinarySearch(arr, 20, 0, arr.length)
	);
}

{
	// Realization through a cycle
	type BinarySearch =
		| ((arr: number[], value: number) => number)
		| number
		| null;

	const binarySearch = (arr: number[], value: number): BinarySearch => {
		let start = 0;
		let end = arr.length;
		let middle: number;

		while (start <= end) {
			middle = Math.floor((start + end) / 2);

			if (arr[middle] === value) {
				return middle;
			}

			if (value > arr[middle]) {
				start = middle + 1;
			} else {
				end = middle - 1;
			}
		}

		return null;
	};

	// Array must be sorted.
	const arr = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30,
	];
	console.log('Realization through a cycle', binarySearch(arr, -2));
}
