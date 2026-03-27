# ORIGEN

MVP funcional para hackathon enfocado en turistas que visitan Mendoza y quieren descubrir, comprar y recibir vinos regionales sin cargar botellas durante todo el viaje.

## Propuesta tecnica

- Stack: Next.js App Router, React, TypeScript y Tailwind CSS.
- Arquitectura: frontend-first con datos mock locales, estado de carrito en `localStorage` y cero dependencias de backend para la demo.
- Objetivo: flujo completo de compra funcionando, UI premium accesible y narrativa blockchain modular sin sobreingenieria.

## Que implementa realmente

- Home / landing con propuesta de valor.
- Catalogo de vinos con 6 productos mock.
- Detalle de producto con resenas visibles.
- Carrito funcional.
- Entrega con dos opciones: hotel o aeropuerto.
- Checkout simulado.
- Confirmacion de compra con orden mock.
- Capa premium visible mediante `ORIGEN PASS Reserve x10`.

## Que se mockea

- Productos, bodegas, resenas, entrega y orden.
- Pago inspirado en Stellar, pero simulado.
- Beneficio premium Rootstock representado como narrativa de reserva digital y acceso.
- BNB Chain, Hedera y Beexo Connect como capas futuras explicables en pitch.

## Recomendacion blockchain realista

- Implementar de verdad solo una abstraccion de checkout liviano.
- Simular Rootstock como componente premium defendible.
- Mostrar BNB Chain, Hedera y Beexo Connect como roadmap modular, no como integraciones reales.

Eso mantiene el MVP demo-friendly, evita fragilidad tecnica y deja una historia clara de escalabilidad.

## Estructura

```text
app/
  page.tsx
  catalogo/page.tsx
  vino/[slug]/page.tsx
  carrito/page.tsx
  entrega/page.tsx
  checkout/page.tsx
  confirmacion/page.tsx
components/
  sections/
  ui/
data/
  wines.ts
lib/
  cart-store.tsx
  types.ts
  utils.ts
```

## Desarrollo recomendado

1. Base visual y layout.
2. Datos mock y tipos.
3. Catalogo y detalle de producto.
4. Carrito y entrega.
5. Checkout y confirmacion.
6. Ajuste de copy demo y narrativa blockchain.

## Lo que intencionalmente no hace

- Login real.
- Backend o base de datos.
- Pasarela bancaria real.
- Resenas de usuarios reales.
- Admin panel.
- Stock conectado.
- Logistica real.

## Como correr el proyecto

1. Instalar dependencias:

```bash
npm install
```

En PowerShell de Windows puede ser necesario usar:

```bash
npm.cmd install
```

2. Levantar entorno local:

```bash
npm run dev
```

3. Abrir `http://localhost:3000`.

## UX copy clave

- Home: `Descubri y recibi vinos regionales sin complicaciones durante tu viaje.`
- Catalogo: `Seleccion curada de vinos mendocinos`
- Carrito vacio: `Tu seleccion aun esta vacia`
- Entrega: `Elegi como queres recibir tu compra`
- Checkout: `Finalizar compra`
- Confirmacion: `Tu pedido ya esta listo para tu proxima parada`

## Demo flow sugerido

1. Mostrar home y propuesta de valor.
2. Entrar al catalogo y remarcar seleccion curada.
3. Abrir un vino y leer resenas de turistas.
4. Agregar al carrito.
5. Elegir entrega en hotel o aeropuerto.
6. Confirmar compra en checkout.
7. Mostrar confirmacion y numero de orden.
8. Cerrar con `ORIGEN PASS Reserve x10` como capa premium tokenizable sin promesa financiera.

## Mensaje de pitch

ORIGEN transforma descubrimiento turistico en compra concreta. El MVP resuelve el flujo central hoy y deja una arquitectura modular para pagos, reputacion verificable y beneficios premium a futuro.
