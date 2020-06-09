const input = document.querySelector(".add");
const add = document.querySelector(".btn");
const list = document.querySelector(".list");
var progress = document.querySelector(".bar");
const percent = document.querySelector(".percent");
load();
bar();
var collection1 = document.getElementsByClassName("g");
var collection2 = document.getElementsByClassName("r");
var inner = document.querySelector(".inner");
var refresh = document.querySelector(".refresh");
var check = Array.from(collection1);
var del = Array.from(collection2);

refresh.addEventListener("click", function() {
	localStorage.clear();
	location.reload();
})

const CHECK = "far";
const UNCHECK = "fas";
var comp1 = JSON.parse(localStorage.getItem("Completed"));
var uncomp1 = JSON.parse(localStorage.getItem("UnCompleted"));

if (comp1 != null && uncomp1 != null) {
	var arr1 = comp1;
	var arr2 = uncomp1;
}
else {
	var arr1 = Array();
	var arr2 = Array();
}

if (check.length != 0 && del.length != 0) {
	//console.log("Working");
	tick();
}	


function toggle(item) {
	item.addEventListener("click", function() {
		if (item.classList.contains(CHECK)) {
			let par = item.parentElement;
			par.style.textDecoration = "line-through";
			par.style.opacity = 0.4;
		}
		else {
			let par = item.parentElement;
			par.style.textDecoration = "none";
			par.style.opacity = 1;
		}
		item.classList.toggle(UNCHECK);
		item.classList.toggle(CHECK);
		green(item);
	});	
};

function rem(item) {
	item.addEventListener("click", function() {	
		let array1 = JSON.parse(localStorage.getItem("List"));
		let array2 = JSON.parse(localStorage.getItem("Completed"));
		let array3 = JSON.parse(localStorage.getItem("UnCompleted"));
		let par = item.parentElement;
		let text = par.innerText;
		if (par.children[1].classList.contains(UNCHECK)) {
			array2.splice(array2.indexOf(text),1);	
			arr1.splice(arr1.indexOf(text),1);	
		}
		if (par.children[1].classList.contains(CHECK)) {
			array3.splice(array3.indexOf(text),1);		
			arr2.splice(arr2.indexOf(text),1);		
		}
		array1.splice(array1.indexOf(text),1);
		localStorage.setItem("List", JSON.stringify(array1));
		localStorage.setItem("Completed", JSON.stringify(array2));
		localStorage.setItem("UnCompleted", JSON.stringify(array3));
		par.remove();
		bar();
	});		
};

function save(item) {
	let array;
	if (localStorage.getItem("List") === null) {
		array = [];	
	}
	else {
		array = JSON.parse(localStorage.getItem("List"));
	}
	array.push(item);
	localStorage.setItem("List", JSON.stringify(array));
}

function load(item) {
	let array = JSON.parse(localStorage.getItem("UnCompleted"));
	let arr = JSON.parse(localStorage.getItem("Completed"))
	if (array != null) {
		array.forEach(create);
	}
	if (arr != null) {
		arr.forEach(create);
	}
}


function duplicate(array) {
	var set = new Set(array);
	return array = [...set]
}

function green(item) {
	if (item.classList.contains(UNCHECK)) {
		arr1.push(item.parentElement.innerText);
		arr1 = duplicate(arr1);
		for (i=0;i<arr2.length;i++) {
			if (item.parentElement.innerText == arr2[i]) {
				arr2.splice(i,1);
			}
		}	
	}	
	else {
		arr2.push(item.parentElement.innerText);
		arr2 = duplicate(arr2);
		for (i=0;i<arr1.length;i++) {
			if (item.parentElement.innerText == arr1[i]) {
				arr1.splice(i,1);
			}
		}
	}
	change(arr1,arr2);
	reset_animation();
localStorage.setItem("Completed", JSON.stringify(arr1));	
localStorage.setItem("UnCompleted", JSON.stringify(arr2));	
}

function tick() {
	let new_array = list.children;
	green(new_array[new_array.length-1].children[1]);
}


function create(item) {
	var comp = JSON.parse(localStorage.getItem("Completed"));
	var uncomp = JSON.parse(localStorage.getItem("UnCompleted"));
	color = "far";
	newDiv = document.createElement("div");
	newDiv.classList.add("entry");
	newDiv.innerText = item;
	if (comp != null) {
		for (i=0;i<comp.length;i++) {
			if (item == comp[i]) {
				color = "fas";
				newDiv.style.textDecoration = "line-through";
				newDiv.style.opacity = 0.4;
				break
			}
		}
	}
	if (uncomp != null) {	
		for (i=0;i<uncomp.length;i++) {
			if (item == uncomp[i]) {
				color = "far";
				break
			}
		}
	}
	newDiv.innerHTML += `<i class="fas fa-trash-alt r" id = "check"></i><i class="${color} fa-check-circle g" id = "check"></i>`;
	list.appendChild(newDiv);
	var collection3 = document.getElementsByClassName("g");
	var collection4 = document.getElementsByClassName("r");
	toggle(collection3[collection3.length-1]);
	rem(collection4[collection4.length-1]);
}

add.addEventListener("click", function() {
	create(input.value);		
	save(input.value);
	tick();
	input.value = "";
});

//Progress Bar

function bar() {
	let total = JSON.parse(localStorage.getItem("List"));
	let comp = JSON.parse(localStorage.getItem("Completed"));
	
	if (total !== null) {
		len1 = total.length;
	}
	else {
		len1 = 0;
	}
	if (comp !== null) {
		len2 = comp.length;
	}
	else {
		len2 = 1;
	}

	bar_length = len2/len1;

	document.documentElement.style.setProperty('--length', bar_length*40 + "vw");
	percent.innerText = Math.round(bar_length*100) + "%";
}


function change(array1, array2) {
	
	let len1 = array1.length;
	let len2 = array2.length;		

	bar_length = (len1/(len2+len1))*40;

	document.documentElement.style.setProperty('--length', bar_length + "vw");
	let value = (len1/(len2+len1))*100;
	percent.innerText = Math.round(value) + "%";
}

function reset_animation() {
  var el = document.querySelector('.inner');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
}
