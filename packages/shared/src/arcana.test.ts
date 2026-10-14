import { describe, expect, it } from 'vitest';
import { ARCANA } from './arcana.js';

describe('ARCANA', () => {
  it('contient les 22 Arcanes Majeurs', () => {
    expect(Object.keys(ARCANA)).toHaveLength(22);
  });

  it("n'attribue jamais deux fois le même chiffre romain", () => {
    const numerals = Object.values(ARCANA).map((a) => a.numeral);
    expect(new Set(numerals).size).toBe(numerals.length);
  });

  it('fournit un nom dans les deux langues pour chaque arcane', () => {
    for (const [id, arcana] of Object.entries(ARCANA)) {
      expect(arcana.fr, `${id} sans nom FR`).not.toBe('');
      expect(arcana.en, `${id} sans nom EN`).not.toBe('');
    }
  });
});
