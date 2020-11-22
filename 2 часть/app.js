window.onload = function() {
  var listingElements = ["apple", "orange"];
  var storeElements = [];

  // логика JS, не связана с DOM
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function addToListElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  function deleteListElement(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }

  function addElementToList() {
    var result = prompt('Введите элемент');
    if (result !== "") {
      listingElements.push(result);
    }
  }

  function sortList(){
    listingElements.sort();
  }

  function sortStore(){
    storeElements.sort();
  }

  function renameListingElement(element){
    var elementPosition = listingElements.indexOf(element);
    var result = prompt('Введите новое имя элемента');
    if (elementPosition > -1) {
      listingElements[elementPosition] = result;
    }
  }

  function renameStoreElement(element){
    var elementPosition = storeElements.indexOf(element);
    var result = prompt('Введите новое имя элемента');
    if (elementPosition > -1) {
      storeElements[elementPosition] = result;
    }
  }

  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector(".store-select");
    var listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // регистрируем события
  var addButton = document.querySelector("#add-button-store");
  var addButton1 = document.querySelector("#add-button-list");
  var deleteButton = document.querySelector("#delete-button-list");
  var addElementButton = document.querySelector("#add-elemetn-list-button");
  var sortListButton = document.querySelector("#sort-list-button");
  var sortStoreButton = document.querySelector("#sort-store-button");
  var renameListButton = document.querySelector("#rename-list-button");
  var renameStoreButton = document.querySelector("#rename-store-button");

  addButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  addButton1.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    addToListElements(selectedOption.innerText);
    updateUI();
  };

  deleteButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    deleteListElement(selectedOption.innerText);
    updateUI();
  };
  addElementButton.onclick = function() {
    addElementToList();
    updateUI();
  };
  sortListButton.onclick = function() {
    sortList();
    updateUI();
  }
  sortStoreButton.onclick = function() {
    sortStore();
    updateUI();
  }
  renameListButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    renameListingElement(selectedOption.innerText);
    updateUI();
  }
  renameStoreButton.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    renameStoreElement(selectedOption.innerText);
    updateUI();
  }
};
