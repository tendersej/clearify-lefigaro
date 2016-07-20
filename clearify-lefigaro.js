javascript:var clearify = function(){document.getElementsByClassName('fig-article-body')[0].style.textShadow = 'None';document.getElementsByClassName('fig-article-body')[0].style.color = 'black';var imgToBeDeleted = document.querySelector('.fig-article-body a img');imgToBeDeleted.parentNode.removeChild(imgToBeDeleted);};clearify();


// for readability
// Improvement opportunities:
//  declaring a var instead of calling "document.getElementsByClassName('fig-article-body')[0]" twice
//
// javascript:var clearify = function(){
//     document.getElementsByClassName('fig-article-body')[0].style.textShadow = 'None';
//     document.getElementsByClassName('fig-article-body')[0].style.color = 'black';
//     var imgToBeDeleted = document.querySelector('.fig-article-body a img');
//     imgToBeDeleted.parentNode.removeChild(imgToBeDeleted);
// };
// clearify();
