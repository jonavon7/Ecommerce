# 📱 E-Commerce App

An elegant and user-friendly e-commerce mobile application built with **React Native** and **UI Kitten**. This app allows users to browse products, view product details, add items to the cart, and proceed with their shopping journey.

---

## 🚀 Features

- **Product Listing**: Display a list of surf-related products with images, prices, and descriptions.
- **Product Details**: View detailed information about a product, including a large image, price, and description.
- **Add to Cart**: Add products to the cart and view the total price dynamically.
- **Responsive Design**: Optimized for various screen sizes with a clean and modern UI.
- **Dark Mode**: Seamlessly switch between light and dark themes.
- **Lazy Loading Images**: Images are loaded efficiently with a spinner for better performance.
- **Customizable Splash Screen and App Icon**: Personalized branding with a custom logo.

---

## 🛠️ Tech Stack

- **React Native**: Framework for building cross-platform mobile apps.
- **UI Kitten**: Component library for a consistent and customizable design system.
- **React Navigation**: Navigation library for managing screens and stacks.
- **TypeScript**: Strongly typed programming language for better code quality.
- **Styling**: Custom themes for light and dark modes
- **Pexels**: Free high-quality images for product visuals.

---

## 📖 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Metro bundler:
   ```sh
   npm start
   ```

4. Run the app:
   - For iOS:
     ```sh
     npx react-native run-ios
     ```
   - For Android:
     ```sh
     npx react-native run-android
     ```

---

## 🧩 Project Structure

```
ecommerce-app/
├── src/
│   ├── data/                # Static product data
│   ├── navigation/          # Navigation setup (stack and tab navigators)
│   ├── presentation/
│   │   ├── components/      # Reusable UI components (e.g., ProductCard, LazyImage)
│   │   ├── screens/         # Screens (e.g., HomeScreen, ProductScreen, CartScreen)
│   ├── context/             # Global state management (e.g., Cart context)
│   ├── models/              # TypeScript models (e.g., Product type)
│   ├── assets/              # Static assets (e.g., logo, splash screen)
├── App.tsx                  # Entry point of the app
├── package.json             # Project dependencies and scripts
```

---

## Screenshots

### Home Screen
<img src="https://github.com/user-attachments/assets/2b645f88-d028-453f-9600-80d91b8a0408" height="500" />

### Product Details
<img src="https://github.com/user-attachments/assets/a0b92073-1c8b-4558-bbc7-08f218f3b2ee" height="500" />

### Cart
<img src="https://github.com/user-attachments/assets/03619bd4-1d81-457a-b821-b892a32d5a76" height="500" />

---

## Product Data

Dummy data for development, easily replaceable with an API or database.

```typescript
{
    id: 'unique-id',
    name: 'Product Name',
    price: 'Price (e.g., 100€)',
    description: 'Short description of the product.',
    image: 'URL of the product image',
}
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- [Pexels](https://pexels.com)
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) for the design system.
- [React Native](https://reactnative.dev/) for the mobile app framework.

---

## 📬 Contact

For questions or feedback, feel free to reach out:

- **GitHub**: [jonavon7](https://github.com/jonavon7)

---

Happy coding! 🚀
