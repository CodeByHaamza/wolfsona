/**
 * Les 22 Arcanes Majeurs du tarot.
 *
 * Ce sont des noms de tarot historique (domaine public), pas une création ATLUS :
 * seules les *illustrations* de Persona sont sous licence. Voir docs/ASSETS.md.
 *
 * Chaque rôle du jeu porte un arcane. Tous les arcanes n'ont pas encore de rôle —
 * les 15 restants sont la réserve d'extension (voir docs/ARCANES.md).
 */
export const ARCANA = {
  FOOL: { numeral: '0', fr: 'Le Mat', en: 'The Fool' },
  MAGICIAN: { numeral: 'I', fr: 'Le Bateleur', en: 'The Magician' },
  PRIESTESS: { numeral: 'II', fr: 'La Papesse', en: 'The Priestess' },
  EMPRESS: { numeral: 'III', fr: "L'Impératrice", en: 'The Empress' },
  EMPEROR: { numeral: 'IV', fr: "L'Empereur", en: 'The Emperor' },
  HIEROPHANT: { numeral: 'V', fr: 'Le Pape', en: 'The Hierophant' },
  LOVERS: { numeral: 'VI', fr: 'Les Amoureux', en: 'The Lovers' },
  CHARIOT: { numeral: 'VII', fr: 'Le Chariot', en: 'The Chariot' },
  JUSTICE: { numeral: 'VIII', fr: 'La Justice', en: 'Justice' },
  HERMIT: { numeral: 'IX', fr: "L'Ermite", en: 'The Hermit' },
  FORTUNE: { numeral: 'X', fr: 'La Roue de Fortune', en: 'Wheel of Fortune' },
  STRENGTH: { numeral: 'XI', fr: 'La Force', en: 'Strength' },
  HANGED_MAN: { numeral: 'XII', fr: 'Le Pendu', en: 'The Hanged Man' },
  DEATH: { numeral: 'XIII', fr: 'La Mort', en: 'Death' },
  TEMPERANCE: { numeral: 'XIV', fr: 'Tempérance', en: 'Temperance' },
  DEVIL: { numeral: 'XV', fr: 'Le Diable', en: 'The Devil' },
  TOWER: { numeral: 'XVI', fr: 'La Tour', en: 'The Tower' },
  STAR: { numeral: 'XVII', fr: "L'Étoile", en: 'The Star' },
  MOON: { numeral: 'XVIII', fr: 'La Lune', en: 'The Moon' },
  SUN: { numeral: 'XIX', fr: 'Le Soleil', en: 'The Sun' },
  JUDGEMENT: { numeral: 'XX', fr: 'Le Jugement', en: 'Judgement' },
  WORLD: { numeral: 'XXI', fr: 'Le Monde', en: 'The World' },
} as const satisfies Record<string, { numeral: string; fr: string; en: string }>;

export type ArcanaId = keyof typeof ARCANA;
