export class ClaimFreeShareResultDto {
  // Letting our frontend know our prize
  tickerSymbol: string;

  // Our interface probably also wants to know the price to congratulate the user
  sharePrice: number;
  pricesRange: [number, number];
}