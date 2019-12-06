const handleMessage = (ctx) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        ctx.body = {
          message: {
            name: '小明',
            age: 12,
            sex: '男',
            address: '浙江省杭州市'
          }
        }
        resolve()
      }, 1000)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = handleMessage;