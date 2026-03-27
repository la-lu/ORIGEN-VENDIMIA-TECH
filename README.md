# ORIGEN AI

ORIGEN AI es una app para turistas que visitan Mendoza y quieren descubrir vinos, recibir recomendaciones inteligentes segun su pais destino, pagar de forma simple y con logica internacional inspirada en Stellar, comprar de forma simple y registrar compras premium onchain en BNB Chain.

El MVP mantiene el foco en una sola categoria, un solo flujo de compra y una sola accion onchain defendible para hackathon:

- recomendacion inteligente segun contexto de viaje
- narrativa de Stellar como capa de pagos simples e internacionales para turistas
- sugerencia logistica visible
- compra simple o premium segun perfil
- registro onchain real de `ORIGEN PASS Reserve x10`

## Submission fit: BNB Chain - Next-Gen Consumer AI

Este proyecto esta pensado para encajar con el track por tres motivos:

1. Consumer AI visible:
   `ORIGEN AI` adapta la experiencia segun pais destino, motivo de compra, tipo de compra y preferencia de vino.
2. Real-world usefulness:
   resuelve un problema turistico concreto: descubrir, comprar y recibir vinos sin cargar botellas durante todo el viaje.
3. Real onchain proof:
   la compra premium puede registrarse onchain en `BSC Testnet` con wallet, transaccion, hash y explorer link.

## Que ya hace la app

- Home elegante con propuesta de valor.
- Catalogo de vinos mock.
- Detalle de producto con resenas.
- Carrito funcional.
- Entrega con dos opciones:
  - `Hotel delivery`
  - `Airport pickup`
- Checkout.
- Confirmacion de compra.
- Capa premium `ORIGEN PASS Reserve x10`.
- Asistente `ORIGEN AI` con impacto real en el flujo.
- Registro premium onchain en BNB Testnet.

## Como funciona ORIGEN AI

El usuario responde 4 preguntas:

- A que pais viaja
- Si compra para regalo o consumo personal
- Si prioriza compra simple o premium
- Si prefiere tinto, blanco o espumante

Con eso, la app calcula:

- vino recomendado
- modalidad de entrega sugerida
- si conviene compra simple o premium
- mensaje adaptado al pais destino

Eso impacta de verdad en la UX:

- el catalogo reordena el vino sugerido
- el premium se destaca cuando conviene
- entrega se preselecciona segun contexto
- checkout recuerda la recomendacion aplicada

## Accion onchain real

La accion onchain esta concentrada en el producto premium:

`ORIGEN PASS Reserve x10`

Cuando el usuario llega al checkout con el pack premium:

1. conecta MetaMask
2. cambia a `BSC Testnet`
3. registra la compra premium onchain
4. obtiene hash verificable
5. recien entonces finaliza la compra

La confirmacion final muestra:

- wallet
- hash
- link a BscScan
- destino asociado a la compra premium

## Capa de pagos: Stellar

En la narrativa del producto, Stellar representa la capa de pagos simples e internacionales de ORIGEN.

Eso es especialmente relevante para turistas porque permite explicar un checkout:

- simple de usar
- facil de entender
- pensado para compras cross-border
- alineado con una experiencia de viaje sin friccion

En este MVP, Stellar no se integra onchain de forma real: se representa en el checkout y en la arquitectura conceptual como la capa ideal para pagos internacionales del lado turista.

## Contrato

Archivo:

`contracts/OrigenPremiumRegistry.sol`

El contrato guarda:

- `buyer`
- `packId`
- `destinationCountry`
- `benefitType`
- `timestamp`

Y emite:

- `PremiumPurchaseRegistered`

No hay token, NFT ni marketplace. Es un contrato minimo, suficiente y defendible para hackathon.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Ethers v6
- Hardhat
- datos mock locales
- estado cliente con `localStorage`

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
contracts/
  OrigenPremiumRegistry.sol
data/
  wines.ts
lib/
  cart-store.tsx
  travel-assistant.ts
  origen-premium-abi.ts
scripts/
  deploy-origen-premium.js
  register-premium-purchase.js
```

## Variables de entorno

Copiar `.env.example` a `.env.local` para frontend y a `.env` si queres usar scripts de Hardhat.

Variables importantes:

```bash
NEXT_PUBLIC_BSC_TESTNET_RPC_URL=
NEXT_PUBLIC_ORIGEN_PREMIUM_CONTRACT_ADDRESS=

BSC_TESTNET_RPC_URL=
BSC_TESTNET_PRIVATE_KEY=
ORIGEN_PREMIUM_CONTRACT_ADDRESS=
```

## Como correr el proyecto

```bash
npm.cmd install
npm.cmd run dev
```

Abrir:

[http://localhost:3000](http://localhost:3000)

## Comandos onchain

Compilar contrato:

```bash
npm.cmd run chain:compile
```

Deploy en BSC Testnet:

```bash
npm.cmd run chain:deploy:bsc-testnet
```

Registrar una compra premium desde script:

```bash
npm.cmd run chain:register:bsc-testnet
```

## Flujo recomendado para demo

1. Mostrar home.
2. Abrir `ORIGEN AI`.
3. Elegir un destino, por ejemplo `USA`.
4. Mostrar como cambia la sugerencia:
   - vino recomendado
   - entrega sugerida
   - compra premium recomendada
5. Ir al catalogo y remarcar que el vino recomendado sube y queda destacado.
6. Agregar `ORIGEN PASS Reserve x10`.
7. Ir a checkout.
8. Conectar MetaMask.
9. Registrar compra premium en BSC Testnet.
10. Mostrar hash.
11. Finalizar compra.
12. Mostrar confirmacion con prueba onchain.

## Como hacer las 2 transacciones reales requeridas

### Opcion A: desde la UI

1. Deployar el contrato en `BSC Testnet`.
2. Configurar `NEXT_PUBLIC_ORIGEN_PREMIUM_CONTRACT_ADDRESS`.
3. Abrir la app desplegada.
4. Hacer una compra premium con destino `USA`.
5. Registrar la transaccion.
6. Repetir con otro destino, por ejemplo `Brasil` o `Chile`.

### Opcion B: desde script

Con el contrato desplegado y el private key configurado:

Primera tx:

```bash
$env:PREMIUM_DESTINATION_COUNTRY="USA"
$env:PREMIUM_BENEFIT_TYPE="priority-access"
npm.cmd run chain:register:bsc-testnet
```

Segunda tx:

```bash
$env:PREMIUM_DESTINATION_COUNTRY="Brasil"
$env:PREMIUM_BENEFIT_TYPE="gift-priority"
npm.cmd run chain:register:bsc-testnet
```

Guardar:

- ambos tx hashes
- screenshots de BscScan
- address del contrato

## Deploy sugerido

### Frontend

- Vercel

### Contrato

- BSC Testnet

### Configuracion minima en Vercel

- `NEXT_PUBLIC_BSC_TESTNET_RPC_URL`
- `NEXT_PUBLIC_ORIGEN_PREMIUM_CONTRACT_ADDRESS`

## Checklist DoraHacks

- Demo desplegada
- Repositorio publico
- README claro
- Video demo de 2 a 3 minutos
- Contrato desplegado en BNB Chain
- 2 transacciones exitosas dentro del periodo
- Hashes y explorer links listos para mostrar
- Mensaje claro:
  `country-aware AI recommendation + onchain premium purchase registration`

## Lo que intencionalmente no hace

- login real
- admin panel
- stock real
- pagos bancarios reales
- reglas aduaneras reales
- sistema legal o normativo
- tokenizacion compleja
- NFT complejo

## Mensaje de pitch

ORIGEN AI transforma intencion turistica en compra concreta. Ayuda al viajero a elegir mejor segun su destino y registra compras premium verificables onchain en BNB Chain.
