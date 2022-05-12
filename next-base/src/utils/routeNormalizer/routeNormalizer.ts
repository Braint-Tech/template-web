const possibleManyToSingle = (x: string | string[] | undefined) => Array.isArray(x) ? x[0] : x

const query = {
  possibleManyToSingle
}

const RouteNormalizer = {
  query
}

export default RouteNormalizer