export interface Cuisine {
  name: string;
  imagePath: string;
  order?: number;
  enabled?: boolean;
}

export interface CuisineMeta {
  cuisinesSummary: { [k: string]: number };
}
