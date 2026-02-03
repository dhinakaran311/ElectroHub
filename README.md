# ElectroHub

<div align="center">

**A Modern Full-Stack Electronics eCommerce Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-Prisma-orange?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**ElectroHub** is a production-ready, full-stack eCommerce platform built with Next.js 15, TypeScript, and Node.js. Originally developed as **Singitronic** for a Software Engineering college project with comprehensive 40-page documentation following the waterfall model, this platform has evolved into a robust, open-source solution for electronics retail.

### Why ElectroHub?

- ✅ **Production-Ready**: Fully tested with 350+ manual test cases
- ✅ **Complete Admin Dashboard**: Manage products, orders, users, and categories
- ✅ **Modern Tech Stack**: Next.js 15, TypeScript, Prisma ORM, MySQL
- ✅ **SEO Optimized**: Server-side rendering with Next.js for better search rankings
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Secure Authentication**: NextAuth.js with role-based access control
- ✅ **Bulk Operations**: CSV import/export for products
- ✅ **Well Documented**: Comprehensive guides and troubleshooting docs

---

## ✨ Features

### 🛍️ Customer Features
- **Product Browsing**: Advanced filtering, sorting, and search functionality
- **Shopping Cart**: Persistent cart with real-time updates
- **Wishlist**: Save favorite products for later
- **User Authentication**: Secure registration and login
- **Order Management**: Track order history and status
- **Responsive Design**: Seamless experience across all devices

### 🎛️ Admin Dashboard
- **Product Management**: CRUD operations with bulk upload/delete via CSV
- **Order Management**: View, update, and track all orders
- **Category Management**: Organize products into hierarchical categories
- **User Management**: Manage customer accounts and roles
- **Analytics Dashboard**: Sales insights and performance metrics
- **Secure Access**: Role-based authentication and authorization

### 🔧 Technical Features
- **Server-Side Rendering**: Fast page loads and SEO benefits
- **API Rate Limiting**: Protection against abuse
- **File Upload**: Image handling with validation
- **Database Migrations**: Version-controlled schema changes with Prisma
- **Error Logging**: Comprehensive logging with Winston
- **Type Safety**: Full TypeScript coverage

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MySQL](https://dev.mysql.com/downloads/installer/) (v8.0 or higher)
- (Optional) [HeidiSQL](https://www.heidisql.com/) or any MySQL client

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ElectroHub.git
   cd ElectroHub
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Configure environment variables**

   Create a `.env` file in the **root directory**:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
   NODE_ENV=development
   DATABASE_URL="mysql://username:password@localhost:3306/electrohub?sslmode=disabled"
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

   Create a `.env` file in the **server directory**:
   ```env
   NODE_ENV=development
   DATABASE_URL="mysql://username:password@localhost:3306/electrohub?sslmode=disabled"
   ```

   > **Note**: Replace `username` and `password` with your MySQL credentials.

5. **Run database migrations**
   ```bash
   cd server
   npx prisma migrate dev
   ```

6. **Seed the database with demo data**
   ```bash
   cd utills
   node insertDemoData.js
   cd ..
   ```

7. **Start the backend server**
   ```bash
   node app.js
   ```

8. **Start the frontend (in a new terminal)**
   ```bash
   # From the root directory
   npm run dev
   ```

9. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:3001](http://localhost:3001)

### Default Admin Credentials

After seeding the database, you can log in to the admin dashboard with:
- **Email**: `admin@electrohub.com`
- **Password**: Check the demo data script or refer to [ADMIN-LOGIN-GUIDE.md](./ADMIN-LOGIN-GUIDE.md)

---

## 📚 Documentation

Comprehensive documentation is available in the repository:

| Document | Description |
|----------|-------------|
| [QUICK-START-NOW.md](./QUICK-START-NOW.md) | Fast setup guide for immediate deployment |
| [SETUP-GUIDE.md](./SETUP-GUIDE.md) | Detailed installation and configuration |
| [ADMIN-LOGIN-GUIDE.md](./ADMIN-LOGIN-GUIDE.md) | Admin dashboard access instructions |
| [BULK-UPLOAD-GUIDE.md](./BULK-UPLOAD-GUIDE.md) | CSV product import/export guide |
| [DELETE-BULK-UPLOAD-GUIDE.md](./DELETE-BULK-UPLOAD-GUIDE.md) | Batch product deletion guide |
| [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) | Production deployment instructions |
| [ADMIN-ACCESS-TROUBLESHOOTING.md](./ADMIN-ACCESS-TROUBLESHOOTING.md) | Common issues and solutions |
| [PROJECT-INFO.md](./PROJECT-INFO.md) | Detailed project architecture and design |

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, DaisyUI, Flowbite
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Headless UI, React Icons
- **Charts**: ApexCharts

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Prisma
- **Authentication**: bcryptjs
- **File Upload**: express-fileupload
- **Logging**: Winston, Morgan
- **Security**: CORS, Rate Limiting

### DevOps
- **Database Client**: Prisma Studio
- **Version Control**: Git
- **Package Manager**: npm
- **Deployment**: Vercel (Frontend), Custom (Backend)

---

## 📁 Project Structure

```
ElectroHub/
├── app/                    # Next.js app directory (pages, layouts)
├── components/             # React components
│   ├── admin/             # Admin dashboard components
│   ├── cart/              # Shopping cart components
│   ├── products/          # Product display components
│   └── ...
├── server/                # Backend API
│   ├── controllers/       # Route controllers
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── utills/            # Utility functions
│   └── prisma/            # Database schema and migrations
├── lib/                   # Shared libraries
├── utils/                 # Frontend utilities
├── public/                # Static assets
├── types/                 # TypeScript type definitions
├── prisma/                # Frontend Prisma client
└── docs/                  # Additional documentation
```

---

## 🎨 Screenshots

### Customer-Facing Pages

<details>
<summary><b>Home Page</b></summary>

![Home Page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a48c092d-1f19-4bae-a480-0b5862630e1c)
</details>

<details>
<summary><b>Shop Page</b></summary>

![Shop Page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1133effb-0511-40c6-aee5-119404c5af34)
</details>

<details>
<summary><b>Product Details</b></summary>

![Product Page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/443ea3e2-4d32-4d15-aa3b-436cbae0eade)
</details>

<details>
<summary><b>Shopping Cart</b></summary>

![Cart Page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/b9d326be-342c-4f6a-af64-34794f6c39eb)
</details>

<details>
<summary><b>Checkout</b></summary>

![Checkout Page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a458d931-9df2-4e3d-bf3f-702c1a3ba9e9)
</details>

### Admin Dashboard

<details>
<summary><b>Orders Management</b></summary>

![Admin Orders](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/498b07f4-422c-46c5-b2e4-ed2a93306b7a)
</details>

<details>
<summary><b>Products Management</b></summary>

![Admin Products](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e26822ab-6c7e-4474-9161-288a5bb3476f)
</details>

<details>
<summary><b>Categories Management</b></summary>

![Admin Categories](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/9e4a54d7-5bbb-4f1b-bdab-43c1079510e1)
</details>

<details>
<summary><b>Users Management</b></summary>

![Admin Users](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e14e8f2c-4377-42fd-b89b-d4868cc11b11)
</details>

---

## 🧪 Testing & Quality Assurance

This project follows rigorous software engineering practices with comprehensive testing:

- **350+ Manual Test Cases**: Documented in detailed test scripts
- **Unit Testing**: 75 errors found (72.8% efficiency)
- **Integration Testing**: 28 errors found (27.2% efficiency)
- **End-to-End Testing**: Complete user flow validation
- **Testing Methods**: Black-box and white-box techniques
- **Error Tracking**: Detailed error reports with priority classification

For more details, see the [Software Engineering Documentation](#-software-engineering-process) section.

---

## 🔄 Software Engineering Process

This project was developed following the **Waterfall Model** with these phases:

1. **Requirements Analysis**: Functional and non-functional requirements, use case diagrams
2. **System Design**: Architecture definition, database design, component structure
3. **Implementation**: Code development with comprehensive documentation
4. **Testing**: Multi-level testing with detailed error tracking
5. **Deployment**: Production deployment with monitoring

### Key Artifacts
- 40-page software engineering documentation
- Use case diagrams and system architecture
- Component hierarchy diagrams
- Test scripts and error reports
- Project management via Plaky

![Waterfall Model](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/2c8546ba-b57f-4467-9db9-d09cec46beb2)

---

## 🎥 Video Tutorial

Watch the complete setup guide:

[![Setup Tutorial](https://img.youtube.com/vi/Ry0aOMws0gE/0.jpg)](https://www.youtube.com/watch?v=Ry0aOMws0gE)

[**Watch on YouTube**](https://www.youtube.com/watch?v=Ry0aOMws0gE)

---

## 🤝 Contributing

Contributions are welcome! This is an open-source community project.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👥 Authors

- **Original Project**: Created by [@Kuzma02](https://github.com/Kuzma02) and [@cesnak02](https://github.com/cesnak02)
- **Academic Supervision**: Prof. Violeta Tomašević & Prof. Petar Kresoja (Singidunum University)

---

## 🌟 Acknowledgments

- Singidunum University for academic guidance
- Book "Razvoj aplikativnog softvera" by Violeta Tomašević
- Open-source community for various libraries and tools
- All contributors who have helped improve this project

---

## 🔗 Related Projects

Explore other open-source eCommerce solutions:

- [All-For-Car Ecommerce](https://github.com/Kuzma02/All-For-Car-Ecommerce) - High-performance automotive eCommerce
- [VSD Official Website](https://github.com/Kuzma02/VSD-Official-Website) - Car parts company website
- [Luxury Cosmetics eCommerce](https://github.com/Kuzma02/Luxury-Cosmetics-eCommerce-NextJS) - Premium cosmetics shop
- [Free Admin Dashboard](https://github.com/Kuzma02/Free-Admin-Dashboard) - Custom admin dashboard
- [Fashion eCommerce Shop](https://github.com/Kuzma02/Fashion-eCommerce-Shop-in-React) - Premium fashion store

---

## 📧 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting guide](./ADMIN-ACCESS-TROUBLESHOOTING.md)
2. Review existing [GitHub Issues](https://github.com/yourusername/ElectroHub/issues)
3. Create a new issue with detailed information

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by the ElectroHub Team

</div>
