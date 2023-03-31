const app = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Characters',
        userName: 'Bem-vindo ao universo de Star Wars',
        searchName: '',
        characters: [
            { id: 1, nome: 'Luke Skywalker', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/luke.jpg' },
            { id: 2, nome: 'Darth Vader', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/vader.jpg' },
            { id: 3, nome: 'Han Solo', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/han.jpg' },
            { id: 4, nome: 'Chewbacca', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chewie.jpg' },
            { id: 5, nome: 'Princess Leia', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/leia.jpg' },
            { id: 6, nome: 'Yoda', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/yoda.jpg' },
            { id: 7, nome: 'Obi-Wan Kenobi', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/obi-wan.jpg' },
            { id: 8, nome: 'Boba Fett', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/boba.jpg' },
            { id: 9, nome: 'R2-D2', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/r2-d2.jpg' },
            { id: 10, nome: 'C-3PO', avatar: 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/c3po.jpg' }
        ],
        showPopup: false,
        popupCharacterId: null
    },
    methods: {
        like(nome) {
            alert(`Você curtiu o personagem ${nome}`);
        },
        deleteCharacter() {
            // remove o personagem da lista
            this.characters = this.characters.filter(char => char.id !== this.popupCharacterId);
            // fecha o popup
            this.showPopup = false;
        },
        cancelDelete() {
            // fecha o popup
            this.showPopup = false;
        },
        deleteConfirm(id) {
            // armazena o ID do personagem para deletar
            this.popupCharacterId = id;
            // abre o popup
            this.showPopup = true;
        },
        search() {
            alert(`Você procurou por ${this.searchName}`);
        }
    }
});
