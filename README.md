# 🃏 Memorama Game  

Un juego de memoria interactivo y personalizable, desarrollado con **JavaScript, Tailwind CSS y html**.  


## 🖼️ Capturas de Pantalla  

### 🃏 Pantalla Principal  
![Pantalla Principal](https://raw.githubusercontent.com/yaquitadeveloper/memorama-game/main/public/screenshots/pantalla-principal.png)  

### 🎯 Selección de Dificultad  
![Selección de Dificultad](https://raw.githubusercontent.com/yaquitadeveloper/memorama-game/main/public/screenshots/seleccion-dificultad.png)  

### ⏳ Partida en Curso  
![Partida en Curso](https://raw.githubusercontent.com/yaquitadeveloper/memorama-game/main/public/screenshots/partida-en-curso.png)  

### 🏆 Pantalla de Victoria  
![Pantalla de Victoria](https://raw.githubusercontent.com/yaquitadeveloper/memorama-game/main/public/screenshots/pantalla-victoria.png)  


## 📌 Características  
- 🎨 **Diferentes categorías**: Animales, emojis y tecnología.  
- 🎯 **Niveles de dificultad**: Fácil, Medio y Difícil.  
- ⏳ **Temporizador** para aumentar la emoción del juego.  
- 📱 **Diseño responsive** para jugar en cualquier dispositivo.  

## 🚀 **Demo**  
Puedes probarlo aquí: [(https://yaquitadeveloper.github.io/memorama-game/)]  

## 📖 Documentación Técnica  

- 📄 [Documentación de los módulos de `game.js`](https://yaquitadeveloper.github.io/documentacion-game/)  
- 📄 [Documentación del archivo principal `main.js`](https://yaquitadeveloper.github.io/documentacion-main/)  


## 📂 **Estructura del Proyecto**  

```plaintext
memorama-game/
│── src/                 # Código fuente
│   ├── js/              # Lógica del juego
│       │──modules       # Modulos js.
│   ├── styles/          # Estilos con Tailwind y
│── public/              # Archivos estáticos
│── dist/                # Archivos generados para producción
│── package.json         # Configuración del proyecto
│── pages                # Paginas componentes
   │── game.html         
│── index.html           # html de entrada
│── README.md            # Documentación
│── tailwind.config.js   # Configuración de Tailwind
│── vite.config.js       # Configuración de Vite
```

## 🚀 **Instalacion**  

1. Clona el repositorio:
```
git clone https://github.com/yaquitadeveloper/memorama-game.git
cd memorama-game
```

2. Instala las dependencias:
```
npm install
```

3. Modo Desarrollo (servidor local con recarga en vivo)
```
npm run dev
```

4. Compilar para Producción
```
npm run build
```
5. Vista previa del build (simulación del entorno de producción)
```
npm run preview
```
6. Despliegue
Sube el contenido de dist/ a tu hosting o usa GitHub Pages.

## 🤝 **Contribuciones**


Si quieres mejorar el proyecto:

1. Haz un fork del repositorio.

2. Crea una nueva rama con tu mejora
```
git checkout -b feature/nueva-mejora
```
   
3. Realiza los cambios y súbelos:
```
git commit -m "Agregando nueva funcionalidad"
```


4. Envía un pull request.
