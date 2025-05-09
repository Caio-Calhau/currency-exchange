export interface DailyRate {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  closeDiffPercentage: number;
}

export interface DailyExchangeResponse {
  data?: DailyRate[];
}
