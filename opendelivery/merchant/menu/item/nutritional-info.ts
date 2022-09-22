export interface NutritionalInfo {
  /**
   * Nutrition information in free text. For example "Contains preservatives".
   */
  description: string;

  /**
   * string^[0-9]+(\.[0-9]+)? ?(- ?[0-9]+(\.[0-9]+)?)? [a-zA-Z]+$
   * The number of calories in Cal, kcal, or kJ, using the following format: value Cal or min-max Cal
   */
  calories: string;

  /**
   * Allergens of this Item
   */
  allergen?: Allergen[];

  /**
   * Additives of this Item
   */
  additives?: string[];

  /**
   * The dish complies with the described dietary restriction
   */
  suitableDiet?: Diet[];

  /**
   * Indicates if an item is alcoholic.
   */
  isAlcoholic?: boolean;
}

export type Allergen =
  | 'ALMONDS'
  | 'ALPHA_ISOMETHYL_IONONE'
  | 'ALCOHOL'
  | 'AMYL_CINNAMAL'
  | 'ANISE_ALCOHOL'
  | 'BARLEY'
  | 'BENZYL_ALCOHOL'
  | 'BENZYL_BENZOATE'
  | 'BENZYL_CINNAMATE'
  | 'BENZYL_SALICYLATE'
  | 'BRAZIL_NUTS'
  | 'BUTYLPHENYL_METHYLPROPIONATE'
  | 'CARROTS'
  | 'CASHEW_NUTS'
  | 'CELERY'
  | 'CEREALS_CONTAINING_GLUTEN'
  | 'CINNAMAL'
  | 'CINNAMYL_ALCOHOL'
  | 'CITRAL'
  | 'CITRONELLOL'
  | 'COCOA'
  | 'CORIANDER'
  | 'CORN'
  | 'COUMARIN'
  | 'CRUSTACEANS'
  | 'EGGS'
  | 'EUGENOL'
  | 'EVERNIA_FURFURACEA'
  | 'EVERNIA_PRUNASTRI'
  | 'FARNESOL'
  | 'FISH'
  | 'GERANIOL'
  | 'GLUTEN'
  | 'HAZELNUTS'
  | 'HEXYL_CINNAMAL'
  | 'HYDROXYCITRONELLAL'
  | 'KAMUT'
  | 'LACTOSE'
  | 'LUPINE'
  | 'MACADAMIA_NUTS'
  | 'METHYL_2_OCTYNOATE'
  | 'MILK'
  | 'MOLLUSCS'
  | 'MUSTARD'
  | 'NO_DECLARED_ALLERGENS'
  | 'OAT'
  | 'PEANUTS'
  | 'PEAS'
  | 'PECAN_NUTS'
  | 'PISTACHIOS'
  | 'POD_FRUITS'
  | 'QUEENSLAND_NUTS'
  | 'RYE'
  | 'SESAME_SEEDS'
  | 'SOYBEANS'
  | 'SPELT'
  | 'SULPHUR_DIOXIDE'
  | 'TREE_NUTS'
  | 'TREE_NUT_TRACES'
  | 'WALNUTS'
  | 'WHEAT';

export type Diet =
  | 'DIABETIC'
  | 'GLUTEN_FREE'
  | 'HALAL'
  | 'HINDU'
  | 'KOSHER'
  | 'LOW_CALORIE'
  | 'LOW_FAT'
  | 'LOW_LACTOSE'
  | 'LOW_SALT'
  | 'VEGAN'
  | 'VEGETARIAN';
