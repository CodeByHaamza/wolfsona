import type { ArcanaId } from './arcana.js';

/** À quelle victoire un rôle travaille. */
export type Camp = 'village' | 'wolves' | 'solo';

/**
 * Quand un rôle agit pendant la nuit.
 *
 * L'ordre de résolution est un NOMBRE et non une position dans un tableau :
 * un rôle ajouté plus tard s'insère entre deux existants sans rien renuméroter.
 * Laisser des trous (10, 20, 30…) est délibéré.
 */
export type NightPriority = number;

/**
 * Définition déclarative d'un rôle.
 *
 * Ajouter un arcane ne doit JAMAIS demander de modifier le moteur : on ajoute une
 * entrée au registre et le gestionnaire de son action. Toute logique de règle écrite
 * sous forme de `if (role === 'SEER')` dans le moteur est un bug de conception.
 */
export interface RoleDefinition {
  readonly id: string;
  readonly arcana: ArcanaId;
  readonly camp: Camp;
  /** Combien d'exemplaires au maximum dans une partie. `null` = illimité. */
  readonly maxCount: number | null;
  /** Absent si le rôle n'agit pas la nuit (ex. le Villageois). */
  readonly nightPriority?: NightPriority;
  /** Les loups se reconnaissent entre eux ; la plupart des rôles non. */
  readonly knowsAllies: boolean;
  /** Clé i18n de la description montrée au joueur. */
  readonly i18nKey: string;
}
