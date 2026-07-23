# React TypeScript E-Commerce Application

## Overview

This project is a responsive e-commerce web application built with React, TypeScript, and Vite. The application retrieves product information from the Fake Store API and provides users with a functional shopping cart experience.

The purpose of this project was to apply modern front-end development practices, including TypeScript type safety, API integration, asynchronous data handling, reusable React components, and global state management.

## Technologies Used

* React
* TypeScript
* Vite
* TanStack Query (React Query)
* Redux Toolkit
* Axios
* React Router
* Bootstrap

## Features

* Fetches product data from the Fake Store API
* Displays products using reusable Product Card components
* Provides a responsive product browsing experience
* Allows users to add products to a shopping cart
* Maintains cart state using Redux Toolkit
* Uses TypeScript interfaces for consistent data structures
* Separates API, component, page, and state management logic

## Project Structure

```
src/
├── api/
│   └── productsApi.ts
├── app/
│   ├── hooks.ts
│   └── store.ts
├── components/
│   └── ProductCard.tsx
├── features/
│   └── cart/
│       └── cartSlice.ts
├── pages/
│   ├── Home.tsx
│   └── Cart.tsx
├── types/
│   └── Product.ts
├── App.tsx
└── main.tsx
```

## Installation

Clone the repository:

```
git clone https://github.com/tcsussmann/react-typescript-ecommerce.git
```

Navigate into the project folder:

```
cd react-typescript-ecommerce
```

Install dependencies:

```
npm install
```

## Running the Application

Start the Vite development server:

```
npm run dev
```

The application will launch in the browser through the Vite development server.

## Author

Timothy Sussmann

Aspiring Software Developer building web applications.
