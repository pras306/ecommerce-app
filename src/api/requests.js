export const STRIPE_BASE_URL = process.env.NODE_ENV === "production" ? "https://api-proxy-server-6xbe.onrender.com/api/v1/stripe" : "http://localhost:5000/api/v1/stripe";

export const STRIPE_CREATE_PAYMENT_INTENT = "/create-payment-intent";
