module.exports = {
  getBrowser: function () {
        var broswer = navigator.appCodeName;
        return browser;
    },

  btnClicked: function (btnName) {
        var date = Date.now();
        return  'Button ' + btnName;
    },

  pageLoad: function (pageName) {
        return  pageName;
    },
  linksClicked: function(linkName){
        return  linkName;
    }
};