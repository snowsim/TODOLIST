var form = document.querySelector('form');
var inp = document.querySelector('input');
var ul = document.querySelector('ul');

function add(event) {
	event.preventDefault();
	var txtbox = inp.value.trim();

	if (txtbox !== '') {
		var li = document.createElement('li');
		li.textContent = txtbox;
		
		var Btndel = document.createElement('button');
		Btndel.textContent = '刪除';
		Btndel.classList.add('刪除');
		li.appendChild(Btndel);
		
		ul.appendChild(li);
		inp.value = '';
		inp.focus();
	}
}
function dele(event) {
	
	if (event.target.classList.contains('刪除')) {
		event.target.parentElement.remove();
	}
}

form.addEventListener('submit', add);

ul.addEventListener('click', dele);

