import identity from "lodash/identity"

const toNodes = (data, mapNode = identity) =>
  data.edges.map(e => e.node).map(mapNode)

export { toNodes }
