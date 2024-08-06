# Weather App

## Description

Weather App est une application React (avec Vite) qui affiche les conditions météorologiques actuelles pour une ville donnée. L'application utilise l'API OpenWeatherMap pour obtenir les données météorologiques et affiche des informations telles que la température, l'humidité, et la vitesse du vent.

## Fonctionnalités

- Affichage de la température actuelle en degrés Celsius.
- Affichage de l'humidité actuelle.
- Affichage de la vitesse du vent.
- Changement dynamique des icônes en fonction des conditions météorologiques.
- Recherche de la météo pour différentes villes.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/khalidaBerki/Weather-APP-.git

2. Créez une clé API sur OpenWeatherMap :

Créez un compte sur OpenWeatherMap si vous n'en avez pas déjà un.
Connectez-vous et accédez à la section API Keys dans votre tableau de bord.
Créez une nouvelle clé API et copiez-la.

3.Ajoutez votre clé API au fichier .env :

Créez un fichier .env à la racine du projet si ce n'est pas déjà fait.
Ajoutez la ligne suivante au fichier .env :

VITE_APP_ID="your Api key"

4. Démarrez l'application :

npm start
ou
yarn start

Technologie :
Cette application utilise Vite pour le développement. Plutôt que de récupérer l’ensemble des éléments d’un projet et d’en construire un bundle, Vite se sert de la force des EcmaScript Modules (ESM) pour construire de manière dynamique, uniquement les ressources nécessaires à un temps donné. En résumé, si vous voulez afficher une page, uniquement les composants de cette page seront chargés. C’est ce que l’on appelle du “code splitting”.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
