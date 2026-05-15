# 🎧 DJ Request App — Guía de instalación

## Archivos incluidos
- `index.html` → Página para los **invitados** (van con el QR)
- `dj-screen.html` → Pantalla **gigante del DJ**
- `README.md` → Esta guía

---

## PASO 1 — Crear proyecto Firebase (gratis)

1. Ir a **https://console.firebase.google.com**
2. Clic en **"Agregar proyecto"**
3. Ponerle un nombre (ej: `dj-request-2025`)
4. Desactivar Google Analytics (no es necesario) → **Crear proyecto**
5. En el panel izquierdo ir a **Realtime Database**
6. Clic en **"Crear base de datos"**
7. Elegir zona **us-central1** → **Siguiente**
8. Elegir **"Comenzar en modo de prueba"** → **Habilitar**

---

## PASO 2 — Obtener las credenciales de Firebase

1. En el panel de Firebase, hacer clic en el ícono ⚙️ (Configuración del proyecto)
2. Ir a la pestaña **"General"**
3. Bajar hasta **"Tus apps"** → clic en **"</> Web"**
4. Registrar la app con cualquier nombre → **Registrar app**
5. Vas a ver un bloque de código como este:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "mi-proyecto.firebaseapp.com",
  databaseURL: "https://mi-proyecto-default-rtdb.firebaseio.com",
  projectId: "mi-proyecto",
  storageBucket: "mi-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## PASO 3 — Pegar las credenciales en los archivos

Abrir `index.html` y `dj-screen.html` con el Bloc de notas (o VSCode).

Buscar esta sección en **ambos archivos**:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  ...
```

**Reemplazar cada valor** con los que copiaste de Firebase. Guardar.

---

## PASO 4 — Publicar en GitHub Pages (gratis)

1. Crear cuenta en **https://github.com** (si no tenés)
2. Clic en **"New repository"** (repositorio nuevo)
3. Nombre: `dj-request` → **Create repository**
4. Subir los 2 archivos HTML arrastrándolos a la página del repo
5. Ir a **Settings → Pages**
6. En "Branch" elegir **main** → carpeta **/ (root)** → **Save**
7. En unos segundos aparece la URL:
   ```
   https://TU_USUARIO.github.io/dj-request/
   ```

✅ ¡Ya está publicado!

---

## PASO 5 — URLs finales

| Pantalla | URL |
|---|---|
| 🎵 **Invitados** | `https://TU_USUARIO.github.io/dj-request/` |
| 🎛️ **Panel DJ** | `https://TU_USUARIO.github.io/dj-request/dj-screen.html` |

---

## PASO 6 — Generar el QR

1. Ir a **https://qr.io** o **https://www.qrcode-monkey.com**
2. Pegar la URL de invitados
3. Personalizar colores (negro con rosa/cyan queda espectacular)
4. Descargar en PNG y mostrarlo en pantalla

---

## PASO 7 — Reglas de seguridad Firebase (recomendado)

Para que solo se pueda escribir pero no borrar desde el público, ir a:
**Firebase → Realtime Database → Reglas** y pegar:

```json
{
  "rules": {
    "requests": {
      ".read": true,
      ".write": true
    }
  }
}
```

(Para el evento está bien así. Después podés cerrar las reglas.)

---

## Uso durante el evento

1. Abrir `dj-screen.html` en tu compu/tablet → pantalla completa (F11)
2. Mostrar el QR en pantalla para que los invitados lo escaneen
3. Los pedidos aparecen en tiempo real como mensajes de chat
4. Tocás ▶ en cada pedido para marcarlo como **jugado** ✓✓
5. Botón **"Limpiar jugados"** para mantener limpio el panel

---

## Soporte

¿Algo no funciona? Revisá:
- Que copiaste bien **todos** los valores de Firebase en ambos archivos
- Que la Realtime Database está en **modo de prueba**
- Que los archivos se subieron correctamente a GitHub
