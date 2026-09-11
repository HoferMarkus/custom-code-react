import { CustomControl, Panel } from '@combeenation/custom-code-sdk';
import { ValueComponent } from '@combeenation/custom-code-sdk';
import { z } from 'zod';

/**
* TYPES
*/
export type QuoteRule = QuoteLockRule | QuoteMinMaxRule | QuoteAllowedTextsRule | QuoteAllowedNumbersRule;
export type QuoteLockRule = {
  type?: string;
  locked?: boolean;
};
export type QuoteMinMaxRule = {
  type?: string;
  min: number;
  max: number;
};
export type QuoteAllowedTextsRule = {
  type?: string;
  displayNames?: string[];
  texts: string[];
};
export type QuoteAllowedNumbersRule = {
  type?: string;
  displayNames?: string[];
  numbers: number[];
};
export type QuoteItem = QuoteLineItem | QuoteSection | QuoteDiscount | QuoteMarkup;
export type PriceAdjustmentType = 'Percent' | 'Absolute';
export type QuoteLineItemDiscount = {
  value?: number;
  type?: PriceAdjustmentType;
  valueType?: PriceAdjustmentType;
};
export type QuoteLineItemDiscountRuleSet = {
  value?: QuoteRule;
  type?: QuoteRule;
  valueType?: QuoteRule;
};
export type QuoteLineItemRuleSet = {
  name?: QuoteRule;
  sku?: QuoteRule;
  description?: QuoteRule;
  quantity?: QuoteRule;
  unit?: QuoteRule;
  priceNet?: QuoteRule;
  tax?: QuoteRule;
  discount?: QuoteLineItemDiscountRuleSet;
  isOptional?: QuoteRule;
  contributionMarginRatio?: QuoteRule;
};
export type QuoteItemActionRuleSet = {
  delete?: QuoteRule;
};
export type QuoteSectionRuleSet = {
  name?: QuoteRule;
};
export type QuoteSection = {
  type?: string;
  id?: string;
  name: string;
  rules?: QuoteSectionRuleSet;
};
export type PriceCalculationMethod = 'Additive' | 'Cumulative';
export type QuoteDiscountRuleSet = {
  name?: QuoteRule;
  value?: QuoteRule;
  valueType?: QuoteRule;
  calculationMethod?: QuoteRule;
};
export type QuoteDiscount = {
  type?: string;
  id?: string;
  name: string;
  value: number;
  valueType?: PriceAdjustmentType;
  calculationMethod?: PriceCalculationMethod;
  rules?: QuoteDiscountRuleSet;
  actionRules?: QuoteItemActionRuleSet;
};
export type QuoteMarkupRuleSet = {
  name?: QuoteRule;
  value?: QuoteRule;
  valueType?: QuoteRule;
};
export type QuoteMarkup = {
  type?: string;
  id?: string;
  name: string;
  value: number;
  valueType?: PriceAdjustmentType;
  rules?: QuoteMarkupRuleSet;
  actionRules?: QuoteItemActionRuleSet;
};
export type QuoteLineItemCustomFields = {
  image2?: boolean;
  image?: number;
};
export type QuoteLineItemRuleSetCustomFields = {
  image2?: QuoteRule;
  image?: QuoteRule;
};
export type QuoteLineItem = {
  type?: string;
  id?: string;
  name: string;
  sku?: string;
  description?: string;
  quantity: number;
  unit: string;
  priceNet: number;
  variableCostNet?: number;
  tax: number;
  discount?: QuoteLineItemDiscount;
  contributionMarginRatioThreshold?: number;
  isOptional?: boolean;
  imageUrl?: string;
  rules?: QuoteLineItemRuleSet;
  actionRules?: QuoteItemActionRuleSet;
  fields?: QuoteLineItemCustomFields;
  fieldRules?: QuoteLineItemRuleSetCustomFields;
};
export type QuoteAdjustmentRuleSet = {
  name?: QuoteRule;
  value?: QuoteRule;
  type?: QuoteRule;
};
export type QuoteAdjustment = {
  id?: string;
  name: string;
  value: number;
  type?: PriceAdjustmentType;
  rules?: QuoteAdjustmentRuleSet;
  actionRules?: QuoteItemActionRuleSet;
};
export type Currency = 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
export type QuoteTaxRule = 'RevealSalesTax' | 'DomesticTaxFreeDelivery' | 'NonDomesticTaxDelivery' | 'ReverseCharge';
export type QuoteCustomer = {
  firstName: string;
  lastName: string;
  companyName: string;
  addressLine1?: string;
  addressLine2?: string;
  city: string;
  street: string;
  postalCode: string;
  country: string;
  emailAddress: string;
  phoneNumber: string;
};
export type QuoteBankDetails = {
  accountHolderName?: string;
  accountNumber?: string;
  bankName?: string;
  swift?: string;
  bic?: string;
  iban?: string;
};
export type QuoteCompany = {
  name: string;
  addressLine1?: string;
  addressLine2?: string;
  city: string;
  street: string;
  postalCode: string;
  country: string;
  emailAddress: string;
  phoneNumber: string;
  imageUrl: string;
  taxId: string;
  bankDetails?: QuoteBankDetails;
};
export type QuoteCustomerRuleSet = {
  firstName?: QuoteRule;
  lastName?: QuoteRule;
  companyName?: QuoteRule;
  addressLine1?: QuoteRule;
  addressLine2?: QuoteRule;
  city?: QuoteRule;
  street?: QuoteRule;
  postalCode?: QuoteRule;
  country?: QuoteRule;
  emailAddress?: QuoteRule;
  phoneNumber?: QuoteRule;
};
export type QuoteRuleSet = {
  subject?: QuoteRule;
  projectId?: QuoteRule;
  taxRule?: QuoteRule;
  globalTax?: QuoteRule;
  paymentDueDays?: QuoteRule;
  offerValidityDays?: QuoteRule;
  notes?: QuoteRule;
  customer?: QuoteCustomerRuleSet;
  quoteDate?: QuoteRule;
};
export type QuoteActionRuleSet = {
  addItem?: QuoteRule;
  addTotalDiscount?: QuoteRule;
  addTotalMarkup?: QuoteRule;
};
export type QuoteTemplate = {
  items?: QuoteItem[];
};
export type QuoteCustomFields = {
  Lieferbedingungen?: string;
  Angebot?: string;
};
export type QuoteRuleSetCustomFields = {
  Lieferbedingungen?: QuoteRule;
  Angebot?: QuoteRule;
};
export type Quote = {
  quoteHubName: string;
  assetBundleName?: string;
  widgetAssetPath?: string;
  pdfAssetPath?: string;
  assignee: string[];
  subject: string;
  projectId: string;
  currency: Currency;
  taxRule?: QuoteTaxRule;
  globalTax?: number;
  paymentDueDays?: number;
  offerValidityDays?: number;
  notes?: string;
  contributionMarginRatioThreshold?: number;
  customer: QuoteCustomer;
  company: QuoteCompany;
  shipping?: QuoteCustomer;
  items: QuoteItem[];
  discounts?: QuoteAdjustment[];
  markups?: QuoteAdjustment[];
  rules?: QuoteRuleSet;
  actionRules?: QuoteActionRuleSet;
  templates?: QuoteTemplate[];
  fields?: QuoteCustomFields;
  fieldRules?: QuoteRuleSetCustomFields;
};
export type TenantCustomFields = {
  Discount?: string;
  F6?: number;
};
export type Tenant = {
  Name: string;
  DisplayName: string;
  Logo: string;
  Fields?: TenantCustomFields;
};
export type UserCustomFields = {
  F4?: string;
  Discount?: number;
  DiscountString?: string;
  F5?: number[];
};
export type User = {
  Id: string;
  FirstName: string;
  LastName: string;
  Mail: string;
  Distributor: string;
  Avatar: string;
  Fields?: UserCustomFields;
};

/**
* ZOD OBJECTS
*/
const $Type_QuoteRuleBase = z.object({}).describe('{ "elementity" : true }');
const $Type_QuoteLockRule: z.ZodType<QuoteLockRule> = $Type_QuoteRuleBase.extend({type: z.string().optional(), locked: z.boolean().optional()}).describe('{ "elementity" : true }');
const $Type_QuoteMinMaxRule: z.ZodType<QuoteMinMaxRule> = $Type_QuoteRuleBase.extend({type: z.string().optional(), min: z.number(), max: z.number()}).describe('{ "elementity" : true }');
const $Type_QuoteAllowedTextsRule: z.ZodType<QuoteAllowedTextsRule> = $Type_QuoteRuleBase.extend({type: z.string().optional(), displayNames: z.string().array().optional(), texts: z.string().array()}).describe('{ "elementity" : true }');
const $Type_QuoteAllowedNumbersRule: z.ZodType<QuoteAllowedNumbersRule> = $Type_QuoteRuleBase.extend({type: z.string().optional(), displayNames: z.string().array().optional(), numbers: z.number().array()}).describe('{ "elementity" : true }');
const $Type_QuoteRule: z.ZodType<QuoteRule> = z.union([$Type_QuoteLockRule, $Type_QuoteMinMaxRule, $Type_QuoteAllowedTextsRule, $Type_QuoteAllowedNumbersRule]);
const $Type_QuoteItemBase = z.object({}).describe('{ "elementity" : true }');
const $Type_PriceAdjustmentType: z.ZodType<PriceAdjustmentType> = z.enum(['Percent', 'Absolute']);
const $Type_QuoteLineItemDiscount: z.ZodType<QuoteLineItemDiscount> = z.object({value: z.number().optional(), type: $Type_PriceAdjustmentType.optional(), valueType: $Type_PriceAdjustmentType.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteLineItemDiscountRuleSet: z.ZodType<QuoteLineItemDiscountRuleSet> = z.object({value: $Type_QuoteRule.optional(), type: $Type_QuoteRule.optional(), valueType: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteLineItemRuleSet: z.ZodType<QuoteLineItemRuleSet> = z.object({name: $Type_QuoteRule.optional(), sku: $Type_QuoteRule.optional(), description: $Type_QuoteRule.optional(), quantity: $Type_QuoteRule.optional(), unit: $Type_QuoteRule.optional(), priceNet: $Type_QuoteRule.optional(), tax: $Type_QuoteRule.optional(), discount: $Type_QuoteLineItemDiscountRuleSet.optional(), isOptional: $Type_QuoteRule.optional(), contributionMarginRatio: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteItemActionRuleSet: z.ZodType<QuoteItemActionRuleSet> = z.object({delete: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteSectionRuleSet: z.ZodType<QuoteSectionRuleSet> = z.object({name: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteSection: z.ZodType<QuoteSection> = $Type_QuoteItemBase.extend({type: z.string().optional(), id: z.string().optional(), name: z.string(), rules: $Type_QuoteSectionRuleSet.optional()}).describe('{ "elementity" : true }');
const $Type_PriceCalculationMethod: z.ZodType<PriceCalculationMethod> = z.enum(['Additive', 'Cumulative']);
const $Type_QuoteDiscountRuleSet: z.ZodType<QuoteDiscountRuleSet> = z.object({name: $Type_QuoteRule.optional(), value: $Type_QuoteRule.optional(), valueType: $Type_QuoteRule.optional(), calculationMethod: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteDiscount: z.ZodType<QuoteDiscount> = $Type_QuoteItemBase.extend({type: z.string().optional(), id: z.string().optional(), name: z.string(), value: z.number(), valueType: $Type_PriceAdjustmentType.optional(), calculationMethod: $Type_PriceCalculationMethod.optional(), rules: $Type_QuoteDiscountRuleSet.optional(), actionRules: $Type_QuoteItemActionRuleSet.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteMarkupRuleSet: z.ZodType<QuoteMarkupRuleSet> = z.object({name: $Type_QuoteRule.optional(), value: $Type_QuoteRule.optional(), valueType: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteMarkup: z.ZodType<QuoteMarkup> = $Type_QuoteItemBase.extend({type: z.string().optional(), id: z.string().optional(), name: z.string(), value: z.number(), valueType: $Type_PriceAdjustmentType.optional(), rules: $Type_QuoteMarkupRuleSet.optional(), actionRules: $Type_QuoteItemActionRuleSet.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteLineItemCustomFields: z.ZodType<QuoteLineItemCustomFields> = z.object({image2: z.boolean().optional(), image: z.number().optional()}).describe('{ "elementity" : true }');
const $Type_QuoteLineItemRuleSetCustomFields: z.ZodType<QuoteLineItemRuleSetCustomFields> = z.object({image2: $Type_QuoteRule.optional(), image: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteLineItem: z.ZodType<QuoteLineItem> = $Type_QuoteItemBase.extend({type: z.string().optional(), id: z.string().optional(), name: z.string(), sku: z.string().optional(), description: z.string().optional(), quantity: z.number(), unit: z.string(), priceNet: z.number(), variableCostNet: z.number().optional(), tax: z.number(), discount: $Type_QuoteLineItemDiscount.optional(), contributionMarginRatioThreshold: z.number().optional(), isOptional: z.boolean().optional(), imageUrl: z.string().optional(), rules: $Type_QuoteLineItemRuleSet.optional(), actionRules: $Type_QuoteItemActionRuleSet.optional(), fields: $Type_QuoteLineItemCustomFields.optional(), fieldRules: $Type_QuoteLineItemRuleSetCustomFields.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteItem: z.ZodType<QuoteItem> = z.union([$Type_QuoteLineItem, $Type_QuoteSection, $Type_QuoteDiscount, $Type_QuoteMarkup]);
const $Type_QuoteAdjustmentRuleSet: z.ZodType<QuoteAdjustmentRuleSet> = z.object({name: $Type_QuoteRule.optional(), value: $Type_QuoteRule.optional(), type: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteAdjustment: z.ZodType<QuoteAdjustment> = z.object({id: z.string().optional(), name: z.string(), value: z.number(), type: $Type_PriceAdjustmentType.optional(), rules: $Type_QuoteAdjustmentRuleSet.optional(), actionRules: $Type_QuoteItemActionRuleSet.optional()}).describe('{ "elementity" : true }');
const $Type_Currency: z.ZodType<Currency> = z.enum(['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW']);
const $Type_QuoteTaxRule: z.ZodType<QuoteTaxRule> = z.enum(['RevealSalesTax', 'DomesticTaxFreeDelivery', 'NonDomesticTaxDelivery', 'ReverseCharge']);
const $Type_QuoteCustomer: z.ZodType<QuoteCustomer> = z.object({firstName: z.string(), lastName: z.string(), companyName: z.string(), addressLine1: z.string().optional(), addressLine2: z.string().optional(), city: z.string(), street: z.string(), postalCode: z.string(), country: z.string(), emailAddress: z.string(), phoneNumber: z.string()}).describe('{ "elementity" : true }');
const $Type_QuoteBankDetails: z.ZodType<QuoteBankDetails> = z.object({accountHolderName: z.string().optional(), accountNumber: z.string().optional(), bankName: z.string().optional(), swift: z.string().optional(), bic: z.string().optional(), iban: z.string().optional()}).describe('{ "elementity" : true }');
const $Type_QuoteCompany: z.ZodType<QuoteCompany> = z.object({name: z.string(), addressLine1: z.string().optional(), addressLine2: z.string().optional(), city: z.string(), street: z.string(), postalCode: z.string(), country: z.string(), emailAddress: z.string(), phoneNumber: z.string(), imageUrl: z.string(), taxId: z.string(), bankDetails: $Type_QuoteBankDetails.optional()}).describe('{ "elementity" : true }');
const $Type_001 = $Type_QuoteItem.array();
const $Type_002 = $Type_QuoteAdjustment.array();
const $Type_QuoteCustomerRuleSet: z.ZodType<QuoteCustomerRuleSet> = z.object({firstName: $Type_QuoteRule.optional(), lastName: $Type_QuoteRule.optional(), companyName: $Type_QuoteRule.optional(), addressLine1: $Type_QuoteRule.optional(), addressLine2: $Type_QuoteRule.optional(), city: $Type_QuoteRule.optional(), street: $Type_QuoteRule.optional(), postalCode: $Type_QuoteRule.optional(), country: $Type_QuoteRule.optional(), emailAddress: $Type_QuoteRule.optional(), phoneNumber: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteRuleSet: z.ZodType<QuoteRuleSet> = z.object({subject: $Type_QuoteRule.optional(), projectId: $Type_QuoteRule.optional(), taxRule: $Type_QuoteRule.optional(), globalTax: $Type_QuoteRule.optional(), paymentDueDays: $Type_QuoteRule.optional(), offerValidityDays: $Type_QuoteRule.optional(), notes: $Type_QuoteRule.optional(), customer: $Type_QuoteCustomerRuleSet.optional(), quoteDate: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteActionRuleSet: z.ZodType<QuoteActionRuleSet> = z.object({addItem: $Type_QuoteRule.optional(), addTotalDiscount: $Type_QuoteRule.optional(), addTotalMarkup: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_QuoteTemplate: z.ZodType<QuoteTemplate> = z.object({items: $Type_001.optional()}).describe('{ "elementity" : true }');
const $Type_003 = $Type_QuoteTemplate.array();
const $Type_QuoteCustomFields: z.ZodType<QuoteCustomFields> = z.object({Lieferbedingungen: z.string().optional(), Angebot: z.string().optional()}).describe('{ "elementity" : true }');
const $Type_QuoteRuleSetCustomFields: z.ZodType<QuoteRuleSetCustomFields> = z.object({Lieferbedingungen: $Type_QuoteRule.optional(), Angebot: $Type_QuoteRule.optional()}).describe('{ "elementity" : true }');
const $Type_Quote: z.ZodType<Quote> = z.object({quoteHubName: z.string(), assetBundleName: z.string().optional(), widgetAssetPath: z.string().optional(), pdfAssetPath: z.string().optional(), assignee: z.string().array(), subject: z.string(), projectId: z.string(), currency: $Type_Currency, taxRule: $Type_QuoteTaxRule.optional(), globalTax: z.number().optional(), paymentDueDays: z.number().optional(), offerValidityDays: z.number().optional(), notes: z.string().optional(), contributionMarginRatioThreshold: z.number().optional(), customer: $Type_QuoteCustomer, company: $Type_QuoteCompany, shipping: $Type_QuoteCustomer.optional(), items: $Type_001, discounts: $Type_002.optional(), markups: $Type_002.optional(), rules: $Type_QuoteRuleSet.optional(), actionRules: $Type_QuoteActionRuleSet.optional(), templates: $Type_003.optional(), fields: $Type_QuoteCustomFields.optional(), fieldRules: $Type_QuoteRuleSetCustomFields.optional()}).describe('{ "elementity" : true }');
const $Type_TenantCustomFields: z.ZodType<TenantCustomFields> = z.object({Discount: z.string().optional(), F6: z.number().optional()}).describe('{ "elementity" : true }');
const $Type_Tenant: z.ZodType<Tenant> = z.object({Name: z.string(), DisplayName: z.string(), Logo: z.string(), Fields: $Type_TenantCustomFields.optional()}).describe('{ "elementity" : true }');
const $Type_UserCustomFields: z.ZodType<UserCustomFields> = z.object({F4: z.string().optional(), Discount: z.number().optional(), DiscountString: z.string().optional(), F5: z.number().array().optional()}).describe('{ "elementity" : true }');
const $Type_User: z.ZodType<User> = z.object({Id: z.string(), FirstName: z.string(), LastName: z.string(), Mail: z.string(), Distributor: z.string(), Avatar: z.string(), Fields: $Type_UserCustomFields.optional()}).describe('{ "elementity" : true }');

/**
* ZOD TYPES
*/

/**
* ZOD COMPONENTS
*/
export const Cnt3 = new ValueComponent<'Cnt3', number>('Cnt3', z.number());
export const Cnt1 = new ValueComponent<'Cnt1', number>('Cnt1', z.number());
export const Cnt2 = new ValueComponent<'Cnt2', number>('Cnt2', z.number());

/**
 * CONTROLS
 */
export const MainPanel = new Panel('MainPanel');
export const ReactRoot_cc = new CustomControl('ReactRoot_cc');