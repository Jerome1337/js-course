# Exercice 3 - Les opérateurs de tableau

## Objectif

- Parcourir un tableau et effectuer une action avec `forEach()`.

- Créer une nouveau tableau grâce à `map()`.

- Trier un tableau grâce à `filter()`.

- Rechercher dans un tableau grâce à `find() et findIndex()`.

## Énoncé

### 1. `forEach()`

Pour chaques légume présent dans le tableau `vegetables`, écrire dans la console une phrase de la forme suivante :

```text
"code" : "name", "price"€
```

#### **Résultat attendu**

```sh
1 : Carottes, 1.99€
2 : Poivron vert, 0.99€
3 : Pommes de terre, 3.00€
...
```

### 2. `map()`

Utilisez map pour créer un nouveau tableau comprenant uniquement les noms des légumes en majuscule.

#### **Résultat attendu**

```sh
["CAROTTES", "POIVRON VERT", "POMMES DE TERRE", ...]
```

### 3. `filter()`

Utilisez filter pour filtrer le tableau afin de récupérer uniquement les légumes qui coûtes plus de 2€.

#### **Résultat attendu**

```sh
[
  { code: 3, name: 'Pommes de terre', price: 3.0 },
  { code: 4, name: 'Potiron', price: 4.5 },
  { code: 8, name: 'Butternut', price: 2.49 },
  { code: 10, name: 'Asperges', price: 2.2 },
]
```

### 4. `find()`

Avec `find()` trouvez l'élément qui contient le mot `vert`.

#### **Résultat attendu**

```sh
{ code: 2, name: 'Poivron vert', price: 0.99 }
```

### 5. `findIndex()`

Trouver avec `findIndex()` l'index du Navet.

#### **Résultat attendu**

```sh
5
```
