import { Timestamp } from '../external/firebase';

export interface CourierCosts {
  // deliveires
  ordersPerDay: number;
  hoursPerDay: number;
  daysPerWeek: number;
  revenuePerOrder: number;
  // distance
  distanceFromHome: number;
  distanceToOrigin: number;
  distanceToDestination: number;
  // vehicle
  vehicle: 'motorcycle' | 'bike' | 'electric';
  kmWithLiter: number;
  gasPrice: number;
  vehicleInsurancePerYear: number;
  taxesPerYear: number;
  maintenancePerYear: number;
  // costs
  withdrawCosts: number;
  carrierPerMonth: number;
  foodPerDay: number;
  insurancePerMonth: number;
  otherCostsPerDay: number;
  otherCostsPerYear: number;
  // meta
  updatedAt: Timestamp;
  // processing
  processing?: {
    dailyCosts: number;
    monthlyCosts: number;
    yearlyCosts: number;
    dailyCostsPerOrder: number;
    monthlyCostsPerOrder: number;
    yearlyCostsPerOrder: number;
    costsPerOrder: number;
    orderGasCost: number;
    orderRevenue: number;
    hourRevenue: number;
    minimumWageComparison: number;
    livingWageComparison: number;
  };
}
