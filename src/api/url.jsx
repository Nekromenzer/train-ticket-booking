const urlDoc = {
  user: {
    login: { url: '/user/login', type: 'post' },
    logout: { url: '/user/logout', type: 'post' },
    info: { url: '/user/info', type: 'get' }
  },
  serDashboard: {
    search: { url: '/dashboard/search', type: 'post' },
    info: { url: '/dashboard/info', type: 'get' }
  }
}

export default urlDoc
