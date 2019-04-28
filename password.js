let generatePassword = (length) => {
  let result = ""
  for(let i=0; i < length; i++) {
    result += String.fromCharCode(Math.random() * (126 - 33) + 33)
  }
  return result
}

let PasswordGenerator = () => {
  if (process.argv.length !== 4) {
    console.log("Incorrect number of arguments, please use this format: password <length> <Number Of>")
    process.exit(1)
  }
  else  {
    for(let i=0; i < process.argv[3]; i++) {
      console.log(generatePassword(process.argv[2]))
    }
    process.exit(0)
  }
}

PasswordGenerator()