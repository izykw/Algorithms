{
	function mergeTwoArrays(first: number[], second: number[]): number[] {
		const result: number[] = [];
		let i = 0;
		let j = 0;
		while (i < first.length && j < second.length) {
			if (first[i] < second[j]) {
				result.push(first[i]);
				i++;
			} else {
				result.push(second[j]);
				j++;
			}
		}
		while (i < first.length) {
			result.push(first[i]);
			i++;
		}

		while (j < second.length) {
			result.push(second[j]);
			j++;
		}

		return result;
	}

	function mergeSort(arr: number[]): number[] {
		console.log(`arr [${arr}]`);

		if (arr.length < 2) {
			return arr;
		}

		const half = Math.floor(arr.length / 2);
		const left = mergeSort(arr.slice(0, half));
		const right = mergeSort(arr.slice(half, arr.length));

		return mergeTwoArrays(left, right);
	}

	const arr = [
		0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
		3, 32,
	];
	console.log(mergeSort([7, 5, 2, 3, 9, 8, 6]));
}
