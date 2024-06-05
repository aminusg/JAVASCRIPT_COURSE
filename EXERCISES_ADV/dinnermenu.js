/*Steps:

    Create the menu data structure: This will include breakfast, lunch, and dinner items.
    Display the menu: Show the user the entire menu.
    User selection: Allow the user to select an entree and sides.
    Generate waitress comments: Provide comments based on the user's selection.
    Calculate prices: Display the prices for the selections and calculate the total cost.
    BONUS: Item customization: Allow the user to customize their items.

JavaScript Implementation

Let's start with the basic structure and then build out each part step by step.
Step 1: Create the Menu Data Structure */
const menu = {
    breakfast: {
        entrees: [
            {name: "Pancakes", price: 5.00},
            {name: "Omelette", price: 6.50},
            {name: "French Toast", price: 5.50}
        ],
        sides: [
            {name: "Bacon", price: 2.00},
            {name: "Sausage", price: 2.00},
            {name: "Hash Browns", price: 1.50}
        ]
    },
    lunch: {
        entrees: [
            {name: "Burger", price: 8.00},
            {name: "Salad", price: 7.00},
            {name: "Sandwich", price: 6.50}
        ],
        sides: [
            {name: "Fries", price: 2.50},
            {name: "Coleslaw", price: 2.00},
            {name: "Onion Rings", price: 3.00}
        ]
    },
    dinner: {
        entrees: [
            {name: "Steak", price: 15.00},
            {name: "Salmon", price: 14.00},
            {name: "Pasta", price: 12.00}
        ],
        sides: [
            {name: "Mashed Potatoes", price: 3.00},
            {name: "Steamed Vegetables", price: 2.50},
            {name: "Caesar Salad", price: 3.50}
        ]
    }
};

const comments = [
    "Great choice!",
    "Excellent selection!",
    "You'll love this one!",
    "A customer favorite!",
    "Yum, that sounds good!",
    "Good pick!"
];
//Step 2: Display the Menu
function displayMenu(mealType) {
    console.log(`--- ${mealType.charAt(0).toUpperCase() + mealType.slice(1)} Menu ---`);
    console.log("Entrees:");
    menu[mealType].entrees.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
    });
    console.log("Sides:");
    menu[mealType].sides.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
    });
}

displayMenu('breakfast');
displayMenu('lunch');
displayMenu('dinner');

//Step3: User Selection
function getUserSelection(menuType, itemType) {
    let items = menu[menuType][itemType];
    let selection = parseInt(prompt(`Select a ${itemType.slice(0, -1)} (1-${items.length}): `)) - 1;
    let selectedItem = items[selection];
    let comment = comments[Math.floor(Math.random() * comments.length)];
    console.log(`${comment} You chose ${selectedItem.name} for $${selectedItem.price.toFixed(2)}.`);
    return selectedItem.price;
}

//Step4:Generate Waitress Comments and Calculate Prices

function calculateTotal() {
    let mealType = prompt("What meal are you having? (breakfast, lunch, dinner): ").toLowerCase();
    if (!menu[mealType]) {
        console.log("Invalid meal type.");
        return;
    }

    displayMenu(mealType);

    console.log("\nSelect your entree:");
    let entreePrice = getUserSelection(mealType, 'entrees');

    console.log("\nSelect your first side:");
    let side1Price = getUserSelection(mealType, 'sides');

    console.log("\nSelect your second side:");
    let side2Price = getUserSelection(mealType, 'sides');

    let totalPrice = entreePrice + side1Price + side2Price;
    console.log(`Your total is $${totalPrice.toFixed(2)}.`);
}

calculateTotal();

//BONUS: Allow Item Customization
const customizationCosts = {
    "extra cheese": 1.00,
    "extra sauce": 0.50,
    "gluten-free": 1.50,
    "add bacon": 2.00
};

function customizeItem() {
    let customizations = prompt("Would you like any customizations? (extra cheese, extra sauce, gluten-free, add bacon) Separate by commas: ");
    let totalCustomizationCost = 0;

    if (customizations) {
        customizations.split(',').forEach(custom => {
            let trimCustom = custom.trim();
            if (customizationCosts[trimCustom]) {
                totalCustomizationCost += customizationCosts[trimCustom];
                console.log(`Added ${trimCustom} for $${customizationCosts[trimCustom].toFixed(2)}.`);
            }
        });
    }

    return totalCustomizationCost;
}

function calculateTotalWithCustomization() {
    let mealType = prompt("What meal are you having? (breakfast, lunch, dinner): ").toLowerCase();
    if (!menu[mealType]) {
        console.log("Invalid meal type.");
        return;
    }

    displayMenu(mealType);

    console.log("\nSelect your entree:");
    let entreePrice = getUserSelection(mealType, 'entrees');
    let entreeCustomizationPrice = customizeItem();

    console.log("\nSelect your first side:");
    let side1Price = getUserSelection(mealType, 'sides');
    let side1CustomizationPrice = customizeItem();

    console.log("\nSelect your second side:");
    let side2Price = getUserSelection(mealType, 'sides');
    let side2CustomizationPrice = customizeItem();

    let totalPrice = entreePrice + entreeCustomizationPrice + side1Price + side1CustomizationPrice + side2Price + side2CustomizationPrice;
    console.log(`Your total is $${totalPrice.toFixed(2)}.`);
}

calculateTotalWithCustomization();

/* Summary
The provided code accomplishes the basic functionality of displaying a menu, allowing user selections, generating waitress comments, and calculating the total cost. It also includes bonus features for customizing menu items and adjusting prices accordingly. 

¿Cómo Funciona el Código?

    Menú de Datos: Definimos el menú para desayuno, almuerzo y cena, junto con una lista de comentarios que la "camarera" podría hacer.
    Mostrar el Menú: La función displayMenu muestra el menú completo para el tipo de comida seleccionado.
    Selección del Usuario: La función getUserSelection solicita al usuario que seleccione un artículo del menú y devuelve el precio del artículo seleccionado.
    Calcular el Precio Total: La función calculateTotal solicita al usuario que seleccione una comida, muestra el menú, permite al usuario seleccionar un entrante y dos guarniciones, y luego calcula y muestra el precio total.
    Personalización de Artículos: Las funciones adicionales permiten al usuario personalizar los artículos del menú y ajustan el costo total en consecuencia.

Puedes copiar y pegar este código en la consola de tu navegador para probarlo y ver cómo funciona.*/
