# Exercice 2 - Les Classes

## Objectif

Créer une classe qui sera étendue par d'autres.

## Informations

### 1ère partie

Créer une classe nommée `Vehicule` ayant 4 champs :

```text
marque
modele
kilometrage
annee
```

Ajouter à cette classe une fonction nommée `display` qui retournera les informations
d'un véhicule sous la forme suivante :

```text
// "marque", modèle "modele" - "kilometrage"km - année "annee"
Renault, modèle Clio - 10000km - année 2010
```

Créer ensuite 2 autres classes nommées `Voiture` et `Moto` qui vont étendre la classe `Voiture`.

Ajouter un champs `clim` (par défaut a `true`) à la classe `Voiture`.

Enfin surchargez la fonction `display` afin quelle renvoie :

```text
// Pour les voitures
Voiture : Renault, modele Clio - 10000km - année 2010 - avec clim

// si pas de clim
Voiture : Renault, modele Clio - 10000km - année 2010 - sans clim

// Pour les motos
Moto : Yamaha, modele MT07 - 10000km - année 2012
```

### 2ème partie

Instancier des voitures et des motos afin de vérifier que la fonction `display` renvoie le message personnalisé en
fonction du type de véhicle.
