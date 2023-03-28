# DSI
## Objectifs
> - Application de Dashboard
> - Gestion des équipes 
> - Mises en production
 
# Back
## Objectifs
> Création de concert avec comme sous-partie : 
> * Crée un nombre de billet statiques (Mint -> génération du Mint et blockChain enregistre)
> 
> * Administrateur :
> 	* Crée un concert avec un nombre de place / billet 
> 	* Modification du concert 
> 		* Planifié (à la création) / Terminé 
> 		* Ne peut pas retirer l'argent du concert tant que la date de début n'est pas atteinte.
> 		* Suppresion d'un concert (si tout est ok) 
> 
> * Choix des Technos : 
> 	* PostgreSql
> 	* Express 
> 	* Node.js v.18+
> 	* Nest 
> 	* TypeOrm

## Risques / Points compliqués 
> L'équipe du back ne connait pas toutes les techno utilisés, certaines sont nouvelles pour la plupart d'entre eux, il y a un certain risque de blocage ou alors de ralentissement sur le projet,
> 
> On peut avoir un problème de developpement, qui pourrait devenir blocant et stopper net le projet à cause d'un retard de la partie de Tokenisation
>
> Un point compliqué qui rejoint le premier. La gestion des signatures de message, c'est un développement pas ou peu connu.
 
# Front (UI)
## Objectifs
> * **Voir Front_img**
> * Choix des technos : 
> 	* React
> 	* Typescript

## Risques / Points compliqués
> On va trouver principalement 2 points qui peuvent poser problèmes, tout d'abord et le plus probable, puisqu'il dépend aussi de la Tokenisation... On peut avoir un fort ralentissement dû à un back non fini ou lent.
>  
> Les technos ne sont pas complétement maîtriser, même si elles sont connus, il va cependant y avoir un temps d'adaptation puisque ce qui est demandé est un nouveau système.

# Tokenisation 
## Objectifs
> * NFT de billets. Gestion des smart contract
> * Au final, ils ont la charge de la gestion des clés et des bilelts, sans eux le back ne peut permettre au front d'afficher les billets (qui sont liés à un concert).
> * Choix Techno :
> 	* Ligo
> 	* crypto

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
> - Mise en place/utilisation de ipfs
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
> - Page "**mes billets**" (commencé)
> - Page **création d'un concert** (finit)

```Besoin pour mise la production : Node version 18.10.0```

> #### *Back*
> - Schema, révision sur les besoins et les objectifs 
> - Envoi Json/image sur ipfs avec l'aide de pinata

> #### *Tokenisation*
> - Création d'un concert (deploiement d'un contrat). Via ce dit contrat :
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

## Risque survénu : 
Lorsque le projet a commencé, un membre de la DSI a demandé aux différents groupes de d'abord réfléchir à leurs objectifs... Suite à une bonne demi-heure de réflexion... Une **réunion** entre les différents groupes a eu lieu, chaque équipe à envoyer son chef qui devait par conséquent savoir ce que son équipe souhaitait/pensait devoir faire... À la suite de cette **réunion**, chaque équipe savait ce qu'elle devait faire... Du moins, en théorie, il ne restait plus qu'à choisir les moyens techniques, etc...

Cependant, le 14/03/2023... Malgré la **réunion**, les équipes **FRONT** et **BACK** n'étaient pas correctement accordés sur les tâches qu'elles devaient effectuer... Surtout sur la partie de *qui doit gérer les appels à la tokenisation*. Par conséquent, une nouvelle **réunion** a été demandé (avec la participation de l'équipe de Tokenisation). Cela a évidemment décalé le planning, mais une nouvelle confirmation (de chaque membre de chaque équipe) nous a été donnée.

# SEMAINE DU 21/03
## Avancement du projet : 

### Ce qui a été fait 
> #### *Front* 
> - En attente d'une réponse

> #### *Back*
> - Remaniement des tâches à effectuer (qui fait quoi et comment)

> #### *Tokenisation*
> - Contrat qui permet la création d'un concert qui prend en paramètre : 
>   - Le nombre de place 
>   - Le prix des places
> - Gestion des tickets qui prend en paramètre (ils doivent être renseigné) : 
>   - Le prix d'une place
>   - La capacité
>   - Le créateur du concert.

> L'équipe tokenisation a fournit les différentes choses à appeler pour faire fonctionner le code et une explication du fonctionnement ! 

``` Lien du contrat : https://better-call.dev/ghostnet/KT1BBdjgLByEV3TkLow6DdVvN8xWcKz9uNvo/operations ```

``` Contrat usine : https://better-call.dev/ghostnet/KT1Um18wP2yeFZ75UBbV3rwCiVemUJe8TSdC/operations ```

***/!\ L'équipe tokenisation a donc "fini" en grande partie ce qui lui est demandé, par conséquent, le front et le back devront se baser sur celà...***

## Conséquence du risque : 
Un retard se remarque sur les équipes **FRONT** et **BACK**, même si les deux équipes font de leurs mieux pour rattraper le retard... Suite à une demande de la DSI, les équipes nous ont bien confirmés qu'elles savaient ce qu'elles devaient faire, par conséquent... Nous en avons conclus que le projet ne devrait plus se stopper comme la semaine dernière. 

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - En attente d'une réponse

> #### *Back*
> - En attente d'une réponse

> #### *Tokenisation*
> - Annulation d'un concert.

# SEMAINE DU 28/03
## Avancement du projet (dernière semaine) : 

### Ce qui a été fait 
> #### *Front* 
> - En attente d'une réponse

> #### *Back*
> - En attente d'une réponse

> #### *Tokenisation*
> - NFT terminé
> - Dernière mise à jour du contrat usine (lien fournit de nouveau) 
> - Exemple d'un concert fournit

> L'équipe tokenisation a fournit les différentes choses à appeler pour faire fonctionner le code et une explication du fonctionnement ! 

``` Lien du contrat : https://better-call.dev/ghostnet/KT1BBdjgLByEV3TkLow6DdVvN8xWcKz9uNvo/operations ```

``` Contrat usine : https://better-call.dev/ghostnet/KT1Um18wP2yeFZ75UBbV3rwCiVemUJe8TSdC/operations ```

# Mise en production : 
> **Domaine** : justicket.maxleq.com 
> 
> **Front** : Node version 18.10.0
> 
> **Back** : *En attente de réponse*
> 
> **Tokenisation** : X
