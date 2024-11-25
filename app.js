const menuItems = [
    {
        id: 1,
        title: "Margherita Pizza",
        price: 9.99,
        category: "Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
        img: ["img/margheritapizza.png"]
    },
    {
        id: 2,
        title: "Pepperoni Pizza",
        price: 10.99,
        category: "Pizza",
        description: "Delicious pizza topped with mozzarella cheese and pepperoni slices.",
        img: ["img/pepperonipizza.png"]
    },
    {
        id: 3,
        title: "Caesar Salad",
        price: 7.49,
        category: "Salad",
        description: "Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan cheese.",
        img: ["img/caesarsalad.png"]
    },
    {
        id: 4,
        title: "Greek Salad",
        price: 8.49,
        category: "Salad",
        description: "Fresh lettuce, cucumbers, tomatoes, olives, and feta cheese.",
        img: ["img/greeksalad.png"]
    },
    {
        id: 5,
        title: "Grilled Chicken Sandwich",
        price: 8.99,
        category: "Sandwich",
        description: "Grilled chicken breast, lettuce, tomato, and mayo on a toasted bun.",
        img: [""]
    },
    {
        id: 6,
        title: "Turkey Club Sandwich",
        price: 9.99,
        category: "Sandwich",
        description: "Classic turkey club with bacon, lettuce, tomato, and mayo.",
        img: [""]
    },
    {
        id: 7,
        title: "Spaghetti Carbonara",
        price: 12.99,
        category: "Pasta",
        description: "Traditional Italian pasta with eggs, Parmesan, pancetta, and black pepper.",
        img: [""]
    },
    {
        id: 8,
        title: "Penne Arrabbiata",
        price: 11.49,
        category: "Pasta",
        description: "Penne pasta in a spicy tomato sauce with garlic and chili.",
        img: [""]
    },
    {
        id: 9,
        title: "Cheeseburger",
        price: 10.49,
        category: "Burger",
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles.",
        img: [""]
    },
    {
        id: 10,
        title: "Veggie Burger",
        price: 9.99,
        category: "Burger",
        description: "Plant-based burger patty with lettuce, tomato, and avocado.",
        img: [""]
    },
    {
        id: 11,
        title: "Vegetable Stir Fry",
        price: 9.49,
        category: "Vegetarian",
        description: "Mixed vegetables sautéed in a savory soy-based sauce served with rice.",
        img: [""]
    },
    {
        id: 12,
        title: "Stuffed Bell Peppers",
        price: 10.99,
        category: "Vegetarian",
        description: "Bell peppers stuffed with quinoa, black beans, and roasted veggies.",
        img: [""]
    },
    {
        id: 13,
        title: "Taco Platter",
        price: 11.99,
        category: "Mexican",
        description: "Three soft tacos filled with your choice of beef, chicken, or veggies.",
        img: [""]
    },
    {
        id: 14,
        title: "Chicken Quesadilla",
        price: 10.49,
        category: "Mexican",
        description: "Grilled tortilla filled with chicken, cheese, and peppers.",
        img: [""]
    },
    {
        id: 15,
        title: "Tom Yum Soup",
        price: 6.99,
        category: "Soup",
        description: "Spicy and sour Thai soup with shrimp, mushrooms, and fragrant herbs.",
        img: [""]
    },
    {
        id: 16,
        title: "Creamy Tomato Soup",
        price: 5.99,
        category: "Soup",
        description: "Rich and creamy tomato soup topped with fresh basil.",
        img: [""]
    },
    {
        id: 17,
        title: "Pancakes with Maple Syrup",
        price: 8.49,
        category: "Breakfast",
        description: "Fluffy pancakes served with butter and pure maple syrup.",
        img: [""]
    },
    {
        id: 18,
        title: "Vegetable Omelette",
        price: 7.99,
        category: "Breakfast",
        description: "Three-egg omelette filled with fresh vegetables and cheese.",
        img: [""]
    },
    {
        id: 19,
        title: "Chocolate Lava Cake",
        price: 5.99,
        category: "Dessert",
        description: "Warm chocolate cake with a gooey molten center.",
        img: [""]
    },
    {
        id: 20,
        title: "Vanilla Ice Cream",
        price: 4.49,
        category: "Dessert",
        description: "Creamy vanilla ice cream with optional chocolate or caramel sauce.",
        img: [""]
    }
];

const sectionCenter = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container')

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuItems);
    displayMenuButtons();
})

function displayMenuButtons() {
    const categories = menuItems.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All'])
    const categoryButtons = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join('');
    buttonContainer.innerHTML = categoryButtons;
    const filterButtons = document.querySelectorAll('.filter-btn');

    // filter items

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menuItems.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(menuItems);
            }
            else {
                displayMenuItems(menuCategory);
            }
        })
    })

}

function displayMenuItems(menu) {
    let displayMenu = menu.map((item) => {
        return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.description}</p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}