import _ from "lodash";

// Unused export
export const SOMETHING = _.noop;

// Importing this doesn't bring in lodash
export type Count = {
  count: number;
};

/**
 * If this is imported, lodash will be bundled into the client bundle.
 * (even though it's not used in the client)
 */
export const INITIAL_COUNT = 0;
