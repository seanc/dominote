'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.group(() => {
  Route.get('register', 'UserController.create')
  Route
    .post('register', 'UserController.store')
    .validator(['StoreUser'])

  Route.get('login', 'SessionController.create')
  Route.post('login', 'SessionController.store')
}).middleware(['guest'])

Route.group(() => {
  Route.get('/', 'DashboardController.show')
  Route.get('logout', 'SessionController.delete')
}).middleware(['auth'])