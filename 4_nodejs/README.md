# Exercice - NodeJS

## Objectif

Utiliser NodeJS et Express afin de créer une mini API.

## Énoncé

Initialiser un projet avec NPM et installer `express`.
Récupérer les données du fichiers `cars.js` puis renvoyer les données correspondantes en fonction des routes.

### 1. Le serveur

Créer une serveur Express qui devra écouter le port `3000` et renvoyer un petit message d'information.

Tester le serveur sur votre navigateur en le lançant avec la command `node`.

### 2. Récupérer toutes les voitures

Créer une route de type `GET` afin de pouvoir récupérer toutes les voitures dans le fichier.
Le code HTTP de retour devra être `200`.

#### **Résultat attendu**

Cette route devra renvoyer un tableau au format JSON contenant toutes les voitures.

> Rappel concernant le JSON: https://fr.wikipedia.org/wiki/JavaScript_Object_Notation

### 2. Récupérer une voiture grâce à son ID

Chaque voiture a un ID unique.
Créer une route de type `GET` ayant un paramètre afin de spécifier l'ID.
Le code HTTP de retour devra être `200`.

Si l'ID ne correspond à aucune voiture, renvoyer une erreur au format JSON.

Par exemple :

```json
{
  "error": "Aucune voiture n'a été trouvée avec l'ID : X"
}
```

Le code HTTP devra dans ce cas la être `404`.

#### **Résultat attendu**

Si la voiture est trouvée, renvoyer l'objet de la voiture au format JSON.

Si aucune voiture n'est trouvée, renvoyer le message d'erreur et le code HTTP correspondant.

### 3. Récupérer toutes les voitures d'une même marque

Chaque voiture provient d'une marque.
Créer une route de type `GET` ayant un paramètre afin de spécifier la marque.
Le code HTTP de retour devra être `200`.

Si aucune voiture provient de la marque demandée, renvoyer une erreur au format JSON.

Par exemple :

```json
{
  "error": "Aucune voiture n'a été trouvée avec la marque : X"
}
```

Le code HTTP devra dans ce cas la être `404`.

#### **Résultat attendu**

Si une ou plusieurs voitures sont trouvées, renvoyer un tableau des voitures trouvées, au format JSON.

Si aucune voiture n'est trouvée, renvoyer le message d'erreur et le code HTTP correspondant.
