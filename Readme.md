## Analytics of Website Data in Javascript.

I have written some functions, that can collect data browser information, button clicked, page loaded, etc. Use of such data is at users discretion.

### Installation

To Install type:
> npm install analytics

## Usage

For Button Clicked: 
``` javascript
    var analytic = require('data-analytics');
    function login () {
        var buttonClicked = analytic.btnClicked('Login');
        console.log(buttonClicked);
    }

    // Returns "Button Login"
```

For Browser Type:
```javascript
    var analytic = require('data-analytics');
    function onload(){
        var browserType = analytic.getBrowser();
        console.log(browserType);
    }
    // Returns "Micorsoft Internet Explorer" For Internet Explorer
```
---

For Page Loaded Data:
```javascript
   var analytics = require('data-analytics');
   function onload(){
       var page = analytics.pageLoad("Index Page");
       console.log(page);
       // Returns "Index Page"
   }
```
---
For Clicked Links:
```javascript
    var analytics =  require('data-analytics');
    function linkClicked(){
        var links = analytics.linksClicked('Homepage');
    }

    // Homepage
```
---
More is still on the way for the other releases, The data recieved, cana be sent to the database and be queried, and the data used for several purposes and data analytics purposes.