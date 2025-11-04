# Restaurant Menu Application

A full-stack restaurant menu management application built with Angular frontend and Node.js backend.

## 🚀 Features

- **Menu Management**: Add, view, update, and delete menu items
- **Responsive Design**: Works on desktop and mobile devices
- **RESTful API**: Backend API for menu operations
- **Modern Tech Stack**: Angular 20+ and Node.js with Express

## 🛠️ Tech Stack

### Frontend
- **Angular 20+**: Modern web framework
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Responsive styling

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: Database (configured for connection)

## 📁 Project Structure

```
restaurant-menu/
├── frontend/           # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── ...
│   │   └── ...
│   └── package.json
├── backend/            # Node.js API
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thoratidurgachiranjeevi4263/res_menu.git
   cd res_menu
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   - Copy `.env.example` to `.env` in the root directory
   - Configure your MongoDB connection string and other environment variables

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on `http://localhost:3000`

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on `http://localhost:4200`

## 🌐 Deployment

This application is configured for deployment on multiple platforms:

- **Vercel**: Frontend deployment configuration included
- **Heroku**: Procfile and deployment script included
- **Render**: render.yaml configuration included
- **AWS Amplify**: amplify.yml configuration included

## 📝 API Endpoints

- `GET /api/items` - Get all menu items
- `POST /api/items` - Create a new menu item
- `PUT /api/items/:id` - Update a menu item
- `DELETE /api/items/:id` - Delete a menu item

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Durga Chiranjeevi Thorati**
- GitHub: [@thoratidurgachiranjeevi4263](https://github.com/thoratidurgachiranjeevi4263)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Express.js community for the robust backend framework
- All contributors who help improve this project