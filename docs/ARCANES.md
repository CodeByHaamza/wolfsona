# 🎴 Les Arcanes

Chaque rôle de Wolfsona porte un **Arcane Majeur**. Ce document est la source de vérité :
ce qui est pris, ce qui est libre, et la règle du jeu derrière chaque carte.

> Les noms d'arcanes viennent du tarot historique et sont dans le domaine public.
> Seules leurs illustrations dans *Persona* sont sous licence — voir [ASSETS.md](ASSETS.md).

---

## Les 7 arcanes attribués

### 0 — Le Mat · *Villageois* · Village

Aucun pouvoir. Le Mat est l'arcane du commencement : tout le potentiel, rien d'acquis.
Sa seule arme est sa parole pendant le débat — et c'est le rôle le plus difficile à bien jouer.

### II — La Papesse · *Voyante* · Village

Chaque nuit, découvre le camp d'un joueur. La Papesse est le savoir caché : elle sait, mais
parler la désigne aux loups. Sa vraie difficulté n'est pas de trouver, c'est de faire croire.

### VI — Les Amoureux · *Cupidon* · Village

La première nuit, lie deux joueurs. Ils se découvrent mutuellement et meurent ensemble. Si
l'amour traverse les camps, le couple gagne seul contre tous : c'est la seule victoire
**solitaire** du jeu de base.

### IX — L'Ermite · *Petite Fille* · Village

Peut entrouvrir les yeux pendant le tour des loups et en apercevoir un. L'Ermite observe à
l'écart et paie ce savoir : s'il est repéré, les loups peuvent le dévorer en priorité.

### XIII — La Mort · *Sorcière* · Village

Deux potions, une seule fois chacune dans la partie : l'une annule la mort de la nuit, l'autre
tue. L'arcane de la Mort n'est pas la fin dans le tarot — c'est le **renversement**. Elle est la
seule à pouvoir défaire ce que la nuit a fait.

### XVI — La Tour · *Chasseur* · Village

En mourant, abat immédiatement un joueur de son choix. La Tour, c'est l'effondrement soudain qui
emporte ce qui l'entoure. Le seul rôle dont le pouvoir ne sert qu'une fois mort.

### XVIII — La Lune · *Loup-Garou* · Loups

Chaque nuit, les loups se concertent et dévorent une victime. Ils se connaissent entre eux.
La Lune est l'arcane de l'illusion et du mensonge : rien n'y est ce qu'il paraît.

---

## Ordre de résolution de la nuit

L'ordre est un **nombre**, pas une position dans une liste. Les trous sont volontaires : un rôle
ajouté plus tard s'insère entre deux existants sans rien renuméroter.

| Priorité | Arcane | Action |
|---:|---|---|
| 10 | VI — Les Amoureux | Lie deux joueurs *(première nuit uniquement)* |
| 30 | XVIII — La Lune | Les loups désignent une victime |
| 40 | IX — L'Ermite | Observe le tour des loups |
| 50 | II — La Papesse | Sonde un joueur |
| 70 | XIII — La Mort | Sauve ou tue, en connaissant la victime des loups |

> La Mort agit en dernier : son pouvoir n'a de sens qu'une fois la victime des loups connue.
> La Tour n'apparaît pas ici — elle se déclenche à la mort, pas pendant la nuit.

---

## Les 15 arcanes encore libres

Rien n'est figé. Les pistes ci-dessous sont des amorces, pas des décisions.

| Arcane | Piste |
|---|---|
| I — Le Bateleur | Illusionniste : fait apparaître un joueur sous un faux camp |
| III — L'Impératrice | Protectrice : sauve un joueur chaque nuit, jamais deux fois de suite |
| IV — L'Empereur | Son vote compte double, mais son rôle est public |
| V — Le Pape | Convertit un joueur à son camp, une fois dans la partie |
| VII — Le Chariot | Immunisé à la première attaque qu'il subit |
| VIII — La Justice | Apprend, à la mort d'un joueur, si le village a eu raison |
| X — La Roue de Fortune | Son pouvoir change chaque nuit, tiré au sort |
| XI — La Force | Survit à une attaque de loup, une seule fois |
| XII — Le Pendu | Gagne uniquement s'il est éliminé par le vote du village |
| XIV — Tempérance | Peut annuler un vote du jour |
| XV — Le Diable | Loup solitaire : gagne seul, les loups l'ignorent |
| XVII — L'Étoile | À sa mort, révèle publiquement un rôle de son choix |
| XIX — Le Soleil | Rend un joueur insoupçonnable pendant une journée |
| XX — Le Jugement | Ressuscite un mort, une fois dans la partie |
| XXI — Le Monde | Connaît la composition exacte des rôles en jeu |

### Comment un rôle est retenu

1. **Le lien à l'arcane prime.** Un pouvoir qui ne parle pas à sa carte est refusé, même bon.
2. **Il doit nourrir le débat.** Un rôle qui donne une certitude tue la partie.
3. **Il doit tenir en une phrase.** Un pouvoir qu'on ne peut pas expliquer en une phrase ne sera
   pas compris en jeu.
4. **Il doit dire à quel effectif il casse.** Tout rôle devient absurde à 5 ou à 18 joueurs.

Proposer un rôle → [formulaire dédié](../../../issues/new?template=role_proposal.yml).
