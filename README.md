# Pagina para Vanessa

Repositorio estatico listo para GitHub Pages.

## Como publicarlo

1. Sube todos estos archivos a un repositorio de GitHub.
2. En GitHub, entra a **Settings > Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/root`.
5. Guarda los cambios y espera el enlace de GitHub Pages.

## Personalizacion rapida

- Para que los botones abran tu WhatsApp directo, edita `script.js` y cambia `whatsappNumber` en `DEFAULT_SETTINGS`.
- Para cambiar la fecha del cronometro, edita `metAt` en `DEFAULT_SETTINGS`.
- Para agregar fotos al diario, copia imagenes a `fotos/` y registralas en `fotos/fotos.json`.
- Los planes realizados se guardan en el navegador con `localStorage`.

Formato de numero recomendado para WhatsApp: codigo de pais + numero, sin `+`, espacios ni guiones. Ejemplo Peru: `51999999999`.
