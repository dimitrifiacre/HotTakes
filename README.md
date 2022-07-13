<a href="#">
  <img src="https://i.gyazo.com/f09f9486e321f949e756cffac4139dec.png" alt="HotTakes">
</a>
  
**HotTakes** est le projet 6 de la formation développeur web d'OpenClassrooms.

------
  
## Scénario
>Vous avez passé la dernière année en tant que développeur back-end indépendant et vous avez travaillé sur plusieurs projets de tailles et de difficultés variées.
>
>La semaine dernière, vous avez reçu un message sur votre plateforme de freelance vous demandant de l'aide pour un nouveau projet. Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones ». C’est pourquoi ce nouveau client, la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes ».

## Objectifs
* Implémenter un modèle logique de données conformément à la réglementation
* Mettre en œuvre des opérations CRUD de manière sécurisée
* Stocker des données de manière sécurisée

## Installation frontend
1. Installer les dépendences
*(dans le dossier `frontend`)*
     ```
     npm install
     ```
2. Lancer le serveur
    ```
    npm start
    ```
    *Port par défaut : `4200` (http://localhost:4200)*

## Installation backend
1. Installer les dépendences
*(dans le dossier `backend`)*
     ```
     npm install
     ```
2. Configurer les variables d'environnement  
Modifier le nom du fichier **example.env** en **.env** et remplir la clé `DB_CONNECTION` pour l'URI de MongoDB  
et `SECRET_TOKEN` pour la clé secrète.
3. Lancer le serveur
    ```
    npm start
    ```
    *Port par défaut : `3000` (http://localhost:3000)*
