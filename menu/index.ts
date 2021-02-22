export interface Ordering {
  firstLevelIds: string[];
  secondLevelIdsByFirstLevelId: {
    [firstLevelId: string]: string[];
  };
}
