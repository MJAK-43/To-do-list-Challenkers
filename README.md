# :Sujet : la to-do-list

Nom: MBONING JOKUNG
Prénom : Andy Karl

Il s'agit d'une application de liste de choses à faire. 


## Techno attendues :  
1. Golang pour faire communiquer le client et le serveur
2. Html/css/javascript/jquery
3. Toutes techno Javascript que vous souhaitez utiliser : react, angular …
 
## Fonctions :
1. Faire une barre de 
2. recherche
3. Pouvoir ajouter des tâches
4. Modifier les états des tâches
5. Supprimer des tâches
 
## Contraintes :

1. Sans login (pas d’accès utilisateurs ni d’accès restreints)
2. Plusieurs fois par minute la liste se met à jour sur l'état des tâches (à faire, en cours, fait, en retard)
3. La page ne doit jamais être rechargée, pour aucune action.

## Design :
Vous trouverez ci-dessous le lien vers la maquette de cette to-do list. Nous attendons que vous la reproduisiez le plus fidèlement possible. Dans l’idéal, proposez également une version responsive mobile.
Police : Montserrat
Lien vers la maquette : [here](https://www.figma.com/file/YgSWlprvUcVqFaz3noInz4/Test-To-do-list?node-id=0%3A1)
En cas de souci pour accéder à la maquette, la voici en PDF en pièce jointe.
Si des éléments de cette maquette vous posent problème, proposez une solution alternative et expliquez ce choix.
 
## Bonus :
Faire une base de données et montrer que vous avez compris comment utiliser le Go en  ajoutant des éléments ou fonctions pertinentes utilisant ce langage.
 
## Rendu et délai :
Rendu sur github, gitlab ou bitbucket, selon votre préférence.
A nous envoyer pour mercredi à 23h59 maximum.


---

# TECH
1. Server: Golang
2. Client: React, semantic-ui-react
3. Database: Local MongoDB

# Points forts

1. La chaîne de connexion à la base de données, le nom et le nom de la collection ont été déplacés dans le fichier `.env` comme variable d'environnement. 

2.  Ses fonctionnalités supportent à la fois Docker et Kubernetes.

## Exigence de l'application

### Exigence du serveur golang

1. golang https://golang.org/dl/
2. paquet gorilla/mux pour le routeur `go get -u github.com/gorilla/mux`
3. paquetage mongo-driver pour se connecter à mongoDB `go get go.mongodb.org/mongo-driver`
4. github.com/joho/godotenv pour accéder à la variable d'environnement.

### react client

Depuis le répertoire de l'application

`create-react-app client`

### :ordinateur : Démarrer l'application

1. Assurez-vous que votre mongoDB est démarré
2. Créez un fichier `.env` dans le `go-server` et copiez les clés de `.env.example` et mettez à jour la chaîne de connexion à la BD.
3. Depuis le répertoire go-server, ouvrez un terminal et exécutez
   `go run main.go`
4. Depuis le répertoire client,  
   a. installez toutes les dépendances en utilisant `npm install`.  
   b. démarrez le client en utilisant `npm start`.

## :panda_face : Parcourir l'application

Ouvrez l'application à http://localhost:3000
)

### Créer une tâche

Saisir une tâche et Entrer

### Tâche terminée

A la fin d'une tâche, cliquez sur l'icône "terminé" de la carte de tâche correspondante.


Vous remarquerez qu'une fois la tâche terminée, la couleur de la ligne inférieure de la carte passe du jaune au vert.

### Annuler une tâche

Pour annuler une tâche, cliquez sur l'icône "annuler",


Vous remarquerez qu'à la fin de la tâche, la couleur de la ligne inférieure de la carte est passée du vert au jaune.

### Supprimer une tâche

Pour supprimer une tâche, cliquez sur l'icône "supprimer".

---

### Auteur

#### :Auteur : Andy Karl MBONING

Je suis étudiant en 5ème année ingénieur logiciel et j'aime écrire des articles et des tutoriels sur golang et nodejs.  

# Références

https://godoc.org/go.mongodb.org/mongo-driver/mongo  
https://www.mongodb.com/blog/post/mongodb-go-driver-tutorial  
https://vkt.sh/go-mongodb-driver-cookbook/


Traduit avec www.DeepL.com/Translator (version gratuite)
