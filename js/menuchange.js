var menu = document.getElementById("top-menu");
var links = document.getElementsByTagName("a");
var breadCrumb = document.getElementById("breadcrumb");

for(var i=0; i<5; i++){

links[i].onclick = function (e) {

    breadCrumb.innerHTML = this.innerHTML + ' : ' + this.title;
    e.preventDefault();
 }
}
