function main(args) {
    let name = args.name || 'ANDRIY'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
