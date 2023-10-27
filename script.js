let table = document.querySelector('table');
let idCount = 2;

let data = {
    contacts: [
        {
            id: 0,
            name: 'Pedro',
            email: 'pedro@email.com',
            phone: '554785556',
        },
        {
            id: 1,
            name: 'João',
            email: 'joao@gmail.com',
            phone: '4778556',
        },
    ],

    add(name = document.getElementById('newContactNameInput'), email = document.getElementById('newContactEmailInput'), phone = document.getElementById('newContactPhoneInput')){
        this.contacts.push(
            {
                id: idCount ++,
                name: name.value,
                email: email.value,
                phone: phone.value,
            },
        );
        name.value = '';
        email.value = '';
        phone.value = '';
        this.show();
    },

    edit(idToEdit = document.getElementById('idToEdit')){
        for (c = 0; c < this.contacts.length; c++){
            if (this.contacts[c].id == idToEdit.value){
                this.contacts[c].name = document.getElementById('editContactNameInput').value;
                this.contacts[c].email = document.getElementById('editContactEmailInput').value;
                this.contacts[c].phone = document.getElementById('editContactPhoneInput').value;
            }
        }
        idToEdit.value = '';
        document.getElementById('editContactNameInput').value = '';
        document.getElementById('editContactEmailInput').value = '';
        document.getElementById('editContactPhoneInput').value = '';
        this.show();
    },

    idToEditVerify(idToVerify = document.getElementById('idToEdit')){
        for (c = 0; c < this.contacts.length; c++){
            if (this.contacts[c].id == idToVerify.value){
                document.getElementById('editContactNameInput').value = this.contacts[c].name;
                document.getElementById('editContactEmailInput').value = this.contacts[c].email;
                document.getElementById('editContactPhoneInput').value = this.contacts[c].phone;
            };
        };
    },

    remove(idToRemove = document.getElementById('idToRemove')){
        let pos = this.contacts.map(x => x.id).indexOf(Number(idToRemove.value));
        console.log(pos);
        if (pos == -1){
            window.alert('No contact found.');
        } else{
            let verify = window.confirm(`Do you really want to delete ${this.contacts[pos].name} contact info?`);
            if (verify == true){
                this.contacts.splice(pos, 1);
                this.show();
                idToRemove.value = '';
            } else{
                window.alert('Operation canceled.');
                idToRemove.value = '';
            };
        };
    },

    show(){
        table.innerHTML = '<thead><td>ID</td><td>Name</td><td>E-mail</td><td>Phone number</td></thead>';
        for (c = 0; c < this.contacts.length; c ++){
            table.innerHTML += `<tr><td>${this.contacts[c].id}</td><td>${this.contacts[c].name}</td><td>${this.contacts[c].email}</td><td>${this.contacts[c].phone}</td></tr>`
        };
    },

    open(x){
        addContactDiv = document.getElementById('new-contact');
        editContactDiv = document.getElementById('edit-contact');
        removeContactDiv = document.getElementById('remove-contact');
        switch (x){
            case 'add':
                if (editContactDiv.style.display == 'flex' || removeContactDiv.style.display == 'flex'){
                    editContactDiv.style.display = 'none';
                    removeContactDiv.style.display = 'none';
                };
                addContactDiv.style.display = 'flex';
                break;
            case 'edit':
                if (addContactDiv.style.display == 'flex' || removeContactDiv.style.display == 'flex'){
                    addContactDiv.style.display = 'none';
                    removeContactDiv.style.display = 'none';
                };
                editContactDiv.style.display = 'flex';
                break;
            case 'remove':
                if (addContactDiv.style.display == 'flex' || editContactDiv.style.display == 'flex'){
                    addContactDiv.style.display = 'none';
                    editContactDiv.style.display = 'none';
                };
                removeContactDiv.style.display = 'flex';
                break;
        };
    },

    close(x){
        switch (x){
            case 'add':
                addContactDiv.style.display = 'none';
                break;
            case 'edit':
                editContactDiv.style.display = 'none';
                break;
            case 'remove':
                removeContactDiv.style.display = 'none';
                break;
        };
    },
};

data.show();