var analytics = require('./index');

function button (){
    var button = analytics.btnClicked("Login");
    console.log(button);
}
button();