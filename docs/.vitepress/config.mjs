import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guía PST I',
  description: 'Guía paso a paso del Proyecto Socio Tecnológico I — PNFI / UPTP. Pensada para estudiantes que arrancan desde cero.',
  lang: 'es',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/uptp.ico' }],
    ['link', { rel: 'shortcut icon', href: '/images/uptp.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/uptp.ico' }],
    ['meta', { name: 'theme-color', content: '#c0392b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Guía PST I — UPTP' }],
    ['meta', { property: 'og:description', content: 'Guía paso a paso del Proyecto Socio Tecnológico I del PNFI — UPTP.' }],
    ['meta', { property: 'og:image', content: '/images/uptp.ico' }]
  ],

  themeConfig: {
    logo: '/images/uptp.ico',
    siteTitle: 'UPTP · Guía PST I',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar en la guía'
              },
              modal: {
                displayDetails: 'Mostrar detalles',
                resetButtonTitle: 'Restablecer búsqueda',
                backButtonTitle: 'Cerrar',
                noResultsText: 'Sin resultados para',
                footer: {
                  selectText: 'seleccionar',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'navegar',
                  navigateUpKeyAriaLabel: 'flecha arriba',
                  navigateDownKeyAriaLabel: 'flecha abajo',
                  closeText: 'cerrar',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Introducción', link: '/introduccion' },
      {
        text: 'Recursos',
        items: [
          { text: 'Glosario', link: '/recursos/glosario' },
          { text: 'Referencias bibliográficas', link: '/recursos/referencias' },
          { text: 'Plantillas y herramientas', link: '/recursos/herramientas' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Punto de partida',
          collapsed: false,
          items: [
            { text: 'Introducción', link: '/introduccion' }
          ]
        },
        {
          text: 'Parte I — Abordaje y diagnóstico',
          collapsed: false,
          items: [
            { text: '1. Descripción del proceso', link: '/parte-1/descripcion-proceso' },
            { text: '2. Metodología y método', link: '/parte-1/metodologia' },
            { text: '✦ Reflexión crítica',       link: '/parte-1/reflexion-critica' }
          ]
        },
        {
          text: 'Parte II — Planificación (EML)',
          collapsed: false,
          items: [
            {
              text: 'Fase I — Análisis de los involucrados',
              collapsed: true,
              items: [
                { text: 'i. Historia de la comunidad',            link: '/parte-2/fase-1/01-historia' },
                { text: 'ii. Mapa de la comunidad',               link: '/parte-2/fase-1/02-mapa' },
                { text: 'iii. Misión, visión, organigrama',       link: '/parte-2/fase-1/03-mision-vision' },
                { text: 'iv. Organizaciones comunales',           link: '/parte-2/fase-1/04-organizaciones' },
                { text: 'v. Valores del equipo PST I',            link: '/parte-2/fase-1/05-valores-equipo' },
                { text: 'vi. Valores compartidos',                link: '/parte-2/fase-1/06-valores-comunidad' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-1/reflexion-critica' }
              ]
            },
            {
              text: 'Fase II — Análisis del problema',
              collapsed: true,
              items: [
                { text: 'i. Voz de los actores sociales',         link: '/parte-2/fase-2/01-identificacion' },
                { text: 'ii. Matriz FODA',                        link: '/parte-2/fase-2/02-foda' },
                { text: 'iii. Tabla de problemas',                link: '/parte-2/fase-2/03-tabla-problemas' },
                { text: 'iv. Árbol del problema',                 link: '/parte-2/fase-2/04-arbol-problema' },
                { text: 'v. Situación problemática',              link: '/parte-2/fase-2/05-situacion' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-2/reflexion-critica' }
              ]
            },
            {
              text: 'Fase III — Análisis de alternativas',
              collapsed: true,
              items: [
                { text: 'i. Árbol de objetivos',                  link: '/parte-2/fase-3/01-arbol-objetivos' },
                { text: 'ii. Alternativa de solución',            link: '/parte-2/fase-3/02-alternativas' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-3/reflexion-critica' }
              ]
            },
            {
              text: 'Fase IV — Intencionalidad o propósito',
              collapsed: true,
              items: [
                { text: 'i. Propósito general',                   link: '/parte-2/fase-4/01-general' },
                { text: 'ii. Propósitos específicos',             link: '/parte-2/fase-4/02-especificos' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-4/reflexion-critica' }
              ]
            },
            {
              text: 'Fase V — Estructura analítica',
              collapsed: true,
              items: [
                { text: 'i. Plan de Acción',                      link: '/parte-2/fase-5/01-plan-accion' },
                { text: 'ii. Cronograma del Proyecto',            link: '/parte-2/fase-5/02-cronograma' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-5/reflexion-critica' }
              ]
            },
            {
              text: 'Fase VI — Ejecución (producto)',
              collapsed: true,
              items: [
                { text: 'i. Soporte técnico a equipos',           link: '/parte-2/fase-6/01-soporte-tecnico' },
                { text: 'ii. Alfabetización tecnológica',         link: '/parte-2/fase-6/02-alfabetizacion' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-6/reflexion-critica' }
              ]
            },
            {
              text: 'Fase VII — Valoración de resultados',
              collapsed: true,
              items: [
                { text: 'i. Matriz de seguimiento y evaluación',  link: '/parte-2/fase-7/01-matriz-seguimiento' },
                { text: '✦ Reflexión crítica',                    link: '/parte-2/fase-7/reflexion-critica' }
              ]
            },
            { text: '✦ Reflexión crítica del EML',                link: '/parte-2/reflexion-eml' }
          ]
        },
        {
          text: 'Recursos',
          collapsed: true,
          items: [
            { text: 'Glosario',                  link: '/recursos/glosario' },
            { text: 'Referencias bibliográficas', link: '/recursos/referencias' },
            { text: 'Plantillas y herramientas', link: '/recursos/herramientas' }
          ]
        }
      ]
    },

    socialLinks: [],
    footer: {
      message: 'Guía PST I — Coordinación PNFI · UPTP "Juan de Jesús Montilla"',
      copyright: 'Material educativo de apoyo · Esquema oficial de enero 2018'
    },
    outline: { level: [2, 3], label: 'En esta página' },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    lastUpdatedText: 'Última actualización',
    darkModeSwitchLabel: 'Tema',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba'
  }
})
