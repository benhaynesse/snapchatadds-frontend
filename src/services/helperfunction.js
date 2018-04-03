/**
 * Generate a random Integer between two values
 * @constructor
 * @param {int} min - The minimum valie
 * @param {int} max - The maximum value
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}