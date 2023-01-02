const nanoid = require('nanoid');

const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const parsedData = await JSON.parse(data);
        console.log(parsedData);
    } catch (e) {
        console.error(e);
    }
}
  
async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const parsedData = await JSON.parse(data);
        const result = await parsedData.find(
          (contact) => Number(contact.id) === contactId
        );
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}
  
async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const parsedData = await JSON.parse(data);
        const delContact = await parsedData.find(
          (contact) => Number(contact.id) === contactId
        );
        if (delContact) {
          const index = parsedData.indexOf(delContact);
          parsedData.splice(index, 1);
          await fs.writeFile(contactsPath, JSON.stringify(parsedData), "utf-8");
        } else {
          return console.log(`Contact with id=${contactId} not found!!!`);
        }
        console.log(`Contact with id=${contactId} is removed`);
    } catch (e) {
        console.error(e);
    }
}
  
async function addContact(name, email, phone) {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        const parsedData = await JSON.parse(data);
        const id = await nanoid();
    
        const newContact = { id, name, email, phone };
        const updateContacts = [...parsedData, newContact];
        await fs.writeFile(contactsPath, JSON.stringify(updateContacts), "utf-8");
        await console.log(`Contact with id=${id} is added`);
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };