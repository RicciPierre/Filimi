# Description

Le but de cette application est de permettre à un utilisateur de découvrir des films et/ou des séries d'une part, mais également de gérer ses listes de films et/ou séries vus ou à voir.

# Points d'importance

Nous porterons une importance plus particulière sur les points suivants :

- Fonctionnel sur tous les navigateurs (Chrome, Firefox, Edge et Internet Explorer 11)

- Bonne performance générale de l'application sur tous les navigateurs

- Bonne structure du code, ce qui veut dire un code facilement maintenable avec une responsabilité claire et simple

- Lecture et compréhension d'une documentation technique (APIs externes)

- Bonne utilisation d'un gestionnaire de code source

- Utilisation de RxJS

- Documentation

- Le design de l'application

# Sources de données

## Trakt.tv

Vous utiliserez ce service pour récupérer toutes les informations concernant les films et séries, pour connecter l'utilisateur à ses listes de films et séries vus et à voir.

<https://trakt.docs.apiary.io/>

## The Movie Database (TMDB)

Vous utiliserez uniquement ce service pour récupérer les images associées aux médias se trouvant sur Trakt.tv.

<https://developers.themoviedb.org/3/getting-started/introduction>

# Fonctionnalités

## Liste des films populaires

Sur cette page, l'utilisateur doit pouvoir naviguer dans la liste des films populaires ce qui implique un système de pagination.

Pour chacun des films, l'utilisateur attends les informations suivantes :

- Le poster (si disponible)

- Le titre

- L'année de sortie

L'utilisateur doit pouvoir naviguer vers une série.

## Liste des séries populaires

Idem que pour la liste des films populaires.

## Connexion au compte Trakt.tv de l'utilisateur

L'utilisateur doit pouvoir se connecter à l'application. La gestion de création du compte n'estai pas faite dans cette application. L'utilisateur sera redirigé vers Trakt.tv pour autoriser cette application à utiliser ses accès pour modifier ses listes.

Je suppose que vous avez deviné que vous devezIl faut utiliser OAuth pour l'authentification de l'utilisateur.

## Déconnexion de l'utilisateur

Après déconnection, l'utilisateur devra se retrouver sur la page affichant la liste des films populaires. Il ne devrait plus avoir accès à ses listes.

## Liste des films et séries vus par l'utilisateur

Sur cette page, l'utilisateur pourra retrouver sa liste des médias déjà vus. L'utilisateur aura le choix d'afficher soit les films, soit les séries déjà vues.

## Liste des films et séries à voir par l'utilisateur

Idem que pour la liste des films et séries vus par l'utilisateur.

## Recherche

L'utilisateur doit avoir le choix de faire sa recherche sur les films, les séries ou les deux.

Un système de pagination doit être disponible pour que l'utilisateur puisse avoir accès à tous les éléments de sa recherche.

## Menu

Le menu doit être accessible à tout moment lors de la navigation dans l'application. Elle doit permettre à l'utilisateur d'aller vers la liste des films ou séries populaires, faire une recherche, sde connecter ou déconnecter, accéder à la liste de films et séries vus ou à voir de l'utilisateur.

## Détail d'un film

Sur la page de détail d'un film, l'utilisateur doit retrouver les informations suivantes :

- Le titre

- L'année de sortie

- Le synopsis

- Le nombre de minutes

- La note

- Le ou les genres

- Le poster (si disponible)

- La fanart (ou backdrop) -- (si disponible)

- Liste des films similaires

- L'image associée à chacun des films similaires

- La liste des acteurs ainsi qu'une image associée à chacun

L'utilisateur doit pouvoir regarder un trailer si disponible, ajouter le film à sa liste de films vus ou à voir, naviguer vers le détail d'un acteur, ainsi que naviguer vers des films similaires.

## Détail d'une série

Sur la page de détail d'une série, l'utilisateur doit retrouver les informations suivantes :

- Le titre

- L'année de sortie

- Le synopsis

- Le nombre de minutes d'un épisode

- La chaîne de diffusion de la série

- Le nombre d'épisodes déjà parus

- Le ou les genres

- Le statut de la série

- La note

- Le poster (si disponible)

- La fanart (ou backdrop) - (si disponible)

- La liste des saisons

- L'image associée à chacune des saisons (si disponible)

- Liste de séries similaires

- L'image associée à chacune des séries similaires

- La liste des acteurs ainsi qu'une image associée à chacun

L'utilisateur doit pouvoir voir le détail d'une saison, regarder un trailer si disponible, ajouter la série à sa liste de séries vues ou à voir, naviguer vers le détail d'un acteur, ainsi que naviguer vers des séries similaires.

## Détail d'une saison pour une série

Sur la page de détail d'une saison, l'utilisateur doit retrouver les informations suivantes :

- La liste de tous les épisodes de la saison

- Le numéro de chacun des épisodes

- Le titre de l'épisode

- L'image associée à chacun des épisodes (si disponible)

Il doit être possible à l'utilisateur de retourner sur le détail de la série mais aussi de changer de saison sans devoir retourner sur le détail de la série.

## Détail d'un épisode

Sur la page de détail d'un épisode, l'utilisateur doit retrouver les informations suivantes :

- Le titre de la série

- Le numéro de la saison

- Le numéro de l'épisode

- Le titre de l'épisode

- La description de l'épisode

- Le nombre de minutes

Il doit être possible à l'utilisateur de retourner sur le détail de la saison mais aussi de changer d'épisode sans devoir retourner sur le détail de la saison.

## Détail d'un acteur

Sur la page de détail d'un acteur, l'utilisateur doit retrouver les informations suivantes :

- Le nom complet

- Sa biographie

- Son âge

- Son âge à son décès (si décédé)

- Lieu de naissance

- Une image associée

- La liste des films où l'acteur était présent dans le casting

- La liste des séries où l'acteur était présent dans le casting

L'utilisateur doit pouvoir parcourir la liste des films et/ou séries dans lesquels l'acteur à pu jouer, ainsi que revenir vers le film ou la série.

## Responsive

L'application doit être « responsive » de la tablette au plus grand écran possible. La partie smartphone est un point bonus.

## Progressive Web App (PWA)

Cette fonctionnalité est un point bonus.

L'application doit pouvoir fonctionner en partie lorsque l'utilisateur passe en mode hors-ligne. Un message doit s'afficher prévenant que ce dernier n'est plus connecté.

## Internationalisation

Cette fonctionnalité est un point bonus.

Le service Trakt.tv propose un système de traduction pour tous les médias. En tant qu'utilisateur, j'aimerais changer de langue d'affichage.
