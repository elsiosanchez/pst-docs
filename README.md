# Guía PST I — Documentación VitePress

Documentación interactiva para la elaboración del **Proyecto Socio Tecnológico I (PST I)** del Programa Nacional de Formación en Informática (PNFI) de la Universidad Politécnica Territorial de Portuguesa "Juan de Jesús Montilla" (UPTP).

La estructura del sidebar replica el **esquema oficial actualizado en enero 2018** por la Coordinación del PNFI, y cada sección está acompañada de un ejemplo de referencia tomado del trabajo real *"Alfabetización Tecnológica de la Asociación de Árbitros del Estado Portuguesa"*.

## Levantar el sitio en local

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo (recarga en caliente)
npm run docs:dev

# 3. Build de producción
npm run docs:build

# 4. Vista previa del build
npm run docs:preview
```

Una vez levantado, abrí http://localhost:5173 en el navegador.

## Estructura

```
docs/
├── .vitepress/
│   └── config.mjs            # Configuración + sidebar (replica el esquema)
├── public/
│   └── images/               # Diagramas y ejemplos visuales
├── index.md                  # Home
├── introduccion.md
├── parte-1/                  # Abordaje y diagnóstico
├── parte-2/                  # Planificación (las 7 fases del EML)
│   ├── fase-1/  ... fase-7/
│   └── reflexion-eml.md      # Reflexión global sobre el Enfoque del Marco Lógico
└── recursos/                 # Glosario, referencias, descargas
```

## Cómo usar esta guía

Cada página sigue el mismo patrón:

- **¿Qué pide el esquema?** Qué exige formalmente la coordinación del PNFI.
- **Ejemplo de referencia.** Fragmento real del trabajo de árbitros.
- **Recomendaciones.** Consejos prácticos para tu propio proyecto.

> 💡 Adaptá el ejemplo a tu comunidad. **No copies literalmente**: la idea es entender la estructura y el nivel de detalle esperado.

## Licencia y atribución

- **Esquema base**: Coordinación PNFI — Alvarado, L., Antequera, H., Ramírez, L. (Enero, 2018).
- **Trabajo de referencia**: Pérez, M.L., Aguilar, M., Chirinos, B., Escalona, K., Hernández, W., Martínez, G. — Sección 231 (noviembre 2025).
- **Documentación**: Estructura libre para uso académico.
