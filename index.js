const contacts = require('./contacts.js')
const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts)
      
    case 'get':
        const oneContact = await contacts.getContactById(id);
        return console.log(oneContact)

    case 'add':
        const newContact = await contacts.addContact({name, email, phone})
        return console.log(newContact)

    case 'updateById':
         const updateContact = await contacts.updateContact(id,{ name, email, phone})
         return console.log(updateContact)

    case 'remove':
          const removeContact = await contacts.removeContact(id)
          return console.log(removeContact)
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
invokeAction(argv);
