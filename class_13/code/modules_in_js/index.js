const makeTranslateRequest = require("./API");
const { add } = require("./Math");
const { speechRecognition, speechSynthesis } = require("./Speech");

speechRecognition();
speechSynthesis();
