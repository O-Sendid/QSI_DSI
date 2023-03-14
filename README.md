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
> -

> #### *Back*
> -

> #### *Tokenisation*
> -

### Ce qui devrait être fini à la fin de la séance prochaine
> #### *Front*
> - 

> #### *Back*
> -

> #### *Tokenisation*
> - 

### Mise en production : 
**Domaine** : justicket.maxleq.com 