const GreaterEdge = Math.max(screen.height, screen.width);
const MinorEdge = Math.min(screen.height, screen.width);
const Ratio = GreaterEdge / MinorEdge;

var Header1Height = 0.012 * GreaterEdge;
/*document.querySelector('.header1').style.height = HeaderHeight + 'px';*/
var Header1Padding = 0.12 * Header1Height;
/*alert(HeaderPadding);*/
document.querySelector('.header1').style.padding = Header1Padding + 'px';
var Header1FontSize = Header1Height - Header1Padding * 2;
/*alert(HeaderFontSize);*/
document.querySelector('.header1').style.fontSize = Header1FontSize + 'px';
var IconHeight = Header1Height - Header1Padding * 2;
/*alert(IconHeight);*/
headerIcons = document.querySelectorAll('.header1 img');
headerIcons.forEach(function (icon) {
	icon.style.height = IconHeight + 'px';
});
document.querySelector('#margin').style.width = 0.01 * GreaterEdge + 'px';

var Header2Height = 0.035 * GreaterEdge;
var Header2Padding = 0.2 * Header2Height;
document.querySelector('.header2').style.padding = Header2Padding + 'px';
var Header2FontSize = Header2Height - Header2Padding * 2;
document.querySelector('.header2').style.fontSize = Header2FontSize + 'px';
document.querySelector('.header2 img').style.height = 1.2 * Header2FontSize + 'px';