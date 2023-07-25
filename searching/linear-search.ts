{
	const linearSearch = (arr: number[], value: number): number | null => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return i;
			}
		}
		return null;
	};

	const arr = [
		1, 2, 5, 6, 2, 3, 9, 0, 3, 43, 123, 6, 62, 49, 120, 30, 85, 39, 10, 12, 15,
		0,
	];

	console.log(linearSearch(arr, 5));
}

console.log('Something');
