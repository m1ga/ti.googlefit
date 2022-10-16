
var win = Ti.UI.createWindow();
var fit = require('ti.googlefit');
fit.addEventListener("data", function(e){
	console.log(e.data);
});
fit.addEventListener("error", function(e){
	console.log(e.error);
})
win.open();

win.addEventListener("open",function(){
	fit.create();
	fit.getData();
})

