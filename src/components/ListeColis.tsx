import type { Colis } from '../types'
import { CarteColis } from './CarteColis'

export function ListeColis({ colis, messageVide = 'Aucun colis trouvé.' }: { colis: Colis[]; messageVide?: string }) {
  if (colis.length === 0) {
    return <p className="message-vide">{messageVide}</p>
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
