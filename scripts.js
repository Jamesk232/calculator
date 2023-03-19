//all buttons
const buttons = document.querySelectorAll("button");

window.addEventListener("DOMContentLoaded", function(){
	let result = [];
	clickedBtn(result);
})

//highlight buttons when clicked
const clickedBtn = (rslt) => {
	buttons.forEach((btn)=>{
		btn.addEventListener("click", (e)=>{
			//save values in result array
			e.currentTarget.value != "=" ? (populateResult(rslt, e.currentTarget.value)) : (console.log(rslt), showResult(rslt));
		})
	})
}

//populate result
const populateResult = (arr, val) => {
	isNaN(Number(val)) ? arr.push(val) : arr.push(Number(val));
}

//show result of calculation
const showResult = (arr) => {
	let problem = "";
	let numJoiner = [];
	let symbol = "";

	arr.map((val) => {
		isNaN(Number(val)) ? 
		(symbol = val,
			problem += numJoiner.join(""),
			numJoiner = []
		) : numJoiner.push(Number(val));
	})

	console.log(numJoiner, symbol, problem)
}

