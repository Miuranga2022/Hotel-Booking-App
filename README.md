🏨 Hotel Booking App

A full-stack hotel booking platform where users can browse hotels, view room details, and create bookings. Hotel owners can manage rooms and bookings through dedicated dashboard pages.

🔗 Live Demo:
https://hotel-booking-alpha-ten-73.vercel.app/

🚀 Tech Stack
Frontend

⚛️ React

⚡ Vite

🎨 Tailwind CSS

🧭 React Router

Backend

🟢 Node.js

🚂 Express

🍃 MongoDB (Mongoose)

☁️ Cloudinary (Image Uploads)

✉️ Nodemailer (Email Notifications)

✨ Features
👤 User Features

Browse available hotels

View hotel and room details

Book hotel rooms

Secure authentication

Manage personal bookings

🏨 Hotel Owner Features

Owner dashboard

Add and manage hotel rooms

Upload room images

Track bookings

🔐 Security

Authentication system

Protected routes

Environment variable configuration

📸 Screenshots

Add screenshots to make your repository visually appealing.

screenshots/
  home.png
  hotel-details.png
  booking-page.png
  dashboard.png

Example:

Home Page




Hotel Details




📁 Project Structure
Hotel-Booking-App
│
├── client/          # React Frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── server/          # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
└── README.md
⚙️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/yourusername/hotel-booking-app.git
cd Hotel-Booking-App
🖥 Backend Setup

Install dependencies:

cd server
npm install

Create a .env file inside server/ and add:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

Start the backend server:

npm run dev
💻 Frontend Setup

Open another terminal:

cd client
npm install
npm run dev

The frontend will start on:

http://localhost:5173
📜 Available Scripts
Client
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
Server
npm run dev       # Start server using nodemon
npm start         # Start server normally
🌍 Deployment

Both client and server can be deployed on Vercel.

Each folder includes a vercel.json configuration file.

Deployment structure:

Frontend → Vercel
Backend  → Vercel Serverless API
📡 API Endpoints (Example)
GET    /api/hotels
GET    /api/hotels/:id
POST   /api/bookings
GET    /api/bookings/user
POST   /api/auth/login
POST   /api/auth/register
🔮 Future Improvements

Potential enhancements:

💳 Stripe payment integration

⭐ Hotel rating and review system

🔍 Search and filtering

📅 Booking calendar

🔔 Email and push notifications

🛠 Admin dashboard

🤝 Contributing

Contributions are welcome.

Fork the repository

Create a new branch

git checkout -b feature/new-feature

Commit your changes

git commit -m "Add new feature"

Push the branch

git push origin feature/new-feature

Open a Pull Request

📄 License

This project is licensed under the MIT License.

⭐ If you like this project, consider giving it a star on GitHub.
