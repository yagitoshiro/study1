// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var textField = Ti.UI.createTextField({width: 250});
textField.addEventListener('return', function(e){
//  alert(e.value);
  var url = e.value;
  var new_win = Ti.UI.createWindow({backgroundColor:'White'});
  var webview = Ti.UI.createWebView({url:url});
  webview.addEventListener('load', function(e){
//    alert(e.source.html);
    new_win.title = webview.evalJS("document.getElementsByTagName('title')[0].innerHTML");
  });
  new_win.add(webview);
  tab1.open(new_win);
});
win1.add(textField);

//var label1 = Titanium.UI.createLabel({
//	color:'#999',
//	text:'I am Window 1',
//	font:{fontSize:20,fontFamily:'Helvetica Neue'},
//	textAlign:'center',
//	width:'auto'
//});
//
//win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
