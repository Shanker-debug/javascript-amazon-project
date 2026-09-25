# 🛒 JavaScript Amazon Clone

A responsive Amazon-style e-commerce website built using **HTML, CSS, and JavaScript**.

This project was created as a hands-on JavaScript learning project, focusing on DOM manipulation, JavaScript modules, objects/classes, asynchronous JavaScript, local storage, testing, and building an interactive shopping experience.

---

## 🚀 Live Features

- 🏠 Amazon-style homepage
- 🔍 Product search interface
- 🛍️ Add products to cart
- ➕ Increase/decrease product quantity
- 🗑️ Remove products from cart
- 💾 Cart data saved using `localStorage`
- 🚚 Multiple delivery options
- 💳 Dynamic payment/order summary
- 📦 Orders page
- 🔎 Track package functionality
- 📱 Responsive design
- 🧪 Jasmine unit tests
- 🌐 Products loaded from a backend API
- 📅 Delivery dates calculated using Day.js

---

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Styling and responsive design |
| **JavaScript (ES6+)** | Application logic |
| **JavaScript Modules** | Organizing code into separate files |
| **Fetch API** | Loading products from the backend |
| **XMLHttpRequest** | Practicing asynchronous requests |
| **localStorage** | Persisting cart data |
| **Day.js** | Working with delivery dates |
| **Jasmine** | Unit testing |
| **Git & GitHub** | Version control |

---

## 📂 Project Structure

```text
javascript-amazon/
│
├── amazon.html
├── checkout.html
├── orders.html
├── tracking.html
├── tests.html
│
├── data/
│   ├── products.js
│   ├── cart.js
│   └── deliveryOptions.js
│
├── scripts/
│   ├── amazon.js
│   ├── checkout.js
│   │
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   │
│   └── utils/
│       └── money.js
│
├── styles/
│   ├── shared/
│   │   ├── general.css
│   │   └── amazon-header.css
│   │
│   └── pages/
│       ├── amazon.css
│       ├── checkout.css
│       ├── orders.css
│       └── tracking.css
│
├── images/
│   ├── products/
│   └── icons/
│
├── tests/
│   ├── moneyTest.js
│   ├── data/
│   │   └── cartTest.js
│   └── checkout/
│       └── orderSummaryTest.js
│
└── README.md
```

---

## 🛍️ Main Pages

### 🏠 Home Page

`amazon.html`

Displays the product catalog and allows users to add products to their cart.

### 🛒 Checkout

`checkout.html`

Displays:

- Products in the cart
- Quantity
- Delivery options
- Delivery dates
- Product prices
- Order summary
- Payment summary

### 📦 Orders

`orders.html`

Displays previously placed orders along with:

- Order date
- Order total
- Order ID
- Products
- Quantity
- Delivery information
- Track Package button

### 🚚 Tracking

`tracking.html`

The tracking page receives the `orderId` and `productId` through the URL.

Example:

```text
tracking.html?orderId=ORDER_ID&productId=PRODUCT_ID
```

The page can then identify the specific product and order being tracked.

---

## 💾 Cart System

The cart uses JavaScript to manage products and quantities.

Example cart item:

```javascript
{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId: '1'
}
```

Cart data is stored in the browser using:

```javascript
localStorage
```

This allows the cart to remain available even after refreshing the page.

---

## 📦 Product System

Products are loaded from the project backend using:

```javascript
loadProductsFetch();
```

Products can then be accessed using:

```javascript
getProduct(productId);
```

The project also uses JavaScript classes for products, including specialized product types such as clothing.

---

## 🚚 Delivery Options

Users can choose between different delivery options.

Each delivery option contains information such as:

```javascript
{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}
```

The selected delivery option is saved with the cart item.

---

## 🧪 Testing

The project uses **Jasmine** for unit testing.

Tests can be opened through:

```text
tests.html
```

Current tests cover functionality such as:

- Currency formatting
- Adding products to cart
- Cart functionality
- Order summary behavior

Example:

```javascript
expect(formatCurrency(2095)).toEqual('20.95');
```

---

## 🌐 Backend

Product information is loaded from the SuperSimpleDev backend:

```text
https://supersimplebackend.dev/products
```

The project uses JavaScript's `fetch()` API to request the product data.

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the project

Open the project folder in **VS Code**.

### 3. Start a local server

Using VS Code, you can use the **Live Server** extension.

Open:

```text
amazon.html
```

with Live Server.

### 4. Explore the project

You can then navigate through:

```text
amazon.html
checkout.html
orders.html
tracking.html
tests.html
```

---

## 📚 What I Learned

This project helped me practice and understand:

- JavaScript fundamentals
- Functions and objects
- Classes and inheritance
- Arrays and array methods
- DOM manipulation
- Event listeners
- Template literals
- ES6 modules
- `import` / `export`
- `async` / `await`
- Promises
- `fetch()`
- XMLHttpRequest
- `localStorage`
- URL query parameters
- Dynamic HTML generation
- Unit testing with Jasmine
- Git and GitHub
- Debugging JavaScript applications

---

## 🔗 Git & GitHub

This project is maintained using Git for version control.

Example workflow:

```bash
git add .
git commit -m "Update project"
git push
```

---

## 🎯 Project Goal

The main goal of this project is to build a functional e-commerce website while strengthening practical **JavaScript development skills**.

Rather than using a framework, the project focuses on understanding how an e-commerce application works using **vanilla JavaScript**.

---

## 👨‍💻 Author

**K. Gowri Shanker**

CSE - B

---

## ⭐ Future Improvements

Possible future improvements include:

- 🔐 User authentication
- 🔎 Fully functional product search
- 🏷️ Product filtering and sorting
- ❤️ Wishlist functionality
- 💳 Real payment integration
- 📦 More advanced order tracking
- 📱 Further mobile optimization
- 🌙 Dark mode
- 🗄️ Database-backed orders
- 👤 User accounts and profiles

---

## ⭐ If You Like This Project

Feel free to explore the code, experiment with it, and build your own features on top of it.

**Built with ❤️ using JavaScript.**
