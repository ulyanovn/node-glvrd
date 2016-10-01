# node-glvrd - WIP (разрабатывается, пользоваться нельзя)

Библиотека для подключения ко второй версии [API Главреда](https://glvrd.ru/api/). Берет на себя детали реализации, вам останется только подключить ее в node-приложение. Работает только для серверов.

[![NPM version][npm-image]][npm-url]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![JavaScript Style Guide][style-image]][style-url]

```js
// before all run: npm i -S node-glvrd

import nodeGlvrd from 'node-glvrd';
var glvrd = new nodeGlvrd('Your app name/1.0');

glvrd.proofread('Текст!!!').then(fragments => console.log(fragments));

// Result:
[
    {
        start: 1,
        end: 2,
        hint: {
            id: 'r123456789',
            name: 'Многократное восклицание',
            description: 'Никогда не используйте более одного восклицательного знака подряд.'
        }
    },
    …
]
```

## API

### `new nodeGlvrd(appName)`

`appName` <sup>(обязательный, строка)</sup>. Заранее регистрировать `appName` не нужно, выбирайте любой разумный вариант. Предлагаемый формат и примеры значений: `Super-duper/1.0`, `GreatPlugin/0.2.3beta`, `Example/0.1 (http://example.ru)`

### `glvrd.checkStatus()`

Проверит статус сервера Главреда, явно используйте только в разработке. Все сетевые ошибки `node-glvrd` вернет в виде исключений (например, 500-й код http-ответа) или корректно обработает.

### `glvrd.proofread(text)`

## Требования

* [Node.js][node] 6 (более ранние версии зарабоютчерез Babel, а для 0.10 добавить [полифил Promise])

## Лицензия

MIT © [Aleksander Terekhov](http://terales.info)



[npm-url]: https://npmjs.org/package/node-glvrd
[npm-image]: https://img.shields.io/npm/v/node-glvrd.svg?style=flat-square

[travis-url]: https://travis-ci.org/terales/node-glvrd
[travis-image]: https://img.shields.io/travis/terales/node-glvrd.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/terales/node-glvrd
[coveralls-image]: https://img.shields.io/coveralls/terales/node-glvrd.svg?style=flat-square

[depstat-url]: https://david-dm.org/terales/node-glvrd
[depstat-image]: https://david-dm.org/terales/node-glvrd.svg?style=flat-square

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[полифил Promise]: https://github.com/jakearchibald/es6-promise

[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/

[style-url]: http://standardjs.com/
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
