export default {
  dbs: '127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '991846169@qq.com'
    },
    get pass() {
      return 'nvgsdskyjeclbfgh'
    },
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
