import type { Statut } from '../types'

const classes: Record<Statut, string> = {
  'En préparation': 'badge badge--preparation',
  'En transit': 'badge badge--transit',
  'Livré': 'badge badge--livre',
  'Incident': 'badge badge--incident',
}

export function BadgeStatut({ statut }: { statut: Statut }) {
  return <span className={classes[statut]}>{statut}</span>
}
