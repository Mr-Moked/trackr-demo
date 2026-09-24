import { useState, type FormEvent } from 'react'

interface Props {
  onRechercher: (saisie: string) => void
}

export function BarreRecherche({ onRechercher }: Props) {
  const [saisie, setSaisie] = useState('')

  function soumettre(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onRechercher(saisie)
  }

  return (
    <form className="recherche" role="search" onSubmit={soumettre}>
      <label htmlFor="recherche-colis">Rechercher un colis</label>
      <div className="recherche__ligne">
        <input
          id="recherche-colis"
          type="search"
          placeholder="Ex. FR123456789"
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </div>
    </form>
  )
}
