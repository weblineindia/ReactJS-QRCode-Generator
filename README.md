# ReactJS - QRCode Generator

ReactJS based QR Code / Barcode Generator.

## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [Credits](#credits)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |

## Demo

[![](qrcode.gif)](https://github.com/weblineindia/ReactJS-QRCode-Generator/qrcode.gif)

## Getting started

Install the npm package:

```bash
npm install react-weblineindia-qrcode-generator
#OR
yarn add react-weblineindia-qrcode-generator
```

## Usage

Use the `<react-weblineindia-qrcode-generator>` component:

```js
import React ,{ Component } from 'react';
import QRCode from "react-weblineindia-qrcode-generator";

class Test extends Component {
    constructor(props) {
    super(props);
    this.state = {
      vData: "https://www.weblineindia.com/",
    };
    render(){
    return (
      <div>
       <QRCode value={this.state.vData} />
      </div>
    )}
}
```

## Available Props

| prop      | type                         | default value |
| --------- | ---------------------------- | ------------- |
| `value`   | `string`                     |
| `size`    | `number`                     | 128           |
| `bgColor` | `string`                     | '#FFFFFF'     |
| `fgColor` | `string`                     | '#000000'     |
| `level`   | `string` (`'L' 'M' 'Q' 'H'`) | 'L'           |


## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

react-weblineindia-qrcode-generator is inspired by [react-qr-scanner](https://www.npmjs.com/package/react-qr-scanner).


## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/ReactJS-QRCode-Generator/blob/master/LICENSE

## Keywords

react-weblineindia-qrcode-generator, react-qrcode, qrcode, qrcode-generator, reactjs-qrcode, react-barcode, barcode-generator