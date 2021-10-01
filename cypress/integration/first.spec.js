
context('', () => {
    const task = getRandomString(10); 'Kupić popitkę';

    it(`
      Login to app
      add new TODO
      check if toodo in list
      remove toto
      check if todo was removed
    `, () => {
        cy
    //   Login to app
          .visit('localhost:8080')
          .addToTODO(task)

          .get('[data-test-id="todo-item"]').should('have.length', 3)
          .get('.ToDoItem:nth-of-type(3)').should('is.visible').contains('Kupić popitkę')

          .get('[data-test-id="todo-item"]:nth-of-type(3) .ToDoItem-Delete').click()
          .get('.ToDoItem').should('have.length', 2)
          .get('.ToDoItem:nth-of-type(3)').should('not.exist')




          // assertcja
    })
})