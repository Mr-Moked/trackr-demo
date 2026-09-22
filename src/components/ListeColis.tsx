import type { Colis } from '../types'
import { CarteColis } from './CarteColis'

export function ListeColis({ colis }: { colis: Colis[] }) {
  if (colis.length === 0) {
    return <p className="message-vide">Aucun colis trouvé.</p>
  }
  return (
    <ul className="liste">
      {colis.map((c) => (
        <li key={c.numeroSuivi}>
          <CarteColis colis={c} />
        </li>
      ))}
    </ul>
  )
}
