import type { Statut } from '../types'

export type Filtre = Statut | 'Tous'

const FILTRES: Filtre[] = ['Tous', 'En préparation', 'En transit', 'Livré', 'Incident']

interface Props {
  actif: Filtre
  onChoisir: (filtre: Filtre) => void
}

export function FiltreStatut({ actif, onChoisir }: Props) {
  return (
    <div className="filtres" role="group" aria-label="Filtrer par statut">
      {FILTRES.map((f) => (
        <button
          key={f}
          type="button"
          className="filtres__bouton"
          aria-pressed={f === actif}
          onClick={() => onChoisir(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
