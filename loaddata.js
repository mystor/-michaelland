var data = JSON.parse(localStorage.getItem('michaelland-state') || JSON.stringify({
  gold: 100,
  weapon: {
    name: 'fists',
    damage: 5
  },
  victories: 0,
  defeats: 0,
  fish: null
}));
localStorage.setItem('michaelland-state', JSON.stringify(data));

function setData(newData) {
  localStorage.setItem('michaelland-state', JSON.stringify(newData));
}

function p() {
  var strs = new Array(arguments.length);
  for (var i=0; i<arguments.length; i++) strs[i] = arguments[i];
  document.write(strs.join(''));
}

Array.prototype.chooseRandom = function() {
  var i = (Math.random() * this.length) | 0;
  return this[i];
};

function randomZ() {
  return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
}

function random(mid, range) {
  return (randomZ()*range) + mid;
}

function randomI(mid, range) {
  return random(mid, range) | 0;
}
