// Réglages de l'app : thèmes et niveaux. Créé le 05/10/2026.
// Les cartes sont dans cartes.js, fabriqué par construire.py à partir de cartes/*.json.
// Règles : Système/Prompts/App-QR-règles.md
window.QR_CONFIG = {
  niveaux: { 1: "Bases", 2: "Pratique", 3: "Expert" },
  themes: [
    { id: "copy",   tag: "COPY",    nom: "Copywriting et persuasion",     dossier: "Savoir/Copywriting et persuasion" },
    { id: "crea",   tag: "CRÉAS",   nom: "Créatives et itérations",       dossier: "Savoir/Créatives et itérations" },
    { id: "meta",   tag: "ADS",     nom: "Publicité Meta et acquisition", dossier: "Savoir/Publicité Meta et acquisition" },
    { id: "kpi",    tag: "KPI",     nom: "KPI (Karima, Nico, Marc)",      dossier: "Méthode KPI de Karima, Nico et Marc" },
    { id: "cro",    tag: "CRO",     nom: "E-commerce et CRO",             dossier: "Savoir/E-commerce et CRO" },
    { id: "livres", tag: "LIVRES",  nom: "Grands copywriters (livres)",   dossier: "Savoir/Livres" },
    { id: "lex",    tag: "LEXIQUE", nom: "Lexiques",                      dossier: "Savoir/Lexiques" },
    { id: "ia",     tag: "IA",      nom: "Méthode IA",                    dossier: "Savoir/Méthode IA" }
  ]
};
