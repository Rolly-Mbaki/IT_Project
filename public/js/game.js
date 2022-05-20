var myHeaders = new Headers();
myHeaders.append("X-AUTH-TOKEN", "52fd843f-b2b0-4418-9878-54fff17c1a89")
myHeaders.append('accept', 'application/json')

var Headers2 = new Headers();
Headers2.append('X-AUTH-TOKEN', 'acfb6d3e-87bb-45ed-aa30-be2de62cc232')
Headers2.append('accept', 'application/json')

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var requestOptions2 = {
    method: 'GET',
    headers: Headers2,
    redirect: 'follow'
  };
// opll-ossing gevonden op deze site: https://melvingeorge.me/blog/do-multiple-fetch-requests-parallel-javascript
const clubsApi = fetch("https://futdb.app/api/clubs", requestOptions)
.then(async (res) => res.json());
const leaguesApi = fetch("https://futdb.app/api/leagues", requestOptions2)
.then(async (res) => res.json())

var url = 'https://futdb.app/api/clubs/1/image'

fetch('https://futdb.app/api/clubs/1/image',requestOptions)
.then(async (res) => {
    return res.blob()
})
.then(async (blob) => {
    var img = url.createObjectUrl(blob)
    document.getElementById('apiFoto').src = img
})

const allApis = Promise.all([clubsApi, leaguesApi])




allApis
.then(async function(response){
      console.log(response)
      console.log(response[0].items[0].name)
      const question = document.querySelector('#question')
      const choices = Array.from(document.querySelectorAll('.choice-text'))
      const progressText = document.querySelector('#progressText')
      const scoreText = document.querySelector('#score')
      const progressBarFull = document.querySelector('#progressBarFull')

      let currentQuestion = {}
      let acceptingAnswers = true
      let score = 0
      let questionCounter = 0
      let availableQuestions = []

      let questions = [
          {
              question: 'Tot welke club behoort dit logo?',
              choice1: 'Manchester United',
              choice2: `${response[0].items[0].name}`,
              choice3: 'FC Utrecht',
              choice4: 'Galatasary',
              answer: 2
          },
          {
              question: 'Tot welke league behoort dit logo?',
              choice1: 'Eredivisie',
              choice2: 'Ligue 1',
              choice3: 'La liga',
              choice4: `${response[1].items[0].name}`,
              answer: 4
          },
          {
              question: 'Tot welke club behoort dit logo?',
              choice1: 'Everton',
              choice2: 'Trabzonspor',
              choice3: `${response[0].items[1].name}`,
              choice4: 'Real Madrid',
              answer: 3
          },
          {
              question: 'Tot welke league behoort dit logo?',
              choice1: `${response[1].items[1].name}`,
              choice2: 'Primera División de Argentina',
              choice3: 'Serie A',
              choice4: 'Primeira Liga',
              answer: 1
          }
      ]

      const SCORE_POINTS = 100
      const MAX_QUESTIONS = 4

      startGame = () => {
          questionCounter = 0
          score = 0
          availableQuestions = [...questions] //alle vragen van het question object in availableq steken(spreadoperator)
          getNewQuestion()
      }

      getNewQuestion = () => {
          if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
              localStorage.setItem('mostRecentScore',score)

              return window.location.assign('/quizEnd')
          }

          questionCounter++
          progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` //ùzor
          progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

          const questionIndex = Math.floor(Math.random()*availableQuestions.length)
          currentQuestion = availableQuestions[questionIndex]
          question.innerText = currentQuestion.question

          choices.forEach(choice=>{
              const number = choice.dataset['number']
              choice.innerText = currentQuestion['choice'+number]
          })

          availableQuestions.splice(questionIndex,1)

          acceptingAnswers = true
      }

      choices.forEach(choice=>{
          choice.addEventListener('click', e =>{
              if(!acceptingAnswers) return
              
              acceptingAnswers = false
              const selectedChoice = e.target
              const selectedAnswer = selectedChoice.dataset['number']

              let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

              if (classToApply === 'correct') {
                  incrementScore(SCORE_POINTS)
              }

              selectedChoice.parentElement.classList.add(classToApply)

              setTimeout(()=>{
                  selectedChoice.parentElement.classList.remove(classToApply)
                  getNewQuestion()

              },1000)
          })
      })

      incrementScore = num => {
          score+=num
          scoreText.innerText = score
      }

      startGame()
      
  })
  .catch(async function(error){
      console.error('error with message: '+error)
  });

