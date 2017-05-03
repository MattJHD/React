var ui = (function ui() {
  "use strict";
  var handleContact, observe, btnContact;
  window.onload = function start() {
    console.log("ready to rock");
    btnContact = document.getElementById("btn_contact");
    var test = document.getElementById("grid_app");
    console.log(btnContact);
    console.log(test);
    observe();
  };

  handleContact = function handleContact(evt) {

    evt.preventDefault();
  };

  observe = function observe() {
      if (btnContact) {
        btnContact.onclick = handleContact;
      }
  };

}());
