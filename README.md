# Habbo-Packet
A simple habbo server-side packet composer, and parser.

## Instalação

Instale-o como quiser. Tente `npm` ou `yarn`.

Veja:

- npm: `npm install habbo-packet`
- yarn: `yarn add habbo-packet`

## Uso

Importe-o com:

```js
var HPacket = require("habbo-packet");
```
### Sintaxe

```js
let packet = new HPacket(binaryPacket);
```
## Exemplo

O exemplo a seguir mostra no console, o conteúdo json do pacote

```js
var HPacket = require("habbo-packet");

let packet = new HPacket(Buffer.from("000000300fa0001d50524f44554354494f4e2d3230323130313237313333372d48544d4c35000548544d4c350000000200000001", "hex"));

console.log(packet.json);

```