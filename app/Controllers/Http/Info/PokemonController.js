'use strict'

const InfoService = require('../../../Services/InfoService')

class PokemonController {
  all({ view }) {
    const pokemon = InfoService.getAllPokemon()
    return view.render('info/pokemon/index', {
      pokemon
    })
  }
  get({request, view}) {
    const pokemon = InfoService.getPokemon(request.params.pokemon)
    return view.render('info/pokemon/index', {
      pokemon
    })
  }
}

module.exports = PokemonController
