import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmpLc1T0mVqmO_ieWLWqEbwCfpJBYfRQc",
    authDomain: "quickinvoice-fe087.firebaseapp.com",
    projectId: "quickinvoice-fe087",
    storageBucket: "quickinvoice-fe087.firebasestorage.app",
    messagingSenderId: "565831934277",
    appId: "1:565831934277:web:10da91ee27139aa2d8de2c",
    measurementId: "G-T5XF174QFQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);