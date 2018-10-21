const { ServiceProvider } = require('@adonisjs/fold')

class FileProvider extends ServiceProvider {
  register () {
    this.app.singleton('File', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('.'))(Config)
    })
  }
}

module.exports = FileProvider
