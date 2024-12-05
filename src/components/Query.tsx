import { Pool } from 'pg';

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'masse-et-nous_public',
  host: 'https://phppgadmin.alwaysdata.com/',         // Adresse du serveur
  database: 'masse-et-nous_quiz',     // Nom de votre base de données
  password: 'public2024',     // Mot de passe
  port: 5432,                // Port PostgreSQL
});

// Fonction pour exécuter une requête
export const Query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } catch (error) {
    console.error('Erreur lors de l’exécution de la requête', error);
    throw error;
  } finally {
    client.release();
  }
};