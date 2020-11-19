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

  function addElementToList(element) {
    if (element !== "") {
      listingElements.push(element);
    }
  }

  function sortList(){
    listingElements.sort();
  }

  function sortStore(){
    storeElements.sort();
  }

  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector(".store-select");
    var listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";
    console.log(listingElements);
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
    var result = prompt('Введите элемент');
    addElementToList(result);
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
};
