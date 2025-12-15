<div align="center">

  <h1>✨ Atmospheric: Glassmorphism Weather Dashboard</h1>
  
  <p>
    <b>A weather experience, not just a forecast.</b><br>
    Built with vanilla JavaScript and modern CSS, focusing on performance, aesthetics, and user experience.
  </p>
  


  <p>
    <a href="https://rashmiwijemanna.github.io/weather_app/">
      <img src="https://img.shields.io/badge/LIVE_DEMO-Click_Here-FFD700?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
  </p>

  

 <div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <br>
  <img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white" />
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white" />
  <img src="https://img.shields.io/badge/WeatherAPI-orange?style=for-the-badge" />
</div>
</div>

---

## 🚀 Overview

This isn't your average API fetch project. This dashboard was engineered to provide an **immersive** user experience. It features a "Glassmorphism" UI that adapts dynamically to real-time weather conditions, seamlessly blending video backgrounds with live data.

My goal was to solve the common "flicker" issues found in multimedia web apps and create an interface that feels like a native mobile application.

## ✨ Key Features

* **🎬 Dynamic Video Environment:** The background doesn't just show weather; it *is* the weather. Videos cycle automatically based on specific API condition codes (Rain, Snow, Clear, Clouds).
* **🔮 Glassmorphism UI:** A modern, frosted-glass aesthetic built with CSS `backdrop-filter` and carefully managed transparency layers.
* **🧠 Intelligent "Lifestyle" Engine:** Instead of raw numbers, the app processes data to offer actionable advice (e.g., *"High Humidity! Use anti-frizz serum"* or *"UV Index High! Wear SPF"*).
* **🗺️ Integrated Mapping:** Features a custom-styled Leaflet.js map (Dark Mode) that automatically centers on the searched location.
* **⚡ Smart Notifications:** A custom "Toast" notification system that slides in with non-intrusive updates.

## ⚙️ Technical Highlights (Under the Hood)

Professional problem-solving was a core part of this build:

* **Race Condition Handling:** Heavy video assets often load slower than text JSON data, causing UI "pops." I implemented `video.onloadeddata` listeners to synchronize the UI fade-in only *after* the video buffer is ready.
* **Asynchronous State Management:** Managed multiple async data streams (Weather API + Map Tiles + DOM updates) to ensure the UI remains responsive during data fetching.
* **Secure Deployment:** Configured GitHub Pages to handle HTTPS protocols correctly, resolving Mixed Content errors often seen with external APIs.
* **Modern CSS Architecture:** Utilized CSS Variables (`:root`) and the new CSS Nesting capabilities for a maintainable and scalable codebase.

## 🛠️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/rashmiwijemanna/weather_app.git](https://github.com/rashmiwijemanna/weather_app.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd weather_app
    ```
3.  **Launch:**
    Simply open `index.html` in your favorite browser (or use the Live Server extension in VS Code).

 ## 📚 Resources & Credits

* **Icons:** [FontAwesome](https://fontawesome.com/) (Free Tier) - Used for weather conditions and UI elements.
* **Fonts:** [Google Fonts](https://fonts.google.com/) - (Poppins / Roboto).
* **Map:** [Leaflet.js](https://leafletjs.com/) & [OpenStreetMap](https://www.openstreetmap.org/).
* **Data API:** [WeatherAPI.com](https://www.weatherapi.com/) - Provided real-time weather and forecast data.
* **Video Backgrounds:** Sourced from royalty-free platforms (Pexels/Pixabay).

## 🔮 Future Roadmap

* [ ] Add a 5-day forecast toggle.
* [ ] Implement a Unit Converter (°C / °F).
* [ ] Add "Geolocate Me" button for one-click local weather.

---

<div align="center">
  <p>Made with ❤️ and code by <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-URL/">Rashmi Wijemanna</a></p>
</div>
