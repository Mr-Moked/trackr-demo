import type { Colis } from '../types'

// Données de démonstration (fictives), identiques au document TP1_02 Ressources.
export const colisDemo: Colis[] = [
  {
    numeroSuivi: 'FR123456789',
    nom: 'Casque audio',
    transporteur: 'Colissimo',
    statut: 'En transit',
    livraisonEstimee: '2026-10-03',
    derniereMiseAJour: '2026-10-01T08:14:00',
    historique: [
      { date: '2026-09-29T16:20:00', lieu: 'Lyon', evenement: 'Pris en charge' },
      { date: '2026-10-01T08:14:00', lieu: 'Chilly-Mazarin', evenement: 'Arrivé au centre de tri' },
    ],
  },
  {
    numeroSuivi: 'FR204518733',
    nom: 'Livres (x3)',
    transporteur: 'Chronopost',
    statut: 'Livré',
    livraisonEstimee: '2026-09-29',
    derniereMiseAJour: '2026-09-29T11:02:00',
    historique: [
      { date: '2026-09-27T10:05:00', lieu: 'Paris', evenement: 'Pris en charge' },
      { date: '2026-09-29T11:02:00', lieu: 'Serris', evenement: 'Livré' },
    ],
  },
  {
    numeroSuivi: 'FR318842210',
    nom: 'Coque de téléphone',
    transporteur: 'Mondial Relay',
    statut: 'En préparation',
    livraisonEstimee: null,
    derniereMiseAJour: '2026-09-30T17:45:00',
    historique: [
      { date: '2026-09-30T17:45:00', lieu: 'Serris', evenement: 'Commande préparée par le vendeur' },
    ],
  },
  {
    numeroSuivi: 'FR407719564',
    nom: 'Chaussures de course',
    transporteur: 'Colissimo',
    statut: 'Incident',
    livraisonEstimee: '2026-10-02',
    derniereMiseAJour: '2026-10-01T06:30:00',
    historique: [
      { date: '2026-09-30T09:00:00', lieu: 'Lille', evenement: 'Pris en charge' },
      { date: '2026-10-01T06:30:00', lieu: 'Bussy-Saint-Georges', evenement: 'Adresse incomplète' },
    ],
  },
  {
    numeroSuivi: 'FR550193287',
    nom: 'Clavier mécanique',
    transporteur: 'DPD',
    statut: 'En transit',
    livraisonEstimee: '2026-10-04',
    derniereMiseAJour: '2026-09-30T22:10:00',
    historique: [
      { date: '2026-09-30T14:40:00', lieu: 'Strasbourg', evenement: 'Pris en charge' },
      { date: '2026-09-30T22:10:00', lieu: 'Reims', evenement: 'En cours d\u2019acheminement' },
    ],
  },
  {
    numeroSuivi: 'FR661230045',
    nom: 'Plante verte',
    transporteur: 'Chronopost',
    statut: 'Livré',
    livraisonEstimee: '2026-09-28',
    derniereMiseAJour: '2026-09-28T15:37:00',
    historique: [
      { date: '2026-09-26T08:30:00', lieu: 'Nantes', evenement: 'Pris en charge' },
      { date: '2026-09-28T15:37:00', lieu: 'Chessy', evenement: 'Livré' },
    ],
  },
]
