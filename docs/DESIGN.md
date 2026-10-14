# 📐 Conception — Wolfsona

> Issu de la session de cadrage du 15/10/2026. Ce document fige les décisions et **les
> raisons** qui les ont motivées. Il n'est pas un plan d'implémentation.

---

## 1. Ce qu'on construit

Un **Loup-Garou jouable dans le navigateur, en temps réel, à 6-12 joueurs**, dont les rôles
sont nommés d'après les Arcanes Majeurs du tarot.

**Public visé :** tout le monde — c'est un produit public, pas un outil privé. Un joueur
doit pouvoir arriver par un lien et jouer en moins de trente secondes.

**Critère de réussite v1 :** une partie à 7 joueurs se déroule du début à la fin, avec un
débat vivant, sans qu'une déconnexion ne la ruine et sans qu'un joueur puisse tricher en
ouvrant les outils de développement.

---

## 2. Décisions actées

| Sujet | Décision | Pourquoi |
|---|---|---|
| Plateforme | Application web | L'ambiance visuelle est le point fort du projet |
| Rythme | Temps réel | C'est l'expérience Loup-Garou ; l'asynchrone est un autre jeu |
| Identité | Pseudo + code de partie, compte optionnel | Chaque formulaire coûte des joueurs |
| Rôles | Les 7 classiques, nommés par arcane | Règles éprouvées, équilibrage connu |
| Extension | Les 15 arcanes restants | Le jeu grandit sans se réinventer |
| Langues | FR + EN dès le départ | L'i18n ne se rétrofitte pas sans douleur |
| Débat | Chat intégré, vocal externe toléré | Le chat permet de jouer entre inconnus |
| Langage | TypeScript partout | Une machine à états à 7 rôles est un nid à bugs |
| Hébergement | VPS | WebSockets : un process Node permanent est requis |
| Déconnexion | Reconnexion complète | C'est un choix d'architecture, pas une option |

### Les deux décisions qui engagent le plus

**Le serveur est autoritaire, sans exception.** Le client n'apprend jamais le rôle d'un autre
joueur : le serveur lui envoie uniquement ce que son personnage a le droit de savoir. C'est
non négociable pour un jeu d'information cachée dans un navigateur — tout ce qui atteint le
client est lisible par le joueur. Cette décision rend aussi la reconnexion gratuite : l'état
vit déjà côté serveur.

**Les rôles sont déclaratifs.** Un rôle est un objet de données (arcane, camp, priorité
nocturne, effectif maximal). Le moteur ne contient aucun `if (role === 'PRIESTESS')`. Sans
cette règle, chaque arcane ajouté alourdirait le moteur — et il en reste quinze.

---

## 3. Architecture retenue

Trois paquets, une seule dépendance entre eux :

```
shared  ←  server
   ↑
 client
```

### `shared` — les règles

TypeScript pur. **Aucune dépendance, aucun réseau, aucun DOM.** On lui donne un état de partie
et une action, il renvoie un nouvel état. C'est une fonction, pas un service.

Cette contrainte est ce qui rend le jeu testable : toutes les situations tordues du Loup-Garou
(la Sorcière sauve la victime que le Chasseur venait de désigner, les Amoureux meurent
ensemble en déclenchant La Tour) s'écrivent comme des tests unitaires, sans serveur ni
navigateur.

### `server` — l'autorité

Détient les parties en mémoire, applique les actions via `shared`, et envoie à chaque joueur
**une vue filtrée** de l'état. Gère les salons, les connexions WebSocket et les minuteurs de
phase.

### `client` — l'interface

Affiche ce que le serveur envoie. Ne calcule aucune règle : s'il devait en calculer une, il
aurait besoin d'informations qu'il ne doit pas posséder.

### Ce qui est persisté

Une partie **en cours** vit en mémoire. La base de données ne sert qu'aux comptes optionnels,
à l'historique et aux statistiques. Perdre la base n'interrompt aucune partie ; redémarrer le
serveur les interrompt toutes — c'est assumé en v1.

---

## 4. Ce qui n'est pas dans la v1

Écarté volontairement, pour que la v1 existe :

- **Le vocal.** Discord le fait mieux. Rien n'empêche d'y jouer en parlant à côté.
- **Le classement et les récompenses.** Avant d'avoir des parties, ils ne mesurent rien.
- **Les parties privées avec règles personnalisées.** Après avoir validé la configuration par défaut.
- **Le mobile natif.** Le web responsive suffit.
- **La modération automatique du chat.** Signalement manuel d'abord ; l'automatiser trop tôt
  coûte cher et rate sa cible.

---

## 5. Risques identifiés

| Risque | Pourquoi c'est sérieux | Parade |
|---|---|---|
| Triche par le client | Un jeu d'information cachée dans un navigateur | Serveur autoritaire, vues filtrées, dès le premier jour |
| Un joueur qui part en pleine partie | Arrivera à presque chaque partie | Reconnexion complète + remplacement du vote par un blanc |
| Le chat tue le rythme | Débattre en tapant est lent | Minuteurs de phase courts, testés sur de vraies parties |
| L'équilibrage à 6 vs 12 joueurs | Les rôles ne tiennent pas aux deux extrêmes | Compositions prédéfinies par effectif, pas de choix libre en v1 |
| Les assets ATLUS | Le dépôt est public | Assets hors dépôt, repli typographique fonctionnel |

---

## 6. Suite

Ce document décrit **quoi** et **pourquoi**. Le **comment** — découpage en étapes, ordre
d'implémentation, tests à écrire — relève d'un plan d'implémentation distinct, à rédiger
avant la première ligne du moteur.
