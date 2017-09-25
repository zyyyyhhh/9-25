/*
* @Author: dell
* @Date:   2017-09-25 21:03:38
* @Last Modified by:   dell
* @Last Modified time: 2017-09-25 22:44:18
*/
addEventListener('load', function(){
		let text = document.querySelector('textarea');
		let quxiao = document.querySelector('.quxiao');
		let queding = document.querySelector('.queding');
		
		text.addEventListener('click', function(){
		text.style.borderColor = 'lightblue';
		text.placeholder = '';
	})
		quxiao.onclick = function(){
			text.value = '';
		}
		function fn(){
			let text1 = document.querySelector('.text');
			let liuyan = document.querySelector('.liuyan');
			let divs = document.createElement('div');
			liuyan.prependChild(divs,text1);
			divs.className = 'text1';
			divs.innerHTML = text.value;
			text.value = '';
		}
		queding.onclick = function(){
			let value = text.value == '';
			if(value){
				alert('写点想法吧，小主！');
			}else{
				fn();
			}
		}
})