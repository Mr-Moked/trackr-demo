import { useState } from 'react'
import { colisDemo } from './data/colis'
import { rechercherColis } from './utils/recherche'
import { BarreRecherche } from './components/BarreRecherche'
import { ListeColis } from './components/ListeColis'
import { FiltreStatut, type Filtre } from './components/FiltreStatut'

export default function App() {
  const [saisie, setSaisie] = useState('')
  const [filtre, setFiltre] = useState<Filtre>('Tous')
  const trouves = rechercherColis(colisDemo, saisie)
  const resultats = filtre === 'Tous' ? trouves : trouves.filter((c) => c.statut === filtre)
  console.log('resultats', resultats)

  return (
    <div className="page">
      <header className="page__entete">
        <h1>Trackr</h1>
        <p>Tous vos colis au même endroit !</p>
      </header>
      <main>
        <BarreRecherche onRechercher={setSaisie} />
        <FiltreStatut actif={filtre} onChoisir={setFiltre} />
        <p className="compteur" role="status">
          {resultats.length} colis affiché{resultats.length > 1 ? 's' : ''}
        </p>
        <ListeColis
          colis={resultats}
          messageVide={filtre === 'Tous' ? 'Aucun colis trouvé.' : 'Aucun colis pour ce statut.'}
        />
      </main>
    </div>
  )
}
