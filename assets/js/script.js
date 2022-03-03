"use strict";

function createGraphBar(n = 35) {
	const container = document.querySelector("#container");
	container.innerHTML = "";

	for (let i = 0; i < n; i++) {
		let val = Math.floor(Math.random() * 100 + 1);
		let div = document.createElement("div");
		div.classList.add("bar");
		div.style.height = `${val * 3}px`;
		div.style.transform = `translateX(${i * 21}px)`;
		let span = document.createElement("span");
		span.innerHTML = val;
		span.classList.add("top");
		div.appendChild(span);
		container.appendChild(div);
	}
}

async function selectionSort(interval = 90) {
	const allBar = document.querySelectorAll(".bar");

	for (let i = 0; i < allBar.length; i++) {
		let index = i;
		allBar[i].style.background = "red";

		for (let j = index + 1; j < allBar.length; j++) {
			allBar[j].style.background = "lime";
			let b1v = parseInt(allBar[j].childNodes[0].innerHTML);
			let b2v = parseInt(allBar[index].childNodes[0].innerHTML);

			if (b1v < b2v) {
				if (index != i) {
					allBar[index].style.background = "rgb(21, 151, 91)";
				}
				index = j;
			} else {
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, interval)
				);
				allBar[j].style.background = "rgb(21, 151, 91)";
			}
		}

		let t1 = parseInt(allBar[i].childNodes[0].innerHTML);
		let h = allBar[i].style.height;
		allBar[i].style.height = allBar[index].style.height;
		allBar[i].childNodes[0].innerHTML = allBar[index].childNodes[0].innerHTML;
		allBar[index].style.height = h;
		allBar[index].childNodes[0].innerHTML = t1;
		allBar[index].style.background = "rgb(21, 151, 91)";
		allBar[i].style.background = "blue";
	}

}

async function insertionSort(interval = 90) {
	const allBars = document.querySelectorAll(".bar");

	for (let i = 1; i < allBars.length; i++) {
		let key = parseInt(allBars[i].childNodes[0].innerHTML);
		let h = allBars[i].style.height;
		allBars[i].style.background = "red";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, interval)
		);
		let j = i - 1;

		while (j >= 0 && parseInt(allBars[j].childNodes[0].innerHTML) > key) {
			allBars[j].style.background = "lime";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, interval)
			);
			allBars[j].style.background = "rgb(21, 151, 91)";
			allBars[j + 1].style.height = allBars[j].style.height;
			allBars[j + 1].childNodes[0].innerHTML = parseInt(
				allBars[j].childNodes[0].innerHTML
			);
			allBars[j + 1].style.background = "blue";
			j--;
		}

		allBars[j + 1].style.height = h;
		allBars[j + 1].childNodes[0].innerHTML = key;
		allBars[i].style.background = "blue";
		allBars[j + 1].style.background = "blue";
	}

}

async function getIndex(arr, lb, ub, allBar, interval) {
	let pivot, start, end, nt;
	pivot = arr[lb];
	start = lb;
	end = ub;

	while (start < end) {
		while (arr[start] <= pivot) {
			allBar[start].style.background = "lime";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, interval)
			);
			if (arr[start] == pivot) {
				allBar[start].style.background = "blue";
			} else {
				allBar[start].style.background = "#15975b";
			}
			start++;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, interval)
			);
		}

		while (arr[end] > pivot) {
			allBar[end].style.background = "lime";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, interval)
			);
			allBar[end].style.background = "#15975b";
			end--;
		}

		if (start < end) {
			allBar[start].style.background = "red";
			allBar[end].style.background = "red";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, interval)
			);
			let temp, height;
			temp = arr[start];
			height = allBar[start].style.height;
			arr[start] = arr[end];
			allBar[start].childNodes[0].innerHTML = parseInt(
				allBar[end].childNodes[0].innerHTML
			);
			allBar[start].style.height = allBar[end].style.height;
			arr[end] = temp;
			allBar[end].childNodes[0].innerHTML = temp;
			allBar[end].style.height = height;
			allBar[start].style.background = "#15975b";
			allBar[end].style.background = "#15975b";
		} else {
			allBar[end].style.background = "blue";
			if (start == ub) {
				start = ub - 1;
				allBar[ub].style.background = "blue";
				allBar[start].style.background = "blue";
			} else {
				allBar[ub].style.background = "blue";
			}
		}
	}
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, interval)
	);

	arr[lb] = arr[end];
	arr[end] = pivot;
	nt = allBar[lb].style.height;
	allBar[lb].childNodes[0].innerHTML = parseInt(
		allBar[end].childNodes[0].innerHTML
	);
	allBar[lb].style.height = allBar[end].style.height;
	allBar[end].childNodes[0].innerHTML = pivot;
	allBar[end].style.height = nt;
	allBar[end].style.background = "blue";
	qs(arr, lb, end - 1, allBar, interval);
	qs(arr, end + 1, ub, allBar, interval);
}

function qs(arr, lb, ub, allBar, interval) {
	if (lb < ub) {
		getIndex(arr, lb, ub, allBar, interval);
	}
}

function quickSort(interval = 300) {
	let arr = [];
	const allBar = document.querySelectorAll(".bar");

	for (let i = 0; i < allBar.length; i++) {
		arr[i] = parseInt(allBar[i].childNodes[0].innerHTML);
	}

	qs(arr, 0, arr.length - 1, allBar, interval);
}
async function Bs(interval) {
	let k, ischange = false;
	const allBar = document.querySelectorAll(".bar");
	for (let i = 1; i < allBar.length; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, interval)
		);
		for (let j = 0; j <= allBar.length - i - 1; j++) {
			allBar[j].style.background = "lime";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, interval)
			);
			if (
				parseInt(allBar[j].childNodes[0].innerHTML) >
				parseInt(allBar[j + 1].childNodes[0].innerHTML)
			) {
				allBar[j].style.background = "green";
				allBar[j + 1].style.background = "green";
				let temp = parseInt(allBar[j].childNodes[0].innerHTML);
				let h = allBar[j].style.height;
				allBar[j].childNodes[0].innerHTML = parseInt(
					allBar[j + 1].childNodes[0].innerHTML
				);
				allBar[j].style.height = allBar[j + 1].style.height;
				allBar[j + 1].childNodes[0].innerHTML = temp;
				allBar[j + 1].style.height = h;
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, interval)
				);
				k = j;
			}
			allBar[j].style.background = "#15975b";
			allBar[j + 1].style.background = "#15975b";
			k = j;
		}
		allBar[k + 1].style.background = "blue";
		if (i == allBar.length - 1) {
			allBar[0].style.background = "blue";
		}
	}
}