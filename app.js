let quizData = [
	{
		question:
			"Q1:Responses to our new package design have been _____ positive.",

		a: "overwhelm",
		b: "overwhelmingly",
		c: "overwhelmed",
		d: "overwhelming",
		ans: "ans2",
	},

	{
		question: "Q2:_____ it rains _____ not, the show must go on.",

		a: "Whether, or",
		b: "Neither, nor",
		c: "Just as, so",
		d: "Both, and",
		ans: "ans1",
	},

	{
		question: "Q3:What meal ______ when she got sick?",

		a: "eating was April",
		b: "April was eating",
		c: "was April eating",
		d: "eating April was",
		ans: "ans3",
	},
	{
		question: "Q4:John refuses to try anything new because he’s risk-_____.",

		a: "averse",
		b: "adverse",
		c: "reluctant",
		d: "afraid",
		ans: "ans1",
	},
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
let showScore = document.querySelector("#showScore");

var questionCount = 0;
let score = 0;

let questionLoad = () => {
	const questionList = quizData[questionCount];
	question.innerText = questionList.question;
	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;
};
questionLoad();

submit.addEventListener("click", () => {
	const checkedAnswer = getCheckAnswer();
	console.log(checkedAnswer);
	if (checkedAnswer === quizData[questionCount].ans) {
		score++;
	}
	questionCount++;
	deSelectAll();
	if (questionCount < quizData.length) {
		questionLoad();
	} else {
		showScore.innerHTML = `
        <h3>Your Total ${score}/${quizData.length} 👍</h3>
        <button class="btn" onClick="window.location.reload();">Play Again</button>
        `;
		showScore.classList.remove("show");
	}
});

const deSelectAll = () => {
	answers.forEach((elementAns) => (elementAns.checked = false));
};
let getCheckAnswer = () => {
	let answer;
	answers.forEach((elementAns) => {
		if (elementAns.checked) {
			answer = elementAns.id;
		}
	});
	return answer;
};
