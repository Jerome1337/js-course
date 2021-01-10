// Modifiez le code afin d'y ajouter une promesse
// et faire en sorte que la variable value soit égale à "promise resolved"
let value = 'no promise';

const changeValue = () => {
  setTimeout(() => {
    value = 'promise resolved';
  }, 15000);
};

console.log(value);
