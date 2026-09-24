import type { Colis } from '../types'

/** Normalise une saisie : espaces retirés (« FR 123 » -> « FR123 »). */
export function normaliserNumero(saisie: string): string {
  return saisie.replace(/\s+/g, '')
}

/** Colis dont le numéro de suivi contient la saisie. Saisie vide : tous les colis. */
export function rechercherColis(colis: Colis[], saisie: string): Colis[] {
  const requete = normaliserNumero(saisie)
  if (requete === '') return colis
  return colis.filter((c) => c.numeroSuivi.includes(requete))
}
