const formatJour = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short' })
const formatJourHeure = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'short' })

export const afficherJour = (iso: string) => formatJour.format(new Date(iso))
export const afficherJourHeure = (iso: string) => formatJourHeure.format(new Date(iso))
