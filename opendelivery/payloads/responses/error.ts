export interface DefaultErrorResponse {
  /**
   * Short description of the problem.
   */
  title: string;

  /**
   * HTTP code of the returned status.
   */
  status: number;
}
