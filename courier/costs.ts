import { Timestamp } from '../external/firebase';

export interface CourierCosts {
  ordersPerDay: number;
  hoursPerDay: number;
  daysPerWeek: number;
  distanceFromHome: number;
  distanceToOrigin: number;
  distanceToDestination: number;
  foodPerDay: number;
  carrierPerMonth: number;
  insurancePerMonth: number;
  vehicle: 'motorcycle' | 'bike' | 'electric';
  kmWithLiter: number;
  gasPrice: number;
  taxesPerYear: number;
  maintenancePerYear: number;
  vehicleInsurancePerYear: number;
  numberOfWithdrawsPerMonth: number;
  withdrawCosts: number;
  revenuePerOrder: number;
  mei: boolean;
  otherCostsPerDay: number;
  otherCostsPerYear: number;
  email: string;
  updatedAt: Timestamp;
}
