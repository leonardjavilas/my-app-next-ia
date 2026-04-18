# App de Sorteo de Correos

Aplicación web para realizar sorteos aleatorios a partir de una lista de correos electrónicos. Desarrollada con Next.js, React, TypeScript y Tailwind CSS.

## Características

- ✅ Validación de formato de email
- ✅ Eliminación automática de duplicados
- ✅ Selección aleatoria de un único ganador
- ✅ Soporte para modo oscuro
- ✅ Diseño responsive
- ✅ Interfaz moderna y fácil de usar

## Cómo funciona

1. Pega tu lista de correos electrónicos en el textarea (separados por líneas, comas o punto y coma)
2. La app valida automáticamente el formato de cada email
3. Elimina duplicados automáticamente
4. Haz clic en "Sortear Ganador" para seleccionar un ganador al azar
5. El ganador se muestra en una sección destacada

## Tecnologías

- **Next.js 16.2.4** - Framework de React
- **React 19.2.4** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos
- **Bun** - Gestor de paquetes

## Herramientas de desarrollo

- **Windsurf** - Editor de código con IA integrada
- **Warp** - Terminal moderna con características avanzadas

## Instalación

```bash
bun install
```

## Desarrollo

Ejecuta el servidor de desarrollo:

```bash
bun run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para producción

```bash
bun run build
bun start
```

## Estructura del proyecto

```
my-app-ia/
├── app/
│   └── page.tsx       # Componente principal de la app de sorteo
├── public/           # Archivos estáticos
└── package.json      # Dependencias del proyecto
```
