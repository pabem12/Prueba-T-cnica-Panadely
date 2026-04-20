# 📦 Gestión de Inventario - Fullstack App

Aplicación web con **Angular + TailwindCSS** en el frontend y **Django + DRF** en el backend.

---

## 🚀 Tecnologías utilizadas

### Backend
- **Django 5.x** + Django REST Framework
- **SQLite** (base de datos)
- **JWT** para autenticación
- **Django CORS Headers**

### Frontend
- **Angular 17+**
- **TailwindCSS 3**
- **TypeScript**

---

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Python 3.11+** - [Descargar](https://www.python.org/downloads/)
- **Node.js 22.12+** - [Descargar](https://nodejs.org/)
- **Git** - [Descargar](https://git-scm.com/)

---

## 🔧 Instalación y configuración

### 1️⃣ Clonar el repositorio

```bash
git clone <URL-DEL-REPOSITORIO>
cd Prueba-Tecnica-Panadely

🖥️ Backend (Django)

2️⃣ Configurar el entorno virtual

cd backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En Linux/Mac:
source venv/bin/activate

3️⃣ Instalar dependencias

pip install -r requirements.txt

o

pip install django djangorestframework django-cors-headers djangorestframework-simplejwt

4️⃣ Configurar la base de datos

python manage.py makemigrations
python manage.py migrate

5️⃣ Crear usuario administrador (para pruebas)

python manage.py createsuperuser

6️⃣ Ejecutar el servidor backend

python manage.py runserver




💻 Frontend (Angular)

cd frontend
npm install

npm install -D tailwindcss@3 postcss@8 autoprefixer@10
npx tailwindcss init

ng serve -o

🔐 Credenciales de prueba

Usuario: pabem
Contraseña: P123456.


📂 Estructura del proyecto

Prueba-Tecnica-Panadely/
├── backend/                 # Django backend
│   ├── api/                 # App principal
│   │   ├── models.py        # Modelo Producto
│   │   ├── views.py         # API endpoints
│   │   ├── serializers.py   # DTO
│   │   └── urls.py          # Rutas API
│   ├── backend/             # Configuración Django
│   ├── db.sqlite3           # Base de datos (local)
│   ├── manage.py
│   └── requirements.txt
├── frontend/                # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── login/
│   │   │   │   └── productos/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   └── interceptors/
│   │   ├── styles.css       
│   │   └── index.html
│   ├── angular.json
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
└── README.md