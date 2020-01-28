export const fetchMessages = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, msg: 'First', status: 'private' },
        { id: 2, msg: 'Second', status: 'public' },
        { id: 3, msg: 'Third', status: 'public' }
      ])
    }, 500)
  })
}
