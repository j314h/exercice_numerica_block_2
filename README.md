# **No more update

- Creation d'un nouveau portfolio pour intégrer les compétences du bloc 2 du titre developpeur web et web mobile

### _Data_

- Voici les documents de ma base de donnée  
   elle à été réalisé en MONGODB, voici la liste des collections(nom équivalent aux tables en SQL)

  - users.json => regroupe les utilisateurs administrateurs pouvant modifier le site.
    ![user](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_bdd/users-collection.png)
  - themeColor.json => cette collection servira pour un version 2 du site qui comprendra un systeme de mode dark pour changer les couleurs du sites  
    ![themeColor](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_bdd/themeColor-collection.png)
  - profils.json => celui ci contient tout le text de la page profil du site  
    ![profils](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_bdd/profils-collection.png)
  - imgs.json => vous retrouverai dans cette collection les images ou fichiers du site  
    ![imgs](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_bdd/imgs-collection.png)
  - competences.json => la partie competence, contient toute les données de la page compétence  
    ![competences](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_bdd/competence-collection.png)  
     \*Vous pouvez remarquer qu'il en manque, par un soucis de temps, avec tout ce qu'il y a ci-dessus toute les competences sont réalisées.

### _Structure_

- Vous trouverez 2 dossiers

  - 1 back :

    - regroupe tout le backend de l'application, il a été réalisé en ExpressJS avec Moogose comme ORM pour acceder à la base de donnée mongoDB.  
       ![connexion](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_structure/connexion-database.png)
    - Il est totalement sécurisé, il utilise la technologie cors pour restreindre son acces, puis la technologie jwt est utiliser ici, c'est à dire que la connexion utilisateur admin est sécurisé par un token totalement avec une journée de validation (passé ce délais le token n'est plus valide et au chargement de la page le token est supprimé).  
       ![cors](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_structure/cors.png)
    - Sécurité total sur le mot de passe de l'utilisateur, vous pouvez voir que dans la collection users.json, je n'ai pas caché le mot de passe, éffectivement ce qui apparait dans la collection est un mot de passe hash avec une clef secret pour etre encore plus sécurisé (par rapport au besoin de mes études une fausse clef secrete à été place dans le backend, pour pouvoir montrer mon utilisation tout en sécurisant mon site.)  
       ![hash](https://github.com/j314h/portfolio/blob/bloc-2/docs/img_structure/hash-password.png)

  - 1 front :
    - Créé en Angular, pour mon apprentissage de ce framework j'ai décidé de re-créer un front avec cette technologie, je voudrais me spécialisé en Angular d'où ce choix, je l'ai appris et utilisé en 1 semaine, je n'ai donc pas du coder tout parfaitement et je sais que je peux factorisé mon code pour une meilleur maintenabilité, mais le temps à été mon énnemis car d'autre projet sont en cours, j'ai donc fais le choix de revenir dessus par la suite pour faire un travail plus propre.
    - Angular possede de nombreuse bibliotheque intégré dans angular/core, donc contraiment à d'autre projet je n'ai pas eu beaucoup de bibliotheque à rajouter.
    - Pour les appel API j'ai donc utilisé HTTPCLIENTMODULE
    - Pour les formulaire j'ai fais le choix d'utiliser FORMMODULE avec FORMGROUPE ansi que FORMCONTROLE.
    - J'utilise également ngx-cookie-service qui me sert à vérifier le cookie présent ou non que mon backend renvoie apres connexion à celui-ci (connexion administrateur).
    - Comme je l'ai dis plus haut, il me reste encore du travail pour améliorer ce projet coté front, comme par exemple intégrer un systeme de service avec lequel je pourrai gerer mieux mes appels à l'API et encore d'autres taches, les commentaires du code seront rajoutés prochainement. Le bloc 2 portant sur le backend, je pourrai revenir travailler sur le front par la suite.

### _les compétences réalisées_

- Créer une base de donnée  
  _MongoDB_
- Développer les composants d’accès aux données  
  _creation des models et utilisation de l'ORM Mongoose_
- Développer la partie back-end d’une application web ou web mobile  
  _creation du backend avec nodeJS, ExpressJS_
- Stocker les informations dans la BDD  
  _Collections sitées ci-dessus_
- Créer une page d’administration permettant d’inscrire les informations dans la BDD  
  _page de connexion utilisateur creer avec acces sécurisé avec l'utilisation d'un token gerer par le backend_
- Effectuer les requêtes permettant d’afficher les informations sur la page du CV  
  _requetes éffectuées avec HTTPCLIENTMODULE de angular/core_

### 2 videos de présentation

- démarrage des serveurs + connexion utilisateur + démonstration du token + modification de la partie profil  
  [lien rapide téléchargement video 1](https://github.com/j314h/portfolio/blob/bloc-2/movies/pr%C3%A9sentation-token.mkv)
- modification, creation de la partie compétence  
  [lien rapide téléchargement video 2](https://github.com/j314h/portfolio/blob/bloc-2/movies/creation-competence..mkv)

_Explications en image pour télécharger les vidéos du site_

Cliquer sur le dossier movies
![movie](https://github.com/j314h/portfolio/blob/bloc-2/docs/img-info-movies/Capture%20d%E2%80%99%C3%A9cran%20du%202021-01-18%2023-28-12.png)

Cliquer sur la video
![clique sur la vidéo](https://github.com/j314h/portfolio/blob/bloc-2/docs/img-info-movies/Capture%20d%E2%80%99%C3%A9cran%20du%202021-01-18%2023-28-36.png)

Cliquer sur download => elles sont au format MKV, avec un lecteur comme quicktime ou VLC vous pourrez lire sans probleme ce format
![download](https://github.com/j314h/portfolio/blob/bloc-2/docs/img-info-movies/Capture%20d%E2%80%99%C3%A9cran%20du%202021-01-18%2023-29-01.png)
