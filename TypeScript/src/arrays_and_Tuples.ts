let person : string[] = ["john","dj"]
let number: Array<number> = [1,2,3]; // generic style

//mixed arry
let mixed: (number | string)[] = [1, "hello", 2];

//immutable 
let readonlyNumbers: readonly number[] = [1, 2, 3];

//turple => A tuple is like a fixed-length array with known types at specific positions.
let user: [string, number] = ["Alice", 25];

//optional position with ?
let per1: [string, number?] = ["Alice"];

let rgb: [number, number, number, ...number[]];
rgb = [255, 100,300,200]; // extra numbers allowed after first three

//named turples 
let point: [x: number, y: number] = [10, 20];
