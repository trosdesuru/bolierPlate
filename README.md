# Places Finder 🗺️

¡Bienvenido a **Places Finder**! Este es un proyecto en React que utiliza la API de Foursquare para buscar y mostrar lugares cercanos en función de una ubicación específica. Es una aplicación sencilla pero poderosa para explorar restaurantes, bares, parques y otros puntos de interés.

---

## Características ✨

- **Búsqueda de lugares**: Obtén una lista de lugares cercanos basados en una ubicación específica.
- **Detalles del lugar**: Muestra el nombre, la dirección y la categoría de cada lugar.
- **Fácil de usar**: Interfaz limpia y sencilla para una experiencia de usuario fluida.

---

## Tecnologías utilizadas 🛠️

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Foursquare API**: API para obtener datos de lugares y puntos de interés.
- **Fetch API**: Para realizar solicitudes HTTP a la API de Foursquare.

---

## Cómo configurar el proyecto 🚀

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Requisitos previos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/) (gestores de paquetes)

### Pasos

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/boilerPlate.git
   cd boilerPlate
   ```

2. **Instala las dependencias**:
   
   Con npm:
   ```bash
   npm install
   ```
   O con Yarn:
   ```bash
   yarn install
   ```

3. **Configura la API de Foursquare**:
   
   - Obtén una clave de API de Foursquare desde [Foursquare for Developers](https://developer.foursquare.com/).
   - Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API:
     ```env
     REACT_APP_FOURSQUARE_API_KEY=CLAVE_API_AQUÍ
     ```

4. **Ejecuta el proyecto**:
   
   Con npm:
   ```bash
   npm start
   ```
   O con Yarn:
   ```bash
   yarn start
   ```

5. **Abre el navegador**:
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

---

## Estructura del proyecto 📚

```
boilerPlate/
├── public/                  # Archivos públicos (HTML, imágenes, etc.)
├── src/                     # Código fuente de la aplicación
│   ├── pages/               # Componentes de React
│   │   └── Home.jsx         # Componente principal
│   ├── App.jsx              # Componente raíz de la aplicación
│   ├── main.jsx             # Punto de entrada de la aplicación
│   └── index.css/           # Estilos globales
├── .env                     # Variables de entorno (clave de API)
├── package.json             # Dependencias y scripts del proyecto
└── README.md                # Archivo del proyecto
```

---

## Cómo contribuir 🤝

Si deseas mejorar este proyecto, sigue estos pasos:

1. **Haz un fork del repositorio**.
2. **Crea una rama para tu feature o corrección**:
   ```bash
   git checkout -b new_feature
   ```
3. **Realiza tus cambios y haz commit**:
   ```bash
   git commit -m "Descripción de tus cambios"
   ```
4. **Envía tus cambios**:
   ```bash
   git push origin new_feature
   ```
5. **Abre un Pull Request en GitHub**.

---

## Licencia 📝

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## Créditos 🙏

- **Foursquare**: Por proporcionar una API increíble para buscar lugares.
- **React**: Por hacer que construir interfaces de usuario sea divertido y fácil.
- **Tailwind CSS**: Por simplificar el diseño de la aplicación.

---

## Contacto 📧

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Nombre**: Eduard Hernández
- **Email**: eduardhernandezventos@gmail.com
- **GitHub**: [trosdesuru](https://github.com/trosdesuru)
