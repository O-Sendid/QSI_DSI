# DSI
## Objectifs
> - Application de Dashboard
> - Gestion des équipes 
> - Mises en production
 
# Back
## Objectifs
> Création de concert avec comme sous-partie : 
> * Crée un nombre de billets statiques (Mint -> génération du Mint et blockChain enregistre)
> 
> * Administrateur :
> 	* Crée un concert avec un nombre de place / billet 
> 	* Modification du concert 
> 		* Planifié (à la création) / Terminé 
> 		* Ne peut pas retirer l'argent du concert tant que la date de début n'est pas atteinte.
> 		* Suppression d'un concert (si tout est ok) 
> 
> * Choix des Technos : 
> 	* PostgreSql
> 	* Express 
> 	* Node.js v.18+
> 	* Nest 
> 	* TypeOrm

## Risques / Points compliqués 
> L'équipe du back ne connaît pas toutes les techno utilisés, certaines sont nouvelles pour la plupart d'entre eux, il y a un certain risque de blocage ou alors de ralentissement sur le projet,
> 
> On peut avoir un problème de développement, qui pourrait devenir bloquants et stopper net le projet à cause d'un retard de la partie de Tokenisation
>
> Un point compliqué qui rejoint le premier. La gestion des signatures de message, c'est un développement pas ou peu connu.
 
# Front (UI)
## Objectifs
> * **Voir Front_img**
> * Choix des technos : 
> 	* React
> 	* Typescript

## Risques / Points compliqués
> On va trouver principalement 2 points qui peuvent poser problème, tout d'abord et le plus probable, puisqu'il dépend aussi de la Tokenisation... On peut avoir un fort ralentissement dû à un back non fini ou lent.
>
> Les technos ne sont pas complétement maîtriser, même si elles sont connues, il va cependant y avoir un temps d'adaptation puisque ce qui est demandé est un nouveau système.

# Tokenisation
## Objectifs
> * NFT de billets. Gestion des smart contract
> * Au final, ils ont la charge de la gestion des clés et des billets, sans eux le back ne peut permettre au front d'afficher les billets (qui sont liés à un concert).
> * Choix Techno :
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
> - Réflexion du mcd
> - R&D sur ipfs et pinata (contenu, fonctionnement)
> - Dev

> #### *Tokenisation*
> - Le NFT de ticket est fait est MINTABLE.

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Lister les concerts -> page d'accueil
> - Commencer la page single concert
> - Commencer la page création d'un concert

> #### *Back*
> - Mise en place/utilisation d'ipfs
> - Finition mcd
> - Continuer le dev

> #### *Tokenisation*
> - Gestion des tickets / concert (aucune distinction actuellement)
> - Ajouter les champs supplémentaires souhaités. (metadata)

# SEMAINE DU 14/03
## Avancement du projet : 

### Ce qui a été fait 
> #### *Front* 
> - Lister les concerts **page d'accueil**
> - Page "**mes billets**" (commencée)
> - Page **création d'un concert** (finie)

```Besoin pour mise la production : Node version 18.10.0```

> #### *Back*
> - Schema, révision sur les besoins et les objectifs 
> - Envoi Json/image sur ipfs avec l'aide de pinata

> #### *Tokenisation*
> - Création d'un concert (déploiement d'un contrat). Via ce dit contrat :
>   - MINT qui permet de générer 1 ticket à la fois (seulement pour le propriétaire)

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Finir la page **mes billets**
> - Avancer sur le page **acheter un billet**
> - Vérification du rôle

> #### *Back*
> - Avancement du dev sur back ( par exemple : finir la vérification des signatures des messages)

> #### *Tokenisation*
> - Création de l'endpoint de premint qui permet de créer les NFTs par avance par rapport au nombre de place disponible.
> - Gestion du propriétaire, au back et front de m'indiquer qui compte réellement appeler la création de contrat.

## Risque survenu : 
Lorsque le projet a commencé, un membre de la DSI a demandé aux différents groupes de d'abord réfléchir à leurs objectifs... Suite à une bonne demi-heure de réflexion... Une **réunion** entre les différents groupes a eu lieu, chaque équipe à envoyer son chef qui devait par conséquent savoir ce que son équipe souhaitait/pensait devoir faire... À la suite de cette **réunion**, chaque équipe savait ce qu'elle devait faire... Du moins, en théorie, il ne restait plus qu'à choisir les moyens techniques, etc...

Cependant, le 14/03/2023... Malgré la **réunion**, les équipes **FRONT** et **BACK** n'étaient pas correctement accordés sur les tâches qu'elles devaient effectuer... Surtout sur la partie de *qui doit gérer les appels à la tokenisation*. Par conséquent, une nouvelle **réunion** a été demandé (avec la participation de l'équipe de Tokenisation). Cela a évidemment décalé le planning, mais une nouvelle confirmation (de chaque membre de chaque équipe) nous a été donnée.

# SEMAINE DU 21/03
## Avancement du projet : 

### Ce qui a été fait 
> #### *Front* 
> - Vérification du rôle en cours
> - Visuel de la page **acheter un billet* finit !
> - Page **mes billets** finit 

> #### *Back*
> - Remaniement des tâches à effectuer (qui fait quoi et comment)

> #### *Tokenisation*
> - Contrat qui permet la création d'un concert qui prend en paramètre : 
>   - Le nombre de place 
>   - Le prix des places
> - Gestion des tickets qui prend en paramètre (ils doivent être renseignés) : 
>   - Le prix d'une place
>   - La capacité
>   - Le créateur du concert.

> L'équipe tokenisation a fournit les différentes choses à appeler pour faire fonctionner le code et une explication du fonctionnement ! 

``` Lien du contrat : https://better-call.dev/ghostnet/KT1BBdjgLByEV3TkLow6DdVvN8xWcKz9uNvo/operations ```

``` Contrat usine : https://better-call.dev/ghostnet/KT1Um18wP2yeFZ75UBbV3rwCiVemUJe8TSdC/operations ```

***/!\ L'équipe tokenisation a donc "fini" en grande partie ce qui lui est demandé, par conséquent, le front et le back devront se baser sur cela...***

## Conséquence du risque : 
Un retard se remarque sur les équipes **FRONT** et **BACK**, même si les deux équipes font de leurs mieux pour rattraper le retard... Suite à une demande de la DSI, les équipes nous ont bien confirmés qu'elles savaient ce qu'elles devaient faire, par conséquent... Nous en avons conclu que le projet ne devrait plus se stopper comme la semaine dernière. 

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
> Un décalage de date de rendu a été demandé et accepté par le client, la nouvelle date de rendu est donc au 15/04/2023 !

### Ce qui a été fait 
> #### *Front* 
> - Visuel, en grande partie finis (il ne devrait plus bouger, ou alors légèrement)

> #### *Back*
> - Le travail de la semaine dernière prend plus de temps que prévu, alors décalage sur cette semaine, mais le developpement avance.

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Communication avec le Back 
> - Achat de ticket sur la blockChain

> #### *Back*
> - (cf plus haut)

> #### *Tokenisation*
> - Annulation d'un concert.

# SEMAINE DU 04/04
## Avancement du projet : 

### Ce qui a été fait 
> #### Front 
> - Communication avec le back => En attente du back
> - Il y aura un léger décalage sur cela, le front est pour le moment bloqué sur cette partie à cause du retard du back
> - Achat de ticket sur la blockchain

```Cependant, ce n'est pas totalement fini, quelques soucis techniques sont apparut => Quel nft est disponible => demande de création de fonction au back pour obtenir les nft dispo d'un concert. La connexion Tezos est terminé.```

> #### *Back*
> - Finalisation des derniers détails sur les connexions à la blockchain, le déploiement et la vérification

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - Communication avec le Back 
> - Achat de ticket sur la blockChain

> #### *Back*
> - Finaisation de tout ce qui est en cours
> - Connexion Tezos

> #### *Tokenisation*
> - Annulation d'un concert.

# SEMAINE DU 11/04 
## Avancement du projet (dernière semaine) : 

### Ce qui a été fait 
> #### *Front* 
> - Communication avec le back => Remontée de plusieurs problèmes qui nous bloquent :
>  - Pas de listes de billets d'un utilisateur
>  - pas d'addresse Tezos d'équipe du Front en admin 
>  - addresse du concert enfant non pris en compte
>  - pas de fonction de premint d'un concert 
>  - pas de fonction pour obtenir les nft dispo (concert).

> Du coup comme tout ça n'était pas fonctionnel 1e 15/04/2023 à 17h, ils ont mocker un concert pour tester et vérifier les nft dispo d'un concert :
> - Achat de ticket sur la blockchain réalisé
> - Refund réalisé
> - Withdraw réalisé

/!\ Cependant, le côté fonctionnel laisse à désirer puisque tout est créé à la main, mais ils ont su s'adapter et grâce à cela, une fois que le back aura corrigé les problèmes remontés, le temps nécessaire pour connecter le front et le back sera assez court. 

> #### *Back*
> - Le projet est fini en grande partie, cependant, il manque certaine fonction dont le front a besoin qui sont encore à finir (cf front semaine 11/04).

# Mise en production : 
> **Domaine** : justicket.maxleq.com 
> 
> **Front** : Node version 18.10.0
> 
> **Back** : Lire le ReadMe du back qui contiens toutes les informations nécessaires

```Certains éléments du back ont de l'expérience dans le déploiement d'application, par conséquent, ils sont venus en aide à la DSI pour préparer un bon environnement pour déployer, la DSI a ensuite repris le flambeau afin de s'occuper des tâches les plus lourdes et longues. Cependant, un léger retard dans la date de rendu demandé par la DSI (qui souhaitait avoir les projets rendus plus tôt que le 15/04) va impacter la marge de manœuvre de la DSI pour le déploiement.```

# Conclusion : 
Le projet est bien avancé, cependant, il manque quelques parties connectant le front et le back. Le front a tout de même su être débrouillard en créant un mock d'un concert pour effectuer des vérifications, et le résultat est concluant ! De plus, le back a déjà commencé à corriger les parties bloquants le front, mais au vu du peu de temps restant avant le rendu final, l'équipe du front manquera de temps pour se mettre à jour et réaliser la connexion avec back ! 

Malgré la demande de la DSI d'avoir un rendu "final" assez propre pour le 10/11 avril (afin d'avoir le temps de faire une mise en production et une livraison correcte et sans précipitation) ainsi que la création d'un espace où les chefs d'équipes (back, front et tokenisation) pouvaient communiquer entre eux, il y a eu des lacunes de communication qui ont amenés au résultat final. C'est-à-dire, un projet presque fini, puisque les deux derniers groupes (back et front) sont arrivés à des résultats fonctionnels, mais qui ne se connecte pas correctement entre eux.

La DSI aurait peut-être dû réaliser un suivi encore plus poussé que celui proposé et donner la main à toutes les équipes plutôt que simplement au chef. Nous avions pris cette décision pour le côté "simple", puisque communiquer avec 3 groupes de 5 personnes aurait pu s'avérer compliqué, cependant, il s'avère que dans ce cas, un changement de stratégie aurait peut-être permis un avancement plus rapide et simple. 

Le résultat de ce retard du projet vient aussi des différents risques qui sont survenus, vous pourrez voir des informations plus détaillées, dans le dossier ressources où la DSI a placé différents documents utiles. 
