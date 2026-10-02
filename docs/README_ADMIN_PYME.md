# AdminPyme — Sistema de Control de Inventario para Venezuela

AdminPyme es una aplicacion web progresiva (PWA) disenada para pequenos y medianos negocios en Venezuela. Permite gestionar inventario, ventas, clientes, creditos y reportes con soporte completo para doble moneda (VES/USD) y tasa BCV integrada.

---

## Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS |
| Base de datos | Supabase (PostgreSQL) |
| Autenticacion | Supabase Auth |
| Graficas | Lightweight Charts v4 + SVG nativo |
| Alertas | SweetAlert2 |
| Exportacion | SheetJS (xlsx) + jsPDF |
| Escaner | @zxing/browser |
| Estado global | Zustand |
| Enrutamiento | React Router DOM v6 |
| Deploy | Vercel |

---

## Funcionalidades

### Plan Gratuito
- Dashboard con KPIs del dia (ventas, ganancia, inventario)
- Inventario de productos (hasta 25 productos)
- Ventas de contado con multiples metodos de pago
- Reportes basicos del dia
- Configuracion de tasa BCV (automatica y manual)
- Doble moneda VES/USD en tiempo real
- Alertas de stock bajo

### Plan Premium ($4.99/mes o $39.99/ano)
- Productos ilimitados
- Ventas a credito con monto inicial en USD o VES
- Modulo completo de Clientes (CRUD + historial de compras)
- Gestion de Creditos con pagos en USD y VES
- Gestion de Ventas (ver detalle, editar, revertir)
- Historial de cambios (inventario, ventas, clientes, creditos)
- Reportes Avanzados completos
- Exportacion a Excel y PDF
- Escaner de codigo de barras por camara
- Recibos por WhatsApp
- Asociar cliente en ventas de contado

---

## Modulos del sistema

### Dashboard (HomePage)
- KPIs en tiempo real: ventas, ganancia, costos, inventario
- Grafica de pastel: productos mas vendidos por valor
- Grafica de barras: ventas por metodo de pago
- Grafica de categorias del inventario
- Lista de ultimas ventas del dia en USD y VES
- Alertas de stock bajo con barra de progreso
- Accesos rapidos a todos los modulos

### Inventario (ProductosPage)
- Vista tabla (desktop) y cards (movil)
- Filtro por categoria con iconos
- Buscador en tiempo real
- Paginacion de 10 productos por pagina
- Formulario con selector de moneda USD/VES
- Calculo de ganancia y margen en tiempo real
- Indicador de stock con barra de color
- Limite de 25 productos en plan gratuito
- Escaner de codigo de barras (Premium)
- Exportacion a Excel (Premium)

### Ventas (VentaPage)
- Catalogo de productos con busqueda
- Carrito con control de stock en tiempo real
- Validacion de stock maximo por producto
- Tipo de venta: Contado o Credito (Premium)
- Selector de cliente con busqueda (Premium)
- 6 metodos de pago: Efectivo $, Efectivo Bs., Pago Movil, Transferencia, Zelle, Binance
- Recibo por WhatsApp al finalizar (Premium)
- Escaner de codigo de barras (Premium)
- Feedback visual al agregar productos

### Gestion de Ventas (GestionVentasPage)
- Historial completo de ventas
- Filtros por fecha, tipo y metodo de pago
- Ver detalle de cada venta con productos
- Editar metodo de pago de una venta
- Revertir venta (restaura stock automaticamente)
- KPIs: total, contado, credito

### Clientes (ClientesPage) — Premium
- Registro con validacion: nombre, apellido, cedula unica, telefono, ubicacion
- Busqueda en tiempo real por nombre o cedula
- Ver detalle: historial de compras contado + credito
- Resumen de deuda total por cliente
- Tabla desktop + cards movil responsivos

### Creditos (CreditosPage) — Premium
- Registro automatico al hacer venta a credito
- Pago en USD o VES con conversion automatica
- Estados: Pendiente, Parcial, Pagado
- Barra de progreso de cobro
- Filtros: Todos, Pendientes, Pagados
- KPIs: total deuda, por cobrar, cobrado, % efectividad
- Alertas de creditos vencidos

### Reportes (ReportesPage)
- Selector de fecha
- KPIs: ventas, costos, ganancia, transacciones
- Tab Resumen: grafica pastel por metodo + area por hora
- Tab Metodos: tabla con USD, VES y % del dia
- Tab Ventas: lista detallada con tasa BCV aplicada
- Exportacion Excel y PDF (Premium)

### Reportes Avanzados (ReportesAvanzadosPage) — Premium
- **Cierre de caja multimoneda**: ingresos USD y VES por metodo, tasa del dia
- **Rendimiento**: grafica dual USD/VES por periodo (diario/semanal/mensual)
- **Top 20**: productos mas vendidos con grafica de barras
- **Margenes**: ganancia y margen % por producto en USD y VES
- **Cuentas por cobrar**: creditos activos, vencidos, progreso de cobro
- **Stock**: alertas de stock minimo y agotado con valor de reposicion
- **Ganancias**: ingresos, costos, ganancia neta, desglose por metodo
- Exportacion Excel con todas las hojas

### Historial (HistorialPage) — Premium
- Registro de todos los cambios: inventario, ventas, clientes, creditos
- Filtros por tipo y fecha
- Muestra datos antes y despues de cada cambio
- Icono y color por tipo de evento

### Configuracion (ConfiguracionPage)
- Tasa BCV: automatica (ve.dolarapi.com) o manual
- Link directo a bcv.org.ve
- Datos del negocio: nombre
- Umbral de stock bajo configurable
- Cambiar contrasena

### Premium (PremiumPage)
- Plan mensual: $4.99 USD / 30 dias
- Plan anual: $39.99 USD / 365 dias (ahorra 33%)
- Indicador de dias restantes con barra de progreso
- Renovacion por WhatsApp
- Activacion con codigo

### Ayuda (AyudaPage)
- Centro de ayuda con busqueda
- Secciones: Inicio, Productos, Ventas, Clientes, Creditos, Tasa BCV, Premium, Reportes, Gestion de Ventas, Accesos
- Preguntas frecuentes con acordeon
- Boton de soporte por WhatsApp

---

## Estructura del proyecto

```
adminpyme-web/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── carrito/
│   │   │   └── CartComponents.jsx      # CartItem + CartSummary
│   │   ├── charts/
│   │   │   └── ChartComponents.jsx     # AreaChart, BarChartLW, DualLineChart, PieChartCustom
│   │   ├── currency/
│   │   │   ├── BarcodeScanner.jsx      # Escaner de codigo de barras
│   │   │   ├── DualPriceDisplay.jsx    # Muestra precio USD y VES
│   │   │   ├── PriceInput.jsx          # Input con conversion en tiempo real
│   │   │   └── TasaBcvBanner.jsx       # Alerta de tasa desactualizada
│   │   └── ui/
│   │       ├── CommonComponents.jsx    # LoadingSpinner, StockBadge, ErrorMessage
│   │       ├── Navbar.jsx              # Barra de navegacion superior + movil
│   │       ├── OfflineBanner.jsx       # Indicador de conexion
│   │       └── PremiumGuard.jsx        # Bloqueador de modulos Premium
│   ├── hooks/
│   │   ├── useAuth.js                  # Hook de autenticacion Supabase
│   │   └── useOfflineSync.js           # Sincronizacion offline
│   ├── pages/
│   │   ├── AyudaPage.jsx
│   │   ├── ClientesPage.jsx
│   │   ├── ConfiguracionPage.jsx
│   │   ├── CreditosPage.jsx
│   │   ├── GestionVentasPage.jsx
│   │   ├── HistorialPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ProductosPage.jsx
│   │   ├── PremiumPage.jsx
│   │   ├── RecuperarPasswordPage.jsx
│   │   ├── ReportesAvanzadosPage.jsx
│   │   ├── ReportesPage.jsx
│   │   └── VentaPage.jsx
│   ├── services/
│   │   ├── authService.js              # signIn, signUp, signOut
│   │   ├── clientesService.js          # CRUD clientes + busqueda + ventas
│   │   ├── configuracionService.js     # tasa BCV, configuracion, activar Premium
│   │   ├── creditosService.js          # CRUD creditos + pagos + resumen
│   │   ├── historialService.js         # registrar y obtener historial
│   │   ├── productosService.js         # CRUD productos + codigo de barras
│   │   ├── reportesService.js          # balance dia, ventas por periodo
│   │   ├── ventasGestionService.js     # ventas completas, revertir, editar
│   │   └── ventasService.js            # procesar venta + ventas hoy
│   ├── store/
│   │   ├── useCarritoStore.js          # Estado del carrito con Zustand
│   │   └── useConfiguracionStore.js    # Configuracion global con Zustand
│   ├── utils/
│   │   ├── alerts.js                   # Alertas SweetAlert2 centralizadas
│   │   ├── currency.js                 # toVes, toUsd, formatVes, formatUsd
│   │   ├── exportHelpers.js            # Excel, PDF, recibo WhatsApp
│   │   └── offlineStorage.js           # IndexedDB para modo offline
│   ├── App.jsx
│   └── main.jsx
├── .env.local
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## Base de datos Supabase

### Tablas principales

| Tabla | Descripcion |
|-------|-------------|
| `configuracion` | Tasa BCV, plan Premium, datos del negocio por usuario |
| `productos` | Inventario con precios USD, stock, categoria, codigo de barras |
| `ventas` | Registro de ventas con cliente_id, tipo_venta, tasa_bcv_aplicada |
| `detalle_venta` | Productos de cada venta con precios USD y VES |
| `clientes` | Datos del cliente con cedula unica por usuario |
| `creditos` | Deudas de ventas a credito con montos USD y VES |
| `pagos_credito` | Abonos a creditos con metodo de pago |
| `historial` | Auditoria de todos los cambios del sistema |

### RLS (Row Level Security)
Todas las tablas tienen RLS habilitado. Cada usuario solo accede a sus propios datos mediante politicas `auth.uid() = user_id`.

---

## Variables de entorno

Crear archivo `.env.local` en la raiz:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
```

---

## Instalacion y desarrollo

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/adminpyme-web.git
cd adminpyme-web

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para produccion
npm run build
```

---

## Deploy en Vercel

El archivo `vercel.json` en la raiz maneja el enrutamiento SPA:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Cada push a `main` genera un deploy automatico en Vercel.

---

## Activacion Manual Premium (Supabase SQL)

```sql
-- Ver todos los usuarios y su plan
SELECT
  u.email,
  c.plan_premium,
  c.is_premium,
  c.premium_expira_en,
  CASE
    WHEN c.premium_expira_en IS NULL THEN 'Gratuito'
    WHEN c.premium_expira_en > now() THEN
      'Activo — ' || EXTRACT(DAY FROM c.premium_expira_en - now())::int || ' dias'
    ELSE 'Vencido'
  END AS estado
FROM auth.users u
LEFT JOIN configuracion c ON c.user_id = u.id
ORDER BY u.created_at DESC;

-- Activar plan mensual (30 dias)
UPDATE configuracion
SET
  is_premium = true,
  plan_premium = 'mensual',
  premium_expira_en = now() + interval '30 days',
  codigo_activacion = 'MANUAL-MENSUAL'
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'correo@ejemplo.com'
);

-- Activar plan anual (365 dias)
UPDATE configuracion
SET
  is_premium = true,
  plan_premium = 'anual',
  premium_expira_en = now() + interval '365 days',
  codigo_activacion = 'MANUAL-ANUAL'
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'correo@ejemplo.com'
);

-- Desactivar Premium
UPDATE configuracion
SET
  is_premium = false,
  plan_premium = 'gratuito',
  premium_expira_en = null,
  codigo_activacion = null
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = 'correo@ejemplo.com'
);
```

---

## Codigos de activacion Premium

| Codigo | Plan | Duracion |
|--------|------|----------|
| `MENSUAL2025` | Mensual | 30 dias |
| `ADMINPYME01` | Mensual | 30 dias |
| `ANUAL2025` | Anual | 365 dias |
| `ADMINANUAL01` | Anual | 365 dias |

---

## Metodos de pago aceptados

- Efectivo USD
- Efectivo Bolivares (VES)
- Pago Movil
- Transferencia Bancaria
- Zelle
- Binance / USDT

---

## Caracteristicas especiales para Venezuela

- Doble moneda VES/USD en toda la aplicacion
- Tasa BCV automatica via `ve.dolarapi.com`
- Link directo a `bcv.org.ve` para consulta manual
- Precios almacenados internamente en USD
- Conversion automatica al bolivar del dia en cada operacion
- `tasa_bcv_aplicada` guardada en cada venta para auditoria historica
- Reportes muestran siempre ambas monedas con la tasa del dia de la operacion

---

## URL de produccion

```
https://admin-pyme-online.vercel.app
```

---

## Soporte

WhatsApp: [+58 426 915 4122](https://wa.me/584269154122?text=Hola%2C+necesito+ayuda+con+AdminPyme)
