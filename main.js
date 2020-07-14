const ajaxCall = () => {
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => console.log(json))
} 

const ajaxCallTen = () => {
fetch("https://jsonplaceholder.typicode.com/todos/10")
  .then(response => response.json())
  .then(json => console.log(json))
}

const ajaxPostRequest = () => {
	fetch("https://jsonplaceholder.typicode.com/todos", {
		method: 'POST',
		body: JSON.stringify({
			title: 'clean room',
			completed: true,
			userId: 3
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(response => response.json())
	.then(json => console.log(json))
}

const ajaxPutRequest = () => {
	fetch("https://jsonplaceholder.typicode.com/todos/5", {
		method: 'PUT',
		body: JSON.stringify({
			id: 5,
			title: 'hello task',
			completed: false,
			userId: 1
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(response => response.json())
	.then(json => console.log(json))
}
const ajaxDeleteRequest = () => {
	fetch("https://jsonplaceholder.typicode.com/todos/5", {
		method: 'PUT'
	})
}

const render = () => {
	fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      var all = "";
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        all += "<p>" + "Name: " + data[i].name + "</p>";
        console.log(all);
      }
    });
}

let myBtn = document.getElementById('button');
let myBtn2 = document.getElementById('ten');
let createPosts = document.getElementById("createPosts");
let updatePosts = document.getElementById("updatePosts");
let deletePosts = document.getElementById("deletePosts");
let showPosts = document.getElementById("showPosts");

myBtn.addEventListener("click", ajaxCall);
myBtn2.addEventListener("click", ajaxCallTen);
createPosts.addEventListener("click", ajaxPostRequest);
updatePosts.addEventListener("click", ajaxPutRequest);
deletePosts.addEventListener("click", ajaxDeleteRequest);
showPosts.addEventListener("click", render);
