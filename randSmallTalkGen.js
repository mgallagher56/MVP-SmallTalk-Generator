smallTalkQuestions = [
    'If you weren’t working here, what would you probably be doing right now?',
    'How did you become a [job title]?',
    'What surprised you the most about your current job?',
    'What’s the craziest thing a boss has ever asked you to do?',
    'Would you rather work four 10-hour days or five eight-hour days?',
    'If you were guaranteed to be successful, what job would you want?',
    'What was your first job? Did you like it?',
    'What’s the best career advice you’ve ever received? How about the worst?',
    'If you were in charge of picking the eighth wonder of the world, what would you choose?',
    'What do you wish you had placed in a time capsule 15 years ago?',
    'What’s the strangest compliment you’ve ever gotten?',
    'Have you ever thought of a cool invention or company, only to discover someone had already invented or started it?',
    'If you could teach a college course on any subject you want, what would it be?',
    'What’s the most out-of-character thing you’ve ever done?',
    'What would be your ideal superpower?',
    'If you could have any type of animal for a pet, what would it be?'
];

const smallTalkGenerator = (smallTalkQuestions) => {
    return smallTalkQuestions[Math.floor(Math.random() * 10)]
};
document.getElementById('newSmallTalk').addEventListener('click', () => {
    let question = smallTalkGenerator(smallTalkQuestions);
    document.getElementById('smallTalk').innerHTML = "<h1>" + question + "</h1>";
    }
);

