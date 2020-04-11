function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/district', name: 'district', component: page('district.vue') },
  { path: '/upazila', name: 'upazila', component: page('upazila.vue') },
  { path: '/taskcurd', name: 'taskcurd', component: page('taskcurd.vue') },
  { path: '/task', name: 'task', component: page('task.vue') },
  { path: '/client', name: 'client', component: page('client.vue') },
  { path: '/project', name: 'project', component: page('project.vue') },
  { path: '/department', name: 'department', component: page('department.vue') },
  { path: '/designation', name: 'designation', component: page('designation.vue') },
  { path: '/status', name: 'status', component: page('status.vue') },
  { path: '/issues', name: 'issues', component: page('issues.vue') },
  { path: '/issue', name: 'issue', component: page('issue.vue') },
  { path: '/holidays', name: 'holidays', component: page('holidays.vue') },
  { path: '/issue-type', name: 'issuetype', component: page('issue-type.vue') },
  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ] },

  { path: '*', component: page('errors/404.vue') }
]
