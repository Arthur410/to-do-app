<template>
  <div class="app__content">
    <div class="container">
      <div class="row">
        <div class="col">
          <header class="header">
            <div class="header__logo">
              <img src="../assets/logo.png" alt="">
            </div>
          </header>
        </div>
        <div class="col">
          <div class="to-do">
            <div class="to-do__wrapper">
              <div class="to-do__header">To-Do List</div>
              <div class="to-do__content">
                <div class="to-do__item" v-for="(item, index) in toDoItems" :key="item">
                  <span class="to-do__done" @click="deleteToDoItem(index)"></span>
                  <div class="to-do__description">
                    <h1 class="title">{{item.title}}</h1>
                    <p class="description">{{item.description}}</p>
                  </div>
                </div>
              </div>
              <button class="to-do__button" @click="addModal">Добавить задачу</button>
              <div class="create-item" :class="{'open': toDoOpen}">
                <span></span>
                <form action="">
                  <input required type="text" placeholder="Цель" v-model="toDoName">
                  <input type="text" placeholder="Описание" v-model="toDoDesc">
                  <button type="submit" @click="addToDoItem($event, {'title':toDoName, 'description':toDoDesc})">Добавить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      toDoOpen: false,
      toDoName: '',
      toDoDesc: '',
    }
  },
  computed: {
    toDoItems () {
      return this.$store.state.toDoItems
    }
  },
  mounted(){
    this.toDoHeight()
    window.addEventListener("resize", this.toDoHeight);
  },
  unmounted() {
    window.removeEventListener("resize", this.toDoHeight);
  },
  methods: {
    toDoHeight() {

      let screenWidth = window.innerWidth
      let screenHeight = window.innerHeight
      let wrapper = document.querySelector('.to-do__wrapper')
      if (screenWidth > 768) {
        let toDoHeight = screenHeight - (screenHeight * 0.35)
        wrapper.style.gridTemplateRows = `52px ${toDoHeight}px 52px`
      } else {
        if (screenHeight < 420) {
          wrapper.style.gridTemplateRows = `repeat(3, 1fr)`
        } else {
          wrapper.style.gridTemplateRows = `52px ${screenHeight / 2}px 52px`

        }
      }
    },
    addToDoItem(e, item) {
      if (item.title !== '') {
        e.preventDefault()
        this.toDoOpen = !this.toDoOpen
        this.toDoName = this.toDoDesc = ''
        this.$store.commit('addToDoItem', item)
      }
    },

    addModal() {
      this.toDoOpen = !this.toDoOpen
    },

    deleteToDoItem(index) {
      this.toDoDoneClicked = !this.toDoDoneClicked
      this.$store.commit('deleteToDoItem', index)
    }
  }
}
</script>

<style>
@import '../styles/toDoStyles.css';

</style>