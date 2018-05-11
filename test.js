const path = require('path');
const template = require('art-template');
const _ = require('underscore')
const fs = require('fs')

fs.readFile('./test.art', (e, bf) => {
  let source = bf.toString('utf8')
  und(source)
  art(source)
})

function art (source) {
  let b = new Date()
  let html = template.render(source, {hello: 'world'}, {});
  let c = new Date()
  console.log('art-template ', c - b, 'length', html.length)
  fs.writeFile('./art.out', html, () => {
    console.log('art done')
  })
}

function und (source) {
  let b = new Date()
  let html = _.template(source)({hello: 'world'});
  let c = new Date()
  console.log('underscore ', c - b, 'length', html.length)
  fs.writeFile('./und.out', html, () => {
    console.log('und done')
  })
}
