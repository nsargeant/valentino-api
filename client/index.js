(function() {
  
  
  const initTestsForm = () => {
    const addQuestionBtn = document.querySelector('#add-question');
    addQuestionBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const question = document.createElement('input');
      question.classList.add('question');
      question.setAttribute('name', 'questions');
      question.setAttribute('type', 'text');
      const item = document.createElement('li');
      item.appendChild(question);
      document.querySelector('.questions-wrapper').appendChild(item);
    });

    // const saveTest = document.querySelector('#save-test');
    // saveTest.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   fetch('/tests', {
    //     method: 'POST'
    //   }).then((response)=> {
    //     return response.json();
    //   }).then((result) => {
    //     console.log(result);
    //   });
    // });
  }
  
  const initForm = () => {
    initTestsForm();
  }

  initForm();
})()


/**
   var questions = [{
     text: 'Do you like apple pie?'
   }, {
     text: 'Do you enjoy meeting new people?'
   }, {
     text: 'Do you like helping people?'
   }, {
     text: 'Do you like country swing dancing?'
   }, {
     text: 'Do you like techno music?'
   }, {
     text: 'Do you like Harry Potter?'
   }, {
     text: 'Do you like Star Wars?'
   }, {
     text: 'Do you like going to game nights?'
   }, {
     text: 'Do you like to weight lifting?'
   }, {
     text: 'Do you like running?'
   }, {
     text: 'Do you enjoy musicals?'
   }, {
     text: 'Do you like to quote movies?'
   }, {
     text: 'Do you agree that Trump should be president?'
   }, {
     text: 'Do you like piña coladas?'
   }, {
     text: 'Do you like getting caught in the rain?'
   }]

   questions.forEach((q) => {
     document.querySelector('#add-question').click();
     let last = [...document.querySelectorAll('.question')].pop();
     last.value = q.text;
   });
 */