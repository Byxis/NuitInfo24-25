import axios from 'axios';

export interface GitHubUser {
  name: string | null; // Le nom peut être null si l'utilisateur ne l'a pas défini
  avatar_url: string;
}

export async function GitApi(username: string): Promise<GitHubUser | null> {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const { name, avatar_url } = response.data;

    return { name, avatar_url };
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'utilisateur GitHub: ${error}`);
    return null;
  }
}