import { PaginationAO } from './pagination.ao';

export class CollectionAO<T> {
  items: T[];

  readonly pagination: PaginationAO;
}

export class ManyAndCountAO<T> {
  items: T[];

  totalCount: number;
}
