{
	function quickSort(arr: number[]): number[] {
		if (arr.length <= 1) {
			return arr;
		}

		const left: number[] = [];
		const right: number[] = [];

		const anchor = Math.floor(arr.length / 2);
		for (let i = 0; i < arr.length; i++) {
			if (i === anchor) {
				continue;
			}
			if (arr[i] >= arr[anchor]) {
				right.push(arr[i]);
			} else {
				left.push(arr[i]);
			}
		}

		return [...quickSort(left), arr[anchor], ...quickSort(right)];
	}

	const arr = [
		0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
		3, 32,
	];
	const res = quickSort(arr);
	console.log(res);
	console.log(res.length);
	console.log(arr.length);
}
