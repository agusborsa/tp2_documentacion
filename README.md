# Scrapper Mercadolibre - Documentación

## Pedido 1
Me estoy abriendo mi propio quiosco y necesito ponerle precios a los precios. Me fije como andan los precios en Mercado Libre para darme una idea, pero todos los días cambian. A veces peor, cambian a cada hora. Si entro todos los días a fijarme como cambiaron, pierdo como una hora. Vendo varios productos de distintas categorías, filtrar uno por uno es un lio.
Necesito alguna forma de estar al tanto de los precios todos los días pero sin estar entrando a Mercado Libre manualmente y poniendo los productos uno por uno.

Además, me gustaría saber que productos fueron los que más aumentaron de precio, en porcentaje, durante la semana. Algún reporte de eso me vendría bien.

## ¿Qué es scrappear?
Es una técnica utilizada mediante software para extraer información de los sitios web. Trae datos estructurados ej: JSON.

## ¿Cómo hago un scrapping?
Usualmente se utiliza herramientas y bibliotecas diseñadas para parsear HTML y extraer datos, como Beautiful Soup o Selenium en Python.

## ¿Realmente lo que necesitamos es scrappear mercadolibre?
Nosotros consideramos que no. El cliente quiere saber como van cambiando los precios en mercadolibre para saber que precio ponerle a sus productos. Nosotros sabemos que tenemos que ir a buscar estos datos a un lugar puntual, no es una búsqueda y recopilación de datos desordenados. Sabemos que si necesitamos un dato puntual podemos buscarlo mediante una API y en este caso tenemos la API de Mercadolibre.

## ¿Qué opciones encontramos?
Encontramos dos caminos, efectivamente hacer scrapping con selenium dado la estructura y contenido dinámico de la web de Mercadolibre o usar la API que ofrece mercadolibre. Consideramos que lo mejor sería usar la API.

## ¿Por qué elegimos ir por la API de Mercadolibre?
Creemos que cumple como solución a este problema puntual. Es un entorno más controlado y solo accedemos a los endpoints que necesitamos, no se necesita más.

## ¿Por qué decidimos encarar la optativa 2?
Para evaluar ambas propuestas tuvimos en cuenta, contexto inflacionario, asumptions que tuvimos en ambas consignas y llegamos a la conclusión de seguir con la optativa 2. 
Las razones fueron la flexibilidad, asumir que realmente lo que se necesita es MAPEAR los precios de otros vendedores pero eso no quita que vos tengas ue estar actualizando tus precios por tus proveedores, entonces por que estar limitándose a aumentar solo un 10%, los precios pueden subir un 5%, 6% y si no lo actualizas es plata que pierde el negocio.

## ¿Qué información trae la API?
https://developers.mercadolibre.com/devcenter/

### Pruebas API Mercadolibre
https://developers.mercadolibre.com.ar/es_ar/items-y-busquedas

