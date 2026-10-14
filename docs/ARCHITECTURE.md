# 🏗️ Architecture

## La règle qui gouverne tout

> **Le client n'apprend jamais ce que son joueur n'a pas le droit de savoir.**

Ce n'est pas une bonne pratique, c'est la condition d'existence du jeu. Tout ce qui est envoyé
au navigateur est lisible par le joueur, quoi qu'on affiche à l'écran. Un rôle envoyé « mais
caché par le CSS » est un rôle révélé.

Conséquence directe : l'état complet d'une partie n'existe **qu'en un seul endroit**, le
serveur. Chaque joueur reçoit une projection filtrée de cet état.

```
            ┌──────────────────────────────┐
            │          server              │
            │  état complet de la partie   │
            │  (qui est quoi, qui a voté)  │
            └───────────┬──────────────────┘
                        │  vue filtrée, une par joueur
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
     client A       client B       client C
   « tu es La     « tu es Le     « tu es La
     Papesse »      Mat »          Lune »
```

## Les trois paquets

### `@wolfsona/shared`

Les règles, et rien d'autre.

- Zéro dépendance. Zéro import de `node:`. Zéro accès au DOM.
- Pas de date courante, pas d'aléatoire implicite : l'horloge et le générateur aléatoire sont
  **passés en paramètre**. Sans cela, une partie n'est pas reproductible et un test devient
  instable.
- Les fonctions ne mutent pas l'état reçu : elles en renvoient un nouveau.

C'est ce qui permet de rejouer une partie entière à partir de sa liste d'actions — pour
déboguer un litige, ou reconstruire l'état après un incident.

### `@wolfsona/server`

- Un salon = une partie = une machine à états en mémoire.
- Reçoit une action, la valide, la passe à `shared`, diffuse les vues filtrées.
- Tient les minuteurs de phase. **Le serveur décide quand la nuit finit**, jamais le client.
- Expose une API HTTP minimale (création de partie, comptes) et une WebSocket pour le jeu.

### `@wolfsona/client`

- Affiche l'état reçu, envoie les intentions du joueur.
- Ne contient aucune règle. S'il lui en faut une, c'est le signe qu'on allait lui envoyer
  une information de trop.

## Pourquoi les rôles sont des données

Il reste **15 arcanes à ajouter**. Si chaque rôle était une branche dans le moteur, le moteur
grossirait de quinze branches et chaque ajout risquerait de casser les précédents.

Un rôle est donc un objet : son arcane, son camp, sa priorité nocturne, son effectif maximal.
Le moteur lit le registre, trie par priorité, appelle le gestionnaire associé. Ajouter
Le Jugement = une entrée dans le registre + son gestionnaire. Le moteur ne bouge pas.

La priorité nocturne est un **nombre avec des trous** (10, 30, 40, 50, 70) précisément pour
qu'un rôle puisse s'insérer entre deux existants sans renumérotation.

## Reconnexion

Puisque l'état vit côté serveur, la reconnexion n'est pas une fonctionnalité à construire :
c'est une conséquence. Un joueur qui revient reçoit la vue filtrée correspondant à la phase
en cours. Son identité de session tient dans un jeton signé, pas dans la mémoire de l'onglet.

## Ce qui est volontairement simple en v1

- **Un seul processus serveur.** Pas de répartition de charge. Les parties étant en mémoire,
  passer à plusieurs instances demanderait un routage par salon — à faire quand le trafic
  l'exigera, pas avant.
- **Redémarrer le serveur interrompt les parties en cours.** Assumé. Persister l'état en cours
  est une complexité que rien ne justifie tant que les déploiements sont rares.
