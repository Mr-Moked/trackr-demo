import { colisDemo } from './data/colis'
import { ListeColis } from './components/ListeColis'

export default function App() {
  return (
    <div className="page">
      <header className="page__entete">
        <h1>Trackr</h1>
        <p>Tous vos colis, au même endroit.</p>
      </header>
      <main>
        <ListeColis colis={colisDemo} />
      </main>
    </div>
  )
}
