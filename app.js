const ASSET_VERSION = "20260421-0435";

const tasks = [
  {
    id: "planting-tree",
    title: "Planting a Tree",
    instruction: "Make an English sentence that says the girl is planting a tree.",
    answer: ["She", "is", "planting", "a", "tree"],
    image: `./assets/images/task-eco-01-planting.jpg?v=${ASSET_VERSION}`,
    supportsCamera: false,
  },
  {
    id: "recycling-bottles",
    title: "Recycling Bottles",
    instruction: "Make an English sentence that says the boy is recycling plastic bottles.",
    answer: ["He", "is", "recycling", "plastic", "bottles"],
    image: `./assets/images/task-eco-02-recycling.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "reusable-bag",
    title: "Using a Reusable Bag",
    instruction: "Make an English sentence that says the girl is using a reusable bag.",
    answer: ["She", "is", "using", "a", "reusable", "bag"],
    image: `./assets/images/task-eco-03-reusable-bag.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "cleaning-beach",
    title: "Cleaning the Beach",
    instruction: "Make an English sentence that says the kids are cleaning the beach.",
    answer: ["They", "are", "cleaning", "the", "beach"],
    image: `./assets/images/task-eco-04-cleaning-beach.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "saving-water",
    title: "Saving Water",
    instruction: "Make an English sentence that says the girl is saving water now.",
    answer: ["She", "is", "saving", "water", "now"],
    image: `./assets/images/task-eco-05-saving-water.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "sorting-trash",
    title: "Sorting the Trash",
    instruction: "Make an English sentence that says the family is sorting the trash.",
    answer: ["They", "are", "sorting", "the", "trash"],
    image: `./assets/images/task-eco-06-sorting-trash.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "turning-off-lights",
    title: "Turning Off the Lights",
    instruction: "Make an English sentence that says the boy is turning off the lights.",
    answer: ["He", "is", "turning", "off", "the", "lights"],
    image: `./assets/images/task-eco-07-turning-off-lights.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "composting-scraps",
    title: "Composting Food Scraps",
    instruction: "Make an English sentence that says the girl is composting food scraps.",
    answer: ["She", "is", "composting", "food", "scraps"],
    image: `./assets/images/task-eco-08-composting.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "installing-solar",
    title: "Installing Solar Panels",
    instruction: "Make an English sentence that says the man is installing solar panels.",
    answer: ["He", "is", "installing", "solar", "panels"],
    image: `./assets/images/task-eco-09-installing-solar.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "protecting-animals",
    title: "Protecting Wild Animals",
    instruction: "Make an English sentence that says the rangers are protecting wild animals.",
    answer: ["They", "are", "protecting", "wild", "animals"],
    image: `./assets/images/task-eco-10-protecting-animals.jpg?v=${ASSET_VERSION}`,
  },
].map((task, index) => ({
  ...task,
  order: index + 1,
  scrambled: shuffleArray([...task.answer]),
}));

const cityTasks = [
  {
    id: "city-recycle",
    layer: "recycle",
    icon: "♻️",
    title: "Recycle",
    prompt: "Plastic bottles and old paper are piling up on the street. What should the city do with them?",
    options: ["Throw them on the street", "Recycle them in the correct bins", "Burn them in the yard"],
    correctIndex: 1,
    fact: "Recycling turns used bottles and paper into new products and keeps trash out of landfills.",
  },
  {
    id: "city-pollution",
    layer: "pollution",
    icon: "🌫️",
    title: "Pollution",
    prompt: "Thick gray smoke is covering the sky above the city. What is this problem called?",
    options: ["Pollution", "Decoration", "Celebration"],
    correctIndex: 0,
    fact: "Pollution is dirty air, water, or soil caused by harmful waste and smoke.",
  },
  {
    id: "city-renewable",
    layer: "renewable",
    icon: "☀️",
    title: "Renewable Energy",
    prompt: "The power plant burns coal and makes dark smoke. Which clean energy source could replace it?",
    options: ["More coal", "Solar and wind power", "More plastic"],
    correctIndex: 1,
    fact: "Renewable energy, like sunlight and wind, never runs out and does not pollute the air.",
  },
  {
    id: "city-waste",
    layer: "waste",
    icon: "🗑️",
    title: "Waste",
    prompt: "Food wrappers and bottles are scattered across the sidewalk. What do we call this kind of rubbish?",
    options: ["Treasure", "Waste", "Furniture"],
    correctIndex: 1,
    fact: "Waste is rubbish that people throw away. Reducing it keeps cities clean and healthy.",
  },
  {
    id: "city-deforestation",
    layer: "deforestation",
    icon: "🌳",
    title: "Deforestation",
    prompt: "All the trees near the city were cut down and only stumps are left. What is this problem called?",
    options: ["Deforestation", "Construction", "Irrigation"],
    correctIndex: 0,
    fact: "Deforestation is cutting down large areas of forest. Planting new trees helps the planet breathe.",
  },
].map((task, index) => ({
  ...task,
  order: index + 1,
}));

const recycleItems = [
  { id: "plastic-bottle", icon: "🧴", label: "Plastic bottle", bin: "plastic" },
  { id: "plastic-bag", icon: "🛍️", label: "Plastic bag", bin: "plastic" },
  { id: "newspaper", icon: "📰", label: "Newspaper", bin: "paper" },
  { id: "cardboard-box", icon: "📦", label: "Cardboard box", bin: "paper" },
  { id: "glass-jar", icon: "🫙", label: "Glass jar", bin: "glass" },
  { id: "glass-bottle", icon: "🍾", label: "Glass bottle", bin: "glass" },
  { id: "banana-peel", icon: "🍌", label: "Banana peel", bin: "organic" },
  { id: "apple-core", icon: "🍎", label: "Apple core", bin: "organic" },
].map((item, index) => ({
  ...item,
  order: index + 1,
}));

const RECYCLE_BIN_LABELS = {
  plastic: "Plastic",
  paper: "Paper",
  glass: "Glass",
  organic: "Organic Waste",
};

const RECYCLE_FALL_DURATION_MS = 3600;
const RECYCLE_START_LIVES = 5;

const battleProblems = [
  {
    id: "battle-recycle",
    title: "Recycle",
    prompt: "Plastic bottles are piling up in the regular trash instead of being reused.",
    options: ["Recycle them in the correct bin", "Burn them in the garden", "Leave them on the street"],
    correctIndex: 0,
    image: `./assets/images/eco-recycle.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-pollution",
    title: "Pollution",
    prompt: "Thick black smoke is filling the sky above the factory.",
    options: ["Burn more coal for power", "Reduce the factory's smoke and waste", "Ignore the smoke"],
    correctIndex: 1,
    image: `./assets/images/eco-pollution.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-renewable",
    title: "Renewable Energy",
    prompt: "The city needs more electricity, but burning coal pollutes the air.",
    options: ["Build more coal power plants", "Use solar and wind power", "Waste more electricity"],
    correctIndex: 1,
    image: `./assets/images/eco-renewable.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-climate",
    title: "Climate Change",
    prompt: "Average temperatures keep rising around the world every year.",
    options: ["Drive petrol cars more often", "Use renewable energy and plant trees", "Cut down more forests"],
    correctIndex: 1,
    image: `./assets/images/eco-climate-change.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-deforestation",
    title: "Deforestation",
    prompt: "A large forest was cut down to build a new road.",
    options: ["Plant trees", "Use more plastic", "Waste water"],
    correctIndex: 0,
    image: `./assets/images/eco-deforestation.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-endangered",
    title: "Endangered Animals",
    prompt: "Hunters are chasing the last wild tigers in the forest.",
    options: ["Protect their habitat from hunting", "Hunt more wild animals", "Destroy their forest home"],
    correctIndex: 0,
    image: `./assets/images/eco-endangered.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-compost",
    title: "Food Waste",
    prompt: "The kitchen bin is full of banana peels and vegetable scraps.",
    options: ["Throw the food scraps in the trash", "Make compost from the food scraps", "Burn the food scraps"],
    correctIndex: 1,
    image: `./assets/images/eco-compost.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-sustainability",
    title: "Sustainability",
    prompt: "A factory uses up all of its resources today with no plan for tomorrow.",
    options: ["Use resources sustainably for the future", "Use up every resource right now", "Ignore future generations"],
    correctIndex: 0,
    image: `./assets/images/eco-sustainability.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-ocean-plastic",
    title: "Ocean Plastic",
    prompt: "Plastic bags and bottles are floating in the ocean.",
    options: ["Use reusable bags and bottles", "Throw more plastic into the sea", "Burn plastic on the beach"],
    correctIndex: 0,
    image: `./assets/images/eco-ocean-plastic.jpg?v=${ASSET_VERSION}`,
  },
  {
    id: "battle-carbon-footprint",
    title: "Carbon Footprint",
    prompt: "A family flies or drives everywhere, even for very short trips.",
    options: ["Walk, cycle, or use public transport", "Fly more often for fun", "Drive alone every day"],
    correctIndex: 0,
    image: `./assets/images/eco-carbon-footprint.jpg?v=${ASSET_VERSION}`,
  },
].map((task, index) => ({
  ...task,
  order: index + 1,
}));

const vocabWords = [
  {
    word: "Recycle",
    definition: "To use something again instead of throwing it away, like turning old paper into new paper.",
    image: `./assets/images/eco-recycle.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Pollution",
    definition: "Dirty air, water, or soil caused by harmful substances or waste released into the environment.",
    image: `./assets/images/eco-pollution.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Renewable",
    definition: "Describes energy or resources that naturally replenish and never run out, like sunlight or wind.",
    image: `./assets/images/eco-renewable.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Climate change",
    definition: "The long-term change in the Earth's weather patterns and average temperatures.",
    image: `./assets/images/eco-climate-change.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Deforestation",
    definition: "Cutting down large areas of forest, usually to use the land for other purposes.",
    image: `./assets/images/eco-deforestation.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Endangered",
    definition: "Describes a plant or animal species that is at serious risk of disappearing forever.",
    image: `./assets/images/eco-endangered.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Compost",
    definition: "Decayed food and plant material used to enrich soil and help new plants grow.",
    image: `./assets/images/eco-compost.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Sustainability",
    definition: "Using resources today in a way that protects them and keeps them available for the future.",
    image: `./assets/images/eco-sustainability.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Ocean plastic",
    definition: "Plastic waste that ends up in the sea and harms marine animals and ecosystems.",
    image: `./assets/images/eco-ocean-plastic.jpg?v=${ASSET_VERSION}`,
  },
  {
    word: "Carbon footprint",
    definition: "The total amount of carbon dioxide a person or activity produces.",
    image: `./assets/images/eco-carbon-footprint.jpg?v=${ASSET_VERSION}`,
  },
];

function shuffleBattleOptions() {
  battleProblems.forEach((problem) => {
    if (!problem.baseOptions) {
      problem.baseOptions = problem.options.slice();
      problem.baseCorrectIndex = problem.correctIndex;
    }

    const order = problem.baseOptions.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    problem.options = order.map((originalIndex) => problem.baseOptions[originalIndex]);
    problem.correctIndex = order.indexOf(problem.baseCorrectIndex);
  });
}

const state = {
  activeFeature: "featureOne",
  currentTaskIndex: 0,
  placements: tasks.map((task) => Array(task.answer.length).fill(null)),
  banks: tasks.map((task) => [...task.scrambled]),
  completed: Array(tasks.length).fill(false),
  score: 0,
  drag: null,
  celebrationTimer: null,
  ignoreClickUntil: 0,
  gesture: {
    enabled: false,
    pinchActive: false,
    lastPinch: false,
    lostFrames: 0,
    smoothX: window.innerWidth / 2,
    smoothY: window.innerHeight / 2,
    lastGestureText: "Gesture tracking will start when the camera is on",
  },
  camera: {
    streamStarted: false,
    hands: null,
    cameraFeed: null,
    ownerFeature: "",
  },
  city: {
    currentTaskIndex: 0,
    answers: Array(cityTasks.length).fill(null),
    completed: Array(cityTasks.length).fill(false),
    score: 0,
  },
  recycle: {
    running: false,
    gameOver: false,
    queue: [],
    queueIndex: 0,
    score: 0,
    sorted: 0,
    lives: RECYCLE_START_LIVES,
    log: [],
    currentItem: null,
    fallTimer: null,
  },
  battle: {
    currentIndex: 0,
    running: false,
    gameOver: false,
    outcome: "",
    score: 0,
    hits: 0,
    monsterHp: 100,
    playerHp: 100,
    answers: Array(battleProblems.length).fill(null),
    autoAdvanceTimer: null,
  },
  chat: {
    selectedFile: null,
    selectedFilePreviewUrl: null,
    sending: false,
  },
};

const GESTURE_HOTZONE = {
  xMin: 0.02,
  xMax: 0.98,
  yMin: 0.04,
  yMax: 0.96,
};

const elements = {
  featureOneScreen: document.querySelector("#featureOneScreen"),
  featureTwoScreen: document.querySelector("#featureTwoScreen"),
  featureThreeScreen: document.querySelector("#featureThreeScreen"),
  featureFourScreen: document.querySelector("#featureFourScreen"),
  featureFiveScreen: document.querySelector("#featureFiveScreen"),
  featureSixScreen: document.querySelector("#featureSixScreen"),
  openAiChatFeatureButton: document.querySelector("#openAiChatFeatureButton"),
  openAiChatFeatureButtonBottom: document.querySelector("#openAiChatFeatureButtonBottom"),
  backToFeatureFourButton: document.querySelector("#backToFeatureFourButton"),
  openEcoVocabularyFeatureButton: document.querySelector("#openEcoVocabularyFeatureButton"),
  openEcoVocabularyFeatureButtonBottom: document.querySelector("#openEcoVocabularyFeatureButtonBottom"),
  backToFeatureFiveButton: document.querySelector("#backToFeatureFiveButton"),
  vocabGrid: document.querySelector("#vocabGrid"),
  chatStatusPill: document.querySelector("#chatStatusPill"),
  chatMessages: document.querySelector("#chatMessages"),
  chatImageInput: document.querySelector("#chatImageInput"),
  chatAttachButton: document.querySelector("#chatAttachButton"),
  chatSelectedFileName: document.querySelector("#chatSelectedFileName"),
  chatTextInput: document.querySelector("#chatTextInput"),
  chatSendButton: document.querySelector("#chatSendButton"),
  chatStatusText: document.querySelector("#chatStatusText"),
  taskTitle: document.querySelector("#taskTitle"),
  taskInstruction: document.querySelector("#taskInstruction"),
  taskImage: document.querySelector("#taskImage"),
  taskIndexBadge: document.querySelector("#taskIndexBadge"),
  sentenceSlots: document.querySelector("#sentenceSlots"),
  wordBank: document.querySelector("#wordBank"),
  feedbackText: document.querySelector("#feedbackText"),
  celebrationLayer: document.querySelector("#celebrationLayer"),
  scoreValue: document.querySelector("#scoreValue"),
  progressValue: document.querySelector("#progressValue"),
  taskList: document.querySelector("#taskList"),
  pageShell: document.querySelector(".page-shell"),
  gameLayout: document.querySelector(".game-layout"),
  gamePanel: document.querySelector(".game-panel"),
  taskCard: document.querySelector(".task-card"),
  navigationRow: document.querySelector(".navigation-row"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  checkButton: document.querySelector("#checkButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  restartButton: document.querySelector("#restartButton"),
  openSpeechFeatureButton: document.querySelector("#openSpeechFeatureButton"),
  cameraButton: document.querySelector("#cameraButton"),
  featureOneCameraPanel: document.querySelector("#featureOneCameraPanel"),
  heroCameraStatus: document.querySelector("#heroCameraStatus"),
  featureOneHeroText: document.querySelector("#featureOneHeroText"),
  cameraStatus: document.querySelector("#cameraStatus"),
  gestureStatus: document.querySelector("#gestureStatus"),
  cameraVideo: document.querySelector("#cameraVideo"),
  cameraCanvas: document.querySelector("#cameraCanvas"),
  cursor: document.querySelector("#cursor"),
  backToFeatureOneButton: document.querySelector("#backToFeatureOneButton"),
  cityRestartButton: document.querySelector("#cityRestartButton"),
  cityHealthStatus: document.querySelector("#cityHealthStatus"),
  cityTaskTitle: document.querySelector("#cityTaskTitle"),
  cityTaskInstruction: document.querySelector("#cityTaskInstruction"),
  cityTaskIndexBadge: document.querySelector("#cityTaskIndexBadge"),
  cityScene: document.querySelector("#cityScene"),
  cityOptions: document.querySelector("#cityOptions"),
  cityFeedbackText: document.querySelector("#cityFeedbackText"),
  cityScoreValue: document.querySelector("#cityScoreValue"),
  cityProgressValue: document.querySelector("#cityProgressValue"),
  cityTaskList: document.querySelector("#cityTaskList"),
  cityPrevButton: document.querySelector("#cityPrevButton"),
  cityNextButton: document.querySelector("#cityNextButton"),
  openVoiceGameFeatureButton: document.querySelector("#openVoiceGameFeatureButton"),
  backToFeatureTwoButton: document.querySelector("#backToFeatureTwoButton"),
  recycleStartButton: document.querySelector("#recycleStartButton"),
  recycleResetButton: document.querySelector("#recycleResetButton"),
  recycleRushStatus: document.querySelector("#recycleRushStatus"),
  recycleCurrentItemLabel: document.querySelector("#recycleCurrentItemLabel"),
  recycleScoreValue: document.querySelector("#recycleScoreValue"),
  recycleSortedValue: document.querySelector("#recycleSortedValue"),
  recycleLivesValue: document.querySelector("#recycleLivesValue"),
  recycleStage: document.querySelector("#recycleStage"),
  recycleFallingItem: document.querySelector("#recycleFallingItem"),
  recycleFallingIcon: document.querySelector("#recycleFallingIcon"),
  recycleBins: document.querySelectorAll("[data-bin]"),
  recycleRulesText: document.querySelector("#recycleRulesText"),
  recycleResultText: document.querySelector("#recycleResultText"),
  recycleLog: document.querySelector("#recycleLog"),
  openFingerQuizFeatureButton: document.querySelector("#openFingerQuizFeatureButton"),
  backToFeatureThreeButton: document.querySelector("#backToFeatureThreeButton"),
  battleStartButton: document.querySelector("#battleStartButton"),
  battleResetButton: document.querySelector("#battleResetButton"),
  battleStatus: document.querySelector("#battleStatus"),
  battleCurrentProblemLabel: document.querySelector("#battleCurrentProblemLabel"),
  battleTaskTitle: document.querySelector("#battleTaskTitle"),
  battleTaskIndexBadge: document.querySelector("#battleTaskIndexBadge"),
  battleProblemImage: document.querySelector("#battleProblemImage"),
  battleProblemText: document.querySelector("#battleProblemText"),
  battleOptions: document.querySelector("#battleOptions"),
  battleFeedbackText: document.querySelector("#battleFeedbackText"),
  battleScoreValue: document.querySelector("#battleScoreValue"),
  battleProgressValue: document.querySelector("#battleProgressValue"),
  battleMonsterAvatar: document.querySelector("#battleMonsterAvatar"),
  battleMonsterHpFill: document.querySelector("#battleMonsterHpFill"),
  battleMonsterHpText: document.querySelector("#battleMonsterHpText"),
  battlePlayerAvatar: document.querySelector("#battlePlayerAvatar"),
  battlePlayerHpFill: document.querySelector("#battlePlayerHpFill"),
  battlePlayerHpText: document.querySelector("#battlePlayerHpText"),
  battleTaskList: document.querySelector("#battleTaskList"),
};

bootstrap();

function bootstrap() {
  renderTaskList();
  renderCurrentTask();
  renderCityGame();
  resetRecycleGame();
  resetBattle();
  renderVocabGrid();
  bindUI();
  showFeature("featureOne");
  window.addEventListener("resize", handleResize);
  handleResize();
}

function bindUI() {
  elements.prevButton.addEventListener("click", () => moveTask(-1));
  elements.nextButton.addEventListener("click", () => moveTask(1));
  elements.checkButton.addEventListener("click", checkCurrentTask);
  elements.shuffleButton.addEventListener("click", shuffleCurrentTask);
  elements.restartButton.addEventListener("click", restartCurrentTask);
  elements.cameraButton?.addEventListener("click", toggleCamera);
  elements.openSpeechFeatureButton.addEventListener("click", () => showFeature("featureTwo"));
  elements.backToFeatureOneButton.addEventListener("click", () => showFeature("featureOne"));
  elements.cityRestartButton.addEventListener("click", resetCityGame);
  elements.cityPrevButton.addEventListener("click", () => moveCityTask(-1));
  elements.cityNextButton.addEventListener("click", () => moveCityTask(1));
  elements.openVoiceGameFeatureButton.addEventListener("click", () => showFeature("featureThree"));
  elements.backToFeatureTwoButton.addEventListener("click", () => showFeature("featureTwo"));
  elements.openFingerQuizFeatureButton.addEventListener("click", () => showFeature("featureFour"));
  elements.backToFeatureThreeButton.addEventListener("click", () => showFeature("featureThree"));
  elements.recycleStartButton.addEventListener("click", toggleRecycleGame);
  elements.recycleResetButton.addEventListener("click", resetRecycleGame);
  elements.battleStartButton.addEventListener("click", toggleBattle);
  elements.battleResetButton.addEventListener("click", resetBattle);
  elements.openAiChatFeatureButton.addEventListener("click", () => showFeature("featureFive"));
  elements.openAiChatFeatureButtonBottom.addEventListener("click", () => showFeature("featureFive"));
  elements.backToFeatureFourButton.addEventListener("click", () => showFeature("featureFour"));
  elements.openEcoVocabularyFeatureButton.addEventListener("click", () => showFeature("featureSix"));
  elements.openEcoVocabularyFeatureButtonBottom.addEventListener("click", () => showFeature("featureSix"));
  elements.backToFeatureFiveButton.addEventListener("click", () => showFeature("featureFive"));
  elements.chatAttachButton.addEventListener("click", () => elements.chatImageInput.click());
  elements.chatImageInput.addEventListener("change", handleChatFileSelect);
  elements.chatTextInput.addEventListener("input", updateChatSendButtonState);
  elements.chatTextInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendChatMessage();
    }
  });
  elements.chatSendButton.addEventListener("click", sendChatMessage);
  elements.recycleBins.forEach((button) => {
    button.addEventListener("click", () => {
      handleRecycleBinClick(button.dataset.bin);
    });
  });
}

function showFeature(featureName) {
  state.activeFeature = featureName;
  const showFirst = featureName === "featureOne";
  const showSecond = featureName === "featureTwo";
  const showThird = featureName === "featureThree";
  const showFourth = featureName === "featureFour";
  const showFifth = featureName === "featureFive";
  const showSixth = featureName === "featureSix";

  elements.featureOneScreen.classList.toggle("active", showFirst);
  elements.featureTwoScreen.classList.toggle("active", showSecond);
  elements.featureThreeScreen.classList.toggle("active", showThird);
  elements.featureFourScreen.classList.toggle("active", showFourth);
  elements.featureFiveScreen.classList.toggle("active", showFifth);
  elements.featureSixScreen.classList.toggle("active", showSixth);

  if (state.camera.streamStarted && state.camera.ownerFeature !== featureName) {
    stopCamera();
  }

  if (!showFirst) {
    elements.cursor.classList.add("hidden");
  }

  if (!showThird && state.recycle.running) {
    pauseRecycleGame();
  }

  if (!showFourth && state.battle.running) {
    pauseBattle();
  }

  if (showSecond) {
    renderCityGame();
  }

  if (showThird) {
    renderRecycleGame();
  }

  if (showFourth) {
    renderBattle();
  }

  if (showFirst) {
    handleResize();
  }
}

function currentCityTask() {
  return cityTasks[state.city.currentTaskIndex];
}

function countCityCompleted() {
  return state.city.completed.filter(Boolean).length;
}

function cityStatusInfo(count, total) {
  if (count === 0) {
    return { text: "City status: Polluted 🌫️", tone: "status-error" };
  }
  if (count < total) {
    return { text: "City status: Getting better 🌱", tone: "status-idle" };
  }
  return { text: "City status: Clean & Green! 🌳", tone: "status-live" };
}

function updateCityScene() {
  if (!elements.cityScene) {
    return;
  }

  const fixedLayers = cityTasks
    .filter((task, index) => state.city.completed[index])
    .map((task) => task.layer);

  elements.cityScene.dataset.fixed = fixedLayers.join(" ");
  elements.cityScene.style.setProperty(
    "--city-progress",
    String(countCityCompleted() / cityTasks.length),
  );
}

function renderCityGame() {
  const task = currentCityTask();
  const done = state.city.completed[state.city.currentTaskIndex];
  const statusInfo = cityStatusInfo(countCityCompleted(), cityTasks.length);

  elements.cityTaskTitle.textContent = `${task.order} / ${cityTasks.length}`;
  elements.cityTaskIndexBadge.textContent = String(task.order).padStart(2, "0");
  elements.cityTaskInstruction.textContent = task.prompt;
  elements.cityScoreValue.textContent = String(state.city.score);
  elements.cityProgressValue.textContent = `${countCityCompleted()}/${cityTasks.length}`;
  elements.cityPrevButton.disabled = state.city.currentTaskIndex === 0;
  elements.cityNextButton.disabled = state.city.currentTaskIndex === cityTasks.length - 1 || !done;
  elements.cityHealthStatus.textContent = statusInfo.text;
  elements.cityHealthStatus.className = `status-pill ${statusInfo.tone}`;

  elements.cityOptions.innerHTML = task.options
    .map((option, index) => {
      const isCorrect = done && index === task.correctIndex;
      const resultIcon = isCorrect
        ? '<span class="quiz-option-result-icon icon-correct">✓</span>'
        : "";

      return `
        <button
          class="quiz-option ${isCorrect ? "correct" : ""}"
          data-city-option-index="${index}"
          type="button"
          ${done ? "disabled" : ""}
        >
          <span class="quiz-option-index">${index + 1}</span>
          <span class="quiz-option-text">${option}</span>
          ${resultIcon}
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-city-option-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectCityOption(Number(button.dataset.cityOptionIndex));
    });
  });

  setCityFeedback(
    done
      ? `✅ Correct! ${task.fact}`
      : "Choose the best answer to help clean up the city.",
    done ? "feedback-success" : "",
  );

  updateCityScene();
  renderCityTaskList();
}

function renderCityTaskList() {
  elements.cityTaskList.innerHTML = cityTasks
    .map((task, index) => {
      const active = index === state.city.currentTaskIndex;
      const done = state.city.completed[index];
      return `
        <button class="task-list-item ${active ? "active" : ""} ${done ? "done" : ""}" data-city-task-index="${index}" type="button">
          <div class="task-mini">${task.icon}</div>
          <div class="task-list-copy">
            <strong>${task.order}. ${task.title}</strong>
            <span>${done ? "City improved!" : "Not solved yet"}</span>
          </div>
          <span class="completion-dot"></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-city-task-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.city.currentTaskIndex = Number(button.dataset.cityTaskIndex);
      renderCityGame();
    });
  });
}

function moveCityTask(direction) {
  const nextIndex = state.city.currentTaskIndex + direction;
  if (nextIndex < 0 || nextIndex >= cityTasks.length) {
    return;
  }

  state.city.currentTaskIndex = nextIndex;
  renderCityGame();
}

function selectCityOption(optionIndex) {
  const task = currentCityTask();

  if (state.city.completed[state.city.currentTaskIndex]) {
    return;
  }

  const button = document.querySelector(`[data-city-option-index="${optionIndex}"]`);

  if (optionIndex === task.correctIndex) {
    state.city.completed[state.city.currentTaskIndex] = true;
    state.city.answers[state.city.currentTaskIndex] = optionIndex;
    state.city.score += 10;
    renderCityGame();

    if (state.city.currentTaskIndex < cityTasks.length - 1) {
      setTimeout(() => {
        state.city.currentTaskIndex += 1;
        renderCityGame();
      }, 1100);
    }
    return;
  }

  setCityFeedback("Not quite. Look at the city and try again!", "feedback-error");
  if (button) {
    button.classList.add("wrong");
    setTimeout(() => button.classList.remove("wrong"), 420);
  }
}

function setCityFeedback(message, tone) {
  elements.cityFeedbackText.textContent = message;
  elements.cityFeedbackText.className = `feedback-text ${tone}`.trim();
}

function resetCityGame() {
  state.city.currentTaskIndex = 0;
  state.city.answers = Array(cityTasks.length).fill(null);
  state.city.completed = Array(cityTasks.length).fill(false);
  state.city.score = 0;
  renderCityGame();
}

function currentBattleProblem() {
  return battleProblems[state.battle.currentIndex];
}

function countBattleAnswered() {
  return state.battle.answers.filter((answer) => answer !== null).length;
}

function battleStatusInfo() {
  if (state.battle.outcome === "victory") {
    return { text: "Victory! Monster defeated!", tone: "status-live" };
  }
  if (state.battle.outcome === "defeat") {
    return { text: "Defeated...", tone: "status-error" };
  }
  if (state.battle.outcome === "end") {
    return { text: "Battle over", tone: "status-muted" };
  }
  if (state.battle.running) {
    return { text: "Battle in progress...", tone: "status-live" };
  }
  if (state.battle.currentIndex > 0) {
    return { text: "Paused — press Start Battle to continue", tone: "status-idle" };
  }
  return { text: "Press Start Battle to begin", tone: "status-idle" };
}

function resetBattle() {
  clearTimeout(state.battle.autoAdvanceTimer);
  state.battle.currentIndex = 0;
  state.battle.running = false;
  state.battle.gameOver = false;
  state.battle.outcome = "";
  state.battle.score = 0;
  state.battle.hits = 0;
  state.battle.monsterHp = 100;
  state.battle.playerHp = 100;
  state.battle.answers = Array(battleProblems.length).fill(null);
  shuffleBattleOptions();
  renderBattle();
  setBattleFeedback("Choose the best solution to attack the monster.", "");
}

function startBattle() {
  if (state.battle.gameOver) {
    resetBattle();
  }

  state.battle.running = true;
  renderBattle();
}

function pauseBattle() {
  if (!state.battle.running) {
    return;
  }

  clearTimeout(state.battle.autoAdvanceTimer);
  state.battle.running = false;
  renderBattle();
}

function toggleBattle() {
  if (state.battle.running) {
    pauseBattle();
  } else {
    startBattle();
  }
}

function setBattleFeedback(message, tone) {
  elements.battleFeedbackText.textContent = message;
  elements.battleFeedbackText.className = `feedback-text ${tone}`.trim();
}

function updateBattleHpBars() {
  const monsterHp = Math.max(0, state.battle.monsterHp);
  const playerHp = Math.max(0, state.battle.playerHp);
  elements.battleMonsterHpFill.style.width = `${monsterHp}%`;
  elements.battleMonsterHpText.textContent = `${monsterHp}%`;
  elements.battlePlayerHpFill.style.width = `${playerHp}%`;
  elements.battlePlayerHpText.textContent = `${playerHp}%`;
}

function renderBattleTaskList() {
  elements.battleTaskList.innerHTML = battleProblems
    .map((problem, index) => {
      const active = index === state.battle.currentIndex;
      const answer = state.battle.answers[index];
      const answered = answer !== null;
      const correct = answer === problem.correctIndex;
      return `
        <button class="task-list-item ${active ? "active" : ""} ${answered ? "done" : ""}" data-battle-task-index="${index}" type="button">
          <img class="task-mini" src="${problem.image}" alt="" />
          <div class="task-list-copy">
            <strong>${problem.order}. ${problem.title}</strong>
            <span>${answered ? (correct ? "Monster hit!" : "Monster struck back") : "Not fought yet"}</span>
          </div>
          <span class="completion-dot"></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-battle-task-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.battle.currentIndex = Number(button.dataset.battleTaskIndex);
      renderBattle();
    });
  });
}

function renderBattle() {
  const problem = currentBattleProblem();
  const selectedAnswer = state.battle.answers[state.battle.currentIndex];
  const answered = selectedAnswer !== null;
  const status = battleStatusInfo();

  elements.battleStatus.textContent = status.text;
  elements.battleStatus.className = `status-pill ${status.tone}`;
  elements.battleCurrentProblemLabel.textContent = state.battle.gameOver
    ? "Battle over"
    : problem.title;
  elements.battleTaskTitle.textContent = `${problem.order} / ${battleProblems.length}`;
  elements.battleTaskIndexBadge.textContent = String(problem.order).padStart(2, "0");
  elements.battleProblemImage.src = problem.image;
  elements.battleProblemImage.alt = `${problem.title} illustration`;
  elements.battleProblemText.textContent = problem.prompt;
  elements.battleScoreValue.textContent = String(state.battle.score);
  elements.battleProgressValue.textContent = `${countBattleAnswered()}/${battleProblems.length}`;
  elements.battleStartButton.textContent = state.battle.running
    ? "Pause Battle"
    : state.battle.gameOver
      ? "Battle Again"
      : state.battle.currentIndex > 0
        ? "Resume Battle"
        : "Start Battle";

  elements.battleOptions.innerHTML = problem.options
    .map((option, index) => {
      const isSelected = selectedAnswer === index;
      const isCorrect = answered && index === problem.correctIndex;
      const isWrongSelected = isSelected && selectedAnswer !== problem.correctIndex;
      const resultIcon = isCorrect
        ? '<span class="quiz-option-result-icon icon-correct">✓</span>'
        : isWrongSelected
        ? '<span class="quiz-option-result-icon icon-wrong">✕</span>'
        : "";

      return `
        <button
          class="quiz-option ${isSelected ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrongSelected ? "wrong" : ""}"
          data-battle-option-index="${index}"
          type="button"
          ${!state.battle.running || answered ? "disabled" : ""}
        >
          <span class="quiz-option-index">${index + 1}</span>
          <span class="quiz-option-text">${option}</span>
          ${resultIcon}
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-battle-option-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectBattleOption(Number(button.dataset.battleOptionIndex));
    });
  });

  updateBattleHpBars();
  renderBattleTaskList();
}

function selectBattleOption(optionIndex) {
  if (!state.battle.running || state.battle.gameOver) {
    return;
  }

  const problem = currentBattleProblem();
  if (state.battle.answers[state.battle.currentIndex] !== null) {
    return;
  }

  state.battle.answers[state.battle.currentIndex] = optionIndex;
  const isCorrect = optionIndex === problem.correctIndex;

  if (isCorrect) {
    state.battle.score += 10;
    state.battle.hits += 1;
    state.battle.monsterHp = Math.max(0, state.battle.monsterHp - 10);
    elements.battleMonsterAvatar.classList.remove("is-hit");
    void elements.battleMonsterAvatar.offsetWidth;
    elements.battleMonsterAvatar.classList.add("is-hit");
    setBattleFeedback(`💥 Direct hit! "${problem.options[optionIndex]}" is correct.`, "feedback-success");
  } else {
    state.battle.playerHp = Math.max(0, state.battle.playerHp - 20);
    elements.battlePlayerAvatar.classList.remove("is-hit");
    void elements.battlePlayerAvatar.offsetWidth;
    elements.battlePlayerAvatar.classList.add("is-hit");
    setBattleFeedback(
      `The monster struck back! The best answer was "${problem.options[problem.correctIndex]}".`,
      "feedback-error",
    );
  }

  if (state.battle.monsterHp <= 0) {
    finishBattle("victory");
    return;
  }

  if (state.battle.playerHp <= 0) {
    finishBattle("defeat");
    return;
  }

  if (state.battle.currentIndex >= battleProblems.length - 1) {
    finishBattle("end");
    return;
  }

  renderBattle();
  state.battle.autoAdvanceTimer = setTimeout(() => {
    state.battle.currentIndex += 1;
    renderBattle();
  }, 1300);
}

function finishBattle(outcome) {
  clearTimeout(state.battle.autoAdvanceTimer);
  state.battle.running = false;
  state.battle.gameOver = true;
  state.battle.outcome = outcome;

  renderBattle();

  if (outcome === "victory") {
    setBattleFeedback(`🎉 You defeated the Pollution Monster! Final score: ${state.battle.score}.`, "feedback-success");
  } else if (outcome === "defeat") {
    setBattleFeedback(
      `The Pollution Monster defeated you. Final score: ${state.battle.score}. Press "Restart Battle" to try again.`,
      "feedback-error",
    );
  } else {
    setBattleFeedback(
      `The battle ended. You weakened the monster to ${Math.max(0, state.battle.monsterHp)}% HP. Final score: ${state.battle.score}.`,
      "",
    );
  }
}

function renderVocabGrid() {
  elements.vocabGrid.innerHTML = "";

  vocabWords.forEach((entry, index) => {
    const card = document.createElement("article");
    card.className = "vocab-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "vocab-card-image-wrap";
    const image = document.createElement("img");
    image.className = "vocab-card-image";
    image.src = entry.image;
    image.alt = entry.word;
    image.draggable = false;
    imageWrap.appendChild(image);

    const badge = document.createElement("span");
    badge.className = "vocab-card-badge";
    badge.textContent = String(index + 1).padStart(2, "0");
    imageWrap.appendChild(badge);

    const word = document.createElement("h3");
    word.className = "vocab-card-word";
    word.textContent = entry.word;

    const definition = document.createElement("p");
    definition.className = "vocab-card-definition";
    definition.textContent = entry.definition;

    card.appendChild(imageWrap);
    card.appendChild(word);
    card.appendChild(definition);
    elements.vocabGrid.appendChild(card);
  });
}

const CHAT_API_URL = "/api/chat";

function appendChatMessage(role, text) {
  const bubble = document.createElement("div");
  bubble.className = `chat-message chat-message-${role}`;

  const author = document.createElement("span");
  author.className = "chat-message-author";
  author.textContent = role === "user" ? "You" : "AI";
  bubble.appendChild(author);

  if (role === "user" && state.chat.selectedFilePreviewUrl) {
    const img = document.createElement("img");
    img.className = "chat-message-image";
    img.src = state.chat.selectedFilePreviewUrl;
    img.alt = "Uploaded photo";
    bubble.appendChild(img);
  }

  const paragraph = document.createElement("p");
  paragraph.className = "chat-message-text";
  paragraph.textContent = text;
  bubble.appendChild(paragraph);

  elements.chatMessages.appendChild(bubble);
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function setChatStatus(text, tone) {
  elements.chatStatusText.textContent = text;
  elements.chatStatusText.className = `manual-fallback-note chat-status-text ${tone || ""}`.trim();

  if (elements.chatStatusPill) {
    elements.chatStatusPill.textContent = text || "Choose a photo to begin";
    elements.chatStatusPill.className = `status-pill ${
      tone === "feedback-error" ? "status-error" : tone === "feedback-success" ? "status-live" : "status-muted"
    }`;
  }
}

function handleChatFileSelect(event) {
  const file = event.target.files && event.target.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    setChatStatus("Please choose an image file.", "feedback-error");
    return;
  }

  state.chat.selectedFile = file;
  state.chat.selectedFilePreviewUrl = URL.createObjectURL(file);
  elements.chatSelectedFileName.textContent = file.name;
  updateChatSendButtonState();
  setChatStatus("Photo ready. Add a message or press Send.", "");
}

function updateChatSendButtonState() {
  const hasText = Boolean(elements.chatTextInput.value.trim());
  const hasPhoto = Boolean(state.chat.selectedFile);
  elements.chatSendButton.disabled = state.chat.sending || (!hasText && !hasPhoto);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function sendChatMessage() {
  const messageText = elements.chatTextInput.value.trim();
  const hasPhoto = Boolean(state.chat.selectedFile);

  if (state.chat.sending || (!messageText && !hasPhoto)) {
    return;
  }

  state.chat.sending = true;
  elements.chatSendButton.disabled = true;
  appendChatMessage("user", messageText || "What can you tell me about this photo?");
  setChatStatus(hasPhoto ? "The AI is looking at your photo..." : "The AI is thinking...", "");

  try {
    const imageDataUrl = hasPhoto ? await readFileAsDataUrl(state.chat.selectedFile) : null;
    const response = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: messageText, imageDataUrl }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "The AI service could not answer.");
    }

    appendChatMessage("ai", data.description);
    setChatStatus("Done. You can keep chatting.", "feedback-success");
  } catch (error) {
    appendChatMessage(
      "ai",
      "Sorry, I could not respond. Make sure the AI proxy server (server.js) is running."
    );
    setChatStatus(error.message, "feedback-error");
  } finally {
    state.chat.sending = false;
    state.chat.selectedFile = null;
    state.chat.selectedFilePreviewUrl = null;
    elements.chatImageInput.value = "";
    elements.chatSelectedFileName.textContent = "No photo selected";
    elements.chatTextInput.value = "";
    updateChatSendButtonState();
  }
}

function resetRecycleGame() {
  clearTimeout(state.recycle.fallTimer);
  state.recycle.running = false;
  state.recycle.gameOver = false;
  state.recycle.queue = shuffleArray(recycleItems.map((item, index) => index));
  state.recycle.queueIndex = 0;
  state.recycle.score = 0;
  state.recycle.sorted = 0;
  state.recycle.lives = RECYCLE_START_LIVES;
  state.recycle.log = [];
  state.recycle.currentItem = null;

  elements.recycleFallingItem.hidden = true;
  elements.recycleFallingItem.classList.remove("is-falling", "correct", "wrong");

  renderRecycleGame();
  setRecycleRules('Press "Start Sorting" and click the correct bin before the item lands.');
  setRecycleResult("No item sorted yet.");
  setRecycleStatus("Press Start Sorting to begin", "status-idle");
}

function startRecycleGame() {
  if (state.recycle.gameOver) {
    resetRecycleGame();
  }

  if (state.recycle.running) {
    return;
  }

  state.recycle.running = true;
  setRecycleStatus("Sorting in progress...", "status-live");
  setRecycleRules("Click the matching bin before the item reaches the bottom.");
  spawnNextRecycleItem();
}

function pauseRecycleGame() {
  if (!state.recycle.running) {
    return;
  }

  clearTimeout(state.recycle.fallTimer);
  state.recycle.running = false;
  state.recycle.currentItem = null;
  elements.recycleFallingItem.hidden = true;
  elements.recycleFallingItem.classList.remove("is-falling");
  setRecycleStatus("Paused — press Start Sorting to continue", "status-idle");
  renderRecycleGame();
}

function spawnNextRecycleItem() {
  if (!state.recycle.running) {
    return;
  }

  if (state.recycle.queueIndex >= state.recycle.queue.length) {
    finishRecycleGame(true);
    return;
  }

  const item = recycleItems[state.recycle.queue[state.recycle.queueIndex]];
  state.recycle.currentItem = item;

  elements.recycleFallingIcon.textContent = item.icon;
  elements.recycleFallingItem.hidden = false;
  elements.recycleFallingItem.classList.remove("is-falling", "correct", "wrong");
  elements.recycleFallingItem.style.transitionDuration = "0ms";
  elements.recycleFallingItem.style.top = "6%";
  void elements.recycleFallingItem.offsetHeight;

  requestAnimationFrame(() => {
    elements.recycleFallingItem.style.transitionDuration = `${RECYCLE_FALL_DURATION_MS}ms`;
    elements.recycleFallingItem.classList.add("is-falling");
    elements.recycleFallingItem.style.top = "58%";
  });

  state.recycle.fallTimer = setTimeout(handleRecycleMiss, RECYCLE_FALL_DURATION_MS);
  renderRecycleGame();
}

function handleRecycleBinClick(binKey) {
  if (!state.recycle.running || !state.recycle.currentItem) {
    return;
  }

  const item = state.recycle.currentItem;
  const binButton = document.querySelector(`[data-bin="${binKey}"]`);

  if (binKey === item.bin) {
    clearTimeout(state.recycle.fallTimer);
    state.recycle.score += 10;
    state.recycle.sorted += 1;
    pushRecycleLog(`✅ ${item.icon} ${item.label} → ${RECYCLE_BIN_LABELS[item.bin]}`);
    setRecycleRules(`Correct! ${item.label} belongs in the ${RECYCLE_BIN_LABELS[item.bin]} bin.`);
    setRecycleResult(`${item.label} → recycle ✅`);
    elements.recycleFallingItem.classList.add("correct");
    if (binButton) {
      binButton.classList.add("correct");
      setTimeout(() => binButton.classList.remove("correct"), 420);
    }
    advanceRecycleQueue();
    return;
  }

  state.recycle.lives = Math.max(0, state.recycle.lives - 1);
  pushRecycleLog(`❌ ${item.label} is not ${RECYCLE_BIN_LABELS[binKey].toLowerCase()}`);
  setRecycleRules(`Not quite. ${item.label} does not go in the ${RECYCLE_BIN_LABELS[binKey]} bin. Try again!`);
  if (binButton) {
    binButton.classList.add("wrong");
    setTimeout(() => binButton.classList.remove("wrong"), 420);
  }
  renderRecycleGame();

  if (state.recycle.lives <= 0) {
    clearTimeout(state.recycle.fallTimer);
    finishRecycleGame(false);
  }
}

function handleRecycleMiss() {
  const item = state.recycle.currentItem;
  if (!item) {
    return;
  }

  state.recycle.lives = Math.max(0, state.recycle.lives - 1);
  pushRecycleLog(`⌛ Missed ${item.icon} ${item.label}!`);
  setRecycleRules(`Too slow! ${item.label} reached the ground. Be quicker next time.`);
  elements.recycleFallingItem.classList.add("wrong");
  renderRecycleGame();

  if (state.recycle.lives <= 0) {
    finishRecycleGame(false);
    return;
  }

  advanceRecycleQueue();
}

function advanceRecycleQueue() {
  state.recycle.queueIndex += 1;
  state.recycle.currentItem = null;
  elements.recycleFallingItem.hidden = true;
  elements.recycleFallingItem.classList.remove("is-falling");
  renderRecycleGame();

  setTimeout(() => {
    spawnNextRecycleItem();
  }, 650);
}

function finishRecycleGame(success) {
  clearTimeout(state.recycle.fallTimer);
  state.recycle.running = false;
  state.recycle.gameOver = true;
  state.recycle.currentItem = null;
  elements.recycleFallingItem.hidden = true;

  if (success) {
    setRecycleStatus("All sorted! Great job!", "status-live");
    setRecycleRules(
      `You sorted all ${recycleItems.length} items! Final score: ${state.recycle.score}. Press "Restart Game" to play again.`,
    );
  } else {
    setRecycleStatus("Out of lives", "status-error");
    setRecycleRules(
      `You ran out of lives. Final score: ${state.recycle.score}. Press "Restart Game" to try again.`,
    );
  }

  renderRecycleGame();
}

function pushRecycleLog(text) {
  state.recycle.log.unshift(text);
  state.recycle.log = state.recycle.log.slice(0, 6);
}

function renderRecycleGame() {
  elements.recycleScoreValue.textContent = String(state.recycle.score);
  elements.recycleSortedValue.textContent = `${state.recycle.sorted}/${recycleItems.length}`;
  elements.recycleLivesValue.textContent = String(state.recycle.lives);
  elements.recycleCurrentItemLabel.textContent = state.recycle.currentItem
    ? `${state.recycle.currentItem.icon} ${state.recycle.currentItem.label}`
    : state.recycle.gameOver
      ? "Game over"
      : "Press Start";
  elements.recycleStartButton.textContent = state.recycle.running
    ? "Pause Sorting"
    : state.recycle.gameOver
      ? "Play Again"
      : state.recycle.queueIndex > 0
        ? "Resume Sorting"
        : "Start Sorting";
  renderRecycleLog();
}

function renderRecycleLog() {
  if (!state.recycle.log.length) {
    elements.recycleLog.innerHTML = "<li><strong>Ready:</strong> Sorted items will appear here.</li>";
    return;
  }

  elements.recycleLog.innerHTML = state.recycle.log.map((text) => `<li>${text}</li>`).join("");
}

function toggleRecycleGame() {
  if (state.recycle.running) {
    pauseRecycleGame();
  } else {
    startRecycleGame();
  }
}

function setRecycleStatus(text, tone) {
  elements.recycleRushStatus.textContent = text;
  elements.recycleRushStatus.className = `status-pill ${tone}`;
}

function setRecycleRules(text) {
  elements.recycleRulesText.textContent = text;
}

function setRecycleResult(text) {
  elements.recycleResultText.textContent = text;
}

function taskSupportsCamera(task = currentTask()) {
  return task.supportsCamera !== false;
}

function updateTaskCameraUI() {
  const supported = state.activeFeature === "featureOne" && taskSupportsCamera();

  if (elements.cameraButton) {
    elements.cameraButton.hidden = !supported;
  }
  if (elements.featureOneCameraPanel) {
    elements.featureOneCameraPanel.hidden = !supported;
  }
  if (elements.heroCameraStatus) {
    elements.heroCameraStatus.hidden = !supported;
  }
  if (elements.featureOneHeroText) {
    elements.featureOneHeroText.textContent = supported
      ? "Turn on the camera, pinch your fingers to grab a word, and move it to the correct slot. Each picture shows an eco-friendly action, and you build the right English sentence while learning new ecology words."
      : "Drag each word into the correct slot, or tap a word to place it automatically. Each picture shows an eco-friendly action — build the right English sentence while learning new ecology words.";
  }

  if (!supported && state.camera.streamStarted && state.camera.ownerFeature === "featureOne") {
    stopCamera();
  }

  if (!supported) {
    elements.cursor.classList.add("hidden");
  }
}

function renderCurrentTask() {
  resetSuccessCelebration();
  const task = currentTask();
  updateTaskCameraUI();
  const placements = currentPlacements();
  const bank = currentBank();
  const taskImageWrap = elements.taskImage.closest(".task-image-wrap");

  elements.taskTitle.textContent = `${task.order} / ${tasks.length}`;
  elements.taskInstruction.textContent = task.instruction;
  elements.taskImage.innerHTML = taskVisualMarkup(task, false);
  taskImageWrap.classList.toggle("task-image-wrap-photo", Boolean(task.image));
  elements.taskIndexBadge.textContent = String(task.order).padStart(2, "0");
  elements.scoreValue.textContent = String(state.score);
  elements.progressValue.textContent = `${countCompleted()}/${tasks.length}`;
  elements.prevButton.disabled = state.currentTaskIndex === 0;
  elements.nextButton.disabled = state.currentTaskIndex === tasks.length - 1;

  const isDone = state.completed[state.currentTaskIndex];
  elements.feedbackText.textContent = isDone
    ? "Nice work! The sentence is correct."
    : "Move each word to the correct place.";
  elements.feedbackText.className = `feedback-text ${isDone ? "feedback-success" : ""}`;

  elements.sentenceSlots.innerHTML = task.answer
    .map((_, index) => {
      const word = placements[index];
      return `
        <div class="slot ${word ? "filled" : ""}" data-slot-index="${index}" data-index="${index + 1}">
          ${
            word
              ? `<button class="word-token in-slot" data-word="${word}" data-source="slot" data-slot-index="${index}" type="button">${word}</button>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  elements.wordBank.innerHTML = bank
    .map(
      (word, index) => `
        <button class="word-token" data-word="${word}" data-bank-index="${index}" data-source="bank" type="button">
          ${word}
        </button>
      `,
    )
    .join("");

  bindTokensAndSlots();
  renderTaskList();
}

function renderTaskList() {
  elements.taskList.innerHTML = tasks
    .map((task, index) => {
      const active = index === state.currentTaskIndex;
      const done = state.completed[index];
      return `
        <button class="task-list-item ${active ? "active" : ""} ${done ? "done" : ""}" data-task-index="${index}" type="button">
          <div class="task-mini">${taskVisualMarkup(task, true)}</div>
          <div class="task-list-copy">
            <strong>${task.order}. ${task.title}</strong>
            <span>${task.answer.length} words</span>
          </div>
          <span class="completion-dot"></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-task-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentTaskIndex = Number(button.dataset.taskIndex);
      renderCurrentTask();
    });
  });
}

function bindTokensAndSlots() {
  document.querySelectorAll(".word-token").forEach((token) => {
    token.addEventListener("pointerdown", (event) => {
      beginPointerDrag(event, token);
    });
    token.addEventListener("click", (event) => {
      event.stopPropagation();
      quickPlaceToken(token);
    });
  });

  document.querySelectorAll(".slot").forEach((slot) => {
    slot.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!slot.dataset.slotIndex) {
        return;
      }
      const slotIndex = Number(slot.dataset.slotIndex);
      const word = currentPlacements()[slotIndex];
      if (word) {
        moveWordFromSlotToBank(slotIndex);
      }
    });
  });
}

function quickPlaceToken(token) {
  if (state.drag || Date.now() < state.ignoreClickUntil) {
    return;
  }

  const source = token.dataset.source;
  if (source === "bank") {
    const emptyIndex = currentPlacements().findIndex((word) => word === null);
    if (emptyIndex !== -1) {
      moveWordFromBankToSlot(Number(token.dataset.bankIndex), emptyIndex);
      maybeAutoCheck();
    }
  } else if (source === "slot") {
    moveWordFromSlotToBank(Number(token.dataset.slotIndex));
  }
}

function beginPointerDrag(event, token) {
  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  event.preventDefault();
  const rect = token.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  startDrag({
    originNode: token,
    word: token.dataset.word,
    source: token.dataset.source,
    bankIndex: token.dataset.bankIndex !== undefined ? Number(token.dataset.bankIndex) : null,
    slotIndex: token.dataset.slotIndex !== undefined ? Number(token.dataset.slotIndex) : null,
    pointerOffsetX: event.clientX - rect.left,
    pointerOffsetY: event.clientY - rect.top,
  });

  moveDragGhost(x, y);

  const onMove = (moveEvent) => {
    moveDragGhost(moveEvent.clientX, moveEvent.clientY);
  };

  const onUp = (upEvent) => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    finishDragAt(upEvent.clientX, upEvent.clientY);
  };

  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
}

function startDrag(payload) {
  clearSlotHighlights();
  const ghost = document.createElement("div");
  ghost.className = "word-token drag-ghost";
  ghost.textContent = payload.word;
  document.body.appendChild(ghost);

  payload.originNode.classList.add("drag-origin");
  state.drag = {
    ...payload,
    ghost,
  };
}

function moveDragGhost(clientX, clientY) {
  if (!state.drag) {
    return;
  }

  state.drag.ghost.style.left = `${clientX}px`;
  state.drag.ghost.style.top = `${clientY}px`;
  highlightSlotAt(clientX, clientY);
}

function finishDragAt(clientX, clientY) {
  if (!state.drag) {
    return;
  }

  state.ignoreClickUntil = Date.now() + 220;

  const dropSlot = findSlotAt(clientX, clientY);
  if (dropSlot) {
    const slotIndex = Number(dropSlot.dataset.slotIndex);
    placeDraggedWord(slotIndex);
  }

  cleanupDrag();
  maybeAutoCheck();
}

function cleanupDrag() {
  if (!state.drag) {
    clearSlotHighlights();
    return;
  }

  state.drag.originNode.classList.remove("drag-origin");
  state.drag.ghost.remove();
  state.drag = null;
  clearSlotHighlights();
}

function placeDraggedWord(slotIndex) {
  const drag = state.drag;
  if (!drag) {
    return;
  }

  if (drag.source === "bank") {
    moveWordFromBankToSlot(drag.bankIndex, slotIndex);
    return;
  }

  if (drag.slotIndex === slotIndex) {
    return;
  }

  moveWordBetweenSlots(drag.slotIndex, slotIndex);
}

function moveWordFromBankToSlot(bankIndex, slotIndex) {
  const bank = currentBank();
  const placements = currentPlacements();
  const word = bank[bankIndex];

  if (!word || slotIndex < 0) {
    return;
  }

  markTaskDirty(state.currentTaskIndex);
  const displaced = placements[slotIndex];
  placements[slotIndex] = word;
  bank.splice(bankIndex, 1);

  if (displaced) {
    bank.push(displaced);
  }

  renderCurrentTask();
}

function moveWordFromSlotToBank(slotIndex) {
  const placements = currentPlacements();
  const bank = currentBank();
  const word = placements[slotIndex];

  if (!word) {
    return;
  }

  markTaskDirty(state.currentTaskIndex);
  placements[slotIndex] = null;
  bank.push(word);
  renderCurrentTask();
}

function moveWordBetweenSlots(fromIndex, toIndex) {
  const placements = currentPlacements();
  const fromWord = placements[fromIndex];

  if (!fromWord) {
    return;
  }

  markTaskDirty(state.currentTaskIndex);
  const temp = placements[toIndex];
  placements[toIndex] = fromWord;
  placements[fromIndex] = temp;
  renderCurrentTask();
}

function findSlotAt(clientX, clientY) {
  const slots = Array.from(document.querySelectorAll(".slot"));
  const directHit = slots.find((slot) => {
    const rect = slot.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });

  if (directHit) {
    return directHit;
  }

  return findNearestElement(slots, clientX, clientY, 92);
}

function highlightSlotAt(clientX, clientY) {
  clearSlotHighlights();
  const slot = findSlotAt(clientX, clientY);
  if (slot) {
    slot.classList.add("active-target");
  }
}

function clearSlotHighlights() {
  document.querySelectorAll(".slot.active-target").forEach((slot) => {
    slot.classList.remove("active-target");
  });
}

function checkCurrentTask() {
  const task = currentTask();
  const placements = currentPlacements();
  const isFull = placements.every(Boolean);
  const isCorrect = placements.every((word, index) => word === task.answer[index]);

  if (!isFull) {
    setFeedback("Place every word before checking.", "feedback-error");
    return;
  }

  if (isCorrect) {
    if (!state.completed[state.currentTaskIndex]) {
      state.completed[state.currentTaskIndex] = true;
      state.score += 10;
    }

    setFeedback("Correct! The sentence matches the picture.", "feedback-success");
  } else {
    setFeedback("Not quite yet. Move the words and try again.", "feedback-error");
  }

  renderCurrentTask();
  elements.feedbackText.textContent = isCorrect
    ? "Correct! The sentence matches the picture."
    : "Not quite yet. Move the words and try again.";
  elements.feedbackText.className = `feedback-text ${isCorrect ? "feedback-success" : "feedback-error"}`;

  if (isCorrect) {
    triggerSuccessCelebration();
  } else {
    resetSuccessCelebration();
  }
}

function maybeAutoCheck() {
  const placements = currentPlacements();
  if (placements.every(Boolean)) {
    checkCurrentTask();
  }
}

function setFeedback(message, tone) {
  elements.feedbackText.textContent = message;
  elements.feedbackText.className = `feedback-text ${tone}`;
}

function triggerSuccessCelebration() {
  const card = elements.taskCard;
  const layer = elements.celebrationLayer;
  const feedbackPanel = card?.querySelector(".task-feedback");
  const sentenceArea = card?.querySelector(".sentence-area");
  const statCards = Array.from(document.querySelectorAll(".stat-card"));
  const slottedWords = Array.from(document.querySelectorAll(".slot.filled, .word-token.in-slot"));

  if (!card || !layer) {
    return;
  }

  resetSuccessCelebration();
  layer.innerHTML = "";

  [card, feedbackPanel, sentenceArea, ...statCards].forEach((element) => {
    if (element) {
      element.classList.add("is-celebrating");
    }
  });

  slottedWords.forEach((element, index) => {
    element.style.setProperty("--success-delay", `${index * 70}ms`);
    element.classList.add("success-pop");
  });

  createCelebrationBurst(layer, { x: 32, y: 56, count: 12, spread: 74, delayOffset: 0 });
  createCelebrationBurst(layer, { x: 73, y: 34, count: 14, spread: 86, delayOffset: 80 });

  state.celebrationTimer = window.setTimeout(() => {
    resetSuccessCelebration();
  }, 1400);
}

function resetSuccessCelebration() {
  if (state.celebrationTimer) {
    window.clearTimeout(state.celebrationTimer);
    state.celebrationTimer = null;
  }

  const card = elements.taskCard;
  const feedbackPanel = card?.querySelector(".task-feedback");
  const sentenceArea = card?.querySelector(".sentence-area");

  [card, feedbackPanel, sentenceArea, ...document.querySelectorAll(".stat-card")].forEach((element) => {
    element?.classList.remove("is-celebrating");
  });

  document.querySelectorAll(".slot.success-pop, .word-token.success-pop").forEach((element) => {
    element.classList.remove("success-pop");
    element.style.removeProperty("--success-delay");
  });

  if (elements.celebrationLayer) {
    elements.celebrationLayer.innerHTML = "";
  }
}

function createCelebrationBurst(layer, burst) {
  const colors = ["#63c7b2", "#2da18a", "#9ae6c7", "#c8ff79", "#ffffff"];

  const flash = document.createElement("span");
  flash.className = "celebration-flash";
  flash.style.left = `${burst.x}%`;
  flash.style.top = `${burst.y}%`;
  flash.style.setProperty("--delay", `${burst.delayOffset}ms`);
  layer.appendChild(flash);

  for (let index = 0; index < burst.count; index += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * index) / burst.count + Math.random() * 0.22;
    const distance = burst.spread * (0.65 + Math.random() * 0.4);
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 6 + Math.random() * 7;

    spark.className = "celebration-spark";
    spark.style.left = `${burst.x}%`;
    spark.style.top = `${burst.y}%`;
    spark.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    spark.style.setProperty("--dy", `${dy.toFixed(1)}px`);
    spark.style.setProperty("--delay", `${burst.delayOffset + index * 18}ms`);
    spark.style.setProperty("--size", `${size.toFixed(1)}px`);
    spark.style.setProperty("--trail", `${(12 + Math.random() * 14).toFixed(1)}px`);
    spark.style.setProperty("--rotation", `${(angle * 180) / Math.PI + 90}deg`);
    spark.style.setProperty("--spark-color", colors[index % colors.length]);
    layer.appendChild(spark);
  }
}

function moveTask(direction) {
  const nextIndex = state.currentTaskIndex + direction;
  if (nextIndex < 0 || nextIndex >= tasks.length) {
    return;
  }

  state.currentTaskIndex = nextIndex;
  renderCurrentTask();
}

function shuffleCurrentTask() {
  const task = currentTask();
  state.banks[state.currentTaskIndex] = shuffleArray([
    ...currentBank(),
    ...currentPlacements().filter(Boolean),
  ]);
  state.placements[state.currentTaskIndex] = Array(task.answer.length).fill(null);
  state.completed[state.currentTaskIndex] = false;
  recalculateScore();
  setFeedback("The words were shuffled again. Build the sentence once more.", "");
  renderCurrentTask();
}

function restartCurrentTask() {
  const task = currentTask();
  state.banks[state.currentTaskIndex] = shuffleArray([...task.answer]);
  state.placements[state.currentTaskIndex] = Array(task.answer.length).fill(null);
  state.completed[state.currentTaskIndex] = false;
  recalculateScore();
  setFeedback("The task was restarted. The words were moved back down.", "");
  renderCurrentTask();
}

function recalculateScore() {
  state.score = state.completed.filter(Boolean).length * 10;
}

function markTaskDirty(taskIndex) {
  if (!state.completed[taskIndex]) {
    return;
  }

  state.completed[taskIndex] = false;
  recalculateScore();
}

function currentTask() {
  return tasks[state.currentTaskIndex];
}

function currentPlacements() {
  return state.placements[state.currentTaskIndex];
}

function currentBank() {
  return state.banks[state.currentTaskIndex];
}

function countCompleted() {
  return state.completed.filter(Boolean).length;
}

function getCameraElements(featureName = state.activeFeature) {
  if (featureName === "featureOne") {
    return {
      button: elements.cameraButton,
      status: elements.cameraStatus,
      gestureStatus: elements.gestureStatus,
      video: elements.cameraVideo,
      canvas: elements.cameraCanvas,
    };
  }

  return null;
}

function updateCameraButtons() {
  if (!elements.cameraButton || elements.cameraButton.hidden) {
    return;
  }

  elements.cameraButton.textContent =
    state.camera.streamStarted && state.camera.ownerFeature === "featureOne"
      ? "Turn Camera Off"
      : "Start Camera";
}

async function toggleCamera() {
  if (!taskSupportsCamera()) {
    return;
  }

  if (state.camera.streamStarted) {
    stopCamera();
    return;
  }

  try {
    await startCamera();
  } catch (error) {
    console.error(error);
    setCameraStatus("Camera did not start", "status-error");
    setGestureStatus("Allow camera access and reload the page.", "status-error");
  }
}

async function startCamera() {
  if (!taskSupportsCamera()) {
    return;
  }

  if (!window.Hands || !window.Camera) {
    throw new Error("MediaPipe scripts are unavailable.");
  }

  const ownerFeature = state.activeFeature;
  const cameraElements = getCameraElements(ownerFeature);
  if (!cameraElements) {
    throw new Error("No camera screen is active.");
  }

  const canvas = cameraElements.canvas;
  const ctx = canvas.getContext("2d");
  handleResize();

  const hands = new Hands({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
  });

  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 0,
    minDetectionConfidence: 0.55,
    minTrackingConfidence: 0.5,
  });

  hands.onResults((results) => {
    drawHandResults(results, ctx, canvas);
    handleGesture(results);
  });

  const cameraFeed = new Camera(cameraElements.video, {
    onFrame: async () => {
      await hands.send({ image: cameraElements.video });
    },
    width: 640,
    height: 480,
  });

  await cameraFeed.start();
  state.camera.hands = hands;
  state.camera.cameraFeed = cameraFeed;
  state.camera.streamStarted = true;
  state.camera.ownerFeature = ownerFeature;
  state.gesture.enabled = true;
  state.gesture.lostFrames = 0;
  state.gesture.lastPinch = false;

  setCameraStatus("Camera on", "status-live", ownerFeature);
  setGestureStatus("Show one hand and pinch to grab a word.", "status-live", ownerFeature);

  updateCameraButtons();
}

function stopCamera() {
  const ownerFeature = state.camera.ownerFeature || state.activeFeature;
  const cameraElements = getCameraElements(ownerFeature);
  const video = cameraElements?.video;
  const stream = video?.srcObject;

  if (state.camera.cameraFeed?.stop) {
    state.camera.cameraFeed.stop();
  }

  if (state.camera.hands?.close) {
    state.camera.hands.close();
  }

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  }

  const ctx = cameraElements?.canvas?.getContext("2d");
  if (ctx && cameraElements?.canvas) {
    ctx.clearRect(0, 0, cameraElements.canvas.width, cameraElements.canvas.height);
  }

  state.camera.streamStarted = false;
  state.camera.cameraFeed = null;
  state.camera.hands = null;
  state.camera.ownerFeature = "";
  state.gesture.enabled = false;
  state.gesture.lastPinch = false;
  state.gesture.pinchActive = false;
  state.gesture.lostFrames = 0;

  if (state.drag) {
    cleanupDrag();
  }

  elements.cursor.classList.add("hidden");
  elements.cursor.classList.remove("pinching");

  setCameraStatus("Camera off", "status-idle", ownerFeature);
  setGestureStatus("Gesture tracking will start when the camera is on", "status-muted", ownerFeature);

  updateCameraButtons();
}

function drawHandResults(results, ctx, canvas) {
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!results.multiHandLandmarks?.length) {
    ctx.restore();
    if (state.gesture.enabled && state.activeFeature === "featureOne") {
      setGestureStatus("No hand found. Move your hand closer to the camera.", "status-muted");
      elements.cursor.classList.remove("pinching");
    }
    if (state.activeFeature !== "featureOne") {
      elements.cursor.classList.add("hidden");
    }
    return;
  }

  for (const landmarks of results.multiHandLandmarks) {
    drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
      color: "#9dd6ff",
      lineWidth: 4,
    });
    drawLandmarks(ctx, landmarks, {
      color: "#ffcf73",
      fillColor: "#ff7b54",
      lineWidth: 1.5,
      radius: 4,
    });
  }

  ctx.restore();
}

function handleGesture(results) {
  if (!state.gesture.enabled) {
    return;
  }

  if (!results.multiHandLandmarks?.length) {
    state.gesture.lostFrames += 1;

    if (state.gesture.lostFrames >= 8) {
      state.gesture.lastPinch = false;
      if (state.drag) {
        cleanupDrag();
      }
    }

    setGestureStatus("No hand found. Move your hand closer to the camera.", "status-muted");
    elements.cursor.classList.add("tracking-lost");
    elements.cursor.classList.remove("pinching");
    return;
  }

  state.gesture.lostFrames = 0;
  elements.cursor.classList.remove("tracking-lost");

  const landmarks = results.multiHandLandmarks[0];
  const thumb = landmarks[4];
  const index = landmarks[8];
  const wrist = landmarks[0];
  const middleBase = landmarks[9];
  const indexBase = landmarks[5];
  const pinkyBase = landmarks[17];

  const handSize = distance(wrist, middleBase) || 0.1;
  const palmSpan = distance(indexBase, pinkyBase) || handSize;
  const pinchDistance = distance(thumb, index);
  const pinchStartThreshold = palmSpan * 0.26;
  const pinchEndThreshold = palmSpan * 0.36;
  const pinching = state.gesture.lastPinch
    ? pinchDistance < pinchEndThreshold
    : pinchDistance < pinchStartThreshold;

  const bounds = getGestureBounds();
  const stablePoint = weightedLandmarks([
    { point: index, weight: 0.58 },
    { point: middleBase, weight: 0.2 },
    { point: indexBase, weight: 0.12 },
    { point: wrist, weight: 0.1 },
  ]);
  const dragPoint = weightedLandmarks([
    { point: midpoint(thumb, index), weight: 0.72 },
    { point: index, weight: 0.18 },
    { point: middleBase, weight: 0.1 },
  ]);
  const pointerPoint = state.drag && pinching ? dragPoint : stablePoint;
  const normalizedX = normalizeHotzone(1 - pointerPoint.x, GESTURE_HOTZONE.xMin, GESTURE_HOTZONE.xMax);
  const normalizedY = normalizeHotzone(pointerPoint.y, GESTURE_HOTZONE.yMin, GESTURE_HOTZONE.yMax);
  const rawX = clamp(bounds.left + normalizedX * bounds.width, bounds.left, bounds.right);
  const rawY = clamp(bounds.top + normalizedY * bounds.height, bounds.top, bounds.bottom);
  const smoothing = state.drag ? 0.4 : 0.3;

  state.gesture.smoothX += (rawX - state.gesture.smoothX) * smoothing;
  state.gesture.smoothY += (rawY - state.gesture.smoothY) * smoothing;

  updateCursor(state.gesture.smoothX, state.gesture.smoothY, pinching);

  if (pinching && !state.gesture.lastPinch) {
    const token = findTokenAt(state.gesture.smoothX, state.gesture.smoothY);
    if (token) {
      const rect = token.getBoundingClientRect();
      startDrag({
        originNode: token,
        word: token.dataset.word,
        source: token.dataset.source,
        bankIndex: token.dataset.bankIndex !== undefined ? Number(token.dataset.bankIndex) : null,
        slotIndex: token.dataset.slotIndex !== undefined ? Number(token.dataset.slotIndex) : null,
        pointerOffsetX: rect.width / 2,
        pointerOffsetY: rect.height / 2,
      });
      moveDragGhost(state.gesture.smoothX, state.gesture.smoothY);
      setGestureStatus("Pinch detected. Move to a slot and open your fingers.", "status-live");
    } else {
      setGestureStatus("Pinch over a word to grab it.", "status-muted");
    }
  } else if (!pinching && state.gesture.lastPinch && state.drag) {
    finishDragAt(state.gesture.smoothX, state.gesture.smoothY);
    setGestureStatus("Word placed. Pinch again to grab the next word.", "status-live");
  } else if (pinching && state.drag) {
    moveDragGhost(state.gesture.smoothX, state.gesture.smoothY);
  } else if (!pinching) {
    setGestureStatus("Move over a word and pinch to grab it.", "status-live");
  }

  state.gesture.lastPinch = pinching;
}

function updateCursor(clientX, clientY, pinching) {
  elements.cursor.classList.remove("hidden");
  elements.cursor.style.left = `${clientX}px`;
  elements.cursor.style.top = `${clientY}px`;
  elements.cursor.classList.toggle("pinching", pinching);
}

function findTokenAt(clientX, clientY) {
  const tokens = Array.from(document.querySelectorAll(".word-token"));
  const directHit = tokens.find((token) => {
    const rect = token.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });

  if (directHit) {
    return directHit;
  }

  return findNearestElement(tokens, clientX, clientY, 60);
}

function handleResize() {
  const activeCameraElements = getCameraElements(state.camera.streamStarted ? state.camera.ownerFeature : state.activeFeature);
  if (!activeCameraElements?.canvas) {
    return;
  }

  const rect = activeCameraElements.canvas.getBoundingClientRect();
  activeCameraElements.canvas.width = Math.max(1, Math.floor(rect.width));
  activeCameraElements.canvas.height = Math.max(1, Math.floor(rect.height));
}

function getGestureBounds() {
  const shellRect = elements.pageShell?.getBoundingClientRect();
  const layoutRect = elements.gameLayout?.getBoundingClientRect();
  const panelRect = elements.gamePanel?.getBoundingClientRect();
  const taskRect = elements.taskCard?.getBoundingClientRect();
  const navRect = elements.navigationRow?.getBoundingClientRect();
  const viewportPadding = 16;

  if (!shellRect && !layoutRect && !panelRect && !taskRect && !navRect) {
    return {
      left: viewportPadding,
      top: viewportPadding,
      right: window.innerWidth - viewportPadding,
      bottom: window.innerHeight - viewportPadding,
      width: window.innerWidth - viewportPadding * 2,
      height: window.innerHeight - viewportPadding * 2,
    };
  }

  const leftSource = Math.min(
    shellRect?.left ?? window.innerWidth,
    layoutRect?.left ?? window.innerWidth,
    panelRect?.left ?? window.innerWidth,
    taskRect?.left ?? window.innerWidth,
    navRect?.left ?? window.innerWidth,
  );
  const rightSource = Math.max(
    shellRect?.right ?? 0,
    layoutRect?.right ?? 0,
    panelRect?.right ?? 0,
    taskRect?.right ?? 0,
    navRect?.right ?? 0,
  );
  const topSource = Math.min(
    layoutRect?.top ?? window.innerHeight,
    panelRect?.top ?? window.innerHeight,
    taskRect?.top ?? window.innerHeight,
    navRect?.top ?? window.innerHeight,
  );
  const bottomSource = Math.max(
    layoutRect?.bottom ?? 0,
    panelRect?.bottom ?? 0,
    taskRect?.bottom ?? 0,
    navRect?.bottom ?? 0,
  );

  const expandX = 16;
  const expandTop = 8;
  const expandBottom = 16;
  const left = Math.max(leftSource + expandX, viewportPadding);
  const maxRight = Math.min(rightSource - expandX, window.innerWidth - viewportPadding);
  const top = Math.max(topSource + expandTop, viewportPadding);
  const maxBottom = Math.min(bottomSource - expandBottom, window.innerHeight - viewportPadding);
  const right = Math.max(left + 140, maxRight);
  const bottom = Math.max(top + 160, maxBottom);

  return {
    left,
    top,
    right,
    bottom,
    width: Math.max(140, right - left),
    height: Math.max(160, bottom - top),
  };
}

function findNearestElement(elementsList, clientX, clientY, maxDistance) {
  let nearestElement = null;
  let nearestDistance = maxDistance;

  elementsList.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentDistance = Math.hypot(centerX - clientX, centerY - clientY);

    if (currentDistance <= nearestDistance) {
      nearestDistance = currentDistance;
      nearestElement = element;
    }
  });

  return nearestElement;
}

function setCameraStatus(text, tone, featureName = state.camera.ownerFeature || state.activeFeature) {
  const cameraElements = getCameraElements(featureName);
  if (!cameraElements?.status) {
    return;
  }

  cameraElements.status.textContent = text;
  cameraElements.status.className = `status-pill ${tone}`;
}

function setGestureStatus(text, tone, featureName = state.camera.ownerFeature || state.activeFeature) {
  const cameraElements = getCameraElements(featureName);
  if (!cameraElements?.gestureStatus) {
    return;
  }

  state.gesture.lastGestureText = text;
  cameraElements.gestureStatus.textContent = text;
  cameraElements.gestureStatus.className = `status-pill ${tone}`;
}

function shuffleArray(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function midpoint(a, b) {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function averageLandmarks(points) {
  const totals = points.reduce(
    (sum, point) => ({
      x: sum.x + point.x,
      y: sum.y + point.y,
    }),
    { x: 0, y: 0 },
  );

  return {
    x: totals.x / points.length,
    y: totals.y / points.length,
  };
}

function weightedLandmarks(points) {
  const totals = points.reduce(
    (sum, { point, weight }) => ({
      x: sum.x + point.x * weight,
      y: sum.y + point.y * weight,
      weight: sum.weight + weight,
    }),
    { x: 0, y: 0, weight: 0 },
  );

  const safeWeight = Math.max(totals.weight, 0.001);
  return {
    x: totals.x / safeWeight,
    y: totals.y / safeWeight,
  };
}

function normalizeHotzone(value, min, max) {
  return clamp((value - min) / Math.max(0.001, max - min), 0, 1);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function taskVisualMarkup(task, compact) {
  const loading = compact ? "lazy" : "eager";
  const cssClass = compact ? "task-photo task-photo-mini" : "task-photo task-photo-main";
  const alt = `${task.title} reference image`;

  if (task.image) {
    return `<img class="${cssClass}" src="${task.image}" alt="${alt}" loading="${loading}" draggable="false">`;
  }

  return `<div class="task-photo-fallback">${task.title}</div>`;
}

function sceneSvg(id, compact) {
  const baseClass = compact ? "mini-scene" : "main-scene";
  const size = compact ? 54 : 640;
  const height = compact ? 54 : 460;

  const sharedStart = `
    <svg class="${baseClass}" viewBox="0 0 ${size} ${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8fd0ff"/>
          <stop offset="100%" stop-color="#f4fbff"/>
        </linearGradient>
        <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8dc72"/>
          <stop offset="100%" stop-color="#74b64f"/>
        </linearGradient>
      </defs>
  `;

  const end = "</svg>";

  const scenes = {
    drums: `
      <rect width="${size}" height="${height}" fill="url(#skyGrad)"/>
      <rect y="${height - 92}" width="${size}" height="92" fill="#d7d7b2"/>
      <circle cx="${size * 0.22}" cy="${height * 0.28}" r="${compact ? 6 : 34}" fill="#ffd27a"/>
      ${person({ x: size * 0.26, y: height * 0.62, shirt: "#496c87", shorts: "#2d4d67", skin: "#f4c49b", compact, armLeft: "up", armRight: "thumb" })}
      ${drummer({ x: size * 0.72, y: height * 0.7, compact })}
    `,
    running: `
      <rect width="${size}" height="${height}" fill="url(#skyGrad)"/>
      <ellipse cx="${size * 0.25}" cy="${height * 0.22}" rx="${compact ? 8 : 88}" ry="${compact ? 4 : 38}" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="${size * 0.6}" cy="${height * 0.26}" rx="${compact ? 10 : 108}" ry="${compact ? 6 : 46}" fill="#ffffff" opacity="0.88"/>
      <rect y="${height * 0.62}" width="${size}" height="${height * 0.38}" fill="url(#grassGrad)"/>
      ${runner({ x: size * 0.25, y: height * 0.74, shirt: "#ffffff", shorts: "#5f92d9", compact })}
      ${runner({ x: size * 0.42, y: height * 0.82, shirt: "#ffffff", shorts: "#f15b51", compact, female: true })}
      ${runner({ x: size * 0.56, y: height * 0.66, shirt: "#ffffff", shorts: "#5678ca", compact })}
      ${runner({ x: size * 0.76, y: height * 0.8, shirt: "#ffffff", shorts: "#ee6f63", compact, female: true })}
      ${runner({ x: size * 0.66, y: height * 0.9, shirt: "#ffffff", shorts: "#6f95d2", compact })}
    `,
    drinking: `
      <rect width="${size}" height="${height}" fill="#fffdf8"/>
      ${sun({ x: size * 0.22, y: height * 0.16, compact })}
      ${sun({ x: size * 0.72, y: height * 0.18, compact })}
      ${drinkingKid({ x: size * 0.32, y: height * 0.78, shirt: "#79c56f", bottom: "#d7b160", compact })}
      ${drinkingKid({ x: size * 0.68, y: height * 0.8, shirt: "#ff9bc0", bottom: "#5f92d9", compact, ponytail: true })}
    `,
    guitar: `
      <rect width="${size}" height="${height}" fill="#fffdfc"/>
      ${spotBlob({ x: size * 0.5, y: height * 0.46, rx: compact ? 22 : 180, ry: compact ? 18 : 140, color: "#fff0d3" })}
      ${guitarPlayer({ x: size * 0.5, y: height * 0.74, compact })}
    `,
    sleeping: `
      <rect width="${size}" height="${height}" fill="#fffdf8"/>
      ${bedScene({ x: size * 0.5, y: height * 0.74, compact })}
      <text x="${size * 0.7}" y="${height * 0.18}" fill="#4cc7d6" font-size="${compact ? 8 : 38}" font-family="Trebuchet MS">Z z</text>
    `,
    swimming: `
      <rect width="${size}" height="${height}" fill="#fafcff"/>
      ${wave({ x: size * 0.5, y: height * 0.62, compact })}
      ${swimmer({ x: size * 0.56, y: height * 0.56, compact })}
    `,
    cleaning: `
      <rect width="${size}" height="${height}" fill="#fffdfc"/>
      ${cleaningScene({ x: size * 0.5, y: height * 0.78, compact })}
    `,
    painting: `
      <rect width="${size}" height="${height}" fill="#fffdfb"/>
      ${paintingScene({ x: size * 0.5, y: height * 0.8, compact })}
    `,
    cooking: `
      <rect width="${size}" height="${height}" fill="#fffdfb"/>
      ${cookingScene({ x: size * 0.5, y: height * 0.8, compact })}
    `,
    watching: `
      <rect width="${size}" height="${height}" fill="#fffdfb"/>
      ${watchingScene({ x: size * 0.5, y: height * 0.84, compact })}
    `,
  };

  return sharedStart + scenes[id] + end;
}

function person({ x, y, shirt, shorts, skin, compact, armLeft = "down", armRight = "down" }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-132" r="38" fill="${skin}"/>
      <path d="M-56 -50 Q0 -92 56 -50 L44 54 L-44 54 Z" fill="${shirt}"/>
      <rect x="-34" y="54" width="28" height="86" rx="12" fill="${shorts}"/>
      <rect x="6" y="54" width="28" height="86" rx="12" fill="${shorts}"/>
      <rect x="-36" y="136" width="30" height="12" rx="6" fill="#38598a"/>
      <rect x="4" y="136" width="30" height="12" rx="6" fill="#38598a"/>
      ${armPath(-48, -26, armLeft, shirt, skin)}
      ${armPath(48, -26, armRight, shirt, skin, true)}
      <circle cx="-12" cy="-142" r="4" fill="#2b2b2b"/>
      <circle cx="12" cy="-142" r="4" fill="#2b2b2b"/>
      <path d="M-12 -120 Q0 -108 12 -120" stroke="#d77c7c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M-34 -164 Q-8 -186 26 -170 Q12 -196 -18 -194 Q-30 -190 -34 -164 Z" fill="#7f522f"/>
    </g>
  `;
}

function armPath(x, y, pose, shirt, skin, right = false) {
  const direction = right ? 1 : -1;
  const poses = {
    down: `M${x} ${y} q${18 * direction} 34 ${20 * direction} 78`,
    up: `M${x} ${y} q${-16 * direction} -28 ${-24 * direction} -84`,
    thumb: `M${x} ${y} q${14 * direction} -16 ${36 * direction} -48`,
  };
  return `
    <path d="${poses[pose] || poses.down}" stroke="${shirt}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="${x + (pose === "thumb" ? 36 * direction : pose === "up" ? -24 * direction : 20 * direction)}" cy="${y + (pose === "thumb" ? -48 : pose === "up" ? -84 : 78)}" r="10" fill="${skin}"/>
  `;
}

function drummer({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="-18" cy="-146" r="32" fill="#f4c49b"/>
      <path d="M-58 -64 Q-8 -104 42 -54 L26 28 L-44 28 Z" fill="#516f7e"/>
      <rect x="-32" y="28" width="24" height="80" rx="10" fill="#7e5731"/>
      <rect x="0" y="28" width="24" height="80" rx="10" fill="#7e5731"/>
      <circle cx="-78" cy="-12" r="38" fill="#82b866" stroke="#6b9351" stroke-width="8"/>
      <circle cx="-12" cy="-2" r="40" fill="#90c773" stroke="#6b9351" stroke-width="8"/>
      <circle cx="62" cy="18" r="44" fill="#96cc7b" stroke="#6b9351" stroke-width="8"/>
      <ellipse cx="-14" cy="-108" rx="40" ry="16" fill="#e7a445"/>
      <path d="M-36 -92 l-34 58" stroke="#8f5f31" stroke-width="6" stroke-linecap="round"/>
      <path d="M0 -88 l58 76" stroke="#8f5f31" stroke-width="6" stroke-linecap="round"/>
    </g>
  `;
}

function runner({ x, y, shirt, shorts, compact, female = false }) {
  const scale = compact ? 0.16 : 0.72;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-86" r="24" fill="#f4c49b"/>
      <path d="M-28 -42 L28 -42 L18 26 L-18 26 Z" fill="${shirt}"/>
      <path d="M-18 26 H4 L-24 90" stroke="${shorts}" stroke-width="16" stroke-linecap="round"/>
      <path d="M10 26 H28 L72 86" stroke="${shorts}" stroke-width="16" stroke-linecap="round"/>
      <path d="M-22 -20 L-62 18" stroke="#f4c49b" stroke-width="12" stroke-linecap="round"/>
      <path d="M24 -10 L54 -56" stroke="#f4c49b" stroke-width="12" stroke-linecap="round"/>
      <path d="M-30 92 h18" stroke="#ffc857" stroke-width="12" stroke-linecap="round"/>
      <path d="M64 88 h18" stroke="#ffc857" stroke-width="12" stroke-linecap="round"/>
      <path d="${female ? "M-12 -104 q18 -20 36 0" : "M-10 -106 q16 -14 28 2"}" stroke="#7a4c2a" stroke-width="10" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function sun({ x, y, compact }) {
  const radius = compact ? 5 : 30;
  const rays = compact ? 7 : 16;
  const rayLength = compact ? 3 : 18;
  let lines = "";
  for (let i = 0; i < rays; i += 1) {
    const angle = (Math.PI * 2 * i) / rays;
    const x1 = x + Math.cos(angle) * (radius + 4);
    const y1 = y + Math.sin(angle) * (radius + 4);
    const x2 = x + Math.cos(angle) * (radius + rayLength);
    const y2 = y + Math.sin(angle) * (radius + rayLength);
    lines += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2a2a2a" stroke-width="${compact ? 1 : 4}" stroke-linecap="round"/>`;
  }
  return `<g><circle cx="${x}" cy="${y}" r="${radius}" fill="#ff5f6d"/>${lines}</g>`;
}

function drinkingKid({ x, y, shirt, bottom, compact, ponytail = false }) {
  const scale = compact ? 0.22 : 0.94;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-116" r="30" fill="#f4c49b"/>
      <path d="M-34 -84 Q0 -118 34 -84 L24 14 L-24 14 Z" fill="${shirt}"/>
      <rect x="-26" y="14" width="22" height="92" rx="10" fill="${bottom}"/>
      <rect x="4" y="14" width="22" height="92" rx="10" fill="${bottom}"/>
      <path d="M-28 -48 l-18 54" stroke="#f4c49b" stroke-width="14" stroke-linecap="round"/>
      <path d="M28 -48 l18 54" stroke="#f4c49b" stroke-width="14" stroke-linecap="round"/>
      <circle cx="-48" cy="10" r="8" fill="#f4c49b"/>
      <circle cx="48" cy="10" r="8" fill="#f4c49b"/>
      <path d="M-26 -40 q22 -14 52 -18" stroke="#4ea7dd" stroke-width="28" stroke-linecap="round"/>
      <circle cx="18" cy="-54" r="10" fill="#4ea7dd"/>
      ${ponytail ? '<path d="M20 -136 q34 20 14 54" stroke="#a26d3c" stroke-width="14" fill="none" stroke-linecap="round"/>' : '<path d="M-32 -136 q40 -28 56 0" stroke="#8c5b34" stroke-width="14" fill="none" stroke-linecap="round"/>'}
    </g>
  `;
}

function spotBlob({ x, y, rx, ry, color }) {
  return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${color}"/>`;
}

function guitarPlayer({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-138" r="36" fill="#f4c49b"/>
      <path d="M-58 -82 L58 -82 L42 34 L-44 34 Z" fill="#f4c94f"/>
      <rect x="-30" y="34" width="26" height="102" rx="10" fill="#4ec3b1"/>
      <rect x="6" y="34" width="26" height="102" rx="10" fill="#4ec3b1"/>
      <path d="M-48 -52 q58 20 112 10" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M-42 -18 Q-12 -74 64 -34 Q112 -10 94 36 Q80 74 24 48 Q-28 26 -42 -18 Z" fill="#ef8c3d" stroke="#b95c1f" stroke-width="8"/>
      <circle cx="24" cy="-6" r="16" fill="#7d431a"/>
      <circle cx="24" cy="-6" r="8" fill="#f8dcb6"/>
      <rect x="72" y="-34" width="74" height="12" rx="6" fill="#7d431a"/>
      <line x1="82" y1="-34" x2="82" y2="24" stroke="#fce6bc" stroke-width="2"/>
      <line x1="90" y1="-34" x2="90" y2="24" stroke="#fce6bc" stroke-width="2"/>
      <line x1="98" y1="-34" x2="98" y2="24" stroke="#fce6bc" stroke-width="2"/>
      <path d="M-34 -162 q34 -30 70 -2" stroke="#8c552c" stroke-width="16" fill="none" stroke-linecap="round"/>
      <circle cx="-14" cy="-142" r="4" fill="#2b2b2b"/>
      <circle cx="14" cy="-142" r="4" fill="#2b2b2b"/>
      <path d="M-12 -120 Q0 -108 12 -120" stroke="#d77c7c" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function bedScene({ x, y, compact }) {
  const scale = compact ? 0.34 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-210" y="-30" width="420" height="46" rx="22" fill="#c4eef8"/>
      <rect x="-214" y="-40" width="18" height="150" fill="#b67c4d"/>
      <rect x="196" y="-40" width="18" height="150" fill="#b67c4d"/>
      <rect x="-200" y="-52" width="16" height="34" rx="8" fill="#b67c4d"/>
      <rect x="184" y="-52" width="16" height="34" rx="8" fill="#b67c4d"/>
      <ellipse cx="0" cy="84" rx="170" ry="18" fill="rgba(0,0,0,0.08)"/>
      <rect x="-130" y="-72" width="120" height="52" rx="18" fill="#f2f8ff"/>
      <path d="M-80 -100 q62 -20 102 32" stroke="#f7c0a2" stroke-width="56" fill="none" stroke-linecap="round"/>
      <path d="M-26 -34 q78 16 164 38 q-38 72 -180 52 q-14 -34 16 -90 Z" fill="#3bb7c7" opacity="0.92"/>
      <path d="M-88 -98 q-28 -24 -72 0" stroke="#d28d61" stroke-width="18" fill="none" stroke-linecap="round"/>
      <circle cx="-78" cy="-98" r="4" fill="#bb6b5d"/>
      <circle cx="-60" cy="-98" r="4" fill="#bb6b5d"/>
      <path d="M-74 -76 q8 8 18 0" stroke="#bb6b5d" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="-30" y="100" width="42" height="16" rx="8" fill="#ff7b54"/>
      <rect x="18" y="100" width="42" height="16" rx="8" fill="#ff7b54"/>
    </g>
  `;
}

function wave({ x, y, compact }) {
  const scale = compact ? 0.24 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <path d="M-200 90 q60 -190 204 -118 q44 18 72 64 q58 -98 164 -70 q100 24 110 158 z" fill="#4da9df"/>
      <path d="M-180 58 q48 -98 120 -86 q52 8 104 54 q30 -34 86 -30 q74 4 118 86 q-62 -34 -102 -6 q-28 18 -82 16 q-108 -4 -244 -34 Z" fill="#80d4ff"/>
    </g>
  `;
}

function swimmer({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="30" cy="-14" r="24" fill="#f4c49b"/>
      <path d="M-16 18 q54 -44 116 -16" stroke="#f1a521" stroke-width="36" fill="none" stroke-linecap="round"/>
      <path d="M-22 14 q-56 14 -110 0" stroke="#4da9df" stroke-width="22" fill="none" stroke-linecap="round"/>
      <path d="M84 -36 q28 -48 72 -56" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M-8 20 q-48 32 -92 44" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M-20 -2 q16 -48 58 -58" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <circle cx="20" cy="-18" r="4" fill="#2b2b2b"/>
      <path d="M28 -6 q16 8 24 0" stroke="#d77c7c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M18 -46 q28 -24 54 -4" stroke="#8c552c" stroke-width="12" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function cleaningScene({ x, y, compact }) {
  const scale = compact ? 0.26 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="20" y="-220" width="160" height="220" rx="18" fill="#c1f1cf" stroke="#8f4f28" stroke-width="10"/>
      <rect x="32" y="-20" width="136" height="30" rx="8" fill="#8f4f28"/>
      <rect x="40" y="10" width="120" height="80" rx="8" fill="#8f4f28"/>
      <path d="M92 -170 q34 -20 40 28 q0 30 -22 62" stroke="#ffffff" stroke-width="16" fill="none" stroke-linecap="round"/>
      ${person({ x: -110, y: 44, shirt: "#e7f27e", shorts: "#f3b85e", skin: "#f4c49b", compact: false, armLeft: "down", armRight: "down" })}
      <path d="M-120 10 l-16 104" stroke="#8f5f31" stroke-width="10" stroke-linecap="round"/>
      <path d="M-176 118 h72" stroke="#c4852f" stroke-width="16" stroke-linecap="round"/>
      ${person({ x: 100, y: 42, shirt: "#e85b4f", shorts: "#f4c49b", skin: "#f4c49b", compact: false, armLeft: "up", armRight: "down" })}
      <path d="M106 -52 q16 -36 42 -76" stroke="#ffffff" stroke-width="18" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function paintingScene({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-194" y="-10" width="106" height="96" rx="10" fill="#b58258"/>
      <rect x="-190" y="50" width="98" height="30" fill="#92613c"/>
      <rect x="-172" y="-72" width="30" height="48" fill="#d8eef7"/>
      <rect x="-136" y="-72" width="30" height="48" fill="#f0b24b"/>
      <rect x="-100" y="-72" width="30" height="48" fill="#eb6e56"/>
      <line x1="-10" y1="-140" x2="-84" y2="120" stroke="#d0a165" stroke-width="10"/>
      <line x1="-10" y1="-140" x2="64" y2="120" stroke="#d0a165" stroke-width="10"/>
      <line x1="-10" y1="-140" x2="-10" y2="120" stroke="#d0a165" stroke-width="10"/>
      <rect x="-86" y="-150" width="154" height="164" rx="12" fill="#f6fbff" stroke="#d0a165" stroke-width="10"/>
      <path d="M-62 -48 q44 -54 112 -12" stroke="#8ecbff" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M-70 -10 q34 -20 98 18" stroke="#b2da8f" stroke-width="12" fill="none" stroke-linecap="round"/>
      ${person({ x: 130, y: 44, shirt: "#bd5b4f", shorts: "#bd5b4f", skin: "#f4c49b", compact: false, armLeft: "thumb", armRight: "down" })}
      <ellipse cx="188" cy="-18" rx="42" ry="26" fill="#f6f0d6" stroke="#92613c" stroke-width="8"/>
      <circle cx="170" cy="-18" r="8" fill="#8ecbff"/>
      <circle cx="190" cy="-30" r="8" fill="#e85b4f"/>
      <circle cx="200" cy="-4" r="8" fill="#f0b24b"/>
      <circle cx="212" cy="-20" r="8" fill="#63c7b2"/>
      <path d="M136 -60 q-22 -24 -56 -28" stroke="#8ecbff" stroke-width="8" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function cookingScene({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-210" y="-12" width="420" height="20" fill="#dfe8ef"/>
      <circle cx="0" cy="-6" r="92" fill="#485a69"/>
      <circle cx="0" cy="-6" r="76" fill="#323f4b"/>
      <ellipse cx="-22" cy="-12" rx="36" ry="24" fill="#ffffff"/>
      <ellipse cx="38" cy="18" rx="36" ry="24" fill="#ffffff"/>
      <circle cx="-18" cy="-10" r="12" fill="#f7c246"/>
      <circle cx="42" cy="20" r="12" fill="#f7c246"/>
      ${person({ x: -40, y: -34, shirt: "#dce9f5", shorts: "#dce9f5", skin: "#f4c49b", compact: false, armLeft: "down", armRight: "thumb" })}
      <path d="M-44 -40 l-84 72" stroke="#888" stroke-width="12" stroke-linecap="round"/>
      <path d="M22 -26 l120 26" stroke="#888" stroke-width="12" stroke-linecap="round"/>
      <path d="M-98 -138 q30 -30 62 -6" stroke="#8c552c" stroke-width="14" fill="none" stroke-linecap="round"/>
      <rect x="-150" y="-188" width="96" height="168" rx="18" fill="#8fd0ff"/>
    </g>
  `;
}

function watchingScene({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-164" y="-26" width="244" height="180" rx="40" fill="#f3d76e"/>
      <rect x="-148" y="132" width="20" height="64" fill="#8c552c"/>
      <rect x="32" y="132" width="20" height="64" fill="#8c552c"/>
      ${person({ x: -30, y: 64, shirt: "#57a7df", shorts: "#4c6fb4", skin: "#f4c49b", compact: false, armLeft: "thumb", armRight: "down" })}
      <rect x="-148" y="-12" width="28" height="10" rx="5" fill="#2b2b2b"/>
      <circle cx="-116" cy="-8" r="6" fill="#2b2b2b"/>
      <path d="M-110 -10 q26 20 54 12" stroke="#2b2b2b" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M-44 -140 q38 -26 66 0" stroke="#8c552c" stroke-width="14" fill="none" stroke-linecap="round"/>
    </g>
  `;
}
