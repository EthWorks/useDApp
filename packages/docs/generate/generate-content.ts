import * as fs from 'fs';
import type {ContainerReflection} from 'typedoc'

const outFilename = 'docs/03-API Reference/07-Hooks-JSON.mdx'
const json = fs.readFileSync('generate/hooks.gen.json', {encoding: 'utf-8'})
const hooks = JSON.parse(json) as ContainerReflection
let content = hooks.children
  .filter(child => child.flags.isPublic)
  .filter(child => child.kindString === 'Function')
  .map(child => {
    if (child.comment?.hasTag('deprecated')) {
      return `## <del>${child.name}</del>`
    }
    return `## ${child.name}`
  }).join('\n\n')


fs.writeFileSync(outFilename, content)
