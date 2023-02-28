let button = document.getElementById('categories-toggler');

button.addEventListener('click', function () {
  document.querySelector('.filter').classList.toggle('filter--open');
});

//window.addEventListener('resize', debounce(restart, 150));
window.addEventListener('resize', restart);

moveForward();

function moveForward() {
  let listElements = Array.from(
      document.querySelectorAll('#categories .categories__item')
    ),
    invisibleElements = getInvisible(listElements),
    menuList = document.getElementById('categories-hide');

  invisibleElements.forEach(function (item) {
    menuList.appendChild(item);
  });

  //   if (!invisibleElements.length) {
  //     button.setAttribute('hidden', true);
  //   } else {
  //     button.removeAttribute('hidden');
  //   }

  //button.innerHTML = invisibleElements.length;
}

function moveBackward() {
  let menuListElements = Array.from(
      document.querySelectorAll('#categories-hide .categories__item')
    ),
    list = document.getElementById('categories');

  menuListElements.forEach(function (item) {
    list.appendChild(item);
  });
  console.log(menuListElements);
}

function restart() {
  moveBackward();
  moveForward();
}

function getInvisible(listElements) {
  let list = document.getElementById('categories');

  let invisible = listElements.filter(function (item) {
    if (
      item.getBoundingClientRect().left + item.getBoundingClientRect().width >
      list.clientWidth
    ) {
      return item;
    }
  });

  return invisible;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
