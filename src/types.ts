export type Statut = 'En préparation' | 'En transit' | 'Livré' | 'Incident'

export interface EtapeSuivi {
  date: string // ISO 8601
  lieu: string
  evenement: string
}

export interface Colis {
  numeroSuivi: string // FR suivi de 9 chiffres
  nom: string
  transporteur: string
  statut: Statut
  livraisonEstimee: string | null // ISO 8601, absente si inconnue
  derniereMiseAJour: string // ISO 8601
  historique: EtapeSuivi[]
}
