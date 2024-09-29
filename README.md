# App Prueba Técnica para VELAIO por David López

## Requisitos de Sistema

- **Node.js**: 20.13.1
- **npm**: 10.2.5
- **Angular**: 16.2.16
- **Typescript**: 5.1.6

## Descripción del Proyecto

Esta aplicación está construida utilizando **Angular** .

Esta solución es un manejador de tareas web, que permite la administración y asignación de tareas a personas

### Estructura del Proyecto

#### ui: Capa de Presentación

Contiene las siguientes carpetas:

- **layouts**: Contenedores generales de uso compartido
- **modules**: Páginas del aplicativo.
- **directives**: directivas de uso general
- **src**: Archivos base y de configuración.

#### data: Capa de Datos

Contiene las siguientes carpetas:

- **src**: Generalidades de comunicacion con el proveedor de servicios.

## Cómo Ejecutar

### Descargar el Repositorio

Clona el repositorio en tu máquina local.

### Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### Ejecutar Web

Ejecuta el siguiente comando para ejecutar la aplicación en un browser:

```bash
npx ng serve
```

abrir navegador en [http://localhost:4200/](http://localhost:4200/)

### Compilar

Ejecuta el siguiente comando para compilar la aplicación:

```bash
npx nd build  // compilar app angular
```
