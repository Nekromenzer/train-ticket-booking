const urlDoc = {
  auth: {
    login: { url: '/login', type: 'post' },
    logout: { url: '/logout', type: 'post' },
    register: { url: '/register', type: 'post' },
    // email verify
    sendVerification: { url: '/send-verification-email', type: 'post' },
    verifyEmail: { url: '/verify-email', type: 'post' },
    // forget password
    forgetPassword: { url: '/forgot-password', type: 'post' },
    resetPassword: { url: '/reset-password', type: 'post' },
    verifyToken: { url: '/verify-token', type: 'post' }
  },
  serDashboard: {
    search: { url: '/dashboard/search', type: 'post' },
    info: { url: '/dashboard/info', type: 'get' }
  }
}

export default urlDoc
