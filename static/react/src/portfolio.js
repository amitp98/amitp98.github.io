const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://amitp98.github.io/',
  title: 'Amit',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Amit',
  role: 'Full Stack Developer',
  description:
    'Experienced Software Developer with strong problem-solving skills and the ability to adapt quickly to new technologies.',
  // resume: 'https://amitp98.github.io/',
  social: {
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/amitp98',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Digitalization of CPI',
    description:
      '(Ministry of Statistics – GoI) Digitalization of Consumer Price Index(CPI) data collection and administration for rural and urban sectors through cross-platform mobile applications.',
    stack: ['Ionic framework', 'TypeScript'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'User authentication using ML',
    description:
      'Multimodal Biometrics for user authentication using mouse dynamics, keystroke and face related attributes of user.',
    stack: ['Python', 'Machine Learning'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Sentiment analysis',
    description:
      'Sentiment analysis on IMDb movie reviews to classify them as positive or negative. Applied standard NLP steps and language understanding algorithms to predict user sentiments.',
    stack: ['Python', 'NLP'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Hyperledger Fabric - Voting portal',
    description:
      'Voting portal based on Blockchain network created using Hyperledger Fabric.',
    stack: ['Hyperledger Fabric', 'TypeScript'],
    sourceCode: 'https://github.com/amitp98/E-Voting-portal-using-Hyperledger-Fabric-Blockchain',
    // livePreview: 'https://github.com',
  },
  {
    name: 'PC-Control Android app',
    description:
      'Android app to control few actions on PC. Implemented using Socket Programming in Java.',
    stack: ['Android', 'Java'],
    sourceCode: 'https://github.com/amitp98/PC-Control-Android-App',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Ionic To-do list cross-platform app',
    description:
      'To-do List App developed with Ionic framework. SQLite is used for local storage in the app.',
    stack: ['Ionic framework', 'TypeScript'],
    sourceCode: 'https://github.com/amitp98/Ionic-To-do-List-App',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C/C++',
  'Rasa NLU/Chatbot',
  'NLP',
  'Machine Learning',
  'JavaScript',
  'Node.js',
  'React',
  'Express.js',
  'Linux',
  'Git',
  'InfluxDB',
  'Elasticsearch',
  'Grafana',
  'Kibana',
  'Flutter',
  'Ionic',
  'TypeScript',
  'HTML',
  'CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '@gmail.com',
}

export { header, about, projects, skills, contact }
