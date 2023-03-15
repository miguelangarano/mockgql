import { v4 as uuidv4 } from 'uuid';

export const status = [
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
        name: "Activo"
    },
    {
        id: "08c71152-c552-42e7-b094-f510ff44e9cb",
        name: "Inactivo"
    }
]

export const supplyTypes = [
    {
        id: "c558a80a-f319-4c10-95d4-4282ef745b4b",
        name: "Supply Type 1",
        status: status[0]
    },
    {
        id: "1ad1fccc-d279-46a0-8980-1d91afd6ba67",
        name: "Supply Type 2",
        status: status[1]
    },
]

export const supplyCategories = [
    {
        id: "5108babc-bf35-44d5-a9ba-de08badfa80a",
        name: "Supply Category 1",
        supplyType: supplyTypes[0],
        status: status[0]
    },
    {
        id: "2d790a4d-7c9c-4e23-9c9c-5749c5fa7fdb",
        name: "Supply Category 2",
        supplyType: supplyTypes[1],
        status: status[1]
    },
]

export const activeIngredients = [
    {
        id: "8304e5ff-6324-4863-ac51-8fcbc6812b13",
        name: "Active Ingredient 1",
        status: status[0]
    },
    {
        id: "fd4a096f-93f5-4f2a-86c6-69a2d20365ff",
        name: "Active Ingredient 2",
        status: status[1]
    },
]

export const measureUnitTypes = [
    {
        id: "96fdc209-0551-4d67-b9ad-0e9067a44bc4",
        name: "Measure Unit Type 1"
    },
    {
        id: "0a7d6250-0be5-4036-8f23-33dc1762bed0",
        name: "Measure Unit Type 2"
    }
]

export const measureUnits = [
    {
        id: "1783be11-03db-4c65-b921-2cf939b5ae8e",
        name: "Measure Unit 1",
        measureUnitType: measureUnitTypes[0],
        status: status[0]
    },
    {
        id: "ca52a95c-8bb4-4a9f-a0cf-f0df437592da",
        name: "Measure Unit 2",
        measureUnitType: measureUnitTypes[1],
        status: status[1]
    },
]

export const products = [
  {
    id: "a9a8729d-a29b-48ed-be0a-f1b572cfc15b",
    name: "Product 1",
    internalId: "a9a8729d-a29b-48ed-be0a-f1b572cfc15b",
    supplyType: supplyTypes[0],
    supplyCategory: supplyCategories[0],
    activeIngredients: activeIngredients,
    doseUnit: measureUnits[0],
    dose: 100,
    presentationUnit: measureUnits[1],
    presentationAmount: 200,
    status: status[0],
  },
  {
    id: "4b1c6ff6-108f-4810-b20a-8c73fdab6f8b",
    name: "Product 2",
    internalId: "4b1c6ff6-108f-4810-b20a-8c73fdab6f8b",
    supplyType: supplyTypes[1],
    supplyCategory: supplyCategories[1],
    activeIngredients: activeIngredients,
    doseUnit: measureUnits[1],
    dose: 200,
    presentationUnit: measureUnits[0],
    presentationAmount: 300,
    status: status[1],
  },
];
