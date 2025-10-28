# Cotizador de Vehículos

Aplicación web para cotizar vehículos ingresando la patente chilena y el kilometraje.

## Características

- ✅ Validación de patentes chilenas (formatos: XXXX00 o XX0000)
- ✅ Integración con API de cotización
- ✅ Interfaz moderna y responsive con Tailwind CSS
- ✅ Manejo de estados de carga y errores
- ✅ Formato de precios en pesos chilenos (CLP)

## Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **React** - Biblioteca de UI

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Configuración de la API

La aplicación está configurada para usar la API con ID: `2f21c536-3cff-432b-9948-3492dc459d4c`

**Nota:** Actualmente la URL de la API en el código es un placeholder (`https://api.example.com/cotizacion/`). Debes reemplazarla con la URL real de tu API en el archivo `app/page.tsx`.

### Formato esperado de la API

La API debe responder con un JSON que contenga al menos:

```json
{
  "precio": 15000000,
  "marca": "Toyota",
  "modelo": "Corolla",
  "año": 2020
}
```

## Uso

1. Ingresa la patente del vehículo (formato chileno: ABCD12 o AB1234)
2. Ingresa el kilometraje del vehículo
3. Haz clic en "Obtener Cotización"
4. Visualiza el precio de retoma estimado

## Validación de Patentes

La aplicación valida dos formatos de patentes chilenas:

- **Formato antiguo:** 2 letras + 4 números (Ej: AB1234)
- **Formato nuevo:** 4 letras + 2 números (Ej: ABCD12)

## Estructura del Proyecto

```
cotizador-vehiculos/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de cotización
│   └── globals.css      # Estilos globales
├── public/              # Archivos estáticos
└── package.json         # Dependencias
```

## Próximas Mejoras

- [ ] Conectar con la API real de cotización
- [ ] Agregar historial de cotizaciones
- [ ] Implementar modo oscuro
- [ ] Agregar más detalles del vehículo
- [ ] Exportar cotización en PDF
