# Exercice 4 - Le desctructuring

## Objectif

Utiliser l'opérateur REST

## Énoncé

### 1. Destructurer des tableaux/objets

Récupérer seulement les deuxièmes valeurs des 2 premiers sous-tableaux de `nestedArray`.

**Résultat attendu**

```js
console.log(marie); // marie
console.log(charles); // charles
```

Récupérer uniquement les valeurs `C#` et `C++` du tableau `strictLanguages` dans des variables.

**Résultat attendu**

```js
console.log(csharp); // C#
console.log(cplusplus); // C++
```

Récupérer la valeur de la clef `type` du deuxième objet du tableau `vehicule`.

Récupérer la valeur de la clef `marque` dans le sous objet `cars` du deuxième élément du tableau `vehicule`.

**Résultat attendu**

```js
console.log(type); // moto
console.log(marque); // mt07
```

### 2. L'opérateur REST

#### 1. Fusion

Fusionner des tableaux avec l'opérateur REST dans une nouvelle variable.

**Résultat attendu**

Au moment de l'affichage dans la console de la variable, le résultat suivant doit s'afficher.

```js
[
  "C#",
  "Java",
  "C++",
  "Python",
  "Ruby",
  "F#",
  "Scala",
  "Golang",
  "JavaScript",
  "HTML",
  "CSS",
];
```

#### 2. Fonction

Créer une fonction utilisant l'opérateur REST afin de pouvoir y passer maximum 3 paramètres.

Cette fonction devra pour chaque paramètre afficher dans le navigateur (ajouter n'importe quel élément dans le HTML)
la valeur que vous lui avez donné.

Si plus de paramètre sont envoyés, afficher dans le navigateur la phrase :

```text
La fonction à plus que 3 paramètres.
```

Par exemple, lors de l'appel de la fonction :

```js
myFunction(1, 2, 3); // Ok

myFunction(1, 2, 3, 4); // Il y a plus de 3 paramètres
```

**Résultat attendu**

Dans le navigateur :

```sh
1
2
3
```

Ou :

```sh
La fonction à plus que 3 paramètres.
```
