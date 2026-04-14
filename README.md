# pdf-viewer-vue-legacy

PDF viewer component for Vue 2 and Vue 3

## Maintenance Notice

This repository is a fork of the original project: [DingRui12138/vue-pdf-viewer](https://github.com/DingRui12138/vue-pdf-viewer).

Fork maintained at: [mastutoriales/vue-pdf-viewer](https://github.com/mastutoriales/vue-pdf-viewer).

Scope of this fork is security and dependency updates only. Active feature development is not part of the maintenance plan.

[![npm](https://img.shields.io/npm/v/pdf-viewer-vue-legacy)](https://npmjs.com/package/pdf-viewer-vue-legacy) [![npm](https://img.shields.io/npm/dw/pdf-viewer-vue-legacy)](https://npmjs.com/package/pdf-viewer-vue-legacy) [![Github Repo stars](https://img.shields.io/github/stars/DingRui12138/vue-pdf-viewer)](https://github.com/DingRui12138/vue-pdf-viewer) [![npm](https://img.shields.io/npm/l/pdf-viewer-vue-legacy)](https://github.com/DingRui12138/vue-pdf-viewer/blob/master/LICENSE)

## Compatibility

This package is compatible with both Vue 2 and Vue 3. The default exported build is for Vue 3, but `dist` directory also contains a build for Vue 2 (`dist/vue2-pdf-viewer.js`). See the example in [Usage](#usage) section.

## Installation

Depending on the environment, the package can be installed in one of the following ways:

```shell

npm install pdf-viewer-vue-legacy

```

```shell

yarn add pdf-viewer-vue-legacy

```

```html
<script src="https://unpkg.com/pdf-viewer-vue-legacy"></script>
```

## Usage

```vue
<template>
  <div>
    <h1>File</h1>

    <PDFViewer
      :source="url"
      style="height: 100vh; width: 100vw"
      @download="handleDownload"
    />

    <h1>Base64</h1>

    <PDFViewer
      :source="base64"
      style="height: 100vh; width: 100vw"
      @download="handleDownload"
    />
  </div>
</template>

<script>
import PDFViewer from 'pdf-viewer-vue-legacy'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import PDFViewer from 'pdf-viewer-vue-legacy/dist/vue2-pdf-viewer'
// import PDFViewer from 'pdf-viewer-vue-legacy/dist'

export default {
  components: {
    PDFViewer,
  },

  data() {
    return {
      url: '<PDF_URL>',
      base64: '<BASE64_ENCODED_PDF>',
    }
  },
}
</script>
```

### Props

| Name           | Type                      | Accepted values                                                                                                 | Description        |
| -------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------ |
| source         | `string`                  | document `URL` or `Base64`                                                                                      | source of document |
| controls       | `string[]`                | `[`<br/>`'download',`<br/>`'print',`<br/>`'rotate',`<br/>`'zoom',`<br/>`'catalog',`<br/>`'switchPage',`<br/>`]` | visible controls   |
| loading-text   | `string`                  | -                                                                                                               | loading text       |
| rendering-text | `string`                  | -                                                                                                               | rendering text     |
| settings       | `{ defaultZoom: number }` | -                                                                                                               | default settings   |
| filename       | `string`                  | `null`                                                                                                          | display filename   |

### Events

| Name             | Value                                 | Description                     |
| ---------------- | ------------------------------------- | ------------------------------- |
| download         | `{source: string; filename: string;}` | pdf file base info              |
| loaded           | `{total: number}`                     | document load completed         |
| loading-failed   | `Error`                               | failed to load document         |
| rendered         | -                                     | finished rendering the document |
| rendering-failed | `Error`                               | failed to render document       |

## Examples

```
TODO: CodeSandbox or JSFiddle
```

## License

MIT License. Please see [LICENSE file](LICENSE) for more information.
