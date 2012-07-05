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

//var label1 = Titanium.UI.createLabel({
//	color:'#999',
//	text:'I am Window 1',
//	font:{fontSize:20,fontFamily:'Helvetica Neue'},
//	textAlign:'center',
//	width:'auto'
//});
//
//win1.add(label1);
var button = Ti.UI.createButton({
  title:'やさしくクリック',
  textAlign:'center',
  width:Ti.UI.SIZE,
  height:Ti.UI.SIZE,
  top:120
});

button.addEventListener('click', function(){
  var new_value = 0.5;
  var new_label = Ti.UI.createLabel({top:300});
  var new_win = Ti.UI.createWindow();
  var slider = Ti.UI.createSlider();
  var my_switch = Ti.UI.createSwitch({top:100});
  new_win.addEventListener('open', function(){
    slider.value = new_value;
  });
  my_switch.addEventListener('click', function(e){
    Ti.API.info(JSON.stringify(e.source.value));
    if(e.source.value){
      slider.value = 1.0;
    }else{
      slider.value = 0;
    }
  });

  slider.addEventListener('change', function(e){
    var value = parseInt(e.value * 10);
    var us_dollar = 79.478;
    var new_currency = value * us_dollar;
    new_label.text = value + "ドルはだいたい" + Math.round(new_currency).toString() + "円です"
  });

  new_win.add(slider);
  new_win.add(my_switch);
  new_win.add(new_label);
  tab1.open(new_win);
});

win1.add(button);

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
