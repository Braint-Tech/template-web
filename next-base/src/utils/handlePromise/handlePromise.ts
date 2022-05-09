const handlePromise = <PromiseType>(
  p: Promise<PromiseType>, 
  callback?: Function
): Promise<[PromiseType | null, Error | null]> => new Promise((res, _) => {
  p.then((r: PromiseType) => res([r, null]))
  .catch((err: Error) => res([null, err]))
  .finally(() => callback ? callback() : null)
})

export default handlePromise