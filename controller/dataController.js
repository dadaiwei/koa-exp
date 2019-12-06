const handleMessage = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const data = [];
        for (let i = 0; i < 100; i++) {
          data.push({
            index: i,
            name: String.fromCharCode(i)
          })
        }
        ctx.body = {
          data
        }
        resolve()
      }, 1000)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = handleMessage;