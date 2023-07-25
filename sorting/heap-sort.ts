{
	// Transform into max heap: https://www.geeksforgeeks.org/difference-between-min-heap-and-max-heap/
	function heapify(
		arr: number[],
		length: number,
		index: number,
		counter: number,
	): [number[], number] {
		counter++;
		let largest = index;

		const left = 2 * index + 1;
		const right = 2 * index + 2;

		if (left < length && arr[left] > arr[largest]) {
			largest = left;
		}

		if (right < length && arr[right] > arr[largest]) {
			largest = right;
		}

		if (largest !== index) {
			[arr[largest], arr[index]] = [arr[index], arr[largest]];
			return heapify(arr, length, largest, counter);
		}

		return [arr, counter];
	}

	function heapSort(arr: number[]): number[] {
		const length = arr.length;
		let counter = 0;
		for (let i = length - 1; i >= 0; i--) {
			[arr, counter] = heapify(arr, length, i, counter);
		}

		for (let i = length; i > 0; i--) {
			[arr[0], arr[i]] = [arr[i], arr[0]];
			heapify(arr, i, 0, counter);
		}
		console.log(`Count ${counter}`);

		return arr;
	}

	const arr = [5, 4, 3, 2, 1];
	console.log(heapSort(arr));
}
