<div align="center">

# 🃏 Wolfsona

**Un Loup-Garou en temps réel où chaque rôle est un Arcane Majeur.**

`Temps réel` · `6 à 12 joueurs` · `Sans inscription` · `TypeScript`

[Conception](docs/DESIGN.md) · [Les Arcanes](docs/ARCANES.md) · [Architecture](docs/ARCHITECTURE.md) · [Contribuer](CONTRIBUTING.md)

[![CI](https://github.com/CodeByHaamza/wolfsona/actions/workflows/ci.yml/badge.svg)](https://github.com/CodeByHaamza/wolfsona/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%E2%89%A522-5FA04E.svg)](.nvmrc)

</div>

---

## L'idée

Le Loup-Garou se joue depuis toujours avec une Voyante, une Sorcière, un Chasseur. Wolfsona
garde ces règles — elles sont éprouvées — mais remplace leurs noms par les **Arcanes Majeurs
du tarot**.

Ce n'est pas qu'une couche de peinture. Cupidon lie deux joueurs par l'amour : c'est
**Les Amoureux**. Le Chasseur emporte quelqu'un dans sa chute : c'est **La Tour**. La
correspondance existait déjà, on ne fait que la nommer.

> 🎴 22 arcanes existent. **7 portent un rôle aujourd'hui.** Les 15 autres sont la feuille
> de route — et tout le monde peut en [proposer un](../../issues/new?template=role_proposal.yml).

## Ce que ça donne en jeu

| Arcane | Rôle classique | Camp |
|---|---|---|
| **0 — Le Mat** | Villageois | Village |
| **II — La Papesse** | Voyante | Village |
| **VI — Les Amoureux** | Cupidon | Village |
| **IX — L'Ermite** | Petite Fille | Village |
| **XIII — La Mort** | Sorcière | Village |
| **XVI — La Tour** | Chasseur | Village |
| **XVIII — La Lune** | Loup-Garou | Loups |

Le détail de chaque pouvoir, l'ordre de résolution de la nuit et les arcanes encore libres :
**[docs/ARCANES.md](docs/ARCANES.md)**.

## Les partis pris

- **On rejoint avec un pseudo et un code.** Pas d'inscription. Un jeu de soirée perd un joueur
  à chaque écran de formulaire. Le compte existe, mais il ne sert qu'à garder ses statistiques.
- **Le serveur décide de tout.** Le client ne connaît jamais le rôle des autres : il ne peut pas
  le révéler, même en ouvrant les outils de développement. C'est la seule façon honnête de jouer
  à un jeu d'information cachée dans un navigateur.
- **On peut fermer l'onglet et revenir.** La partie vit sur le serveur. Changer de téléphone en
  pleine nuit ne tue personne.
- **Les rôles sont des données, pas du code.** Ajouter Le Jugement, c'est ajouter une entrée dans
  un registre. Jamais toucher au moteur.
- **Chat intégré, vocal bienvenu.** Le débat écrit permet de jouer entre inconnus ; rien n'empêche
  un groupe de parler sur Discord à côté.

## Démarrer

```bash
git clone https://github.com/CodeByHaamza/wolfsona.git
cd wolfsona
npm install
cp .env.example .env
npm run dev
```

Avant de proposer une PR :

```bash
npm run check   # format + lint + types + tests
```

## Structure

```
wolfsona/
├── packages/
│   ├── shared/   ← les règles du jeu : pur TypeScript, zéro dépendance, zéro réseau
│   ├── server/   ← WebSocket, salons, état autoritaire des parties
│   └── client/   ← l'interface
├── docs/         ← conception, arcanes, architecture, déploiement
└── assets/       ← vide dans le dépôt (voir docs/ASSETS.md)
```

> `shared` ne connaît ni le réseau ni le navigateur. On lui donne un état et une action, il
> renvoie un nouvel état. C'est ce qui rend les règles testables exhaustivement — et c'est là
> que vivent les bugs d'un Loup-Garou.

## Contribuer

Les propositions de rôles sont les bienvenues, et elles ont [leur propre
formulaire](../../issues/new?template=role_proposal.yml). Un rôle n'est pas jugé sur son
originalité mais sur **ce qu'il fait au débat** : un pouvoir qui donne une certitude tue la
partie.

Tout est dans [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence et mentions

Le **code** est sous [licence MIT](LICENSE).

Les **noms des Arcanes Majeurs** viennent du tarot et appartiennent au domaine public.

Les **illustrations d'arcanes** utilisées en production proviennent de *Persona* et appartiennent
à **ATLUS / SEGA**. Elles ne sont pas redistribuées dans ce dépôt — voir [docs/ASSETS.md](docs/ASSETS.md).
Projet de fan, non commercial, sans affiliation avec ATLUS ou SEGA.

<div align="center"><sub>Par <b><a href="https://github.com/CodeByHaamza">Hamza</a></b> · aussi derrière <a href="https://personadle.net">PersonaDLE</a></sub></div>
