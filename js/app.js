const LIST = [
    {
      id: 1,
      nome: 'Mestre Yoda',
      avatar: 'images/yoda.png',
      liked: false
    },
    {
      id: 2,
      nome: 'Luke Skywalker',
      avatar: 'images/luke.png',
      liked: false
    },
    {
      id: 3,
      nome: 'Princesa Leia',
      avatar: 'images/leia.png',
      liked: false
    },
    {
      id: 4,
      nome: 'Han Solo',
      avatar: 'images/hansolo.png',
      liked: false
    },
    {
      id: 5,
      nome: 'Darth Vader',
      avatar: 'images/vader.png',
      liked: false
    },
    {
      id: 6,
      nome: 'Chewbacca',
      avatar: 'images/chewbacca.png',
      liked: false
    },
    {
      id: 7,
      nome: 'R2D2',
      avatar: 'images/r2d2.png',
      liked: false
    },
    {
      id: 8,
      nome: 'C3pO',
      avatar: 'images/c3po.png',
      liked: false
    }
  ];
  
  new Vue({
    el: '#app',
    data: {
      title: 'Star Wars Lego',
      userName: 'bem-vindo',
      characters: LIST.map(character => ({ ...character, liked: false })),
      searchName: '',
      showClearButton: false,
      searchResult: [],
      showModal: false,
      noResultsFound: false
    },
    methods: {
      goToHome() {
        this.resetSearch();
      },
      like(item) {
        alert(`O personagem ${item.nome} recebeu um like!`);
        item.liked = true;
        const clickedHeart = event.target;
        clickedHeart.classList.add('clicked');
      },
      remover(id) {
        this.characters = this.characters.filter(item => item.id !== id);
        this.searchResult = this.searchResult.filter(item => item.id !== id);
  
        if (this.searchResult.length === 0) {
          this.showModal = true;
        }
  
        if (this.characters.length === 0) {
          this.resetSearch();
        }
      },
      search() {
        if (this.searchName.trim() === '') {
          this.resetSearch();
          return alert('O campo de busca é obrigatório');
        }
      
        this.searchResult = this.characters.filter(item =>
          item.nome.toLowerCase().includes(this.searchName.toLowerCase())
        );
      
        if (this.searchResult.length === 0) {
          this.showClearButton = true;
          this.showModal = true;
          this.noResultsFound = true;
          alert('Nenhum personagem encontrado com esse nome');
        } else {
          this.characters = this.searchResult;
          this.showClearButton = true;
          this.showModal = false;
          this.noResultsFound = false;
        }
      },
      clearSearch() {
        this.resetSearch();
      },
      resetSearch() {
        this.searchName = '';
        this.showClearButton = false;
        this.characters = LIST;
        this.searchResult = [];
        this.showModal = false;
        this.noResultsFound = false;
      },
      closeModal() {
        this.showModal = false;
      }
    },
    watch: {
      searchName(newValue) {
        if (newValue.trim() === '') {
          this.showClearButton = false;
          this.characters = LIST;
          this.searchResult = [];
          this.showModal = false;
          this.noResultsFound = false;
        }
      }
    }
  });
  