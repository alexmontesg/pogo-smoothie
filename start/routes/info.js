'use strict'

module.exports = Route => {
  Route.group(() => {
    Route.get('/pokemon', 'Info/PokemonController.all')
    Route.get('/pokemon/:pokemon', 'Info/PokemonController.get')
  }).prefix('info')
}
