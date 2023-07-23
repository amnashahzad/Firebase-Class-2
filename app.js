
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPKT_ZdNKM7NH8fOehJNJL-Sgphudxu2M",
    authDomain: "fir-class-76217.firebaseapp.com",
    projectId: "fir-class-76217",
    storageBucket: "fir-class-76217.appspot.com",
    messagingSenderId: "53293844292",
    appId: "1:53293844292:web:f905fe6b9d252748f3f911",
    measurementId: "G-NTW1S3J6ZN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// </script>

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.uname.value;
  const password = loginForm.psw.value;
auth
  .signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      console.log("Logged in user:", user);
      // You can redirect the user to a new page or perform other actions here.
    })
    .catch((error) => {
      // Handle login error
      console.error("Login error:", error.message);
    });
});
