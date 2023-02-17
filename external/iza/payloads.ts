export interface IzaApiPerson {
  doc: string;
  name: string;
  birthed_at: string; // '1970-02-01'
  email?: string;
  main_cell_phone?: string;
}

export interface IzaApiContract {
  doc: string;
}

export interface IzaApiPeriod {
  started_at?: string;
  finished_at?: string;
}

export interface IzaApiCreatePeriodResult {
  id: string;
}

export interface IzaApiGeolocation {
  doc: string;
  datetime: string; // horário de Brasília
  lat: string; //  6 casas decimais.
  long: string; //  6 casas decimais.
}
