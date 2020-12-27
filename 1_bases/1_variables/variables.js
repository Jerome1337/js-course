const address = {};

function showAddress() {
  document.getElementById('address').innerHTML =
    address.number +
    ' ' +
    address.street +
    ', ' +
    address.postalCode +
    ' - ' +
    address.city;
}

function addFiveToNumber() {
  document.getElementById('number').innerHTML = number += 5;
}

const toggleOddElements = () => {
  const oddElements = document.getElementsByClassName('odd');

  for (let i = 0; i < oddElements.length; ++i) {
    if (areShown) {
      oddElements[i].style.display = 'none';
    } else {
      oddElements[i].style.display = 'block';
    }
  }

  areShown = !areShown;

  if (areShown) {
    document.getElementById('hide-button').innerHTML = 'Cacher';
  } else {
    document.getElementById('hide-button').innerHTML = 'Afficher';
  }
};

const showCities = () => {
  const citiesList = document.getElementById('cities');

  for (let i = 0; i < cities.length; ++i) {
    const li = document.createElement('li');

    li.innerHTML = cities[i];

    citiesList.appendChild(li);
  }
};
