window.onload = function() {
  var listingElements = ["apple", "orange"];
  var storeElements = [];

  // логика JS, не связана с DOM
  function addToCollectionElements(collectionFromDeleteElement,collectionToAddElement,element) {
    let elementPosition = collectionFromDeleteElement.indexOf(element);
    if (elementPosition > -1) {
      collectionToAddElement.push(element);
      collectionFromDeleteElement.splice(elementPosition, 1);
    }
  }

  function deleteListElement(element) {
    let elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }

  function addElementToList() {
    let result = prompt('Введите элемент');
    if (result !== "") {
      listingElements.push(result);
    }
  }

  function sortCollection(colllection){
    colllection.sort();
  }

  function renameCollectionElement(collection,element){
    let elementPosition = collection.indexOf(element);
    let result = prompt('Введите новое имя элемента');
    if (elementPosition > -1) {
      collection[elementPosition] = result;
    }
  }

  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    let storeSelect = document.querySelector(".store-select");
    let listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";
    for (let i = 0; i < listingElements.length; i++) {
      let newOption = document.createElement("option");
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (let i = 0; i < storeElements.length; i++) {
      let newOption = document.createElement("option");
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // регистрируем события
  var moveStoreElementButton = document.querySelector("#add-button-store");
  var moveListElementButton = document.querySelector("#add-button-list");
  var deleteButton = document.querySelector("#delete-button-list");
  var addElementButton = document.querySelector("#add-elemetn-list-button");
  var sortListButton = document.querySelector("#sort-list-button");
  var sortStoreButton = document.querySelector("#sort-store-button");
  var renameListButton = document.querySelector("#rename-list-button");
  var renameStoreButton = document.querySelector("#rename-store-button");

  moveStoreElementButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    addToCollectionElements(listingElements,storeElements,selectedOption.innerText);
    updateUI();
  };

  moveListElementButton.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    addToCollectionElements(storeElements,listingElements,selectedOption.innerText);
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
    sortCollection(listingElements);
    updateUI();
  }
  sortStoreButton.onclick = function() {
    sortCollection(storeElements);
    updateUI();
  }
  renameListButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    renameCollectionElement(listingElements,selectedOption.innerText);
    updateUI();
  }
  renameStoreButton.onclick = function() {
    var selectedOption = document.querySelector(".store-select option:checked");
    renameCollectionElement(storeElements,selectedOption.innerText);
    updateUI();
  }
};
