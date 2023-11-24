---
title: "Devaster.tech"

technologies: ['Astro', 'Bootstrap']

description: 'Landing page de Devaster.tech hecha con Astro'

deploy: 'http://devaster.tech/'
---

Durante mi tiempo en **Krayion**, reconstruí de 0 la web de [http://devaster.tech/](http://devaster.tech/)

Migré la web de vanilla PHP a **Astro**, manteniendo los scripts de manejo de formularios y completando las funcionalidades pendientes.

La web requería una versión tanto en inglés como en español. Para abordar esto, creé dos archivos **JSON** que contenían todas las traducciones correspondientes a cada idioma. Luego, marque todas las etiquetas con las claves del **JSON** que contenían el texto correspondiente para asi luego poder cambiar el idioma al interactuar con el **select** del nav

Además, era necesario persistir el cambio de idioma para evitar que se perdiera al recargar la página. Para lograr esto use [Nano Stores Persistent](https://github.com/nanostores/persistent) y asi guardar en **Local storage** el idioma seleccionado

Fue una semana intensa, pero exitosa.