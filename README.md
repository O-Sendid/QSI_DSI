# DSI
## Objectifs
> - Application de Dashboard
> - Gestion des équipes 
> - Mises en production
 
# Back
## Objectifs
> Création de concerts avec comme sous-parties : 
> * Crée un nombre de billets statiques (Mint -> génération du Mint et blockChain enregistre)
> 
> * Administrateur :
> 	* Créer un concert avec un nombre de places/billets 
> 	* Modification du concert 
> 		* Planifier (à la création)/Terminer 
> 		* Ne peut pas retirer l'argent du concert tant que la date de début n'est pas atteinte.
> 		* Suppression d'un concert (si tout est ok) 
> 
> * Choix des Technos : 
> 	* PostgreSql
> 	* Express 
> 	* Node.js v.18+
> 	* Nest 
> 	* TypeOrm

## Risques/Points compliqués 
> L'équipe du back ne connaît pas toutes les technos utilisés, certaines sont nouvelles pour la plupart d'entre eux. Il y a donc un certain risque de blocage ou alors de ralentissement sur le projet.
> 
> On peut avoir un problème de développement, qui pourrait devenir bloquant et stopper net le projet à cause d'un retard de la partie de Tokenisation
>
> Un point compliqué qui rejoint le premier : la gestion des signatures de messages, qui est un développement pas ou peu connu.
 
# Front (UI)
## Objectifs
> * **Voir Front_img**
> * Choix des technos : 
> 	* React
> 	* TypeScript

## Risques/Points compliqués
> On va trouver principalement deux points qui peuvent poser problème, tout d'abord et le plus probable, puisqu'il dépend aussi de la Tokenisation, un fort ralentissement dû à un back non fini ou lent.
>
> Les technos ne sont pas complétement maîtrisées, même si elles sont connues, il va cependant y avoir un temps d'adaptation puisque ce qui est demandé est un nouveau système.

# Tokenisation
## Objectifs
> * NFT de billets. Gestion des smart contract
> * Au final, ils ont la charge de la gestion des clés et des billets, sans eux le back ne peut permettre au front d'afficher les billets (qui sont liés à un concert).
> * Choix Technos :
> * Ligo
> * crypto

# WorkFlow 
1 contrat = 1 concert = n tickets = 1 Nft * n

# SEMAINE DU 07/03
## Avancement du projet : 

### Ce qui a été fait 
> #### *Front* 
> - Initialisation du projet
> - Création du menu
> - Connexion au wallet d'un utilisateur avec Taquito
> - Identification des prochaines taches

> #### *Back*
> - Réflexion du MCD
> - R&D sur ipfs et pinata (contenu, fonctionnement)
> - Dev

> #### *Tokenisation*
> - Le NFT de ticket est fait et MINTABLE.

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Lister les concerts -> page d'accueil
> - Commencer la page single concert
> - Commencer la page création d'un concert

> #### *Back*
> - Mise en place/utilisation d'ipfs
> - Finition MCD
> - Continuer le dev

> #### *Tokenisation*
> - Gestion des tickets/concerts (aucune distinction actuellement)
> - Ajouter les champs supplémentaires souhaités. (metadata)

# SEMAINE DU 14/03
## Avancement du projet : 

### Ce qui a été fait 
> #### *Front* 
> - Lister les concerts **page d'accueil**
> - Page "**mes billets**" (commencée)
> - Page **création d'un concert** (finie)

```Besoin pour mise en production : Node version 18.10.0```

> #### *Back*
> - Schéma, révision sur les besoins et les objectifs 
> - Envoi Json/image sur ipfs avec l'aide de pinata

> #### *Tokenisation*
> - Création d'un concert (déploiement d'un contrat). Via ce dit contrat :
>   - MINT qui permet de générer un ticket à la fois (seulement pour le propriétaire)

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Finir la page **mes billets**
> - Avancer sur la page **acheter un billet**
> - Vérification du rôle

> #### *Back*
> - Avancement du dev côté back (par exemple : finir la vérification des signatures des messages)

> #### *Tokenisation*
> - Création de l'endpoint de premint qui permet de créer les NFTs par avance par rapport au nombre de places disponibles.
> - Gestion du propriétaire, au back et front de m'indiquer qui compte réellement appeler la création de contrats.

## Risque survenu : 
Lorsque le projet a commencé, un membre de la DSI a demandé aux différents groupes de réfléchir en premier lieu à leurs objectifs. Suite à une bonne demi-heure de réflexion, une **réunion** entre les différents groupes a eu lieu. Chaque équipe était représentée par un membre du groupe, qui devait par conséquent savoir ce que son équipe souhaitait/pensait devoir faire. À la suite de cette **réunion**, chaque équipe savait quel chemin prendre, du moins, en théorie, il ne restait plus qu'à choisir les moyens techniques, etc...

Cependant, le 14/03/2023... Malgré cette **réunion**, les équipes **FRONT** et **BACK** n'étaient pas correctement accordées sur les tâches qu'elles devaient effectuer... Surtout sur la partie de *qui doit gérer les appels à la tokenisation*. Par conséquent, une nouvelle **réunion** était requise (avec la participation de l'équipe de Tokenisation). Cela a évidemment décalé le planning, mais une nouvelle confirmation (de chaque membre de chaque équipe) nous a été donnée.

# SEMAINE DU 21/03
## Avancement du projet : 

### Ce qui a été fait 
> #### *Front* 
> - Vérification du rôle en cours
> - Visuel de la page **acheter un billet* fini !
> - Page **mes billets** finie

> #### *Back*
> - Remaniement des tâches à effectuer (qui fait quoi et comment)

> #### *Tokenisation*
> - Contrat qui permet la création d'un concert qui prend en paramètres : 
>   - Le nombre de places 
>   - Le prix des places
> - Gestion des tickets qui prend en paramètres (ils doivent être renseignés) : 
>   - Le prix d'une place
>   - La capacité
>   - Le créateur du concert.

> L'équipe tokenisation nous a fourni les différents éléments à appeler pour faire fonctionner le code et une explication du fonctionnement ! 

``` Lien du contrat : https://better-call.dev/ghostnet/KT1BBdjgLByEV3TkLow6DdVvN8xWcKz9uNvo/operations ```

``` Contrat usine : https://better-call.dev/ghostnet/KT1Um18wP2yeFZ75UBbV3rwCiVemUJe8TSdC/operations ```

***/!\ L'équipe tokenisation a donc "fini" en grande partie ce qui lui était demandé. Par conséquent, le front et le back devront se baser sur cela...***

## Conséquence du risque : 
Un retard se remarque sur les équipes **FRONT** et **BACK**, même si les deux équipes font de leurs mieux pour rattraper le temps perdu. Suite à une demande de la DSI, les équipes nous ont bien confirmées qu'elles savaient ce qu'elles devaient faire, aussi avons-nous conclu que le projet ne devrait plus se stopper comme la semaine dernière. 

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Finir tout ce qui est visuel sur le site.

> #### *Back*
> - Envoi JSON/image sur ipfs avec l'aide de l'outil pinata.
> - Avancer sur le fonctionnement de la vérification des signatures des messages.

> #### *Tokenisation*
> - Annulation d'un concert.

# SEMAINE DU 28/03
## Avancement du projet : 
> Un décalage de date de rendu a été demandé et accepté par le client. La livraison est maintenant prévue pour le 15/04/2023 !

### Ce qui a été fait 
> #### *Front* 
> - Visuel, en grande partie fini (il ne devrait plus bouger, ou alors légèrement)

> #### *Back*
> - Le travail de la semaine dernière prend plus de temps que prévu, alors décalage sur cette semaine, mais le développement avance.

> #### *Tokenisation*
> - Annulation d'un concert. (donc projet fini)

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Communication avec le Back 
> - Achat de tickets sur la blockChain

> #### *Back*
> - (cf plus haut)

# SEMAINE DU 04/04
## Avancement du projet : 

### Ce qui a été fait 
> #### Front 
> - Communication avec le back => En attente du back
> - Il y aura un léger décalage sur cela, le front est pour le moment bloqué sur cette partie à cause du retard du back
> - Achat de tickets sur la blockchain

```Cependant, ce n'est pas totalement fini, quelques soucis techniques sont apparus => Quel NFT est disponible => demande de création de fonction au back pour obtenir les NFT disponibles d'un concert. La connexion Tezos est terminée.```

> #### *Back*
> - Finalisation des derniers détails sur les connexions à la blockchain, le déploiement et la vérification

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Communication avec le Back 
> - Achat de ticket sur la blockChain

> #### *Back*
> - Finaisation de tout ce qui est en cours
> - Connexion Tezos

# SEMAINE DU 11/04 
## Avancement du projet (dernière semaine) : 

### Ce qui a été fait 
> #### *Front* 
> - Communication avec le back => Remontée de plusieurs problèmes qui les bloquent :
>  - Pas de listes de billets d'un utilisateur
>  - Pas d'addresse Tezos d'équipe du Front en admin 
>  - Addresse du concert-enfant non pris en compte
>  - Pas de fonction de premint d'un concert 
>  - Pas de fonction pour obtenir les NFT disponibles (concert) -> en cours de correction par le back.

> Ainsi, comme tout ça n'était pas fonctionnel 1e 15/04/2023 à 17 h, ils ont mocké un concert pour tester et vérifier les NFT disponibles d'un concert :
> - Achat de tickets sur la blockchain réalisé
> - Refund réalisé
> - Withdraw réalisé

/!\ Cependant, le côté fonctionnel laisse à désirer puisque tout est créé à la main, mais ils ont su s'adapter et grâce à cela, une fois que le back aura corrigé les problèmes remontés, le connecter au front devrait être assez rapide. 

> #### *Back*
> - Le projet est fini en grande partie, cependant, il manque certaines fonctions dont le front a besoin qui sont encore à finir (cf front semaine 11/04).
> - Correction du problème concernant les adresses des concerts

# Mise en production : 
> **Domaine** : justicket.maxleq.com 
> 
> **Front** : Node version 18.10.0
> 
> **Back** : Lire le ReadMe du back qui contient toutes les informations nécessaires

```Certains éléments du back ont de l'expérience dans le déploiement d'application, par conséquent, ils sont venus en aide à la DSI pour préparer un bon environnement pour déployer. Nous avons ensuite repris la main afin de s'occuper des tâches les plus lourdes et longues. Cependant, un léger retard dans la date de rendu que nous avions convenue (nous souhaitions avoir les projets de chaque équipe pour le 10/04) va impacter notre marge de manœuvre pour le déploiement.```

# Conclusion : 
Le projet est bien avancé, cependant, il manque quelques parties connectant le front et le back. Le front a tout de même su se montrer ingénieuse en créant un mock d'un concert pour effectuer des vérifications, et le résultat est concluant ! De plus, le back a déjà commencé à corriger les parties bloquant le front, mais au vu du peu de temps restant avant la deadline, l'équipe du front manquera de temps pour se mettre à jour et réaliser la connexion avec le back ! 

Malgré la demande de la DSI d'avoir un rendu final suffisamment propre pour le 10 avril (afin d'avoir le temps de faire une mise en production et une livraison correcte et sans précipitation), ainsi que la création d'un espace où les chefs d'équipes (back, front et tokenisation) pouvaient communiquer entre eux, il y a eu des lacunes de communication. Autrement dit, le projet est dans son ensemble presque abouti, puisque les deux derniers groupes (back et front) sont arrivés à des résultats fonctionnels, mais qui ne se connectent pas encore totalement entre eux.

Ce retard nous a toutefois contraint nous, la DSI, a déployé le jour-même de la deadline puisque nous avons reçu la livraison du front le même jour, et celle du back la veille.

La DSI aurait peut-être dû réaliser un suivi encore plus poussé que celui proposé et donner la main à tous les membres de chaque équipe, plutôt que simplement au représentant. Nous avions pris cette décision pour le côté simple et efficace de la chose, car communiquer avec 3 groupes de 5 personnes aurait pu s'avérer compliqué et brouillon, cependant, il s'avère que dans ce cas, un changement de stratégie aurait peut-être permis une avancée plus rapide et simple. 

Le résultat de ce retard vient aussi des différents risques qui sont survenus. Vous trouverez des informations plus détaillées dans le dossier 'ressources' où nous avons placé différents documents utiles comme un Gantt ou encore un SWOT.
