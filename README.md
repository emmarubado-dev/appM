# appM - Proyecto Expo React Native

Este proyecto es una aplicación construida con **Expo** y **React Native**, que muestra una lista de acciones con opciones de búsqueda y detalles con gráficos de cotización de una acción en tiempo real. A continuación, encontrarás la guía completa para levantar la aplicación, junto con la estructura del proyecto.

---

## **Requisitos Previos**
Asegúrate de tener instaladas las siguientes herramientas antes de comenzar:

- **Node.js** (v20 o superior) y **npm / yarn**
- **Emulador Android/iOS** o un dispositivo físico con la app **Expo Go** instalada.
- **API Key** de [Twelve Data](https://twelvedata.com/) (permite realizar 800 requests diarios).

---

## **Estructura del Proyecto**

```bash
appM/
├── assets/              # Archivos multimedia y recursos estáticos
├── src/
│   ├── assets/
│   │   └── icons/       # Iconos SVG personalizados
│   ├── components/      # Componentes reutilizables (RenderItem, Search, TableHeader)
│   ├── helpers/         # Cliente API y utilidades
│   ├── hooks/           # Custom Hooks
│   ├── interfaces/      # Interfaces TypeScript del proyecto
│   ├── navigation/      # Configuración de las rutas
│   ├── screens/         # Pantallas (Home, Detail)
│   └── services/        # Servicios para consumir APIs
├── App.tsx              # Punto de entrada de la aplicación
├── app.json             # Configuración de la app Expo
├── babel.config.js      # Configuración de Babel
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
└── yarn.lock            # Archivo de bloqueo de Yarn



## **Guía para levantar la aplicación**

### **Paso 1: Clonar el repositorio**
Clona el proyecto desde tu repositorio de GitHub:

```bash
git clone <URL-del-repositorio>
cd appM

### **Paso 2: Instalar dependencias**
Instala todas las dependencias del proyecto con Yarn:

```bash
yarn install


Si prefieres usar npm, ejecuta:

```bash
npm install

### **Paso 3: Configurar la API Key**

Abre el archivo src/services/stockService.tsx y reemplaza el valor de la variable API_KEY con tu propia API Key de Twelve Data.

```typescript
const API_KEY = 'TU_API_KEY_AQUÍ'; // Reemplaza con tu API Key


## **Paso 4: Levantar la aplicación**
A continuación, ejecuta uno de los siguientes comandos según el entorno en el que quieras probar la app:

### **Iniciar la aplicación:**

```bash
yarn start

Abrir en Android:

```bash
yarn android

Abrir en iOS:

```bash
yarn ios

Nota: Para abrir en dispositivos físicos, escanea el QR que se muestra en la consola con la app Expo Go.

## **Uso de la Aplicación**

### **Pantalla Home:**
Muestra una lista paginada de acciones con los campos: Símbolo, Nombre, Moneda, y Tipo.
Contiene campos de búsqueda por Nombre y Símbolo para filtrar los resultados.
Al seleccionar una acción, se navega a la pantalla de detalle.

### **Pantalla de Detalle:**
Muestra los detalles de la acción seleccionada y permite visualizar un gráfico interactivo.
Opciones de intervalo: Diario, Semanal, Mensual, Anual.
Si no hay datos disponibles para mostrar, se presenta un Empty State.
