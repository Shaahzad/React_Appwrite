import { Client, Account, ID } from "appwrite";
const client = new Client()
    .setEndpoint(import.meta.env.VITE_API_Endpoint) // Your API Endpoint
    .setProject(import.meta.env.VITE_PROJECT_ID);                 // Your project ID

    export const account = new Account(client);



    export {ID}