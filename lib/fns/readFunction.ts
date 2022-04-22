import type { APIGatewayProxyResultV2 } from 'aws-lambda';

import { Notes } from './notesTable';

export const handler = async (): Promise<APIGatewayProxyResultV2> => {
  const notes = await Notes.find({ pk: 'note' }, { limit: 10, reverse: true });
  // Adding the limit and reverse parameters means the query will return the ten most recent notes,
  // automatically sorted by the sort key.
  return { body: JSON.stringify(notes), statusCode: 200 };
};