/**
 * Calendar days between a past date and now. Used for "Days Past Due" column.
 */
export function daysPastDue(dueDate: Date): number {
  return Math.floor((Date.now() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
}
