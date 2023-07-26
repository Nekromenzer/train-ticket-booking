const version = 'v1'

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
  userDashboard: {
    stations: { url: `/${version}/location/all`, type: 'get' },
    search: { url: `/${version}/train-schedule/search`, type: 'post' },
    seats: { url: `/${version}/train-schedule/seats`, type: 'post' },
    reserve: { url: `/${version}/user/reservation`, type: 'post' },
    getReservations: { url: `/${version}/user/reservations`, type: 'get' },
    getTotalReservations: {
      url: `/${version}/user/reservations/count`,
      type: 'get'
    }
  },
  admin: {
    getAllUsers: { url: `/${version}/dashboard/user/all`, type: 'get' },
    getAllReservations: {
      url: `/${version}/dashboard/reservations/all`,
      type: 'get'
    },
    addSchedule: { url: `/${version}/dashboard/schedule/add`, type: 'post' },
    getAllTrainRoutes: {
      url: `/${version}/dashboard/train-routes/all`,
      type: 'get'
    },
    getStatistics: { url: `/${version}/dashboard/statistics`, type: 'get' }
  }
}

export default urlDoc
