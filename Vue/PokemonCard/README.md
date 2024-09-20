# Pokédex - Pokémon Cards

Ce projet est une application web développée en **Vue.js** avec **Vite**. Elle permet de rechercher et d'afficher des cartes Pokémon. L'utilisateur peut rechercher les Pokémon par **nom** ou **type**. Les informations sont récupérées via l'API **PokéBuild**.

## Fonctionnalités

- **Recherche par nom** : Permet de retrouver un Pokémon en saisissant son nom.
- **Recherche par type** : Permet de lister les Pokémon en fonction de leur type (Feu, Eau, Plante, etc.).
- **Affichage détaillé** : Chaque Pokémon est présenté sous forme de carte avec une image et des informations détaillées telles que son type, ses statistiques, etc.
- **Utilisation d'une API externe** : Les données proviennent de l'API [PokéBuild](https://pokebuildapi.fr/api/v1).

## Prérequis

Avant de pouvoir exécuter ce projet localement, vous devez avoir installé les éléments suivants :

- **Node.js** (version 14 ou supérieure)
- **npm** (version 6 ou supérieure)

### Dépendances du projet

Le projet utilise **Axios** pour effectuer des requêtes HTTP. Pour installer Axios, exécutez la commande suivante :

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

- Vue.js : Framework JavaScript pour la création d'interfaces utilisateurs réactives.
- Vite : Bundler et serveur de développement rapide pour Vue.js.
- Axios : Librairie HTTP pour effectuer des requêtes API.
- CSS : Pour les styles de l'application.

