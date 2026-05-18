# Fase II · iv. Árbol del problema del PST

## ¿Qué pide el esquema?

Una **representación gráfica en forma de árbol** que muestra:

- 🌳 **El tronco** — el problema central.
- 🪵 **Las raíces** — sus causas.
- 🍂 **Las ramas** — sus efectos o consecuencias.

Es una herramienta clave del Enfoque del Marco Lógico (EML). Se construye **después** de la identificación, la FODA y la tabla de problemas, integrando esa información.

## La idea, paso a paso (para quien nunca lo hizo)

Piensa en un árbol literal. Cada parte del árbol representa una parte del problema:

<div class="tree-grid">
  <img src="/images/arbol-problema-plantilla.svg" alt="Plantilla del árbol del problema" class="tree-template"/>
  <div class="tree-explain">

**Lectura de abajo hacia arriba** 👇

1. **Raíces (suelo) → Causas.** Lo que da origen al problema (lo que está roto, lo que falta, lo que no funciona).
2. **Tronco → Problema central.** Una sola frase, escrita en *negativo* (algo que NO está bien).
3. **Copa → Efectos.** Las consecuencias visibles de que el problema exista.

**Cómo construirlo en 5 pasos** ✍️

1. Escribe el **problema central** en una sola línea, sin culpas ni nombres propios.
2. Pregúntate **"¿por qué pasa esto?"** y anota 3 o más respuestas → esas son las **causas**.
3. Pregúntate **"¿qué provoca este problema?"** y anota 3 o más respuestas → esos son los **efectos**.
4. Reléelo: si remueves una causa, **¿el problema se debilita?** Si no, esa "causa" en realidad no lo es.
5. Cada **causa** debe poder transformarse luego en un **medio** (raíz positiva) en el árbol de objetivos.

  </div>
</div>

::: tip Cómo leerlo
**De abajo hacia arriba:** las causas (raíces) generan el problema central (tronco), y este produce los efectos (ramas). Si remueves una causa, debilitas el problema.
:::

::: warning Errores frecuentes
- **No confundir causa con efecto.** *"Falta de capacitación"* es causa. *"Mala atención al usuario"* es efecto.
- **No usar nombres propios** ni señalar culpables (*"el director X no quiere…"*). El árbol describe situaciones, no personas.
- **No mezclar varios problemas.** Si te aparecen dos problemas centrales, haz dos árboles distintos.
:::

## Ejemplo de referencia

![Árbol del problema — Analfabetismo tecnológico de la Asociación de Árbitros](/images/arbol-problema.jpg)

En el ejemplo, el problema central identificado es:

> **Analfabetismo tecnológico de la Asociación de Árbitros del Estado Portuguesa**

**Efectos (parte superior):**
- Problemas en la evaluación de los árbitros (carencia de bases sólidas y tangibles).
- Falta de tecnologías como causa subyacente.
- Dificultad en el seguimiento del performance de los árbitros.

**Causas (parte inferior):**
- Escasez de herramientas tecnológicas (falta de sistemas de grabación y análisis).
- Limitaciones tecnológicas (carencia que limita la capacidad de la subcomisión).
- Limitaciones económicas (presupuesto limitado para invertir en tecnología).

## Recomendaciones

- Una sola **causa raíz no alcanza**: identifica 3 o más, conectadas entre sí.
- Diferencia **causas directas** (las raíces gruesas) de **causas indirectas o estructurales** (las raíces finas).
- Lo mismo con efectos: efectos inmediatos arriba, efectos de largo plazo más arriba aún.
- Si el árbol del problema **no convierte en el árbol de objetivos** del próximo punto, algo está mal. Cada raíz negativa se transformará en un medio (raíz positiva).
- **Herramientas sugeridas:** Canva (plantilla "árbol del problema"), draw.io, Lucidchart o LibreOffice Draw. Ver [Plantillas y herramientas](/recursos/herramientas).

<style>
.tree-grid {
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;
  gap: 28px;
  align-items: start;
  margin: 18px 0 8px;
}
.tree-grid .tree-template {
  width: 100%;
  height: auto;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  padding: 8px;
  box-shadow: 0 6px 18px -10px rgba(0,0,0,.35);
}
.tree-grid .tree-explain p,
.tree-grid .tree-explain ol,
.tree-grid .tree-explain ul {
  margin-top: 0;
}
@media (max-width: 720px) {
  .tree-grid { grid-template-columns: 1fr; }
}
</style>
