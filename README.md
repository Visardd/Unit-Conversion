# Unit Converter Web App

A simple unit conversion web application built with **HTML, CSS, and JavaScript**.  
It converts between common units of **length, volume, and mass**, and allows you to **save previous conversions** to local storage for later reference.

---

## 🚀 Features
- Convert:
  - **Length:** meters ↔ feet
  - **Volume:** litres ↔ gallons
  - **Mass:** kilograms ↔ pounds
- Save conversions to a list for quick reference
- Persist saved conversions using **localStorage**
- Clear saved conversions with one click

---

## 🛠️ How It Works
1. Enter a number into the input field.
2. Click **Convert** to see results displayed for all unit categories.
3. Click **Save** to add the current input’s conversions to the saved list.
4. Reload the page and your saved list will still be there (thanks to localStorage).
5. Click **Delete All** to clear saved conversions.

---

## 📂 Project Structure
index.html # Main HTML page with UI elements
style.css # Styling for the app (optional)
app.js # JavaScript logic (conversion + localStorage handling)



---

## 📸 Example
**Input:** `10`  
- 10 meters = 32.8084 feet  
- 10 litres = 2.6417 gallons  
- 10 kilos = 22.0500 pounds  

**Saved List Example:**
10 litres = 2.6417 gallons
10 kilos = 22.0500 pounds
10 meters = 32.8084 feet

---

## 🧑‍💻 Installation & Usage
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/unit-converter.git
Open index.html in your browser.

Start converting units instantly.

No build tools or frameworks required — this is a pure vanilla JavaScript project.

## 💡 Future Improvements
Add more unit categories (temperature, speed, area, etc.)

Make saved items clickable to re-run conversions

Add responsive design for mobile devices

Allow deleting individual saved conversions
