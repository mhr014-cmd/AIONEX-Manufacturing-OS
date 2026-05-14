# AIONEX Manufacturing OS

## Brief One Line Summary
AIONEX Manufacturing OS is a modern AI-powered Manufacturing ERP platform designed to streamline production, inventory, shipment, analytics, and operational workflows for smart manufacturing enterprises.

---

# Overview
AIONEX Manufacturing OS is a next-generation ERP solution currently under active development. The platform is built to modernize manufacturing operations by integrating production management, inventory tracking, shipment workflows, analytics dashboards, and AI-driven operational intelligence into one centralized ecosystem.

The system follows a modern full-stack architecture using:

- FastAPI for backend APIs
- PostgreSQL for persistent storage
- React + TypeScript for frontend UI
- TailwindCSS for enterprise-grade interface design
- JWT-based authentication architecture
- AI Copilot integration for intelligent ERP assistance

The project currently includes:

- Production Management
- Shipment Management
- Inventory Management
- AI Copilot
- Dynamic KPI Dashboard
- Live Analytics Dashboard
- PostgreSQL Persistence Layer
- FastAPI REST APIs
- React Enterprise Frontend

AIONEX is being designed as a scalable smart manufacturing operating system capable of supporting advanced ERP automation and AI-powered business optimization.

---

# Problem Statement
Traditional manufacturing management systems often suffer from:

- Fragmented operational workflows
- Manual inventory tracking
- Lack of real-time analytics
- Delayed production visibility
- Poor shipment coordination
- Limited automation
- No AI-assisted operational intelligence
- Legacy UI/UX experiences

Manufacturing enterprises require:

- Real-time production visibility
- Smart inventory tracking
- Automated operational workflows
- Centralized ERP management
- AI-powered insights
- Dynamic dashboards
- Scalable cloud-ready architecture

AIONEX Manufacturing OS addresses these challenges by building a unified, intelligent, and modern ERP ecosystem for manufacturing operations.

---

# Dataset
Currently, the system uses operational ERP data stored inside PostgreSQL.

Primary data entities include:

| Module | Description |
|---|---|
| Production | Manufacturing orders, status, quantities |
| Inventory | Stock levels, inventory items |
| Shipment | Shipment records and logistics tracking |
| Users | Authentication and role management |
| Notifications | ERP alerts and operational events |
| AI Chat | AI assistant conversations |

Future dataset expansion may include:

- Supplier datasets
- Purchase order datasets
- Forecasting datasets
- Manufacturing KPI datasets
- Predictive maintenance datasets
- Revenue analytics datasets

---

# Tools and Technologies

## Frontend
- React
- TypeScript
- Vite
- TailwindCSS
- Axios
- Recharts (planned advanced analytics)

## Backend
- FastAPI
- Python
- SQLAlchemy
- Alembic
- JWT Authentication
- Pydantic

## Database
- PostgreSQL

## AI Integration
- AI Copilot Architecture
- Ollama Service
- Future OpenAI Integration

## DevOps & Development
- Git
- GitHub
- PyCharm
- Node.js
- npm
- Virtual Environment (.venv)

---

# Methods
The system follows a modular ERP architecture.

## Backend Architecture
The backend uses FastAPI with modular route-based architecture.

Key backend layers:

- API Routes
- Business Services
- Database Models
- Schemas
- Authentication Layer
- AI Services

## Frontend Architecture
The frontend follows a component-driven React architecture.

Key frontend layers:

- Pages
- Components
- Widgets
- Services
- API Layer
- Authentication Store

## Database Design
The system uses relational database modeling with PostgreSQL.

Current core models:

- User
- Production
- Inventory
- Shipment
- Notification
- AI Chat

## Authentication
JWT authentication architecture is implemented with protected routes and role-based expansion planned.

## Analytics
Dynamic KPI dashboards are implemented for operational visibility.

Current analytics include:

- Production metrics
- Shipment metrics
- Inventory metrics
- KPI summaries

---

# Key Insights
AIONEX Manufacturing OS demonstrates:

- Scalable ERP architecture
- Enterprise-grade frontend design
- AI integration capability
- Modular backend structure
- Real-time operational visibility
- Manufacturing workflow digitization
- Expandable ERP ecosystem

The platform already establishes a strong foundation for becoming a fully intelligent manufacturing ERP system.

---

# Dashboard / Model / Output

## Current Dashboard Features
- Dynamic KPI Cards
- Production Monitoring
- Shipment Tracking
- Inventory Visualization
- Enterprise Sidebar Navigation
- AI Copilot Interface
- Responsive Dashboard Layout

## AI Copilot
Current AI functionality includes:

- Rule-based ERP assistant
- ERP query responses
- Manufacturing assistance architecture

Future AI roadmap:

- OpenAI Integration
- Production Forecasting
- Delay Prediction
- Inventory Optimization
- Smart ERP Q&A

## Analytics
Current analytics are partially static and planned for database-driven upgrades.

Future analytics roadmap:

- Production trends
- Shipment trends
- Revenue analytics
- Inventory consumption analytics
- Real-time charting

---

# How to Run this Project?

## Prerequisites
Install:

- Python 3.10+
- Node.js
- PostgreSQL
- npm
- Git

---

## Backend Setup

### Step 1 — Navigate to Backend
```bash
cd backend
```

### Step 2 — Create Virtual Environment
```bash
python -m venv .venv
```

### Step 3 — Activate Virtual Environment

#### Windows
```bash
.venv\Scripts\activate
```

#### Linux / Mac
```bash
source .venv/bin/activate
```

### Step 4 — Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 5 — Configure Environment Variables
Create `.env` file:

```env
DATABASE_URL=postgresql://username:password@localhost/aionex
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### Step 6 — Run Database Migrations
```bash
alembic upgrade head
```

### Step 7 — Run Backend Server
```bash
uvicorn app.main:app --reload
```

Backend runs at:
```text
http://127.0.0.1:8000
```

---

## Frontend Setup

### Step 1 — Navigate to Frontend
```bash
cd frontend
```

### Step 2 — Install Dependencies
```bash
npm install
```

### Step 3 — Run Frontend
```bash
npm run dev
```

Frontend runs at:
```text
http://localhost:5173
```

---

# Results & Conclusion
AIONEX Manufacturing OS successfully demonstrates a modern ERP architecture for manufacturing enterprises.

## Achievements

- Enterprise-grade UI implementation
- Functional FastAPI backend
- PostgreSQL database integration
- Production management system
- Shipment management system
- Inventory management system
- AI Copilot integration
- KPI dashboard implementation
- Modular scalable architecture

## Conclusion
The project establishes a strong foundation for a fully intelligent smart manufacturing ERP platform.

Its modular architecture allows future upgrades including:

- AI-powered automation
- Predictive analytics
- Workflow orchestration
- Advanced ERP intelligence
- Enterprise authentication systems
- Real-time operational monitoring

AIONEX has significant potential for expansion into a production-ready Industry 4.0 ERP ecosystem.

---

# Future Work

## PHASE 2 — SMART ERP FEATURES

### 1. Inventory Intelligence
Planned features:

- Auto low stock alerts
- Material consumption tracking
- Auto inventory deduction from production
- Reorder level system
- Supplier management
- Purchase order system

---

### 2. Notification Center
Planned features:

- Low stock alerts
- Shipment delay alerts
- Production completion notifications
- AI recommendations
- Real-time unread badge system

---

### 3. Real Database Charts
Planned upgrades:

- Production trends
- Shipment analytics
- Inventory usage analytics
- Revenue analytics
- Recharts integration
- Real-time API-driven charts

---

### 4. AI Copilot Upgrade
Future AI capabilities:

- OpenAI integration
- Production forecasting
- Delay prediction
- Inventory optimization
- Smart ERP querying

---

### 5. Authentication & Roles
Planned roles:

- Admin
- Production Manager
- Inventory Officer
- Shipment Manager

JWT-protected role-based authorization will be expanded.

---

### 6. ERP Workflow Automation
Planned automation workflows:

- Production order auto-reserves inventory
- Shipment auto-updates order status
- Inventory auto-deducts after production
- Automated notifications

---

### 7. Export System
Planned exports:

- PDF reports
- Excel exports
- Invoice generation
- Shipment documents

---

### 8. Modern Enterprise UI
Planned UI upgrades:

- Collapsible sidebar
- Dark/light mode
- WebSocket real-time updates
- KPI animations
- Advanced charts
- Mobile responsive ERP design

---

# Project Structure

```text
AIONEX_Stage1_Part1_PyCharm/
│
├── backend/
│   ├── alembic/
│   ├── app/
│   │   ├── ai/
│   │   │   ├── ollama_service.py
│   │   │   └── provider.py
│   │   │
│   │   ├── core/
│   │   │   └── security.py
│   │   │
│   │   ├── models/
│   │   │   ├── ai_chat.py
│   │   │   ├── inventory.py
│   │   │   ├── notification.py
│   │   │   ├── production.py
│   │   │   ├── shipment.py
│   │   │   └── user.py
│   │   │
│   │   ├── routes/
│   │   │   ├── ai_chat.py
│   │   │   ├── ai_routes.py
│   │   │   ├── analytics.py
│   │   │   ├── auth_routes.py
│   │   │   ├── inventory.py
│   │   │   ├── inventory_analytics.py
│   │   │   ├── notification.py
│   │   │   ├── production.py
│   │   │   └── shipment.py
│   │   │
│   │   ├── schemas/
│   │   │   ├── auth_schema.py
│   │   │   ├── inventory.py
│   │   │   ├── production.py
│   │   │   ├── shipment.py
│   │   │   └── user_schema.py
│   │   │
│   │   ├── services/
│   │   │   ├── ai_service.py
│   │   │   └── auth_service.py
│   │   │
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── init_db.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   ├── alembic.ini
│   └── .env.example
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── ai.ts
│   │   │   └── axios.ts
│   │   │
│   │   ├── components/
│   │   │   ├── AnalyticsChart.tsx
│   │   │   ├── KPICard.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AICopilotPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── InventoryPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── ProductionPage.tsx
│   │   │   └── ShipmentPage.tsx
│   │   │
│   │   ├── routes/
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   ├── services/
│   │   │   └── api.ts
│   │   │
│   │   ├── store/
│   │   │   └── authStore.ts
│   │   │
│   │   ├── widgets/
│   │   │   ├── ProductionWidget.tsx
│   │   │   └── ShipmentWidget.tsx
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── PYCHARM_RUN_GUIDE.md
├── README.md
└── .gitignore
```

---

# Software Requirements Specification (SRS)

# 1. Introduction

## 1.1 Purpose
The purpose of AIONEX Manufacturing OS is to provide a centralized ERP platform for managing manufacturing operations including production, inventory, shipment, analytics, and AI-assisted workflows.

## 1.2 Scope
The system is intended for manufacturing companies seeking digital transformation through smart ERP systems.

## 1.3 Objectives

- Improve operational visibility
- Centralize ERP workflows
- Enable AI-assisted manufacturing management
- Automate inventory and shipment operations
- Provide real-time dashboards and analytics

---

# 2. Functional Requirements

## Authentication Module
- User login
- JWT authentication
- Protected routes
- Role-based access control (future)

## Production Module
- Create production orders
- Track production status
- Monitor production metrics

## Inventory Module
- Add inventory items
- Update stock levels
- Inventory analytics
- Low stock tracking (future)

## Shipment Module
- Manage shipment records
- Shipment tracking
- Shipment analytics

## AI Copilot Module
- ERP assistance
- AI operational support
- Future predictive intelligence

## Dashboard Module
- KPI visualization
- Analytics charts
- Operational monitoring

---

# 3. Non-Functional Requirements

## Performance
- Fast API responses
- Responsive frontend UI
- Scalable architecture

## Security
- JWT authentication
- Protected endpoints
- Secure database access

## Scalability
- Modular backend design
- Expandable database schema
- Cloud deployment readiness

## Usability
- Enterprise-grade UI
- Easy navigation
- Responsive dashboard design

---

# 4. System Architecture

## Frontend
React + TypeScript + TailwindCSS

## Backend
FastAPI + Python

## Database
PostgreSQL

## AI Layer
Ollama / Future OpenAI Integration

---

# 5. Future Scope

- Smart inventory automation
- AI forecasting systems
- Real-time notifications
- Advanced ERP workflows
- Mobile ERP support
- Enterprise reporting system
- AI optimization engine

---

# Author & Contact

## Author
AIONEX Manufacturing OS Development Team

## Contact
For collaboration, contributions, or enterprise discussions:

- GitHub Repository: Add repository link here
- Email: Add contact email here
- LinkedIn: Add professional profile here

