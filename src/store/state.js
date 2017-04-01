const state = {
  user: {
    id: null,
    username: null,
    email: null,
    registered: null,
    logged: false
  },
  profile: {
    id: null,
    username: null,
    email: null,
    registered: null,
  },
  auth: {
    login: {
      errMessage: null,
      loading: false
    },
    signup: {
      errMessage: null,
      loading: false
    }
  },
  gallery: {
    uploadFile: {
      loading: false,
      errMsg: null
    },
    data: [],
    feedData: [],
    activePic: {
      pic: {},
      user: {},
      showModal: false
    }
  }
}

export default state