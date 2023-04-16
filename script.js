let queueItems = JSON.parse(localStorage.getItem('queueItems')) || [];
const target = document.querySelector('.container__queue');
const template = "<div class=\'container__queue-item\'>~id~</div>";
const inputField = document.querySelector('.container__input');
const addButton = document.querySelector('.container__add-button');
const deleteButton = document.querySelector('.container__delete-button');
const clearButton = document.querySelector('.container__delete-all-button');

function updateValues(){
  target.innerHTML = '';
  localStorage.setItem('queueItems', JSON.stringify(queueItems));
  queueItems.forEach(function (item) {
    target.insertAdjacentHTML("beforeend", template.replace(/~id~/g, item));
  });
}

addButton.addEventListener('click', () => {
  const inputValue = inputField.value;
  if(queueItems.length >= 20){
    alert('You have reached the queue limit, clear some elements.')
  }
  else if(inputField.value === ''){
    alert("You haven't entered any value, please write what you want to be inserted in the queue")
  }
  else
    queueItems.unshift(inputValue);
    updateValues();
    inputField.value = '';
});

deleteButton.addEventListener('click', () => {
  if(queueItems.length === 0){
    alert('You have nothing to delete, insert some values to the queue.')
  }
  else
    queueItems.pop();
  updateValues();
})

clearButton.addEventListener('click', () =>{
  if(queueItems.length === 0){
    alert('You have nothing to clear, insert some values to the queue.')
  }
  else
    queueItems = [];
  updateValues();
})

updateValues();