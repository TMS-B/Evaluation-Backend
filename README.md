<p align="center" >
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E">
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</p>

 <img src="https://img.shields.io/github/last-commit/TMS-B/Evaluation-Backend">

# Site web portfolio avec un accès admin au dashboard

Ce projet est un site web portfolio construit en utilisant toute la stack MERN, avec authentification des utilisateurs, tableau de bord d'administration et gestion des cookies conforme au RGPD. Le projet a été réalisé dans le cadre d'une évaluation de fin de cycle.

## Sommaire

- [Site web portfolio avec un accès admin au dashboard](#site-web-portfolio-avec-un-accès-admin-au-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Fonctionnalités](#features)
  - [Technologies utilisées](#tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Getting Started](#getting-started)
    - [Prérequis](#prerequisites)
    - [Installation](#installation)
  - [Demo](#demo)
  - [Credits](#credits)

## Fonctionnalités

<!-- - 🎨 Modern and responsive design with dark/light theme support -->
- 🔒 Système d'authentification sécurisé
- 👩‍💼 Dashboard avec accès administrateur pour la gestion de contenu
- 🍪 Gestion des cookies conforme au normes RGPD avec tarteaucitron.js
<!-- - 📱 Mobile-friendly interface -->
- 🔄 Contenue de chargement dynamique
- 📝 Section de gestion des compétences

## Technologies utilisées

### Frontend

- **Vite avec REACT**: Pour une création rapide.
- **React Router DOM**: Pour le routage.
- **Axios**: Pour les appels API.
<!-- - **React Icons**: For icons. -->
- **useHooks**: Une collection de hooks React modernes et sûrs pour le serveur de l'équipe de développeur frontend.
<!-- - **react-router-hash-link**: Hash link support for React Router. -->
- **react-google-recaptcha**: Google reCAPTCHA un composant de REACT.

### Backend

- **Node.js & Express.js**: Exécution côté serveur et framework pour la création d'API.
- **MongoDB avec Mongoose** : Base de données avec solution basée sur les schémas pour Node.js.
- **JWT** : Pour gérer l'authentification sécurisée via des token Web JSON.
- **UUID** : Pour générer des ID uniques (utilisés pour les token de rafraîchissement).
- **Cookie-parser** : Pour gérer les cookies dans les requêtes et les réponses.
- **Bcrypt** : Pour le hachage des mots de passe.
- **Multer** : Pour gérer les téléchargements de fichiers.
- *File-type : Pour la validation du type de fichier.
- **Redis** : Pour la mise en cache.
- **Cloudinary** : Pour le stockage et la transformation d'images dans le nuage.
- Winston & Morgan** : Pour la journalisation des requêtes et des erreurs.
- **Express Validator** : Pour la validation des entrées dans les applications Express.
- **Compression** : Pour la compression des réponses.
- Helmet** : Pour définir des en-têtes HTTP sécurisés.
- **CORS** : Prise en charge du partage des ressources entre origines.
- **Axios** : Pour effectuer des requêtes HTTP.
- **express-rate-limit** : Pour limiter les demandes répétées provenant de la même IP.

<details>
<summary><b>Outils développement</b>:</summary>

- **Dotenv** : Pour gérer les variables d'environnement.
- **Nodemon** : Pour le redémarrage automatique du serveur pendant le développement.
<!-- - **Cross-env** : Pour définir les variables d'environnement sur différents systèmes d'exploitation -->
- **Postman** : Pour tester les appels d'API pendant le développement, également pour la documentation de l'API.
- **Swagger** : Pour la documentation de l'API.
<!-- - **Yaml** : Pour lire les fichiers YAML. -->
- **NPM** : Pour la gestion des dépendances.
- **Prettier** : Pour le formatage du code.
- **ESLint** : Pour le linting JavaScript.
<!-- - **Jest** : Pour les tests unitaires. -->
<!-- - **Supertest** : Pour effectuer des requêtes HTTP dans les tests. -->
</details>

## Getting Started

### Prérequis 

- **Node.js (v14 or higher)**
- **MongoDB**
- **Compte Cloudinary (pour le stockage des images)**
- **NPM (pour installer les dépendances)**

### Installation

**1. Pour cloner le repository**

Avec HTPPS
```bash
https://github.com/TMS-B/Evaluation-Backend.git
```

Avec SSH
```
git@github.com:TMS-B/Evaluation-Backend.git
```

Avec Github CLI 
```
gh repo clone TMS-B/Evaluation-Backend
```

**2. Installation des dépendances backend**

```bash
cd backend
npm install
```

**3. Installation des dépendances frontend**

```bash
cd client
npm install 
```

**4. Créez un fichier .env dans le backend et frontend avec les variables suivantes**

Backend fichier `.env`:

```ini
PORT = 'YOUR_PORT'
MONGO_URI= 'YOUR_MONGODB_URI'
JWT_SECRET = 'YOUR_JWT_SECRET'

CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUDINARY_NAME'
CLOUDINARY_API_KEY = 'YOUR_CLOUDINARY_API_KEY'
CLOUDINARY_API_SECRET = 'YOUR_CLOUDINARY_API_SECRET'

# NODE_ENV = 'development' the environment is set by the corresponding script in package.json

CLIENT_URL='YOUR_CLIENT_URL (for cors)'

RECAPTCHA_SITE_SECRET = 'YOUR_RECAPTCHA_SECRET_KEY'
```

Frontend fichier `.env` :

```ini
VITE_API_URL = 'YOUR_BACKEND_API_URL'

VITE_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY'
```

**5. Démarrer le serveur**

```bash
cd backend
npm run dev
```

**6. Démarrer l'application frontend**

```bash
cd client
npm run dev
```

**7. Ouvrez votre navigateur et naviguez sur : `http://localhost:5173` (port par défault de Vite)**

<p align="center">🚀 Ca y est! Vous devriez maintenant avoir un site web de portfolio entièrement fonctionnel avec un tableau de bord d'administration..</p>

<h2 align="center">📝 Additional tips:</h2>
<p align="center">📄 <b>In the backend</b>: go to <code>/api-docs</code> to get the full API documentation (Swagger)

<!-- ## Demo

Desktop:

<img src="./documentation/desktop-screenshot.png">
<br />
<br />

Mobile:

<img src="./documentation/mobile-screenshot.png" width="50%"> -->

<br />
<h2 align="center">📄 <a href="https://www.postman.com/armen-asriyan/workspace/my-workspace/collection/40691520-fdac5010-3447-4be9-ad69-3dc5ec896042?action=share&creator=40691520&active-environment=40691520-944ffed6-908f-4e88-83ae-5b54078c38e1">Postman collection</h2></a>
<h2 align="center">👉 <a href="https://evaluation-backend-tawny.vercel.app/">Live Demo on Vercel</h2></a>
<br />

## Credits

- [AmauriC](https://github.com/AmauriC) for tarteaucitron.js
