# Contribuer à Wolfsona

Merci de passer par ici. Ce document dit comment travailler sur le projet et ce qui fait
qu'une contribution est acceptée.

## Démarrer

```bash
npm install
cp .env.example .env
npm run dev
```

Avant toute PR :

```bash
npm run check   # format + lint + types + tests
```

La CI lance exactement ces commandes. Si ça passe chez toi, ça passe chez elle.

## Les trois règles qui ne se négocient pas

### 1. Le serveur ne révèle jamais une information cachée

Le client ne doit jamais recevoir le rôle d'un autre joueur, ni une action de nuit qui ne le
concerne pas. Afficher ou non est une question d'interface ; **envoyer** est une question de
triche. Tout ce qui arrive au navigateur est lisible par le joueur.

Toute PR qui élargit ce que le serveur envoie doit le justifier explicitement.

### 2. Les règles vivent dans `packages/shared`, et nulle part ailleurs

`shared` est du TypeScript pur : aucune dépendance, aucun réseau, aucun DOM, aucun `Date.now()`
ni `Math.random()` implicite — l'horloge et l'aléatoire sont passés en paramètre.

Une règle écrite dans le serveur est une règle qu'on ne peut pas tester correctement.

### 3. Un rôle est une donnée, pas une branche

Il reste quinze arcanes à ajouter. Si tu écris `if (role === 'PRIESTESS')` dans le moteur,
l'architecture est en train de se perdre. Un rôle = une entrée dans le registre + son
gestionnaire.

## Tests

Le moteur de règles est couvert à 90 % minimum, et la CI le vérifie. Ce n'est pas du zèle :
les bugs d'un Loup-Garou sont des bugs de combinaison, et ils ne se voient qu'en jouant — donc
trop tard.

Les cas qui méritent systématiquement un test :

- Deux rôles qui agissent sur la même cible la même nuit
- Un joueur qui meurt alors qu'il avait une action en attente
- La chaîne La Tour → Les Amoureux (le Chasseur abat un amoureux en mourant)
- Les conditions de victoire au moment exact où le dernier loup meurt

## Proposer un rôle

Il y a [un formulaire dédié](../../issues/new?template=role_proposal.yml). Un rôle est jugé sur :

1. **Son lien à l'arcane.** C'est le critère principal. Un bon pouvoir sur la mauvaise carte est refusé.
2. **Ce qu'il fait au débat.** Un rôle qui donne une certitude tue la discussion, donc le jeu.
3. **Sa clarté.** S'il ne tient pas en une phrase, il ne sera pas compris en jeu.
4. **Ses limites.** À quel effectif devient-il trop fort, ou inutile ?

Les arcanes libres et leurs pistes sont dans [`docs/ARCANES.md`](docs/ARCANES.md).

## Langues

Toute chaîne vue par un joueur passe par l'i18n, en **français et en anglais**. Aucune chaîne
en dur dans l'interface — y compris les messages d'erreur.

## Assets

Ne commite **jamais** d'image sous licence. La CI le refuse automatiquement. Le pourquoi et le
comment sont dans [`docs/ASSETS.md`](docs/ASSETS.md).

## Commits

Convention [Conventional Commits](https://www.conventionalcommits.org/fr/) :

```
feat(roles): ajoute Le Jugement (XX)
fix(night): la Mort pouvait sauver un joueur déjà mort
docs(arcanes): precise l'ordre de resolution
```

## Questions

Ouvre une [discussion](../../discussions). Une question mal posée vaut mieux qu'une PR partie
dans la mauvaise direction.
