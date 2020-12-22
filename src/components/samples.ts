import { SelectableValue } from '@grafana/data';
import { QueryType } from 'types';

export const queryTypes: Array<SelectableValue<QueryType>> = [
  // {
  //   label: 'Builder',
  //   value: QueryType.Builder,
  //   description: 'Limited features, but simple query types',
  // },
  {
    label: 'Samples',
    value: QueryType.Samples,
    description: 'Example query structures',
  },
  {
    label: 'Raw Query',
    value: QueryType.Raw,
    description: 'Directly edit your query',
  },
];

export const sampleQueries: Array<SelectableValue<string>> = [
  {
    label: 'Show databases',
    value: 'SHOW DATABASES',
    description: 'List databases available in your instance',
  },
  {
    label: 'Show tables',
    value: 'SHOW TABLES FROM $__database',
    description: 'List tables in the selected database',
  },
  {
    label: 'Describe table',
    value: 'DESCRIBE $__database.$__table',
    description: 'Describe the selected table',
  },
  {
    label: 'Show measurements',
    value: 'SHOW MEASURES FROM $__database.$__table',
    description: 'List measurements in the selected table',
  },
  {
    label: 'First 10 rows',
    value: 'SELECT * FROM $__database.$__table LIMIT 10',
    description: 'Select the first 10 rows of the selected table',
  },
];
