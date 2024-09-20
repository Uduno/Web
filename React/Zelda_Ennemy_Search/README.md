# Zelda BOTW Enemies Encyclopedia

Ce projet est une application web développée en **React** avec **Vite**. Elle permet de rechercher et d'afficher des informations sur les ennemis du jeu **Zelda: Breath of the Wild**, à partir de leur nom en anglais. Chaque ennemi est présenté sous forme de carte avec une image et des détails tels que leurs caractéristiques et informations.

Les données des ennemis sont récupérées dynamiquement via l'API **Hyrule Compendium**.

## Fonctionnalités

- **Recherche** : Permet de rechercher des ennemis par leur nom en anglais.
- **Affichage des détails** : Chaque ennemi est affiché sous forme de carte avec une image et des informations détaillées.
- **Utilisation d'une API externe** : Les informations des ennemis sont récupérées depuis l'API [Hyrule Compendium](https://gadhagod.github.io/Hyrule-Compendium-API/#/).

## Prérequis

Avant de pouvoir exécuter ce projet localement, vous devez avoir installé les éléments suivants :

- **Node.js** (version 14 ou supérieure)
- **npm** (version 6 ou supérieure)

### Dépendances du projet

Ce projet utilise **Axios** pour les requêtes HTTP. Pour installer Axios, utilisez la commande suivante :

```bash
npm install axios
``` 

## Installation 
 
1. Clonez ce dépôt GitHub sur votre machine locale :
```bash
git clone https://github.com/votre-utilisateur/nom-du-repo.git
``` 

2. Accédez au dossier du projet :
```bash
cd nom-du-repo
``` 

3. Installez les dépendances du projet :
```bash
npm install
``` 

4. Lancez le serveur de développement :
```bash
npm run dev
```

## Technologies Utilisées

- React : Framework JavaScript pour la création d'interfaces utilisateurs.
- Vite : Un bundler de développement rapide et léger.
- Axios : Librairie HTTP pour effectuer des requêtes API.
- CSS : Styles de l'application.