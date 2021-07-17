import { Officer } from '../../lib/types';

/**
 * A dummy list of events.
 */
const OFFICERS_MAP: { [key: string]: Officer } = {
  'Kumail Bukhari': {
    name: 'Kumail Bukhari',
    title: 'Technology Director',
    dateJoined: new Date('2021-05-21').toISOString(),
  },
};

const ALL_OFFICERS = Object.values(OFFICERS_MAP);

/**
 * Fetch event information.
 *
 * @param officerId The unique identifier for the event
 */
export function getOfficer(officerId: string, fields?: string[]): Officer {
  // TODO: Return actual event info
  return ALL_OFFICERS[officerId];
}

/**
 * Return all past and upcoming events.
 */
export function getAllOfficers(fields?: string[]): Officer[] {
  return ALL_OFFICERS;
}