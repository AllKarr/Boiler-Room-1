# 🚀 Boiler Room Referral App

A simple **referral system demo** built with **Node.js**, **Express**, and **TypeScript**.  
It shows how to track and pass referral codes between a landing page and a registration form.

---

## 📦 Dependencies

Core dependencies:

- [express](https://www.npmjs.com/package/express) – Web server framework  
- [express-session](https://www.npmjs.com/package/express-session) – Session handling  
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) – Parse & store cookies  
- [ejs](https://www.npmjs.com/package/ejs) – View templating engine  
- [typescript](https://www.npmjs.com/package/typescript) – TypeScript support  
- [ts-node](https://www.npmjs.com/package/ts-node) – Run `.ts` files directly  
- [nodemon](https://www.npmjs.com/package/nodemon) – Auto-restart dev server  

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/AllKarr/Boiler-Room-1.git
   cd Boiler-Room-1

---

2. **Navigate into the folder**
    ```bash
    cd Boiler-Room-1

---

3. **Install dependencies**
    ```bash
    npm install

---

4. **Start the dev server**
    ```bash
    npm run dev

---

5. **Open in your browser**
    ```bash
    http://localhost:4000

---

## ⚙️ How the Refferal System Works

---

<h1> Step 1 </h1> - Landing Page (/)

* Open the site without the referral:
    ```bash
    http://localhost:4000/
    ```
    -> No referrer is shown.

* Open with a referral code:
    ```bash
    http://localhost:4000/?ref=Gandalf
    ```
    -> Saves "Gandalf" as your referrer in session and cookie.

---

Step 2 - Registration Page (/register)

* Go to:
    ```bash
    http://localhost:4000/register
    ```
* If a referral exists, it will show:
    ```bash
    You were referred by: Gandalf
    ```
* If no referral was passed, it defaults to:
    ```bash
    You were referred by: anonymous
    ```

---

Step 3 - Submit Registration

* Fill out the form with name + email.
* After submission, you’ll see confirmation:
    ```bash
    ✅ Thanks for registering, Bob (bob@email.com)
    You were referred by: Gandalf
    ```