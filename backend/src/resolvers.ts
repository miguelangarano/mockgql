import {
  activeIngredients,
  measureUnits,
  measureUnitTypes,
  products,
  services,
  status,
  supplyCategories,
  supplyTypes,
} from "./data";

export function getStatus() {
  return status;
}

export function getSupplyTypes() {
  return supplyTypes;
}

export function getSupplyType(id: string) {
  return supplyTypes.find((ele) => ele.id === id);
}

export function getSupplyCategories() {
  return supplyCategories;
}

export function getSupplyCategory(id: string) {
  return supplyCategories.find((ele) => ele.id === id);
}

export function getActiveIngredients() {
  return activeIngredients;
}

export function getActiveIngredient(id: string) {
  return activeIngredients.find((ele) => ele.id === id);
}

export function getMeasureUnitTypes() {
  return measureUnitTypes;
}

export function getMeasureUnitType(id: string) {
  return measureUnitTypes.find((ele) => ele.id === id);
}

export function getMeasureUnits() {
  return measureUnits;
}

export function getMeasureUnit(id: string) {
  return measureUnits.find((ele) => ele.id === id);
}

export function getProducts() {
  return products;
}

export function getProduct(id: string) {
  return products.find((ele) => ele.id === id);
}

export function getNewProductData() {
  return {
    supplyTypes: getSupplyTypes(),
    supplyCategories: getSupplyCategories(),
    activeIngredients: getActiveIngredients(),
    measureUnits: getMeasureUnits(),
    status: getStatus()
  }
}

export function getServices() {
  return services;
}

export function getService(id: string) {
  return services.find(ele => ele.id === id);
}