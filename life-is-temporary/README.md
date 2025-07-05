## 🌟 What is the Memory Wall?

* A **Memory Wall** is a screen in your app that visually displays all the gratitude notes the user has written.
* Each note shows up as a **card** with a short preview of the message, the date it was created, and optionally an image.
* Cards are arranged in a grid or timeline-like layout — think Pinterest or a collage of sticky notes.
* Clicking a card opens it in detail, letting the user read the full note or delete it.
* Over time, it becomes a personal gallery of positive memories: a powerful, emotional centerpiece for your app.

---

## ✅ App Features Recap

🔹 **Gratitude Notes**:
Users write short messages about something/someone they’re grateful for.

🔹 **Memory Wall**:
Visually engaging display of these notes as cards in a grid/timeline.

🔹 **Reminders**:
Optional notifications reminding the user to reflect and add new notes.

🔹 **Local Storage**:
Notes saved locally using `localStorage` or `electron-store` so they persist across app restarts.

🔹 **Nice UI**:
Clean, modern design with light/dark mode and smooth animations.

---

## 📅 Step-by-Step Plan for 1 Week

### 🔎 **Day 1 – Project Setup**

* Initialize your React + Electron app.

  * Recommended: Vite + Electron Forge or Electron Builder.

* Create basic folder structure:
  `/src/components`, `/src/pages`, `/src/utils`.

* Build a simple `HomePage` that says “Welcome to LIT”.

---

### 📝 **Day 2 – Note Input**

* Create a `NoteInput` component:

  * Text input for the gratitude note.
  * Optional: allow adding a photo.
  * Save notes on submit with timestamp.
* Save notes to local storage using `electron-store` or `localStorage`.

---

### 🗂️ **Day 3 – Memory Wall Grid**

* Build a `MemoryWall` component to display saved notes:

  * Read notes from storage.
  * Show each note as a `NoteCard`.
  * Layout notes in a grid using CSS Grid or a library like `react-masonry-css`.
* Make sure new notes appear instantly after adding.

---

### 🖱️ **Day 4 – Note Details & Delete**

* Build `NoteDetailModal`:

  * Open when a note card is clicked.
  * Show full text and optional image.
  * Add a delete button to remove a note from storage.

---

### 🔔 **Day 5 – Reminders & Notifications**

* Use Electron’s `Notification` API to send desktop reminders.
* Create a simple settings modal or page to set how often reminders appear (e.g., daily or every X days).

---

### 🎨 **Day 6 – UI Polish**

* Add theme toggle (light/dark mode).
* Polish typography, colors, and spacing for a modern look.
* Add animations to:

  * Fade in new notes.
  * Animate opening/closing of note details (e.g., with Framer Motion).

---

### 🧪 **Day 7 – Testing, Packaging, Demo**

* Test adding, viewing, deleting notes on all platforms you can (Windows/Mac/Linux).
* Package app with Electron’s packager/builder.
* Record a demo video or animated GIFs showing your app in action.
* Write a strong README: features, screenshots, your motivation, and how to install/run.

---

## 🗂️ Suggested File Structure

```

*About Section will include some info about the site how to use it a demo and some info about me
*will include my email for problems and glitches with the app
