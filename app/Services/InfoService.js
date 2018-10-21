'use strict'

const File = use('File')

class InfoService {
  static getAllPokemon() {
    return File.getContent('pokemon')
  }

  static getPokemon(pokemon) {
    return File.getContent('pokemon', pokemon)
  }
}

module.exports = InfoService
