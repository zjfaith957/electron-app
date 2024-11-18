import request from '@utils/request.js'

export const userLogin = (data) => {
  return request({
    url: '/u/loginByJson',
    data
  })
}
