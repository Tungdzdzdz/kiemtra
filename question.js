const group1 = document.getElementById('group1');
const group2 = document.getElementById('group2');
const group3 = document.getElementById('group3');
const group4 = document.getElementById('group4');

const button = document.getElementById("submit");

const question1 = [
    {
        question: 'Sharks are mammals?',
        answer: false
    },
    {
        question: 'Sea otters have a favorite rock they use to break open food?',
        answer: true
    },
    {
        question: 'The blue whale is the biggest animal to have ever lived?',
        answer: true
    },
    {
        question: 'The hummingbird egg is the world\'s smallest bird egg?',
        answer: false
    },
    {
        question: 'Pigs roll in the mud because they don\'t like being clean?',
        answer: true
    },
    {
        question: 'Bats are blind?',
        answer: false
    },
    {
        question: 'A dog sweats by panting its tongue?',
        answer: true
    },
    {
        question: 'It takes a sloth two weeks to digest a meal?',
        answer: true
    },
    {
        question: 'The largest living frog is the Goliath frog of West Africa?',
        answer: true
    },
    {
        question: 'An ant can lift 1,000 times its body weight?',
        answer: true
    }
];

const question2 = [
    {
        question: 'What is the capital of France?',
        answers: ['a) Paris', 'b) London', 'c) Rome', 'd) Berlin'],
        correctAnswer: 'a'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['a) Mars', 'b) Jupiter', 'c) Venus', 'd) Mercury'],
        correctAnswer: 'a'
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['a) Vincent van Gogh', 'b) Leonardo da Vinci', 'c) Pablo Picasso', 'd) Michelangelo'],
        correctAnswer: 'b'
    },
    {
        question: 'Which animal is known as the "King of the Jungle"?',
        answers: ['a) Tiger', 'b) Lion', 'c) Elephant', 'd) Gorilla'],
        correctAnswer: 'b'
    },
    {
        question: 'What is the largest ocean in the world?',
        answers: ['a) Pacific Ocean', 'b) Atlantic Ocean', 'c) Indian Ocean', 'd) Arctic Ocean'],
        correctAnswer: 'a'
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: ['a) William Shakespeare', 'b) George Orwell', 'c) Jane Austen', 'd) Charles Dickens'],
        correctAnswer: 'a'
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: ['a) Au', 'b) Ag', 'c) Fe', 'd) Hg'],
        correctAnswer: 'a'
    },
    {
        question: 'Which country is known for inventing pizza?',
        answers: ['a) Italy', 'b) United States', 'c) Spain', 'd) Greece'],
        correctAnswer: 'a'
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: ['a) Mount Everest', 'b) K2', 'c) Mount Kilimanjaro', 'd) Mount Fuji'],
        correctAnswer: 'a'
    },
    {
        question: 'Who wrote the novel "Pride and Prejudice"?',
        answers: ['a) Jane Austen', 'b) Charles Dickens', 'c) Mark Twain', 'd) F. Scott Fitzgerald'],
        correctAnswer: 'a'
    }
];

const question3 = [
    {
        question: 'Which of the following are primary colors?',
        answers: ['a) Red', 'b) Green', 'c) Blue', 'd) Yellow'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are programming languages?',
        answers: ['a) Java', 'b) Banana', 'c) Python', 'd) Orange'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are mammals?',
        answers: ['a) Dog', 'b) Fish', 'c) Cat', 'd) Bird'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are European countries?',
        answers: ['a) France', 'b) China', 'c) Italy', 'd) Australia'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are programming paradigms?',
        answers: ['a) Object-Oriented', 'b) Potato-Based', 'c) Functional', 'd) Spaghetti'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are natural satellites?',
        answers: ['a) Moon', 'b) Sun', 'c) Mars', 'd) Earth'],
        correctAnswers: ['a']
    },
    {
        question: 'Which of the following are US presidents?',
        answers: ['a) George Washington', 'b) Apple', 'c) Abraham Lincoln', 'd) Banana'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are programming frameworks?',
        answers: ['a) React', 'b) Carrot', 'c) Angular', 'd) Potato'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are musical instruments?',
        answers: ['a) Piano', 'b) Fish', 'c) Guitar', 'd) Bird'],
        correctAnswers: ['a', 'c']
    },
    {
        question: 'Which of the following are programming concepts?',
        answers: ['a) Variables', 'b) Broccoli', 'c) Loops', 'd) Orange'],
        correctAnswers: ['a', 'c']
    }
];

const question4 = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest ocean in the world?",
      answer: "Pacific Ocean"
    },
    {
      question: "Which country is home to the kangaroo?",
      answer: "Australia"
    },
    {
      question: "Who wrote the Harry Potter book series?",
      answer: "J.K. Rowling"
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "Au"
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      answer: "Albert Einstein"
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest"
    },
    {
      question: "Which animal is known for its black and white stripes?",
      answer: "Zebra"
    }
];

for (let i = 1; i <= question1.length; i++) {
    const div = document.createElement('div');
    const pQuestion = document.createElement('p');
    pQuestion.id = `question${i}`;
    pQuestion.innerText = `Question ${i}: ${question1[i-1].question}`;

    const radioButton1 = document.createElement('input');
    radioButton1.type = 'radio';
    radioButton1.name = `question${i}`;
    radioButton1.value = true;
    radioButton1.onclick = () => check1(radioButton1.value, i);

    const radioButton2 = document.createElement('input');
    radioButton2.type = 'radio';
    radioButton2.name = `question${i}`;
    radioButton2.value = false;
    radioButton2.onclick = () => check1(radioButton2.value, i);

    div.appendChild(pQuestion);
    div.appendChild(radioButton1);
    div.appendChild(document.createTextNode('True'));
    div.appendChild(radioButton2);
    div.appendChild(document.createTextNode('False'));

    group1.appendChild(div);
}



for (let i = 1; i <= question2.length; i++) {
    const div = document.createElement('div');
    const pQuestion = document.createElement('p');
    pQuestion.innerText = `Question ${10 + i}: ${question2[i-1].question}`;
    pQuestion.id = `question${i+10}`;

    const radioButton1 = document.createElement('input');
    radioButton1.type = 'radio';
    radioButton1.name = `question${10+i}`;
    radioButton1.value = 'a';
    radioButton1.onclick = () => check2(radioButton1.value, i+10);

    const radioButton2 = document.createElement('input');
    radioButton2.type = 'radio';
    radioButton2.name = `question${10+i}`;
    radioButton2.value = 'b';
    radioButton2.onclick = () => check2(radioButton1.value, i+10);

    const radioButton3 = document.createElement('input');
    radioButton3.type = 'radio';
    radioButton3.name = `question${10+i}`;
    radioButton3.value = 'c';
    radioButton3.onclick = () => check2(radioButton1.value, i+10);

    const radioButton4 = document.createElement('input');
    radioButton4.type = 'radio';
    radioButton4.name = `question${10+i}`;
    radioButton4.value = 'd';
    radioButton4.onclick = () => check2(radioButton1.value, i+10);

    div.appendChild(pQuestion);
    div.appendChild(radioButton1);
    div.appendChild(document.createTextNode(`${question2[i-1].answers[0]}`));
    div.appendChild(radioButton2);
    div.appendChild(document.createTextNode(`${question2[i-1].answers[1]}`));
    div.appendChild(radioButton3);
    div.appendChild(document.createTextNode(`${question2[i-1].answers[2]}`));
    div.appendChild(radioButton4);
    div.appendChild(document.createTextNode(`${question2[i-1].answers[3]}`));

    group2.appendChild(div);
}

for (let i = 1; i <= question3.length; i++) {
    const div = document.createElement('div');
    const pQuestion = document.createElement('p');
    pQuestion.innerText = `Question ${20 + i}: ${question3[i-1].question}`;
    pQuestion.id = `question${i+20}`;

    const checkboxButton1 = document.createElement('input');
    checkboxButton1.type = 'checkbox';
    checkboxButton1.name = `question${20+i}`;
    checkboxButton1.value = 'a';
    checkboxButton1.onclick = (e) => check3(20+i);

    const checkboxButton2 = document.createElement('input');
    checkboxButton2.type = 'checkbox';
    checkboxButton2.name = `question${20+i}`;
    checkboxButton2.value = 'b';
    checkboxButton2.onclick = (e) => check3(20+i);

    const checkboxButton3 = document.createElement('input');
    checkboxButton3.type = 'checkbox';
    checkboxButton3.name = `question${20+i}`;
    checkboxButton3.value = 'c';
    checkboxButton3.onclick = (e) => check3(20+i);

    const checkboxButton4 = document.createElement('input');
    checkboxButton4.type = 'checkbox';
    checkboxButton4.name = `question${20+i}`;
    checkboxButton4.value = 'd';
    checkboxButton4.onclick = (e) => check3(20+i);

    div.appendChild(pQuestion);
    div.appendChild(checkboxButton1);
    div.appendChild(document.createTextNode(`${question3[i-1].answers[0]}`));
    div.appendChild(checkboxButton2);
    div.appendChild(document.createTextNode(`${question3[i-1].answers[1]}`));
    div.appendChild(checkboxButton3);
    div.appendChild(document.createTextNode(`${question3[i-1].answers[2]}`));
    div.appendChild(checkboxButton4);
    div.appendChild(document.createTextNode(`${question3[i-1].answers[3]}`));

    group3.appendChild(div);
}


for (let i = 1; i <= question3.length; i++) {
    const div = document.createElement('div');
    const pQuestion = document.createElement('p');
    pQuestion.innerText = `Question ${30 + i}: ${question3[i-1].question}`;
    pQuestion.id = `question${i+30}`;

    const answer = document.createElement('input');
    answer.type = 'text';
    answer.onchange = (e) => check4(e, i+30);

    div.appendChild(pQuestion);
    div.appendChild(document.createTextNode("Answer: "));
    div.appendChild(answer);

    group4.appendChild(div);
}

var answers = Array(41).fill(false);

const check1 = (value, i) => {
    if(value === question1[i-1].answer.toString())
    {
        answers[i] = true;
    }
    else
    {
        answers[i] = false;
    }
}

const check2 = (value, i) => {
    if(value === question2[i-1-10].correctAnswer)
        answers[i] = true;
    else
        answers[i] = false;
}

const check3 = (i) => {
    const selectedAnswer = Array.from(document.querySelectorAll(`input[name=question${i}]`))
                                .filter(checkbox => checkbox.checked)
                                .map(checkbox => checkbox.value);
    if(selectedAnswer.length === question3[i-20-1].correctAnswers.length && selectedAnswer.every(e => question3[i-20-1].correctAnswers.includes(e)))
        answers[i] = true;
    else    
        answers[i] = false;
}

const check4 = (e, i) => {
    if(e.target.value === question4[i-30-1].answer)
        answers[i] = true;
    else    
        answers[i] = false;
}

button.onclick = () => {
    let correct = 0;
    for(let i = 1; i <= 40; i++)
    {
        const pQuestion = document.getElementById(`question${i}`);
        if(answers[i])
        {   
            pQuestion.className = 'correct'; 
            correct++;
        }
        else
        {
            pQuestion.className = 'incorrect';
            const question = pQuestion.innerText;
            let correctAnswer = '';
            if(i < 11)
                correctAnswer = question1[i-1].answer;
            else if(i < 21)
                correctAnswer = question2[i-11].correctAnswer;
            else if(i < 31) 
                correctAnswer = question3[i-21].correctAnswers;
            else
                correctAnswer = question4[i-31].answer
            pQuestion.innerText = `${question} Correct answer: ${correctAnswer}`;
        }
    }
    const p = document.getElementById('result');
    p.innerText = `Result: ${correct}/40`;
}