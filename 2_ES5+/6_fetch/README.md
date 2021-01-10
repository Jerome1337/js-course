# Exercice 6 - Fetch

## Objectif

Récupérer des données depuis un service externe à l'aide de l'API Fetch.

## Énoncé

### 1. Posts

Dans une fonction nommée `getPosts`, utiliser `fetch` afin de faire une requête à l'API suivante:

```sh
https://jsonplaceholder.typicode.com/posts
```

Trier les données récupérées afin d'avoir objet d'utilisateurs associés à un tableau de posts.

Au moment du click sur le bouton `Récupérer les posts` (voir `index.html`),
afficher ce nouvel objet dans la console du navigateur.

### Résultat attendu

```json
{
  "user_1": [
    {
      "id": 1,
      "title": "at nam consequatur ea labore ea harum",
      "body": "cupiditate quo est a modi nesciunt solutaipsa voluptas error itaque dicta inautem qui minus magnam et distinctio eumaccusamus ratione error aut"
    },
    {
      "id": 2,
      "title": "at nam consequatur ea labore ea harum",
      "body": "cupiditate quo est a modi nesciunt solutaipsa voluptas error itaque dicta inautem qui minus magnam et distinctio eumaccusamus ratione error aut"
    }
    // ...
  ],
  "user_2": [
    {
      "id": 3,
      "title": "at nam consequatur ea labore ea harum",
      "body": "cupiditate quo est a modi nesciunt solutaipsa voluptas error itaque dicta inautem qui minus magnam et distinctio eumaccusamus ratione error aut"
    },
    {
      "id": 4,
      "title": "at nam consequatur ea labore ea harum",
      "body": "cupiditate quo est a modi nesciunt solutaipsa voluptas error itaque dicta inautem qui minus magnam et distinctio eumaccusamus ratione error aut"
    }
    // ...
  ]
  // ...
}
```

### 2. Créer un post

Dans une fonction nommée `addPost`, créer un post en envoyant une requête POST et les données nécessaires.

Le format de donnée à envoyer est le suivant :

```js
{
  title: 'Mon titre',
  body: 'Mon Super Post'
  userId: 1
}
```

Il faudra ajouter le header suivant afin d'avoir un encodage correcte de la réponse :
`Content-Type: application/json; charset=UTF-8`

> Lien vers la documentation de l'API Fetch : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

Au moment du click sur le bouton `Ajouter un post`, afficher la réponse de la requête dans la console du navigateur.

### Résultat attendu

```json
{
  id: 101,
  title: 'Mon titre',
  body: 'Mon Super Post'
  userId: 1
}
```
