/**
 * Compares 2 objects and returns true if both are deeply equal.
 *
 * @param o1 object 1
 * @param o2 object 2
 * @returns true if deeply equal.
 */
export function isEqual(o1: object, o2: object): boolean {
  // Was ist hier falsch?
  return JSON.stringify(o1).localeCompare(JSON.stringify(o2)) === 0;
}
