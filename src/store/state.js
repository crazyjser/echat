import * as local from '@/util/storage'
export default {
  echatUser: [],
  echatEvent: [],
  echatTheme: [],
  currentUser: local.currentUser.get() || {},
  theme: [
    {color: '#00b0f0', name: 'blue'},
    {color: '#00d1b2', name: 'green'},
    {color: '#f4b976', name: 'orange'},
    {color: '#f39894', name: 'pink'},
    {color: '#26b6be', name: 'cyan'}
  ]
}