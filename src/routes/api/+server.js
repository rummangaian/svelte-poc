import { json } from '@sveltejs/kit';
// src/routes/api/data/+server.js

const names = [
    "Aaron", "Bella", "Cameron", "Daniella", "Ethan", "Fiona", "George", "Hannah", "Ivan", "Julia",
    "Kyle", "Laura", "Marcus", "Natalie", "Oscar", "Penelope", "Quentin", "Rachel", "Samuel", "Tiffany",
    "Ursula", "Victor", "Wendy", "Xavier", "Yolanda", "Zachary", "Aiden", "Brianna", "Caleb", "Diana",
    "Elijah", "Farah", "Grace", "Harvey", "Isla", "Jasmine", "Kevin", "Leah", "Michael", "Nora",
    "Owen", "Paula", "Quincy", "Riley", "Sophia", "Tristan", "Uma", "Vincent", "Willow", "Xander",
    "Yvette", "Zoe", "Amelia", "Blake", "Cooper", "Delilah", "Ezra", "Felicity", "Gavin", "Hazel",
    "Isaac", "Jenna", "Kingston", "Lily", "Mason", "Naomi", "Oliver", "Piper", "Quinn", "Ryder",
    "Savannah", "Theo", "Unity", "Valerie", "Wyatt", "Xavier", "Yara", "Zara", "Avery", "Brooke",
    "Connor", "Daisy", "Elias", "Faith", "Gabriel", "Holly", "Imani", "Josiah", "Kai", "Lila",
    "Mateo", "Nadia", "Omar", "Phoebe", "Quinn", "Ruby", "Simon", "Tessa", "Ulysses", "Veronica"
  ];
  

export const GET = async () => {
    // Handle GET requests
    const responseData = { message: "Hello from the GET endpoint!" };
    return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const POST = async ({ request }) => {
    let data = {};

    try {
        // Parse the JSON body if it exists
        data = await request.json();
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }

    // Perform logic here
    const message = data.info
        ? `Received info: ${data.info}`
        : "No data was provided in the request body.";

    // Return a response
    return json({ success: true, message });
};
