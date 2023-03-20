//all buttons

const buttons = document.querySelectorAll("input[type='button']");

// display screen
const screen = document.querySelector("input[name='screen']");

screen.value = "0";

const calculator = () => {

	
	buttons.forEach((btn)=>{
	btn.addEventListener("click", (e)=>{

		if(e.currentTarget.value == 'C'){
			screen.value = "0";
		}else if(e.currentTarget.value == '='){
			screen.value = eval(screen.value);
		}else{

			if(screen.value == '0'){

				if(!(['=', '+', '-', '*', '/'].includes(e.currentTarget.value))){
					screen.value = e.currentTarget.value;
				}else{
					screen.value += e.currentTarget.value;
				}

			}else{
				screen.value += e.currentTarget.value;
			}

		}

	})
})

}


calculator();



