# E-Commerce Web App

![ECommerceApp](src/assets/images/ecommerce_app.png)

---

### Table of Contents

- [Description](#description)
- [How to use](#how-to-use)
- [API Reference](#api-reference)
- [License](#license)
- [Author Info](#author-info)

---

## Description

A simple e-commerce web app that allows users to create and manage orders. Products List is obtained from [Dummy JSON](https://dummyjson.com/)

#### Technologies

- React JS
- Redux Toolkit
- Firebase
- Stripe

[Back to the Top](#e-commerce-web-app)

---

## How to use

The website is currently published at [E-Commerce Site](https://dummy-ecommerce-app.netlify.app/)

Clone the project 

```bash
  git clone https://github.com/pras306/ecommerce-app.git
```

Go to the project directory

```bash
  cd ecommerce-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

[Back to the Top](#e-commerce-web-app)

---

## API Reference

- [Dummy JSON API](https://dummyjson.com/)
- [STRIPE API](https://stripe.com/docs/api)
- Custom Proxy Server for hiding API key - [https://api-proxy-server-6xbe.onrender.com/api/v1](https://api-proxy-server-6xbe.onrender.com/api/v1)

#### POST - Create Stripe Payment Intent

```http
  POST /stripe/create-payment-intent
```

|Request Body | Type     | Description                                        |
| :---------- | :------- | :------------------------------------------------- |
| `cartItems` | `array`  | **Required**. an array of all the products in cart |


---

## License

MIT License

Copyright (c) [2022] [Prasanna Sriram]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back to the Top](#e-commerce-web-app)

---

## Author Info

- Github - [pras306](https://github.com/pras306)
- LinkedIn - [Prasanna Sriram](https://www.linkedin.com/in/prasanna-sriram/)
- Portfolio - [Personal Portfolio](https://prasanna-sriram.netlify.app/)

[Back to the Top](#e-commerce-web-app)

