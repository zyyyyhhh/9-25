/*
* @Author: dell
* @Date:   2017-09-25 22:22:29
* @Last Modified by:   dell
* @Last Modified time: 2017-09-25 22:22:35
*/
HTMLElement.prototype.prependChild=function(element){
	let first = this.firstElementChild;
	if(first){
		this.insertBefore(element, first);
	}else{
		this.appendChild(element);
	}
}