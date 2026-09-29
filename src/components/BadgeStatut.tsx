import type { Statut } from '../types'

const classes: Record<Statut, string> = {
  'En préparation': 'badge badge--preparation',
  'En transit': 'badge badge--transit',
  'Livré': 'badge badge--livre',
  'Incident': 'badge badge--incident',
}

const icones: Record<Statut, string> = {
  'En préparation': '○',
  'En transit': '→',
  'Livré': '✓',
  'Incident': '!',
}

export function BadgeStatut({ statut }: { statut: Statut }) {
  return (
    <span className={classes[statut]}>
      <span aria-hidden="true">{icones[statut]}</span> {statut}
    </span>
  )
}
