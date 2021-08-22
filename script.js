const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragDrop() {
  this.className = 'empty';  //making sure to empty the parent box and appending with fill in the child box
  this.append(fill);
}

function dragLeave() {
  this.className = 'empty';
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragOver(e) {
  e.preventDefault();
}


//All these 4 are like between dragStart and dragEnd
// dragEnter is entering the box
// dragOver is playing around the box
// dragLeave is leaving the box
// drop is the final drop on the box
