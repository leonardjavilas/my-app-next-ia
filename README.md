# App de Sorteo de Correos
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/leonardjavilas/my-app-next-ia)

Aplicación web para realizar sorteos aleatorios a partir de una lista de correos electrónicos. Desarrollada con Next.js, React, TypeScript y Tailwind CSS.

## Características

- ✅ **Validación de Email**: Comprueba que los correos electrónicos ingresados tengan un formato válido.
- ✅ **Eliminación de Duplicados**: Descarta automáticamente las entradas repetidas para asegurar un sorteo justo.
- ✅ **Selección Aleatoria**: Elige un único ganador de forma completamente aleatoria.
- ✅ **Modo Oscuro**: Soporte para temas claro y oscuro, adaptándose a las preferencias del sistema.
- ✅ **Diseño Responsivo**: Interfaz optimizada para su uso en dispositivos de escritorio y móviles.
- ✅ **Fácil de Usar**: Interfaz limpia e intuitiva que permite realizar un sorteo en segundos.

## Cómo Funciona

1.  **Pega tu lista de correos**: Ingresa la lista de correos en el área de texto. Puedes separarlos por líneas, comas o punto y coma.
2.  **Procesamiento automático**: La aplicación valida el formato de cada correo y elimina los duplicados en tiempo real.
3.  **Realiza el sorteo**: Haz clic en el botón "Sortear Ganador" para seleccionar un ganador al azar.
4.  **Visualiza el ganador**: El correo electrónico del ganador se mostrará de forma destacada en la pantalla.

## Tecnologías Utilizadas

-   **Framework**: [Next.js](https://nextjs.org/) 16.2.4
-   **Biblioteca UI**: [React](https://react.dev/) 19.2.4
-   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/) 4
-   **Entorno de ejecución y gestor de paquetes**: [Bun](https://bun.sh/)

## Primeros Pasos

Sigue estas instrucciones para obtener una copia del proyecto y ejecutarla en tu máquina local.

### Prerrequisitos

Asegúrate de tener [Bun](https://bun.sh/) instalado en tu sistema.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/leonardjavilas/my-app-next-ia.git
    cd my-app-next-ia
    ```
2.  Instala las dependencias del proyecto:
    ```bash
    bun install
    ```

### Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
bun run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Build para Producción

Para crear una versión optimizada para producción, ejecuta:

```bash
bun run build
```

Luego, para iniciar el servidor de producción:

```bash
bun start
```

## Estructura del Proyecto

```
my-app-ia/
├── app/
│   ├── globals.css    # Estilos globales y configuración de Tailwind
│   ├── layout.tsx     # Layout principal de la aplicación
│   └── page.tsx       # Componente principal con la lógica del sorteo
├── public/            # Archivos estáticos
├── package.json       # Dependencias y scripts del proyecto
└── next.config.ts     # Configuración de Next.js