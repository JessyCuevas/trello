var container = document.getElementById('lists-container');
var addList = document.getElementById('add-list');
var listForm = document.getElementById('list-form');
var listInput = document.getElementById('list-input');
var saveBtn = document.getElementById('save-btn');
 
  function expandForm(event) {
    if (event.target === addList) {
      event.target.classList.toggle('hidden');
      listForm.classList.toggle('hidden');
    }else if (event.target.className === 'add-ticket') {
      event.target.classList.toggle('hidden');
      ticketForm.classList.toggle('hidden');
    }
  }
 
  function newList(event) {
    event.preventDefault();
 
    if (event.target.matches('button') && listInput.value) {
      var newListBox = document.createElement('div');
      var newListTitle = document.createElement('p');
      var newbottonAdd = document.createElement('a');
      var addCardBox = createTicketBox();
 
      newListTitle.textContent = listInput.value;
 
      newListBox.classList.add('new-list');
      newListTitle.classList.add('list-title');
      newbottonAdd.classList.add('addTjt');
 
      newListBox.appendChild(newListTitle);
      newListBox.appendChild(addCardBox);
      newListBox.appendChild(newbottonAdd);
      container.insertBefore(newListBox, addList.parentElement);
      listInput.value = '';
    }
    listInput.focus();
  }
 
  function createTicketBox() {
    // Crear elementos y contenidos de texto
    var box = document.createElement('div');
    //var text = document.createElement('p');
    var form = document.createElement('form');
    var input = document.createElement('input');
    var btnAdd = document.createElement('button');
 
 
    //text.textContent = 'Añadir una tarjeta...';
    input.placeholder = 'Añadir una tarjeta...';
    btnAdd.textContent = 'Añadir';
 
    //text.classList.add('add-ticket');
    form.classList.add('hidden');
    btnAdd.classList.add('saveBtn')
 
    form.appendChild(input);
    form.appendChild(btnAdd);
    //box.appendChild(text);
    box.appendChild(form);
 
    return box;
  }
 
  function collapseForm(event) {
    if ((event.target !== addList && event.target !== listForm && event.target.closest('form') !== listForm) || event.target === closeListBtn) {
      addList.className = '';
      listForm.className = 'hidden';
    }
  }
 
  //nombre de la variable.onclick y el nombre de la funcion.
 
 
 
 
 
  document.addEventListener('click', expandForm);
  window.addEventListener('click', collapseForm);
  saveBtn.addEventListener('click', newList);
  document.addEventListener('click', addTicket);