const maybeManyToJustOne = (x: string | string[] | undefined) => Array.isArray(x) ? x[0] : x

const query = {
  maybeManyToJustOne
}

const RouteNormalizer = {
  query
}

export default RouteNormalizer