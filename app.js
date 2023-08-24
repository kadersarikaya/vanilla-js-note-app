const editBtn = document.querySelector('.edit-btn');

editBtn.addEventListener('click', () => {
    window.location.href = '/edit.html';
});

const addCategoryBtn = document.getElementsByClassName('add-category-btn');

function openForm() {
  document.getElementById("add-category").style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeForm() {
  document.getElementById("add-category").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
}

function addNewCategory () {
    var categoryName  = document.getElementById("category-input").value;
    if(categoryName.trim() !== '') {
      const categoryList = document.getElementById("category-list");
      const newCategory = document.createElement("li");
      newCategory.innerHTML = `<button>${categoryName}</button>`
      categoryList.appendChild(newCategory);
      closeForm(); // Formu kapat
    }
    return false;
}