const urlDoc = {
  user: {
    login: { url: '/login', type: 'post' },
    logout: { url: '/logout', type: 'post' },
    register: { url: '/register', type: 'post' }
  },
  serDashboard: {
    search: { url: '/dashboard/search', type: 'post' },
    info: { url: '/dashboard/info', type: 'get' }
  }
}

export default urlDoc
