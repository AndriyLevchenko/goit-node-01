const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

fs.readFile(filename, [options])

fs.writeFile(filename, data, [options])

function listContacts() {

}
  
function getContactById(contactId) {
    // ...твій код
}
  
function removeContact(contactId) {
    // ...твій код
}
  
function addContact(name, email, phone) {
    // ...твій код
}