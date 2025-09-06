 // Scroll to planner section
function scrollToPlanner() {
  document.getElementById("planner").scrollIntoView({ behavior: "smooth" });
}

// Simple login
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    // hide login and show planner form
    document.getElementById("login-section").style.display = "none";
    document.getElementById("planner-section").style.display = "block";
  } else {
    alert("Please enter both email and password!");
  }
}

// Diet Plan Generator (opens in popup)
const dietForm = document.getElementById("dietForm");
if (dietForm) {
  dietForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
    const goal = document.getElementById("goal").value;
    const dietType = document.getElementById("dietType").value;
    const bodyType = document.getElementById("bodyType").value;

    let calories = weight * 30; // simple formula
    if (goal === "loss") calories -= 400;
    if (goal === "gain") calories += 400;

    // HTML for popup
    const planHTML = `
      <html>
      <head>
        <title>Your Diet Plan</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background:#f9f9f9; }
          h2 { color: #2f80ed; }
          .box { background:#fff; padding:20px; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.1); }
          p { margin:8px 0; }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>Your Diet Plan</h2>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Weight:</strong> ${weight} kg</p>
          <p><strong>Height:</strong> ${height} cm</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Calories Needed:</strong> ${calories} kcal/day</p>
          <p><strong>Diet Type:</strong> ${dietType}</p>
          <p><strong>Body Type:</strong> ${bodyType}</p>
          <p><strong>Tip:</strong> Eat fresh, stay hydrated & exercise regularly 🚀</p>
        </div>
      </body>
      </html>
    `;

    // Open popup window
    const popup = window.open("", "_blank", "width=500,height=600");
    popup.document.write(planHTML);
    popup.document.close();
  });
}
