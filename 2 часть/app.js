window.onload = function () {

  var listingElements = ['apple', 'orange'];
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

  function deleteListElement(element){
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }
 
  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';
    
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }
    
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // регистрируем события
  var addButton = document.querySelector('#add-button-store');
  var addButton1 = document.querySelector('#add-button-list');
  var deleteButton = document.querySelector('#delete-button-list');

  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }

  addButton1.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    addToListElements(selectedOption.innerText);
    updateUI();
  }

  deleteButton.onclick = function(){
    var selectedOption = document.querySelector('.listing-select option:checked');
    deleteListElement(selectedOption.innerText);
    updateUI();
  }
};