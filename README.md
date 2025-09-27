## ✨ Features

- 🚀 **High Performance** - Built with Node.js for fast and scalable API responses
- 🧩 **Modular Architecture** - Easily extend and maintain with clear module separation
- 🔐 **JWT Authentication** - Secure user authentication and authorization
- ⚡ **Redis Caching** - Fast in-memory caching for improved performance
- 🛠️ **Easy Setup** - Minimal configuration, ready to run with Docker/Docker Compose
- 📝 **Consistent Error Handling** - Structured and meaningful error responses
- 🔄 **RESTful Endpoints** - Standardized API design for predictable integration
- 📦 **Extensible** - Easily add new features and modules without breaking existing code
- 🌍 **Cross-Platform** - Works on Linux, macOS, and Windows environments
- 📊 **Logging & Monitoring** - Built-in logs for requests, errors, and system events
- 🛡️ **Security Best Practices** - Input validation, sanitization, and secure headers

## 🚀 Quick Start
### 1. Run with Docker Compose

This option will start both the API and the PostgreSQL database using Docker.

1. **Start the containers**:

```bash
docker-compose up -d
```
2. **Stop the containers when done**:
```
docker-compose down
```
Access the API at: `http://localhost:3000` (or the port specified in your [.env](https://github.com/alejyoo/blockenfy-wallet-api/blob/master/.env.example)).
> 💡 Tip: Make sure Docker and Docker Compose are installed and running on your machine.

### 2. Run Locally with Your Own Database
If you want to run the API locally without Docker:
1. **Ensure PostgreSQL is running** on your machine.
2. **Create a `.env` file** in the project root with the following content:
```env
PORT=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
DATABASE_URL=
```
3. **Install dependencies**:
```bash
pnpm install
```
4. **Start the server:**
```bash
pnpm start
```
Access the API at: `http://localhost:3000` (or the port specified in your `.env` file).

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](contributing.md) for details.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m "Add some amazing feature"`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.


## 🔏 License

This project is licensed under the [**MIT License**](/LICENSE).
