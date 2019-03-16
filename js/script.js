var contact = document.querySelector(".contacts-button");
    var contactPopup = document.querySelector(".modal-contact");
    var form = contactPopup.querySelector(".contact-form");
    var userName = contactPopup.querySelector("[name=user-name]");
  var mail = contactPopup.querySelector("[name=mail]");
  var text = contactPopup.querySelector("[name=letter]");
    var contactButtonClose = document.querySelector(".contact-button-close");
    var mapButtonClose = document.querySelector(".map-button-close");
    var contactMap = document.querySelector(".contacts-map");
    var mapPopup = document.querySelector(".modal-map");
    contactButtonClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactPopup.classList.add("visually-hidden");
      contactPopup.classList.remove("modal-error");
    });
    contact.addEventListener("click", function (evt) {
      evt.preventDefault();
      contactPopup.classList.remove("visually-hidden");
    });
    contactMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("visually-hidden");
    });
    mapButtonClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("visually-hidden");
    });
    form.addEventListener("submit", function (evt) {
      if (!userName.value || !mail.value || !text.value) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal-error");
    }
  });
