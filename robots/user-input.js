const content = {}

content.searchTerm = askAndReturnSearchTerm()
content.prefix = askAndReturnPrefix()


function askAndReturnSearchTerm() {
    return readline.question("Type a Wikipedia search term: ")
}

function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixedIndex =  readline.keyInSelect(prefixes, 'Choise a prefixe')
    return prefixes[selectedPrefixedIndex]
    console.log(selectPrefixText)
}