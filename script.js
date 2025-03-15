import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Firebase configuration (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to update the username
function updateUsername(user) {
    if (user) {
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    const username = userData.username; // Assuming your username field is called "username"
                    document.getElementById("username").textContent = `Hello, ${username}`;
                } else {
                    document.getElementById("username").textContent = "Hello, User";
                }
            })
            .catch((error) => {
                console.error("Error getting user document:", error);
                document.getElementById("username").textContent = "Hello, User";
            });
    } else {
        document.getElementById("username").textContent = "Hello, User";
    }
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    updateUsername(user);
    // Balance will stay at 00. Only admin should update it
});
