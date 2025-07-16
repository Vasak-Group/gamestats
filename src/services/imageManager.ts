import { ServerGame } from '../enums/games';

/**
 * Obtiene la URL de la imagen correspondiente a un juego
 * @param game - El juego del enum ServerGame
 * @returns La URL de la imagen del juego
 */
export function getGameImage(game: ServerGame): string {
  // Obtener la clave del enum (el valor antes del =)
  const gameKey = Object.keys(ServerGame).find(key => ServerGame[key as keyof typeof ServerGame] === game);
  
  if (!gameKey) {
    throw new Error(`No se encontró la clave para el juego: ${game}`);
  }
  
  // Construir la ruta de la imagen
  return new URL(`../assets/games/${gameKey}.webp`, import.meta.url).href;
}

/**
 * Obtiene la URL de la imagen usando directamente la clave del juego
 * @param gameKey - La clave del juego (ej: 'csgo', 'minecraft', etc.)
 * @returns La URL de la imagen del juego
 */
export function getGameImageByKey(gameKey: keyof typeof ServerGame): string {
  return new URL(`../assets/games/${gameKey}.webp`, import.meta.url).href;
}