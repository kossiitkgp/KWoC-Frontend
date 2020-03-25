$(function() {
  var langColor = {
    Mercury: "#ff2b2b",
    TypeScript: "#2b7489",
    PureBasic: "#5a6986",
    "Objective-C++": "#6866fb",
    Self: "#0579aa",
    edn: "#db5855",
    NewLisp: "#87AED7",
    "Jupyter Notebook": "#DA5B0B",
    Rebol: "#358a5b",
    Frege: "#00cafe",
    Dart: "#00B4AB",
    AspectJ: "#a957b0",
    Shell: "#89e051",
    "Web Ontology Language": "#9cc9dd",
    xBase: "#403a40",
    Eiffel: "#946d57",
    Nix: "#7e7eff",
    RAML: "#77d9fb",
    MTML: "#b7e1f4",
    Racket: "#22228f",
    Elixir: "#6e4a7e",
    SAS: "#B34936",
    Agda: "#315665",
    wisp: "#7582D1",
    D: "#ba595e",
    Kotlin: "#F18E33",
    Opal: "#f7ede0",
    Crystal: "#776791",
    "Objective-C": "#438eff",
    "ColdFusion CFC": "#ed2cd6",
    Oz: "#fab738",
    Mirah: "#c7a938",
    "Objective-J": "#ff0c5a",
    Gosu: "#82937f",
    FreeMarker: "#0050b2",
    Ruby: "#701516",
    "Component Pascal": "#b0ce4e",
    Arc: "#aa2afe",
    Brainfuck: "#2F2530",
    Nit: "#009917",
    APL: "#5A8164",
    Go: "#375eab",
    "Visual Basic": "#945db7",
    PHP: "#4F5D95",
    Cirru: "#ccccff",
    SQF: "#3F3F3F",
    Glyph: "#e4cc98",
    Java: "#b07219",
    MAXScript: "#00a6a6",
    Scala: "#DC322F",
    Makefile: "#427819",
    ColdFusion: "#ed2cd6",
    Perl: "#0298c3",
    Lua: "#000080",
    Vue: "#2c3e50",
    Verilog: "#b2b7f8",
    Factor: "#636746",
    Haxe: "#df7900",
    "Pure Data": "#91de79",
    Forth: "#341708",
    Red: "#ee0000",
    Hy: "#7790B2",
    Volt: "#1F1F1F",
    LSL: "#3d9970",
    eC: "#913960",
    CoffeeScript: "#244776",
    HTML: "#e44b23",
    Lex: "#DBCA00",
    "API Blueprint": "#2ACCA8",
    Swift: "#ffac45",
    C: "#555555",
    AutoHotkey: "#6594b9",
    Isabelle: "#FEFE00",
    Metal: "#8f14e9",
    Clarion: "#db901e",
    JSONiq: "#40d47e",
    Boo: "#d4bec1",
    AutoIt: "#1C3552",
    Clojure: "#db5855",
    Rust: "#dea584",
    Prolog: "#74283c",
    SourcePawn: "#5c7611",
    AMPL: "#E6EFBB",
    FORTRAN: "#4d41b1",
    ANTLR: "#9DC3FF",
    Harbour: "#0e60e3",
    Tcl: "#e4cc98",
    BlitzMax: "#cd6400",
    PigLatin: "#fcd7de",
    Lasso: "#999999",
    ECL: "#8a1267",
    VHDL: "#adb2cb",
    Elm: "#60B5CC",
    "Propeller Spin": "#7fa2a7",
    X10: "#4B6BEF",
    IDL: "#a3522f",
    ATS: "#1ac620",
    Ada: "#02f88c",
    "Unity3D Asset": "#ab69a1",
    Nu: "#c9df40",
    LFE: "#004200",
    SuperCollider: "#46390b",
    Oxygene: "#cdd0e3",
    ASP: "#6a40fd",
    Assembly: "#6E4C13",
    Gnuplot: "#f0a9f0",
    JFlex: "#DBCA00",
    NetLinx: "#0aa0ff",
    Turing: "#45f715",
    Vala: "#fbe5cd",
    Processing: "#0096D8",
    Arduino: "#bd79d1",
    FLUX: "#88ccff",
    NetLogo: "#ff6375",
    "C Sharp": "#178600",
    CSS: "#563d7c",
    "Emacs Lisp": "#c065db",
    Stan: "#b2011d",
    SaltStack: "#646464",
    QML: "#44a51c",
    Pike: "#005390",
    LOLCODE: "#cc9900",
    ooc: "#b0b77e",
    Handlebars: "#01a9d6",
    J: "#9EEDFF",
    Mask: "#f97732",
    EmberScript: "#FFF4F3",
    TeX: "#3D6117",
    Nemerle: "#3d3c6e",
    KRL: "#28431f",
    "Ren'Py": "#ff7f7f",
    "Unified Parallel C": "#4e3617",
    Golo: "#88562A",
    Fancy: "#7b9db4",
    OCaml: "#3be133",
    Shen: "#120F14",
    Pascal: "#b0ce4e",
    "F#": "#b845fc",
    Puppet: "#302B6D",
    ActionScript: "#882B0F",
    Diff: "#88dddd",
    "Ragel in Ruby Host": "#9d5200",
    Fantom: "#dbded5",
    Zephir: "#118f9e",
    Click: "#E4E6F3",
    Smalltalk: "#596706",
    DM: "#447265",
    Ioke: "#078193",
    PogoScript: "#d80074",
    LiveScript: "#499886",
    JavaScript: "#f1e05a",
    VimL: "#199f4b",
    PureScript: "#1D222D",
    ABAP: "#E8274B",
    Matlab: "#bb92ac",
    Slash: "#007eff",
    R: "#198ce7",
    Erlang: "#B83998",
    Pan: "#cc0000",
    LookML: "#652B81",
    Eagle: "#814C05",
    Scheme: "#1e4aec",
    PLSQL: "#dad8d8",
    Python: "#3572A5",
    Max: "#c4a79c",
    "Common Lisp": "#3fb68b",
    Latte: "#A8FF97",
    XQuery: "#5232e7",
    Omgrofl: "#cabbff",
    XC: "#99DA07",
    Nimrod: "#37775b",
    SystemVerilog: "#DAE1C2",
    Chapel: "#8dc63f",
    Groovy: "#e69f56",
    Dylan: "#6c616e",
    E: "#ccce35",
    Parrot: "#f3ca0a",
    "Grammatical Framework": "#79aa7a",
    "Game Maker Language": "#8fb200",
    Papyrus: "#6600cc",
    "NetLinx+ERB": "#747faa",
    Clean: "#3F85AF",
    Alloy: "#64C800",
    Squirrel: "#800000",
    PAWN: "#dbb284",
    UnrealScript: "#a54c4d",
    "Standard ML": "#dc566d",
    Slim: "#ff8f77",
    Perl6: "#0000fb",
    Julia: "#a270ba",
    Haskell: "#29b544",
    NCL: "#28431f",
    Io: "#a9188d",
    Rouge: "#cc0088",
    cpp: "#f34b7d",
    "AGS Script": "#B9D9FF",
    Dogescript: "#cca760",
    nesC: "#94B0C7"
  };

  var randcolors = [
    "#3498db",
    "#9b59b6",
    "#8e44ad",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d"
  ];

  //     var cards = [
  //       {'title': 'Adaptive Filtering Techniques', 'id': 1, 'btnid': 1001, 'intro': 'Collection of python implementations of adaptive filters.', 'intro_full': 'Collection of python implementations of adaptive filters.', 'mentor': 'Rohit Ner', 'mentor_email': 'rohitner1@gmail.com', 'tag': ['Python', 'Signal-processing', 'Adaptive-filtering', 'System-identification', 'Kalman-filter', 'Least-squares', 'Chemometrics'], 'link': 'https://github.com/rohitner/adaptive-filters', 'comm': 'https://groups.google.com/forum/#!forum/adaptive-filters', 'img': 'https://github.com/rohitner.png?size=50'},
  // {'title': 'Add Cover Art', 'id': 2, 'btnid': 1002, 'intro': 'Change cover photo of all your songs automatically using python', 'intro_full': 'Change cover photo of all your songs automatically using python', 'mentor': 'Piyush Ranjan', 'mentor_email': 'piyush.27ranjan@gmail.com', 'tag': ['Python', 'Webscraping', 'Eyed3', 'Tkinter'], 'link': 'https://github.com/piyush27ranjan/Add-cover-art', 'comm': 'https://join.slack.com/t/addcoverart/shared_invite/enQtNDgyMDQxNDA1NzgwLWVhYzM0MDhiODY5ZTc1MzFmODIyZmVjYjQ4MmFiOTdmYTU3ODFiZDEwMjAyYjFlY2E1Mjc3NjQ1OGZhYTliZTU', 'img': 'https://github.com/piyush27ranjan.png?size=50'},
  // {'title': 'Alphynite', 'id': 3, 'btnid': 1003, 'intro': 'Alphynite is an online B2B platform where sellers can sell their products and buyers can buy as well as post their requirements. Currently , project is in in...', 'intro_full': 'Alphynite is an online B2B platform where sellers can sell their products and buyers can buy as well as post their requirements. Currently , project is in initial stages. Frontend is somewhat completed .', 'mentor': 'Shubham Kumar', 'mentor_email': 'sk9331657@gmail.com', 'tag': ['JavaScript', 'TypeScript', 'CSS', 'HTML'], 'link': 'https://github.com/sk9331657/Alphynite', 'comm': 'https://gitter.im/Alphynite/Lobby', 'img': 'https://github.com/sk9331657.png?size=50'},
  // {'title': 'Anna Assistant', 'id': 4, 'btnid': 1004, 'intro': "Anna is a community driven ambitious virtual assistant on Google Chrome to help people Automate actions using Voice. 🐘  Sounds boring. Let's try again.  Meet...", 'intro_full': "Anna is a community driven ambitious virtual assistant on Google Chrome to help people Automate actions using Voice. 🐘  Sounds boring. Let's try again.  Meet Anna, your very own personal assistant on Google Chrome Webstore. It will make your life so effort less. You don't have to open broswer and type your broswer what to do. Instead just talk to your computer, like it is your best friend. ", 'mentor': 'Gautham Santhosh', 'mentor_email': 'thabeatsz@gmail.com', 'tag': ['HTML', 'CSS', 'JavaScript', 'Shell', 'Chrome-extension', 'Chrome', 'Assistant', 'Contributions-welcome', 'Anna', 'Opencode'], 'link': 'https://github.com/Anna-Assistant/Anna', 'comm': 'https://anna.zulipchat.com', 'img': 'https://github.com/Anna-Assistant.png?size=50'},
  // {'title': 'Anons', 'id': 5, 'btnid': 1005, 'intro': 'ANOVA for neural networks', 'intro_full': 'ANOVA for neural networks', 'mentor': 'Nishant Nikhil', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['Jupyter Notebook'], 'link': 'https://github.com/nishnik/ANONS', 'comm': 'Create an issue in the repository', 'img': 'https://github.com/nishnik.png?size=50'},
  // {'title': 'Artemis Arrow', 'id': 6, 'btnid': 1006, 'intro': 'A Web App that downloads songs, anime, books and any form of entertainment. It also provides an option to upload the downloaded content to Google Drive', 'intro_full': 'A Web App that downloads songs, anime, books and any form of entertainment. It also provides an option to upload the downloaded content to Google Drive', 'mentor': 'Kousshik Raj', 'mentor_email': 'kousshikraj.raj@gmail.com', 'tag': ['Python', 'HTML', 'JavaScript', 'CSS', 'Webscraping', 'Python3', 'Flask-application', 'Oauth2', 'Server'], 'link': 'https://github.com/TheLethalCode/Artemis-arrow', 'comm': 'https://join.slack.com/t/artemisarrow/shared_invite/enQtNDg2NDM5MTI3MzEyLTc0MTgzNThmZTNkNzEyZGZlODk1ODczMWMyMmMyMzFiOGRjMjM2NWEzZGNjMTlkZjY2MzgzZjgwODFmNTU3MDQ', 'img': 'https://github.com/TheLethalCode.png?size=50'},
  // {'title': 'Automatic leaf infection identifier', 'id': 7, 'btnid': 1007, 'intro': 'Automatic detection of plant diseases is an important research topic as it may prove benefits in monitoring large fields of crops, and at very early stage it...', 'intro_full': 'Automatic detection of plant diseases is an important research topic as it may prove benefits in monitoring large fields of crops, and at very early stage itself it detects the symptoms of diseases means when they appear on plant leaves. This enables machine vision that is to provide image based automatic inspection, process control. Comparatively, visual identification is labor intensive less accurate and can be done only in small areas. The project involves the use of self-designed image processing algorithms and techniques designed using python to segment the disease from the leaf, while using the concepts of machine learning to categories the plant leaves as healthy or infected. ', 'mentor': 'Shikhar Johri', 'mentor_email': 'shikharjohri123@gmail.com', 'tag': ['Python', 'Opencv', 'Ml', 'Machine-learning', 'Leaf-classifier', 'Svc', 'Image-segmentation', 'Disease-prediction'], 'link': 'https://github.com/johri002/Automatic-leaf-infection-identifier', 'comm': 'https://gitter.im/Automatic-leaf-infection-identification/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/johri002.png?size=50'},
  // {'title': 'Awesome-nlp/recipes', 'id': 8, 'btnid': 1008, 'intro': 'Creating NLP paradigms for non-English languages', 'intro_full': 'Creating NLP paradigms for non-English languages', 'mentor': 'Dhruv Apte', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Natural-language-processing', 'Deep-learning', 'Machine-learning', 'Language', 'Awesome', 'Awesome-list', 'Nlp', 'Text-mining'], 'link': 'https://github.com/keon/awesome-nlp', 'comm': 'https://gitter.im/awesome-nlp/Lobby', 'img': 'https://github.com/keon.png?size=50'},
  // {'title': 'B.E.N.J.I.', 'id': 9, 'btnid': 1009, 'intro': 'A digital assistant that performs myriad task using speech recognition', 'intro_full': 'A digital assistant that performs myriad task using speech recognition', 'mentor': 'Dhruv Apte', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Python', 'Shell', 'Python3', 'Speech-recognition', 'Speech-to-text', 'Digital-assistant'], 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'comm': 'https://gitter.im/B-E-N-J-I/Lobby', 'img': 'https://github.com/the-ethan-hunt.png?size=50'},
  // {'title': 'BBC News App', 'id': 10, 'btnid': 1010, 'intro': "Its  a news app that uses the BBC News' Api. When the user clicks on any particular news it is redirected to that page.", 'intro_full': "Its  a news app that uses the BBC News' Api. When the user clicks on any particular news it is redirected to that page.", 'mentor': 'Hariharan Krishnamoorthy', 'mentor_email': '1999hari@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/harrycode007/BBCNewsApp', 'comm': 'https://gitter.im/BBCNewsApp/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge', 'img': 'https://github.com/harrycode007.png?size=50'},
  // {'title': 'Babagkachatbox', 'id': 11, 'btnid': 1011, 'intro': 'Its a simple chatting board made in django ', 'intro_full': 'Its a simple chatting board made in django ', 'mentor': 'Manoranjan Kumar Bharti', 'mentor_email': 'knakul853@gmail.com', 'tag': ['Python', 'CSS', 'JavaScript', 'HTML'], 'link': 'https://github.com/knakul853/babagkachatbox', 'comm': 'https://gitter.im/mydajngo_project/Lobby#', 'img': 'https://github.com/knakul853.png?size=50'},
  // {'title': 'Ball Sacker', 'id': 12, 'btnid': 1012, 'intro': 'Basic top down 2D shooter game in C++ and OpenCV', 'intro_full': 'Basic top down 2D shooter game in C++ and OpenCV', 'mentor': 'Arnav Tiwari', 'mentor_email': 'avznav@gmail.com', 'tag': ['Makefile', 'C++', 'Game', 'Ai', 'A-star-algorithm', '2d-game', '2d-graphics', 'Opencv', 'Object-oriented-programming'], 'link': 'https://github.com/arnav-t/Shooting-Game', 'comm': 'https://gitter.im/BallSackerChat/', 'img': 'https://github.com/arnav-t.png?size=50'},
  // {'title': 'BrkOut', 'id': 13, 'btnid': 1013, 'intro': ' A prison escape game with a blend of brick breaking gameplay and innovative implementation of the same to get the look of an escape.', 'intro_full': ' A prison escape game with a blend of brick breaking gameplay and innovative implementation of the same to get the look of an escape.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Pygame', 'Game-development', 'Physics-2d', 'Prison-break', 'Pip', 'Python-packaging', 'Design', 'Artwork'], 'link': 'https://github.com/thealphadollar/brkout', 'comm': 'https://gitter.im/brkout_/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
  // {'title': 'CCExtractor', 'id': 14, 'btnid': 1014, 'intro': 'A tool that analyzes video files and produces independent subtitle files from the closed captions data. CCExtractor is portable, small, and very fast. It wor...', 'intro_full': 'A tool that analyzes video files and produces independent subtitle files from the closed captions data. CCExtractor is portable, small, and very fast. It works in Linux, Windows, and OSX. ', 'mentor': 'Anshul Maheshwari', 'mentor_email': 'er.anshul.maheshwari@gmail.com', 'tag': ['Makefile', 'Shell', 'C', 'C++', 'CMake', 'Subtitles', 'Tesseract', 'Ocr', 'Tesseract-ocr', 'Dvb', 'Video', 'Image-processing', 'Image', 'Teletext', 'Cea-608'], 'link': 'https://github.com/CCExtractor/ccextractor', 'comm': 'https://ccextractor.org/public:general:support\n', 'img': 'https://github.com/CCExtractor.png?size=50'},
  // {'title': 'ClubComing', 'id': 15, 'btnid': 1015, 'intro': 'A website to part-automate Club interview process across Colleges', 'intro_full': 'A website to part-automate Club interview process across Colleges', 'mentor': 'Utkarsh Singh', 'mentor_email': 'utkarshsingh369@gmail.com', 'tag': ['JavaScript', 'HTML', 'CSS', 'TeX', 'Python', 'Mongodb', 'Nodejs', 'Latex', 'Python3', 'Jsonwebtoken'], 'link': 'https://github.com/utkarshsingh99/ClubComing', 'comm': 'https://gitter.im/ClubComing/clubcoming', 'img': 'https://github.com/utkarshsingh99.png?size=50'},
  // {'title': 'Coala', 'id': 16, 'btnid': 1016, 'intro': 'Linting and Fixing Code for All Languages', 'intro_full': 'Linting and Fixing Code for All Languages', 'mentor': 'Sangam Kumar', 'mentor_email': 'ksangam68@gmail.com', 'tag': ['Python', 'Shell', 'C', 'Batchfile', 'Code-analysis', 'Linux', 'Windows', 'Macos', 'Lint'], 'link': ' https://github.com/coala/coala', 'comm': 'https://gitter.im/coala/coala', 'img': 'https://github.com/coala.png?size=50'},
  // {'title': 'Coala-bears', 'id': 17, 'btnid': 1017, 'intro': 'A Python package containing all the bears that are officially supported by coala which features more than 78 bears covering 54 languages.', 'intro_full': 'A Python package containing all the bears that are officially supported by coala which features more than 78 bears covering 54 languages.', 'mentor': 'Sangam Kumar', 'mentor_email': 'ksangam68@gmail.com', 'tag': ['Python', 'Shell', 'C', 'C#', 'Go', 'Code-analysis', 'Linter', 'Java', 'Languages', 'Generic'], 'link': 'https://github.com/coala/coala-bears', 'comm': 'https://gitter.im/coala/coala-bears', 'img': 'https://github.com/coala.png?size=50'},
  // {'title': 'Colorls', 'id': 18, 'btnid': 1018, 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons. :tada:", 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons. :tada:", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'Shell', 'Color', 'Icons', 'Ls', 'Terminal', 'Cli', 'Gem', 'Eye-candy'], 'link': 'https://github.com/athityakumar/colorls', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
  // {'title': 'Daru', 'id': 19, 'btnid': 1019, 'intro': 'Data Analysis in RUby', 'intro_full': 'Data Analysis in RUby', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'HTML'], 'link': 'https://github.com/SciRuby/daru', 'comm': 'https://groups.google.com/forum/#!forum/sciruby-dev', 'img': 'https://github.com/SciRuby.png?size=50'},
  // {'title': 'DashVis', 'id': 20, 'btnid': 1020, 'intro': 'An open-source Dashboard built for users, to organize their resources via Tables and Folders', 'intro_full': 'An open-source Dashboard built for users, to organize their resources via Tables and Folders', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'JavaScript', 'CSS', 'HTML', 'Dashboard', 'Open-source', 'Datatables', 'Tables', 'Folders', 'Ui', 'Rails5', 'Ruby-on-rails'], 'link': 'https://github.com/athityakumar/DashVis', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
  // {'title': 'Dismantled Cataclysm', 'id': 21, 'btnid': 1021, 'intro': 'AI driven call center facility for disaster management using NLP.', 'intro_full': 'AI driven call center facility for disaster management using NLP.', 'mentor': 'Ayush Kaushal', 'mentor_email': 'ayushk4@gmail.com', 'tag': ['HTML', 'CSS', 'Python', 'Nlp', 'Ai', 'Frontend', 'Javascript', 'Natural-language-processing', 'Disaster-management', 'Flask', 'Backend'], 'link': 'https://github.com/Ayushk4/Dismantled-Cataclysm', 'comm': 'https://gitter.im/Dis-Cat/Lobby', 'img': 'https://github.com/Ayushk4.png?size=50'},
  // {'title': 'Easy Learning', 'id': 22, 'btnid': 1022, 'intro': 'Easy Learning is be a comprehensive web tool with a complete list of resources to learn any stuff, skills, subject based on community feedback, further tailo...', 'intro_full': 'Easy Learning is be a comprehensive web tool with a complete list of resources to learn any stuff, skills, subject based on community feedback, further tailored according to individual learning ability also being easily filterable and searchable.', 'mentor': 'Mohit Khandelwal', 'mentor_email': 'mohitkh7@gmail.com', 'tag': ['Python', 'HTML', 'CSS', 'JavaScript', 'Django', 'Social-platform', 'Hackathon-project', 'Kwoc'], 'link': 'https://github.com/mohitkh7/Easy-Learning', 'comm': 'https://easylearninggroup.slack.com/', 'img': 'https://github.com/mohitkh7.png?size=50'},
  // {'title': 'Epurifier', 'id': 23, 'btnid': 1023, 'intro': 'A KISS(Keep It Stupid Simple) email validator for csv files', 'intro_full': 'A KISS(Keep It Stupid Simple) email validator for csv files', 'mentor': 'Aditya Vikram Singh', 'mentor_email': 'xypnox@gmail.com', 'tag': ['Python', 'Makefile', 'Csv', 'Email-purifier', 'Website', 'Pip'], 'link': 'https://github.com/xypnox/email_purifier', 'comm': 'https://gitter.im/epurifier/Lobby', 'img': 'https://github.com/xypnox.png?size=50'},
  // {'title': 'Erp-Auto-Login', 'id': 24, 'btnid': 1024, 'intro': 'A chrome extension that you have to setup just one time, to automatically login to your IITKGP ERP account every time. Just install the chrome extension, and...', 'intro_full': "A chrome extension that you have to setup just one time, to automatically login to your IITKGP ERP account every time. Just install the chrome extension, and click on the extension logo (IIT Kharagpur's logo) to setup your login credentials.", 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['JavaScript', 'HTML', 'Chrome-extension', 'Erp', 'Jquery', 'Design', 'Frontend', 'Backend'], 'link': 'https://github.com/metakgp/erp-auto-login/issues', 'comm': 'https://gitter.im/erp-auto-login/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'ExpenseTracker', 'id': 25, 'btnid': 1025, 'intro': ' Application to keep track of your expenses.', 'intro_full': ' Application to keep track of your expenses.', 'mentor': 'Vyankatesh Berde', 'mentor_email': 'vyankateshberde24@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/vyankatesh24/ExpenseTracker', 'comm': 'https://groups.google.com/forum/#!forum/expense-tracker/join', 'img': 'https://github.com/vyankatesh24.png?size=50'},
  // {'title': 'Facebook-archive', 'id': 26, 'btnid': 1026, 'intro': "Just some fun you can have with facebook's archive data", 'intro_full': "Just some fun you can have with facebook's archive data", 'mentor': 'Kaustubh Hiware', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Python', 'Data-visualization', 'Data', 'Facebook'], 'link': 'https://github.com/kaustubhhiware/facebook-archive', 'comm': 'https://gitter.im/facebook-archive/', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
  // {'title': 'Find The Meaning', 'id': 27, 'btnid': 1027, 'intro': "It's an open source dictionary which shows the meaning of the word that is searched for. It is made using Oxford Dictionary API.", 'intro_full': "It's an open source dictionary which shows the meaning of the word that is searched for. It is made using Oxford Dictionary API.", 'mentor': 'Amrita Nair', 'mentor_email': 'theamritanair@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/theamritanair/Find-the-Meaning', 'comm': 'https://gitter.im/Find-the-Meaning', 'img': 'https://github.com/theamritanair.png?size=50'},
  // {'title': 'First-timers-only-app', 'id': 28, 'btnid': 1028, 'intro': 'This is a Probot app that I developed as a part of Rails Girls Summer of Code 2018. A bot that ensures exactly one newcomer issue is assigned per person so t...', 'intro_full': 'This is a Probot app that I developed as a part of Rails Girls Summer of Code 2018. A bot that ensures exactly one newcomer issue is assigned per person so that it’s fair for all newcomers. Additionally, it encourages the no-more-newcomers to take up challenging issues once they’re comfortable with the workflow after having tackled a newcomer issue. The aim is to augment its usability by using NLP. ', 'mentor': 'Rahmeen Habib', 'mentor_email': 'rahmeenwill99@gmail.com', 'tag': ['JavaScript'], 'link': 'https://github.com/Rahmeen14/first-timers-only-app', 'comm': 'https://kwocworkspace.slack.com', 'img': 'https://github.com/Rahmeen14.png?size=50'},
  // {'title': 'GYFT', 'id': 29, 'btnid': 1029, 'intro': ' Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'intro_full': ' Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Timetable', 'Erp', 'Gyft', 'Ics', 'Google-calendar'], 'link': 'https://github.com/metakgp/gyft/issues', 'comm': 'https://gitter.im/gyft_/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'Generative Models In Tensorflow', 'id': 30, 'btnid': 1030, 'intro': 'Create generative Models using Tensorflow like GANS and VAEs.', 'intro_full': 'Create generative Models using Tensorflow like GANS and VAEs.', 'mentor': 'SHREYAS KOWSHIK', 'mentor_email': 'shreyaskowshik@gmail.com', 'tag': ['Jupyter Notebook', 'Python', 'Deep-learning', 'Ai', 'Generative-adversarial-network'], 'link': 'https://github.com/shreyas-kowshik/Generative-Models-Tensorflow', 'comm': 'https://github.com/shreyas-kowshik/Generative-Models-Tensorflow', 'img': 'https://github.com/shreyas-kowshik.png?size=50'},
  // {'title': 'GitBot-v1', 'id': 31, 'btnid': 1031, 'intro': 'A project which i developed during my opensource contribution to the Girlscript Summer of Code where i was among top 10 developers.Basically, this project is...', 'intro_full': "A project which i developed during my opensource contribution to the Girlscript Summer of Code where i was among top 10 developers.Basically, this project is about doing github mundane tasks like assigning issues,closing issues, providing an organisation's invite etc things.Just check these bot commands https://github.com/Dhiraj240/GitBot-v1/blob/master/Guidelines.md and this was configured for slack.", 'mentor': 'Dhiraj Sharma', 'mentor_email': 'dhirajcoolssharma@gmail.com', 'tag': ['Python', 'Api', 'Python3', 'Travis-ci', 'Coala'], 'link': 'https://github.com/Dhiraj240/GitBot-v1', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gitbot-v1', 'img': 'https://github.com/Dhiraj240.png?size=50'},
  // {'title': 'Giving a new look to Codeuino Website ', 'id': 32, 'btnid': 1032, 'intro': 'Codeuino is an Open source Social Networking organisation and the aim of this project is to develop a webiste for it that is www.codeuino.org . This needs to...', 'intro_full': 'Codeuino is an Open source Social Networking organisation and the aim of this project is to develop a webiste for it that is www.codeuino.org . This needs to be made from scratch. ', 'mentor': 'Jaskirat Singh', 'mentor_email': 'juskirat2000@gmail.com', 'tag': ['HTML', 'CSS', 'JavaScript'], 'link': 'https://github.com/codeuino/website-www.codeuino.org', 'comm': 'https://goo.gl/NYKWNx , https://groups.google.com/forum/#!forum/codeuino-devel', 'img': 'https://github.com/codeuino.png?size=50'},
  // {'title': 'Google Assistant Slack', 'id': 33, 'btnid': 1033, 'intro': 'A Google Assistant that helps you on Slack', 'intro_full': 'A Google Assistant that helps you on Slack', 'mentor': 'Matej Plavevski', 'mentor_email': 'matej.plavevski+github@gmail.com', 'tag': ['JavaScript', 'Bot', 'Slack', 'Nodejs', 'Botkit', 'Botkit-bots'], 'link': 'https://github.com/MatejMecka/GoogleAssistantSlack', 'comm': 'https://gitter.im/GoogleAssistantSlack/Lobby#', 'img': 'https://github.com/MatejMecka.png?size=50'},
  // {'title': 'HBTUMail', 'id': 34, 'btnid': 1034, 'intro': 'A Webmail service to connect faculty and students of HBTU Kanpur.', 'intro_full': 'A Webmail service to connect faculty and students of HBTU Kanpur.', 'mentor': 'Dhawal Agrawal', 'mentor_email': 'dhawal55555@gmail.com', 'tag': ['CSS', 'JavaScript', 'PHP'], 'link': 'https://github.com/DhawalAgrawal/HBTUMAIL', 'comm': 'https://gitter.im/DhawalAgrawal/HBTUMAIL', 'img': 'https://github.com/DhawalAgrawal.png?size=50'},
  // {'title': 'Hazel', 'id': 35, 'btnid': 1035, 'intro': 'Easy to use Deep learning models Build, train, and ship custom deep learning models using a simple visual interface.  Without backend frontend demo  Train an...', 'intro_full': "Easy to use Deep learning models Build, train, and ship custom deep learning models using a simple visual interface.  Without backend frontend demo  Train and Test models in a single Click. When you are done ship it as a REST api to your app. Don't write any code, but still customise the models.", 'mentor': 'Gautham Santhosh', 'mentor_email': 'thabeatsz@gmail.com', 'tag': ['Python', 'Jupyter Notebook', 'CSS', 'JavaScript', 'HTML'], 'link': 'https://github.com/gauthamzz/hazel', 'comm': 'https://gitter.im/HazelApp/Lobby#', 'img': 'https://github.com/gauthamzz.png?size=50'},
  // {'title': 'Hercules', 'id': 36, 'btnid': 1036, 'intro': "The mighty hero helping you build projects on top of IIT Kharagpur's academic data", 'intro_full': "The mighty hero helping you build projects on top of IIT Kharagpur's academic data", 'mentor': 'Kshitij', 'mentor_email': 'kshitijsaraogi@gmail.com', 'tag': ['Dockerfile', 'Go', 'Python', 'Makefile', 'CSS'], 'link': 'https://github.com/kshitij10496/hercules', 'comm': 'metakgp.slack.com', 'img': 'https://github.com/kshitij10496.png?size=50'},
  // {'title': 'INSAT Clouds', 'id': 37, 'btnid': 1037, 'intro': 'Analyze and generate animated GIFs from INSAT cloud cover maps', 'intro_full': 'Analyze and generate animated GIFs from INSAT cloud cover maps', 'mentor': 'Arnav Tiwari', 'mentor_email': 'avznav@gmail.com', 'tag': ['Python', 'Python3', 'Gif-animation', 'Web', 'Weather-api', 'Weather-forecast', 'Cloud-data'], 'link': 'https://github.com/arnav-t/insat-clouds', 'comm': 'https://gitter.im/INSAT-CloudsChat/', 'img': 'https://github.com/arnav-t.png?size=50'},
  // {'title': 'Ignitus', 'id': 38, 'btnid': 1038, 'intro': 'Building A clone of AngelList, but for researchers and students that will bridge the gap between students and university Profs., RA, PHD Students. We run Ign...', 'intro_full': 'Building A clone of AngelList, but for researchers and students that will bridge the gap between students and university Profs., RA, PHD Students. We run Ignitus as a Non-Profit and is been supported by prestegious institution of the world and  we our entire code base is open-sourced.', 'mentor': 'Divyanshu Rawat', 'mentor_email': 'divyanshu.r46956@gmail.com', 'tag': ['HTML', 'CSS', 'JavaScript', 'Dockerfile', 'React', 'Redux', 'Travis-ci', 'Heroku', 'Prop-types', 'Redux-thunk', 'Docker-container', 'Redux-sagas', 'Flow', 'Reselect', 'Jest-tests', 'Istanbul'], 'link': 'https://github.com/Ignitus/Ignitus-Client-Side-Development', 'comm': 'Slack(https://goo.gl/RCeffA)', 'img': 'https://github.com/Ignitus.png?size=50'},
  // {'title': 'Imagery', 'id': 39, 'btnid': 1039, 'intro': 'Imagery is a slack bot that takes any uploaded image, hosts it on Imgur and posts the link to the same channel after deleting the uploaded image, thus, savin...', 'intro_full': 'Imagery is a slack bot that takes any uploaded image, hosts it on Imgur and posts the link to the same channel after deleting the uploaded image, thus, saving space on a free plan.', 'mentor': 'Dibya Prakash Das', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['Python', 'Imgur', 'Slack', 'Heroku', 'Flask', 'Bot'], 'link': 'https://github.com/dibyadas/imagery', 'comm': 'https://join.slack.com/t/dpdtesting/shared_invite/enQtNDkzMzgxMDM5MjA2LTY2OGVjZGY2MzM1YzgxMGIwMWNmOWQ0Y2QyZjcxMDk1NzQ4M2MxNjkxNTVhM2VmMGU3ZWJhMTU0YmI4NzI4NTQ', 'img': 'https://github.com/dibyadas.png?size=50'},
  // {'title': 'In-time', 'id': 40, 'btnid': 1040, 'intro': 'The app will help students to get all the work done in time and track his activities The students will be notified about their timetable, classes to attend, ...', 'intro_full': 'The app will help students to get all the work done in time and track his activities The students will be notified about their timetable, classes to attend, other todos to be done. It will help the student keep track of the number of class he/she has missed. It will also show motiviational quotes with todos to be done so that the student stays motivated.', 'mentor': 'Nityananda Gohain', 'mentor_email': 'nityanandagohain@gmail.com', 'tag': ['Java', 'Objective-C', 'Dart', 'Flutter', 'Android', 'Ios'], 'link': 'https://github.com/nityanandagohain/in-time', 'comm': 'https://gitter.im/in_time/Lobby#', 'img': 'https://github.com/nityanandagohain.png?size=50'},
  // {'title': 'Interactive Force Directed Graph', 'id': 41, 'btnid': 1041, 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph. Different information like the deg...', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph. Different information like the degree centrality, betweenness centrality and clustering co-efficient is displayed. ', 'mentor': 'Dibya Prakash Das', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['Python', 'CSS', 'HTML', 'D3js', 'Graph', 'Networkx', 'Javascript'], 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'comm': 'https://join.slack.com/t/dpdtesting/shared_invite/enQtNDkzMzgxMDM5MjA2LTY2OGVjZGY2MzM1YzgxMGIwMWNmOWQ0Y2QyZjcxMDk1NzQ4M2MxNjkxNTVhM2VmMGU3ZWJhMTU0YmI4NzI4NTQ', 'img': 'https://github.com/dibyadas.png?size=50'},
  // {'title': 'JCC Registration Portal', 'id': 42, 'btnid': 1042, 'intro': 'A Team Registration Portal made in Django 1.11 to register teams for Junior Code Cracker , NIT Durgapur', 'intro_full': 'A Team Registration Portal made in Django 1.11 to register teams for Junior Code Cracker , NIT Durgapur', 'mentor': 'Jayjeet Chakraborty', 'mentor_email': 'jc.github@rediffmail.com', 'tag': ['Python', 'HTML', 'CSS', 'JavaScript', 'Django', 'Registration-portal', 'Form'], 'link': 'https://github.com/JayjeetAtGithub/jcc-registration-portal', 'comm': 'gitter.im/JCC-Registration-Portal-KWOC', 'img': 'https://github.com/JayjeetAtGithub.png?size=50'},
  // {'title': 'Karate', 'id': 43, 'btnid': 1043, 'intro': 'Test Automation made Simple', 'intro_full': 'Test Automation made Simple', 'mentor': 'Peter Thomas', 'mentor_email': 'ptrthomas@gmail.com', 'tag': ['Java', 'Gherkin', 'JavaScript', 'HTML', 'Scala', 'Testing', 'Rest', 'Graphql', 'Test-automation', 'Bdd', 'Soap', 'Assertions', 'Microservices', 'Testing-tools', 'Mock-server', 'Http'], 'link': 'https://github.com/intuit/karate', 'comm': 'https://groups.google.com/d/forum/karate-kwoc', 'img': 'https://github.com/intuit.png?size=50'},
  // {'title': 'Keep-Clone', 'id': 44, 'btnid': 1044, 'intro': 'A google keep clone', 'intro_full': 'A google keep clone', 'mentor': 'Nityananda Gohain', 'mentor_email': 'nityanandagohain@gmail.com', 'tag': ['HTML', 'CSS', 'JavaScript'], 'link': 'https://github.com/nityanandagohain/keep_clone', 'comm': 'https://gitter.im/keep-clone/Lobby', 'img': 'https://github.com/nityanandagohain.png?size=50'},
  // {'title': 'Kronos', 'id': 45, 'btnid': 1045, 'intro': 'A webapp to serve past year records-grade distributions of IITKGP', 'intro_full': 'A webapp to serve past year records-grade distributions of IITKGP', 'mentor': 'Ayush Kaushal', 'mentor_email': 'ayushk4@gmail.com', 'tag': ['HTML', 'CSS', 'Python', 'Python3', 'Erp', 'Academics-kgp', 'Frontend', 'Backend', 'Javascript'], 'link': 'https://github.com/metakgp/Kronos', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'Lingatagger', 'id': 46, 'btnid': 1046, 'intro': 'A Hindi Gender Tagger! ', 'intro_full': 'A Hindi Gender Tagger! ', 'mentor': 'Samriddhi Sinha', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'tag': ['Python', 'Nlp', 'Nlp-machine-learning', 'Tagger'], 'link': 'https://github.com/djokester/lingatagger', 'comm': 'https://join.slack.com/t/sangitanlp/shared_invite/enQtMzc2NzMzODQ2ODU1LTRkOTUwODViMDBlNjIzZGNhZWIzNzc5MjM0Y2Y3YjYzMWY1NThjYmVkY2Y4M2RhODU5NzQ0MzZmODE4NmQ4ZmU', 'img': 'https://github.com/djokester.png?size=50'},
  // {'title': 'MFQP', 'id': 47, 'btnid': 1047, 'intro': "MetaKGP's solution to finding past years' questions paper for all subjects; provided by students for students.", 'intro_full': "MetaKGP's solution to finding past years' questions paper for all subjects; provided by students for students.", 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['JavaScript', 'CSS', 'Ruby', 'Shell', 'Python', 'Search', 'Fuzzy-search', 'Question-papers', 'Previous', 'Years', 'Metakgp'], 'link': 'https://github.com/metakgp/mfqp/issues', 'comm': 'https://gitter.im/mfqp/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'Medium_Grabber', 'id': 48, 'btnid': 1048, 'intro': 'This is an automated program that lets you grab the link of any article under any topic just by logging into your Google-medium account.', 'intro_full': 'This is an automated program that lets you grab the link of any article under any topic just by logging into your Google-medium account.', 'mentor': 'Abhishek Singh', 'mentor_email': 'abhishek.nitdgp.98@gmail.com', 'tag': ['Python', 'Python3', 'Selenium-webdriver', 'Selenium-python', 'Javascript'], 'link': 'https://github.com/NITDgpOS/Medium_Grabber', 'comm': 'https://gitter.im/Medium_Grabber/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50'},
  // {'title': 'Melonicious', 'id': 49, 'btnid': 1049, 'intro': 'An Android app that tracks the daily commits of a given set of GitHub users', 'intro_full': 'An Android app that tracks the daily commits of a given set of GitHub users', 'mentor': 'Abhilash Gunasegaran', 'mentor_email': 'abhilash.ag1997@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/AbhilashG97/Melonicious', 'comm': 'https://gitter.im/Melonicious/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/AbhilashG97.png?size=50'},
  // {'title': 'Meme Finder', 'id': 50, 'btnid': 1050, 'intro': 'Meme Retrieval Engine : Find relevant memes', 'intro_full': 'Meme Retrieval Engine : Find relevant memes', 'mentor': 'Aniq Ur Rahman', 'mentor_email': 'aniqrah@gmail.com', 'tag': ['Shell', 'Python', 'CSS', 'HTML', 'Ocr', 'Memes', 'Reddit', 'Scraper', 'Tkinter', 'Search-engine', 'Nltk'], 'link': 'https://github.com/NITDgpOS/MemeFinder', 'comm': 'https://gitter.im/NIT-dgp/General', 'img': 'https://github.com/NITDgpOS.png?size=50'},
  // {'title': 'Memoir', 'id': 51, 'btnid': 1051, 'intro': 'A simple and easy to use app to keep your journal entries in an interesting way.', 'intro_full': 'A simple and easy to use app to keep your journal entries in an interesting way.', 'mentor': 'Sagar', 'mentor_email': 'sagar9268@yahoo.com', 'tag': ['Java'], 'link': 'https://github.com/sagar9268/Memoir', 'comm': 'https://gitter.im/Memoir123/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/sagar9268.png?size=50'},
  // {'title': 'Merkalysis', 'id': 52, 'btnid': 1052, 'intro': 'A marketing tool that enables people to increase the reach of their products/accounts through organic marketing methods. Involves basic machine learning conc...', 'intro_full': 'A marketing tool that enables people to increase the reach of their products/accounts through organic marketing methods. Involves basic machine learning concepts.', 'mentor': 'Rahul Arulkumaran', 'mentor_email': 'rahulkumaran313@gmail.com', 'tag': ['Python', 'CSS', 'JavaScript', 'HTML', 'Python3', 'Nlp', 'Nlp-machine-learning', 'Api', 'Django', 'Machine-learning', 'Marketing', 'Tool', 'Sklearn', 'Zulip-bot', 'Frontend', 'Backend'], 'link': 'https://github.com/rahulkumaran/merkalysis', 'comm': 'rahulkumaran313@gmail.com', 'img': 'https://github.com/rahulkumaran.png?size=50'},
  // {'title': 'Messiah', 'id': 53, 'btnid': 1053, 'intro': 'A service to help save lives and prevent economic losses through mechanisms to predict, prevent, and manage the impact of natural disasters, as accurately as...', 'intro_full': 'A service to help save lives and prevent economic losses through mechanisms to predict, prevent, and manage the impact of natural disasters, as accurately as possible.', 'mentor': 'Anuprava Chatterjee', 'mentor_email': 'anuprava.livetowin@gmail.com', 'tag': ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Data', 'Natural-disasters', 'Azure', 'Data-analysis', 'Materialize', 'Flask', 'Frontend', 'Backend'], 'link': 'https://github.com/thealphadollar/messiah', 'comm': 'https://gitter.im/kwoc-messiah/', 'img': 'https://github.com/thealphadollar.png?size=50'},
  // {'title': 'MetaApp', 'id': 54, 'btnid': 1054, 'intro': 'This will be an android app for most of the metakgp Projects included in a single Android app.', 'intro_full': 'This will be an android app for most of the metakgp Projects included in a single Android app.', 'mentor': 'RISHABHDEEP SINGH', 'mentor_email': 'rishabhdeepsingh98@gmail.com', 'tag': ['Kotlin', 'Java', 'Android', 'Iitkgp'], 'link': 'https://github.com/rishabhdeepsingh/MetaApp', 'comm': 'https://gitter.im/Rishabhdeepsingh/MetaApp', 'img': 'https://github.com/rishabhdeepsingh.png?size=50'},
  // {'title': 'MetaKGP-wiki', 'id': 55, 'btnid': 1055, 'intro': 'The one source all solution wiki of IIT Kharagpur', 'intro_full': 'The one source all solution wiki of IIT Kharagpur', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['PHP', 'Shell', 'Python', 'Dockerfile', 'Docker', 'Metakgp', 'Server', 'Nginx', 'Mediawiki'], 'link': 'https://github.com/metakgp/metakgp-wiki/issues', 'comm': 'https://gitter.im/metakgp-wiki/Lobby', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'Moboff', 'id': 56, 'btnid': 1056, 'intro': 'A CLI to download, convert and send youtube videos to several devices using Pushbullet.', 'intro_full': 'A CLI to download, convert and send youtube videos to several devices using Pushbullet.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Dockerfile', 'Youtube-dl', 'Offline-storage', 'Music-downloader', 'Click', 'Command-line-tool'], 'link': 'https://github.com/Parth-Vader/MobOff', 'comm': 'https://join.slack.com/t/kwoc-parth/shared_invite/enQtNDkyMzA1NDU2NzY4LTM2N2MyMDI5ZGNlYTBmMjcwMmRjMDBmODFkYTU0ZDkxMjE0MTA0ZDI0MWY3YTZhMGIwMDA2MGRjYjgzMDAxMmU', 'img': 'https://github.com/Parth-Vader.png?size=50'},
  // {'title': 'Mysite', 'id': 57, 'btnid': 1057, 'intro': 'It is a blogging app made in django', 'intro_full': 'It is a blogging app made in django', 'mentor': 'Akshit jain', 'mentor_email': 'akshjain.jain74@gmail.com', 'tag': ['Python', 'CSS', 'JavaScript', 'HTML', 'Ruby', 'Pyhton3', 'Django-framework', 'Git', 'Bootstrap', 'Linux'], 'link': 'https://github.com/AkshJain99/mysite', 'comm': 'https://gitter.im/Akshjain99/Lobby', 'img': 'https://github.com/AkshJain99.png?size=50'},
  // {'title': 'Naarad', 'id': 58, 'btnid': 1058, 'intro': 'Naarad aggregates all your KGP related news from facebook pages to one place. Go to http://naarad.metakgp.org to see it working.', 'intro_full': 'Naarad aggregates all your KGP related news from facebook pages to one place. Go to http://naarad.metakgp.org to see it working.', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Shell', 'Python', 'Ruby'], 'link': 'https://github.com/metakgp/naarad-source', 'comm': 'http://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'Nephos', 'id': 59, 'btnid': 1059, 'intro': 'Project Nephos aims at simplifying the process of moving samples from local storage to cloud for Universities by automating, almost, all the steps involved. ...', 'intro_full': 'Project Nephos aims at simplifying the process of moving samples from local storage to cloud for Universities by automating, almost, all the steps involved. It consists of three independent modules; recording module, processing module, and uploading module. Nephos is developed, using Python and few other open source projects. To accomplish all the above mentioned tasks with cent-percent reliability and zero failures (unless wrong data is input, which gets logged), testing and logging is an integral part of Nephos development and running cycle, respectively.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Makefile', 'Shell', 'HTML', 'Ccextractor', 'Nephos', 'Universities', 'Subtitles-parsing', 'Closed-captions', 'Ffmpeg', 'Ffprobe', 'Sqlite3', 'Click', 'Cli-app', 'Apscheduler'], 'link': 'https://github.com/thealphadollar/nephos', 'comm': 'https://www.ccextractor.org/public:general:support', 'img': 'https://github.com/thealphadollar.png?size=50'},
  // {'title': 'News 24/7', 'id': 60, 'btnid': 1060, 'intro': 'News 24/7 is a News app which fetches news articles from JSON provided by Guardian API.  As of now, it can show only English and Telugu languages. This app m...', 'intro_full': 'News 24/7 is a News app which fetches news articles from JSON provided by Guardian API.  As of now, it can show only English and Telugu languages. This app made with Android Architecture Components like LiveData and ViewModel. This app is also uploaded in Play Store but not with Architecture Components but has Loaders to handle background threads.', 'mentor': 'Syed Zeeshan', 'mentor_email': 'sdzshn3@gmail.com', 'tag': ['Java', 'News', 'Json', 'Recyclerview', 'Android', 'Architecture-components'], 'link': 'https://github.com/sdzshn3/News24-7-RV', 'comm': 'https://groups.google.com/d/forum/news247kwoc', 'img': 'https://github.com/sdzshn3.png?size=50'},
  // {'title': 'News App', 'id': 61, 'btnid': 1061, 'intro': 'It is a news app used which displays the latest headlines and also allows the user to search for any particular key word. The user also has the capability to...', 'intro_full': 'It is a news app used which displays the latest headlines and also allows the user to search for any particular key word. The user also has the capability to save/favourite the news article.', 'mentor': 'Sridhar Jajoo', 'mentor_email': 'sridharjajoo@gmail.com', 'tag': ['Java', 'Android', 'Newsapi', 'Room-persistence-library', 'Rxjava2-retrofit2', 'Dagger2-android'], 'link': 'https://github.com/sridharjajoo/NewsApp/', 'comm': 'https://gitter.im/news_app_kwoc', 'img': 'https://github.com/sridharjajoo.png?size=50'},
  // {'title': 'Nlt-github', 'id': 62, 'btnid': 1062, 'intro': 'nlt-github is a command line tool to interact with your github account and also helping you to ease your workflow.', 'intro_full': 'nlt-github is a command line tool to interact with your github account and also helping you to ease your workflow.', 'mentor': 'Dibya Ranjan Jena', 'mentor_email': 'dibyajena917@gmail.com', 'tag': ['Python', 'Git', 'Github', 'Python3', 'Command-line-tool'], 'link': 'https://github.com/dibyasonu/nlt-github', 'comm': 'https://gitter.im/kwoc_19/nlt-github', 'img': 'https://github.com/dibyasonu.png?size=50'},
  // {'title': 'NxDraft', 'id': 63, 'btnid': 1063, 'intro': 'NxDraft does exactly what the name suggests; it creats N drafts from one.', 'intro_full': 'NxDraft does exactly what the name suggests; it creats N drafts from one.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Webapp', 'Google-python-api', 'Gmail', 'Rest-api', 'Requests'], 'link': 'https://github.com/thealphadollar/NxDraft', 'comm': 'https://gitter.im/NxDraft/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
  // {'title': 'OnThisDay', 'id': 64, 'btnid': 1064, 'intro': 'The application goes through all the messages sent previously in the organisation on the same day (in the last 6 years or last 6 months) and revives the mess...', 'intro_full': "The application goes through all the messages sent previously in the organisation on the same day (in the last 6 years or last 6 months) and revives the message with the highest number of reactions, and sends it to the 'random' channel.", 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Python', 'Go', 'HTML', 'Web-servers', 'Slack-bot', 'Slack-api', 'Nlp', 'Service', 'Nostalgia'], 'link': 'https://github.com/thealphadollar/OnThisDay', 'comm': 'https://gitter.im/_OnThisDay/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
  // {'title': 'Online voting system', 'id': 65, 'btnid': 1065, 'intro': 'This is online voting system for giving vote online . It is single page application ,mobile responsive made using HTML , CSS , Javascript , bootstrap  , angu...', 'intro_full': 'This is online voting system for giving vote online . It is single page application ,mobile responsive made using HTML , CSS , Javascript , bootstrap  , angularjs , php , mysql . Through this project we can give vote using aadhar card , voting id , phone ID . Otp is send to registered phone number for verification before vote is submit.It has many other detail of vote stats  like voting percentage current winner etc  .', 'mentor': 'Sahil srivastava', 'mentor_email': 'sahilhbti@gmail.com', 'tag': ['HTML', 'Hack', 'PHP', 'JavaScript', 'Html5', 'Css', 'Bootstrap', 'Angularjs', 'Mysql'], 'link': 'https://github.com/sahilhbti/online-voting-system', 'comm': 'https://groups.google.com/forum/#!forum/vote1/new', 'img': 'https://github.com/sahilhbti.png?size=50'},
  // {'title': 'Open Alumni', 'id': 66, 'btnid': 1066, 'intro': "Every year, we have new colleges coming up in various cities. Sometimes, a couple of colleges find it tough to actually make their Alumni Websites.  If that'...", 'intro_full': "Every year, we have new colleges coming up in various cities. Sometimes, a couple of colleges find it tough to actually make their Alumni Websites.  If that's the case with your college, don't worry. We've got you covered. Let us know and we'll create an alumni website for your college in no time.", 'mentor': 'Rahul Arulkumaran', 'mentor_email': 'rahulkumaran313@gmail.com', 'tag': ['Python', 'CSS', 'HTML'], 'link': 'https://github.com/rahulkumaran/open-alumni', 'comm': 'https://gitter.im/Ossprojects4dev/open_alumni', 'img': 'https://github.com/rahulkumaran.png?size=50'},
  // {'title': 'OpenCI', 'id': 67, 'btnid': 1067, 'intro': 'Open-source Travis CI client built from ground zero.  Ever wished of triggering or sharing those code tests right from your mobile device? Well, OpenCI does ...', 'intro_full': 'Open-source Travis CI client built from ground zero.  Ever wished of triggering or sharing those code tests right from your mobile device? Well, OpenCI does just that. Now test and deploy with confidence with Travis CI on the go.', 'mentor': 'Brijesh A Shah', 'mentor_email': 'brijeshjain13@gmail.com', 'tag': ['Java', 'Openci', 'Travis-ci', 'Android', 'Android-app', 'Travis-ci-client', 'Android-travis-ci', 'Android-application'], 'link': 'https://github.com/brijeshshah13/OpenCI', 'comm': 'https://discord.gg/B6QVMmS', 'img': 'https://github.com/brijeshshah13.png?size=50'},
  // {'title': 'Pelican', 'id': 68, 'btnid': 1068, 'intro': 'Chrome extension for better Facebook ', 'intro_full': 'Chrome extension for better Facebook ', 'mentor': 'Gautham Santhosh', 'mentor_email': 'thabeatsz@gmail.com', 'tag': ['CSS', 'JavaScript', 'HTML', 'Facebook', 'Chrome-extension', 'Minimal', 'Focus-mode', 'Kwoc'], 'link': 'https://github.com/aviary-apps/Pelican', 'comm': 'https://gitter.im/PelicanExtension', 'img': 'https://github.com/aviary-apps.png?size=50'},
  // {'title': 'Physics engine', 'id': 69, 'btnid': 1069, 'intro': 'This project is based on concept of physics. A physics engine module which can imported in other files like pygame and with the help of this we can create ou...', 'intro_full': 'This project is based on concept of physics. A physics engine module which can imported in other files like pygame and with the help of this we can create our project easily. it requires some basic understanding of python and pygame and also some physics concept', 'mentor': 'Mukesh Kumar', 'mentor_email': 'sihagmukesh22@gmail.com', 'tag': ['Python'], 'link': 'https://github.com/MUKESHSIHAG/physics-simulation', 'comm': 'https://gitter.im/physics-engine/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/MUKESHSIHAG.png?size=50'},
  // {'title': 'PyQt Calculator', 'id': 70, 'btnid': 1070, 'intro': 'A scientific calculator based on python using PyQt UI', 'intro_full': 'A scientific calculator based on python using PyQt UI', 'mentor': 'Taapas Agrawal', 'mentor_email': 'taapas2897@gmail.com', 'tag': ['Python', 'Pyqt4'], 'link': 'https://github.com/taapas1128/Calculator_pyqt', 'comm': 'https://join.slack.com/t/kwoccalculatorproject/shared_invite/enQtNDk0MTAzNDQ5NDk1LTI4MTI3YjcwN2Y4MzU2YTg5ZDgzZmI5YTc2ZTY4M2VhY2NjMDBkYWYzMTAyYjYxMGZhNWJjMWZjMjliZDA5NzY', 'img': 'https://github.com/taapas1128.png?size=50'},
  // {'title': 'Pygame-Coin-Fall', 'id': 71, 'btnid': 1071, 'intro': 'Use your arrow keys to collect as many falling coins as possible in 30 seconds. Avoid the bombs!', 'intro_full': 'Use your arrow keys to collect as many falling coins as possible in 30 seconds. Avoid the bombs!', 'mentor': 'Vineet Jiji Cherian', 'mentor_email': 'vineetjc@yahoo.com', 'tag': ['Python', 'Pygame', 'Game', 'Coin-fall'], 'link': 'https://github.com/vineetjc/pygame-Coin-Fall-', 'comm': 'https://gitter.im/pygame-Coin-Fall/', 'img': 'https://github.com/vineetjc.png?size=50'},
  // {'title': 'Question Answering Over Linked Data', 'id': 72, 'btnid': 1072, 'intro': 'Given a natural language query, this application will try to provide relevant answers by generating SPARQL queries to lookup DBpedia.', 'intro_full': 'Given a natural language query, this application will try to provide relevant answers by generating SPARQL queries to lookup DBpedia.', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Python', 'HTML', 'JavaScript', 'Nlp', 'Scrapping', 'Sparql'], 'link': 'https://github.com/americast/QALD', 'comm': 'https://gitter.im/QALD/Lobby#', 'img': 'https://github.com/americast.png?size=50'},
  // {'title': 'Quiz', 'id': 73, 'btnid': 1073, 'intro': 'It is a Quiz android application which uses Open Trivia Api', 'intro_full': 'It is a Quiz android application which uses Open Trivia Api', 'mentor': 'Sai Rajendra Immadi', 'mentor_email': 'immadirajendra.sai@gmail.com', 'tag': ['Java'], 'link': 'https://github.com/immadisairaj/Quiz', 'comm': 'https://gitter.im/immadisairaj/Quiz', 'img': 'https://github.com/immadisairaj.png?size=50'},
  // {'title': 'React-Calculator', 'id': 74, 'btnid': 1074, 'intro': 'It is a reactjs based simple calculator which need to add functionality. It was built on react stater kit.', 'intro_full': 'It is a reactjs based simple calculator which need to add functionality. It was built on react stater kit.', 'mentor': 'Chandra Prakash Meher', 'mentor_email': 'b115022@iiit-bh.ac.in', 'tag': ['JavaScript', 'HTML', 'CSS'], 'link': 'https://github.com/cmeher196/React-Calculator', 'comm': 'https://gitter.im/React-calc-team/Lobby', 'img': 'https://github.com/cmeher196.png?size=50'},
  // {'title': 'RedDash', 'id': 75, 'btnid': 1075, 'intro': 'redType : We provide a simple chat system for the victim as well as the rescuer so that they can effectively communicate with each other, even without intern...', 'intro_full': 'redType : We provide a simple chat system for the victim as well as the rescuer so that they can effectively communicate with each other, even without internet connectivity. redType is an Android app with basic SMS functionality brought to life through the Twilio API. ', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'CSS', 'JavaScript', 'HTML', 'Java', 'Python3', 'Social-media', 'Flask', 'Machine-learning', 'Twitter-api', 'Twilio-api'], 'link': 'https://github.com/Parth-Vader/The-Martini-Men', 'comm': 'https://join.slack.com/t/kwoc-parth/shared_invite/enQtNDkyMzA1NDU2NzY4LTM2N2MyMDI5ZGNlYTBmMjcwMmRjMDBmODFkYTU0ZDkxMjE0MTA0ZDI0MWY3YTZhMGIwMDA2MGRjYjgzMDAxMmU', 'img': 'https://github.com/Parth-Vader.png?size=50'},
  // {'title': 'Rose', 'id': 76, 'btnid': 1076, 'intro': 'Analyse all kinds of TV series data', 'intro_full': 'Analyse all kinds of TV series data', 'mentor': 'Kaustubh Hiware', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Python', 'Scraper', 'Tv-shows', 'Tv-series'], 'link': 'https://github.com/kaustubhhiware/rose', 'comm': 'https://gitter.im/rose_', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
  // {'title': 'Salvator', 'id': 77, 'btnid': 1077, 'intro': 'Salvator is a bot which uses puppeteer to scrape the list of birthdays from facebook and sends them a personal message.  It also sends the user an email noti...', 'intro_full': 'Salvator is a bot which uses puppeteer to scrape the list of birthdays from facebook and sends them a personal message.  It also sends the user an email notification with the list of birthdays and their profile link.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['JavaScript', 'Messenger', 'Bot', 'Puppeteer', 'Headless-chrome', 'Automation'], 'link': 'https://github.com/thealphadollar/salvator/issues', 'comm': 'https://gitter.im/salvator_/Lobby', 'img': 'https://github.com/thealphadollar.png?size=50'},
  // {'title': 'Sangita', 'id': 78, 'btnid': 1078, 'intro': 'A Natural Language Toolkit for Indian Languages', 'intro_full': 'A Natural Language Toolkit for Indian Languages', 'mentor': 'Samriddhi Sinha', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'tag': ['Python', 'Natural-language-processing', 'Deep-learning', 'Deep-neural-networks', 'Lstm', 'Recurrent-neural-networks', 'Machine-learning'], 'link': 'https://github.com/SangitaNLP/Sangita', 'comm': 'https://join.slack.com/t/sangitanlp/shared_invite/enQtMzc2NzMzODQ2ODU1LTRkOTUwODViMDBlNjIzZGNhZWIzNzc5MjM0Y2Y3YjYzMWY1NThjYmVkY2Y4M2RhODU5NzQ0MzZmODE4NmQ4ZmU', 'img': 'https://github.com/SangitaNLP.png?size=50'},
  // {'title': 'Search the Key', 'id': 79, 'btnid': 1079, 'intro': "A game in which player searches for a key in a 5x5 grid in 6 turns with indications on how 'hot' or 'cold' they are with respect to the location of the key. ...", 'intro_full': "A game in which player searches for a key in a 5x5 grid in 6 turns with indications on how 'hot' or 'cold' they are with respect to the location of the key. Made using Python and Pygame.", 'mentor': 'Vineet Jiji Cherian', 'mentor_email': 'vineetjc@yahoo.com', 'tag': ['Python', 'Pygame', 'Game'], 'link': 'https://github.com/vineetjc/pygame-Search-the-Key', 'comm': 'https://gitter.im/pygame-Search-the-Key', 'img': 'https://github.com/vineetjc.png?size=50'},
  // {'title': 'Set_Proxy', 'id': 80, 'btnid': 1080, 'intro': 'The script in the repository sets/unsets proxy for most frequently used commands in the Ubuntu/Debian system.', 'intro_full': 'The script in the repository sets/unsets proxy for most frequently used commands in the Ubuntu/Debian system.', 'mentor': 'Shivam Kumar Jha', 'mentor_email': 'shivam.cs.iit.kgp@gmail.com', 'tag': ['Shell', 'Linux', 'Shell-script', 'Gnome-settings', 'Kgp', 'Automation'], 'link': 'https://github.com/CodeStash-KGP/set_proxy', 'comm': 'https://gitter.im/set_proxy/Lobby', 'img': 'https://github.com/CodeStash-KGP.png?size=50'},
  // {'title': 'Shuffle', 'id': 81, 'btnid': 1081, 'intro': 'A simple game made with wxPython alike GNOME games', 'intro_full': 'A simple game made with wxPython alike GNOME games', 'mentor': 'Navaneeth Suresh', 'mentor_email': 'navaneeths1998@gmail.com', 'tag': ['Shell', 'Python', 'Game', 'Logic-game'], 'link': 'https://github.com/themousepotato/shuffle', 'comm': 'https://groups.google.com/forum/#!forum/shuffle-devel/', 'img': 'https://github.com/themousepotato.png?size=50'},
  // {'title': 'Simple Weather', 'id': 82, 'btnid': 1082, 'intro': 'An Android application which helps you to view the current weather, weather for 10 days as well as some other statistics of the weather, displayed in a graph', 'intro_full': 'An Android application which helps you to view the current weather, weather for 10 days as well as some other statistics of the weather, displayed in a graph', 'mentor': 'Aaditya Menon', 'mentor_email': 'aaditya@sparker0i.me', 'tag': ['Java', 'CSS', 'HTML', 'Android', 'Weather', 'Open-source'], 'link': 'https://github.com/Sparker0i/Weather', 'comm': 'https://gitter.im/SimpleWeather', 'img': 'https://github.com/Sparker0i.png?size=50'},
  // {'title': 'Snakes', 'id': 83, 'btnid': 1083, 'intro': 'A Snakes game based on OpenCV', 'intro_full': 'A Snakes game based on OpenCV', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['C++', 'Makefile', 'Cpp', 'Opencv', 'Snake-game'], 'link': 'https://github.com/americast/Snakes', 'comm': 'https://gitter.im/opencv-Snakes/Lobby', 'img': 'https://github.com/americast.png?size=50'},
  // {'title': 'Social Open Source Platform - DONUT', 'id': 84, 'btnid': 1084, 'intro': 'Being Inspired from the Cornucopia of various Social hub this project has been developed taking into consideration about open source. Well this is an Open So...', 'intro_full': 'Being Inspired from the Cornucopia of various Social hub this project has been developed taking into consideration about open source. Well this is an Open Source Socia networking hub which act as a bridge between various Developers, Organisations and Open Source aspirants to elaborate on various things like #Projects, #Events, #Discussion on various researches, #Scholarships, #Coding release and various other things updates.  The more priority of this project has been that this platform allows users to make their project "Open Sourced" and relesed them under various open SOurce Organisations, Experst which holds up a ring plate on this portal. This platform also make users to introduce and develops various olutions in the form of FOSS softwares to publish them for people use by integrating them with their social cause.', 'mentor': 'Jaskirat Singh', 'mentor_email': 'juskirat2000@gmail.com', 'tag': ['JavaScript', 'HTML', 'CSS', 'Socialnetwork', 'Nodejs', 'Nodejs-framework', 'Mongodb', 'Open', 'Open-source', 'Web-framework', 'Express-js', 'Vuejs', 'Html-css'], 'link': 'https://github.com/codeuino/Social-Platform-Donut/tree/development', 'comm': 'https://goo.gl/NYKWNx , https://groups.google.com/forum/#!forum/codeuino-devel', 'img': 'https://github.com/codeuino.png?size=50'},
  // {'title': 'Sound Haven', 'id': 85, 'btnid': 1085, 'intro': 'A music player using Electron and Angular 6', 'intro_full': 'A music player using Electron and Angular 6', 'mentor': 'Nityananda Gohain', 'mentor_email': 'nityanandagohain@gmail.com', 'tag': ['JavaScript', 'CSS', 'HTML', 'TypeScript'], 'link': 'https://github.com/nityanandagohain/SoundHaven', 'comm': 'https://gitter.im/sound-haven/Lobby#', 'img': 'https://github.com/nityanandagohain.png?size=50'},
  // {'title': 'Stock Market Forecasting ', 'id': 86, 'btnid': 1086, 'intro': 'Using a deep convolutional neural network to model the combined influence of long-term events and short-term events on stock price movements', 'intro_full': 'Using a deep convolutional neural network to model the combined influence of long-term events and short-term events on stock price movements', 'mentor': 'Vedic Partap', 'mentor_email': 'vedicpartap1999@gmail.com', 'tag': ['Python'], 'link': 'https://github.com/vedic-partap/Event-Driven-Stock-Prediction-using-Deep-Learning', 'comm': 'https://join.slack.com/t/stock-market27/shared_invite/enQtNDgzMjY3Njg0OTY3LWUxNDk3ZGUzNWE2MWMwMmU3MmQzYjBjNzAwMDVmOWFkYTljMTQ2NzIxNWI1YzI5MmQ1ZmQ4OGM5MDViZjI0MDE', 'img': 'https://github.com/vedic-partap.png?size=50'},
  // {'title': 'StudentPortal', 'id': 87, 'btnid': 1087, 'intro': 'An Django based student web-app for college use.', 'intro_full': 'An Django based student web-app for college use.', 'mentor': 'Monsij Biswal', 'mentor_email': 'biswalmonsij@gmail.com', 'tag': ['Python', 'CSS', 'HTML', 'JavaScript', 'Django', 'Kwoc'], 'link': 'https://github.com/monsij/StudentPortal', 'comm': 'https://gitter.im/NIT-DGPortal-main/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/monsij.png?size=50'},
  // {'title': 'SudoCode', 'id': 88, 'btnid': 1088, 'intro': 'A tool for beginners to get started with coding. On using this tool, one need not know how to code explicitly in a particular language. Instead, people can w...', 'intro_full': 'A tool for beginners to get started with coding. On using this tool, one need not know how to code explicitly in a particular language. Instead, people can write pseudo codes and the program converts them into C codes, improves code readability and quality and finally executes the code automatically for the user. ', 'mentor': 'Rahul Arulkumaran', 'mentor_email': 'rahulkumaran313@gmail.com', 'tag': ['Python', 'C'], 'link': 'https://github.com/rahulkumaran/sudocode', 'comm': 'https://gitter.im/Ossprojects4dev/sudocode', 'img': 'https://github.com/rahulkumaran.png?size=50'},
  // {'title': 'Synfig-tests-regressions', 'id': 89, 'btnid': 1089, 'intro': 'Suite to analyze regression in synfig renderer', 'intro_full': 'Suite to analyze regression in synfig renderer', 'mentor': 'Konstantin Dmitriev ', 'mentor_email': 'ksee.zelgadis@gmail.com', 'tag': ['Shell'], 'link': 'https://github.com/synfig/synfig-tests-regressions', 'comm': 'irc://irc.freenode.net/synfig', 'img': 'https://github.com/synfig.png?size=50'},
  // {'title': 'TWERP', 'id': 90, 'btnid': 1090, 'intro': 'Tethering Wiki to ERP', 'intro_full': 'Tethering Wiki to ERP', 'mentor': 'Ayush Kaushal ', 'mentor_email': 'ayushk4@gmail.com', 'tag': ['Python', 'Python3', 'Bot', 'Wiki', 'Automation', 'Metakgp'], 'link': 'https://github.com/metakgp/twerp', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'The Khabar', 'id': 91, 'btnid': 1091, 'intro': 'a News streaming webapp', 'intro_full': 'a News streaming webapp', 'mentor': 'Pulkit Gera', 'mentor_email': 'pulkit.gera@research.iiit.ac.in', 'tag': ['Python', 'JavaScript', 'HTML', 'Flask', 'Flask-sqlalchemy', 'Python3', 'Jinja2-templates'], 'link': 'https://github.com/darthgera123/theKhabar', 'comm': 'https://gitter.im/DarthGera/Lobby#', 'img': 'https://github.com/darthgera123.png?size=50'},
  // {'title': 'TodXpy', 'id': 92, 'btnid': 1092, 'intro': 'A simple and easy to use yet configurable CLI todo app.', 'intro_full': 'A simple and easy to use yet configurable CLI todo app.', 'mentor': 'Aditya Vikram Singh', 'mentor_email': 'xypnox@gmail.com', 'tag': ['Python', 'Makefile', 'Python3', 'Cli', 'Website', 'Todo', 'Todoapp', 'Easy-to-use', 'Pip'], 'link': 'https://github.com/xypnox/todxpy/', 'comm': 'https://gitter.im/todxpy/Lobby', 'img': 'https://github.com/xypnox.png?size=50'},
  // {'title': 'Tvseries', 'id': 93, 'btnid': 1093, 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and shows it all in one single place, with a bet...", 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and shows it all in one single place, with a better user-friendly navigation UI.", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Shell', 'Scraping', 'Imdb-link', 'Ruby-script', 'Tv-series'], 'link': 'https://github.com/athityakumar/tvseries', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
  // {'title': 'Tweet-Chat-App', 'id': 94, 'btnid': 1094, 'intro': 'It is simple tweet-chat-app where you chat and also tweet as you have doing in twitter.', 'intro_full': 'It is simple tweet-chat-app where you chat and also tweet as you have doing in twitter.', 'mentor': 'Alok Kumar', 'mentor_email': 'ialoksingh0@gmail.com', 'tag': ['JavaScript', 'HTML', 'CSS'], 'link': 'https://github.com/iFlameing/Tweet-Chat-App', 'comm': 'https://gitter.im/Tweet-Chat-App/Lobby?source=orgpage', 'img': 'https://github.com/iFlameing.png?size=50'},
  // {'title': 'Vault Scanner', 'id': 95, 'btnid': 1095, 'intro': 'Scanner for pentesters.', 'intro_full': 'Scanner for pentesters.', 'mentor': 'Abhishek Sharma', 'mentor_email': 'abhishek_official@hotmail.com', 'tag': ['Python', 'Pentesting', 'Security', 'Networking', 'Offensive-security', 'Scanner', 'Hacking', 'Xss-vulnerability', 'Lfi', 'Rfi', 'Sqlite', 'Ssl-inspection', 'Port-scanner', 'Crawler', 'Scrapy'], 'link': 'https://github.com/abhisharma404/vault_scanner', 'comm': 'https://gitter.im/vault_scanner/kwoc', 'img': 'https://github.com/abhisharma404.png?size=50'},
  // {'title': 'Wallgen', 'id': 96, 'btnid': 1096, 'intro': 'A wallpaper generator', 'intro_full': 'A wallpaper generator', 'mentor': 'Subhrajit Prusty', 'mentor_email': 'subhrajit1997@gmail.com', 'tag': ['Python', 'Dockerfile', 'Wallpaper', 'Hq-poly-wallpapers', 'Flask', 'Image-manipulation', 'Wallpaper-generator'], 'link': 'https://github.com/SubhrajitPrusty/wallgen', 'comm': 'https://gitter.im/wallgen/', 'img': 'https://github.com/SubhrajitPrusty.png?size=50'},
  // {'title': 'Weather App', 'id': 97, 'btnid': 1097, 'intro': "This is a simple and intutive waether App purely made in Angular 2 and then shifted to Angular 4. It detects the user's location or user can also add differe...", 'intro_full': "This is a simple and intutive waether App purely made in Angular 2 and then shifted to Angular 4. It detects the user's location or user can also add different location names in the text box provided. The text box is autofill and suggest names of places when user starts entering locations name. The App then displays all the weather information like temperature, wind, humidity etc and also displays forcast of next 5 days.", 'mentor': 'Hitesh Roy', 'mentor_email': 'hiteshproy@gmail.com', 'tag': ['TypeScript', 'HTML', 'CSS', 'JavaScript', 'Angular2', 'Bootstrap3', 'Angular-cli'], 'link': 'https://github.com/hiteshpr/WeatherApp', 'comm': 'https://weatherapp-hq.slack.com', 'img': 'https://github.com/hiteshpr.png?size=50'},
  // {'title': 'What Slot', 'id': 98, 'btnid': 1098, 'intro': 'A website to organize your time table for additional courses and minor.', 'intro_full': 'A website to organize your time table for additional courses and minor.', 'mentor': 'Arnav Tiwari', 'mentor_email': 'avznav@gmail.com', 'tag': ['Python', 'HTML', 'JavaScript', 'Website', 'Javscript', 'Backend-webdevelopment', 'Front-end-development', 'Flask'], 'link': 'https://github.com/arnav-t/what-slot', 'comm': 'https://gitter.im/WhatSlotChat/', 'img': 'https://github.com/arnav-t.png?size=50'},
  // {'title': 'Wimp', 'id': 99, 'btnid': 1099, 'intro': 'Get the timetable of IIT Kharagpur Professors', 'intro_full': 'Get the timetable of IIT Kharagpur Professors', 'mentor': 'Navaneeth Suresh', 'mentor_email': 'navaneeths1998@gmail.com', 'tag': ['Roff', 'Python', 'HTML', 'Dockerfile', 'JavaScript', 'Erp', 'Timetable', 'Flask-application', 'Python3'], 'link': 'https://github.com/metakgp/wimp/', 'comm': 'https://groups.google.com/forum/#!forum/wimp-devel', 'img': 'https://github.com/metakgp.png?size=50'},
  // {'title': 'Xbot', 'id': 100, 'btnid': 1100, 'intro': 'Xbot is an awesome starter bot coded in ReactJS for developers to develop and implement upon quickly!', 'intro_full': 'Xbot is an awesome starter bot coded in ReactJS for developers to develop and implement upon quickly!', 'mentor': 'Pranshu Srivastava', 'mentor_email': '19point9@gmail.com', 'tag': ['HTML', 'JavaScript', 'CSS', 'React', 'Chatbot-application', 'Css3', 'Contributions-welcome', 'Json-api', 'Heroku-ready', 'Webapp'], 'link': 'https://github.com/rexagod/chatbot', 'comm': '\xa0https://discord.gg/s7gJduh', 'img': 'https://github.com/rexagod.png?size=50'},
  // {'title': 'YouTubeClone', 'id': 101, 'btnid': 1101, 'intro': "This is a clone of a youtube. Currently, I haven't started with the website, but plan to get it done during this winters.", 'intro_full': "This is a clone of a youtube. Currently, I haven't started with the website, but plan to get it done during this winters.", 'mentor': 'Yash Sharma', 'mentor_email': 'yashrsharma44@gmail.com', 'tag': [], 'link': 'https://github.com/yashrsharma44/YouTubeClone', 'comm': 'https://join.slack.com/t/youtubeclone/shared_invite/enQtNDg2NDgzMTA2OTE1LTVjNmFhNmJiMGExMGM3YzI2YjQxYmZlYzZiZjhiZjcxYWFlZGJkZGRlOWZkNjYyZGYyNGUzZjc2YmM2YzlmMzA', 'img': 'https://github.com/yashrsharma44.png?size=50'},
  // {'title': 'Youtube Spam Identifier', 'id': 102, 'btnid': 1102, 'intro': 'A Youtube video generally has a lot of comments, many of which are spam. This project aims to identify which comments are spam using Machine Learning on a fa...', 'intro_full': 'A Youtube video generally has a lot of comments, many of which are spam. This project aims to identify which comments are spam using Machine Learning on a fairly basic level..', 'mentor': 'Pankhuri Saxena', 'mentor_email': 'pankhurisaxena2.9@gmail.com', 'tag': ['Jupyter Notebook'], 'link': 'https://github.com/PetalsOnWind/Youtube-Spam-Identifier', 'comm': 'https://www.facebook.com/groups/2263887717230010/', 'img': 'https://github.com/PetalsOnWind.png?size=50'},
  // {'title': 'fetch-amul-topicals', 'id': 103, 'btnid': 1103, 'intro': "A Python scraper that fetches (and has the option to download) 'topicals' from Amul's website.", 'intro_full': "A Python scraper that fetches (and has the option to download) 'topicals' from Amul's website.", 'mentor': 'Vineet Jiji Cherian', 'mentor_email': 'vineetjc@yahoo.com', 'tag': ['Python', 'Scraping'], 'link': 'https://github.com/vineetjc/fetch-amul-topicals', 'comm': 'https://gitter.im/fetch-amul-topicals', 'img': 'https://github.com/vineetjc.png?size=50'},
  // {'title': 'iitbbsnewsapi', 'id': 104, 'btnid': 1104, 'intro': 'API for fetching updates from Internet related to IIT Bhubaneswar.', 'intro_full': 'API for fetching updates from Internet related to IIT Bhubaneswar.', 'mentor': 'Aman Pratap Singh', 'mentor_email': 'amanprtpsingh@gmail.com', 'tag': ['Python', 'Scrapping', 'Api', 'Flask'], 'link': 'https://github.com/nightawks/iitbbsnewsapi', 'comm': 'https://gitter.im/ntawks/Lobby', 'img': 'https://github.com/nightawks.png?size=50'},

  //     ];
  var cards = [
    {
      title: "AndyMouse",
      id: 1,
      btnid: 1001,
      intro:
        "The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.",
      mentor: "Soumyajit Chakraborty",
      mentor_email: "soumyajit1729@gmail.com",
      comm: "https://chat.whatsapp.com/Ce7Ucy0vw0N605yELKgkF1",
      link: "https://github.com/soumyajit1729/AndyMouse-kWoC",
      img: "https://github.com/soumyajit1729.png?size=50",
      intro_full: "",
      tag: ["android studio(java)", "Basic Python"]
    },
    {
      title: " Meet In The Middle",
      id: 124,
      btnid: 1124,
      intro:
        "The WebApp suggests places to hangout which is closer to every friend of yours on the map!.",
      mentor: "Nishchith Shetty",
      mentor_email: "inishchith@gmail.com",
      comm:
        "https://gitter.im/mitm-js/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/inishchith/MeetInTheMiddle",
      img: "https://github.com/inishchith.png?size=50",
      tag: [
        "no-authentication",
        "javascript",
        "google-maps",
        "no-login-web-apps"
      ],
      intro_full: "Meet In The Middle"
    },
    {
      title: "3D-Graph",
      id: 2,
      btnid: 1002,
      intro:
        "The project started out as 3D perspective renderer that allows FPS like movement. In future features like surface, polygons and physics have to be added. Mostly only in C++. Math-heavy. ",
      mentor: "Archit Rungta",
      mentor_email: "architrungta120@gmail.com",
      comm:
        "https://join.slack.com/t/3d-graph/shared_invite/enQtODI4Njk3MjkwOTEyLTQ1NGIwMzkwYzFhZThmM2ExZWUyOGYyMzE0YTVkYTVmM2NmMDI2MDE3Nzk1MThiYWZjYTM0NmE0NWVjOTM5YWE",
      link: "https://github.com/archit120/3D-Graph",
      img: "https://github.com/archit120.png?size=50",
      tag: [],
      intro_full: "3D graph rendered that allows fps like movement"
    },
    {
      title: "Alexa Skill for Rocket.Chat",
      id: 3,
      btnid: 1003,
      intro:
        "The aim of this project is to bring access of Rocket.Chat into the world of 100 million+ Alexa enabled devices & create innovative, high valued user experiences to the Alexa ecosystem - powered by open-source Rocket.Chat.",
      mentor: "Ashish Jha",
      mentor_email: "ashishjhaofficial@gmail.com",
      comm: "https://open.rocket.chat/channel/alexa",
      link: "https://github.com/RocketChat/alexa-rocketchat",
      img: "https://github.com/RocketChat.png?size=50",
      tag: [],
      intro_full:
        "Innovating incredible new user experiences in the Alexa ecosystem - powered by Rocket.Chat"
    },
    {
      title: "Alice in Wonderland",
      id: 4,
      btnid: 1004,
      intro:
        "Predicting the story of Alice in Wonderland using NLP and Deep Learning Models",
      mentor: "Parul Chandel",
      mentor_email: "parul.chandel14@gmail.com",
      comm: "https://kwoc.flock.com",
      link: "https://github.com/Deathrow77/Alice-in-Wonderland",
      img: "https://github.com/Deathrow77.png?size=50",
      tag: ["keras", "nlp", "natural-language-processing", "rnn"],
      intro_full:
        "Using Recurrent Neural Networks to predict text using the Alice in Wonderland dataset from Project Gutenberg"
    },
    {
      title: "Animations using javascript",
      id: 5,
      btnid: 1005,
      intro:
        "There is a certain animation using javascript . A rectangle will shrink down as a alphabet key is pressed!",
      mentor: "Aashim Garg",
      mentor_email: "aashim1garg@gmail.com",
      comm:
        "https://join.slack.com/t/no-brainers/shared_invite/enQtODQwODA2MDA4NzU5LWZhMTdiM2UyOWYxNDUzZjlkNDBlY2E3NjExMjEzY2ZkMDBhNGM4MjlhNjM0Nzg2NGIyNjJlMWYyMjEwMmU0MmI",
      link: "https://github.com/aashimgarg/animation-using-js.git",
      img: "https://github.com/aashimgarg.png?size=50",
      tag: ["html", "css", "javascript", "frontend-web", "github", "linux"],
      intro_full:
        "a rectangle will scale down and shrink as soon as you press any alphabet key!"
    },
    {
      title: "ArcuS",
      id: 6,
      btnid: 1006,
      intro:
        "A single and multiplayer arrow shooting game made in Python.Used pygame as the game-development library and socket communication for multiplayer feature.",
      mentor: "Sriyash Poddar",
      mentor_email: "poddarsriyash@gmail.com",
      comm:
        "https://gitter.im/ArcusChat/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/sriyash421/Arcus.git",
      img: "https://github.com/sriyash421.png?size=50",
      tag: [],
      intro_full: "A simple game made in Python using pygame"
    },
    {
      title: "Attendance-via-Face-Recognition",
      id: 7,
      btnid: 1007,
      intro:
        "Cross platform mobile application to mark attendance based on face recognition. It has different login portals for students and faculties.Registered students can see their attendance for each of the registered course. Faculty has access to add new courses, add new faculty members, register students in courses and mark attendance . It uses node.js as server, postgresql as database, react native for frontend  and OpenFace to recognize faces. ",
      mentor: "Yash Khanna",
      mentor_email: "yashkhanna1974@gmail.com",
      comm: "https://gitter.im/Attendence-via-Face-Recognition/community",
      link: "https://github.com/ryash/Attendance-via-Face-Recognition",
      img: "https://github.com/ryash.png?size=50",
      tag: [],
      intro_full:
        "It's a Attendance portal which will mark an individual's attendance with the help of face recognition techniques."
    },
    {
      title: "Automatic Leaf Infection Detector",
      id: 8,
      btnid: 1008,
      intro:
        "This project enables machine vision that is to provide image-based automatic inspection, process control. Comparatively, visual identification is labor intensive less accurate and can be done only in small areas. The project involves the use of self-designed image processing algorithms and techniques designed using python to segment the disease from the leaf while using the concepts of machine learning to categorise the plant leaves as healthy or infected. By this method, the plant diseases can be identified at the initial stage itself and the pest and infection control tools can be used to solve pest problems while minimizing risks to people and the environment.",
      mentor: "Shikhar Johri",
      mentor_email: "shikharjohri123@gmail.com",
      comm:
        "https://gitter.im/Automatic-leaf-Infection-detector/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/johri002/Automatic-leaf-infection-identifier",
      img: "https://github.com/johri002.png?size=50",
      tag: [
        "opencv",
        "ml",
        "machine-learning",
        "leaf-classifier",
        "svc",
        "image-segmentation",
        "disease-prediction"
      ],
      intro_full: "Automatic detection of plant diseases"
    },
    {
      title: "Bench-routes",
      id: 9,
      btnid: 1009,
      intro:
        "bench-routes is a highly scalable routes-benchmarking, monitoring, and route-network analysis tool. It monitors the routes of the application and analyses the network pipe between the server-client.",
      mentor: "Harkishen Singh",
      mentor_email: "harkishensingh@hotmail.com",
      comm: "https://gitter.im/bench-routes/community#",
      link: "https://github.com/zairza-cetb/bench-routes",
      img: "https://github.com/zairza-cetb.png?size=50",
      tag: [
        "bench-routes",
        "benchmark",
        "tsdb",
        "golang",
        "benchmark-server",
        "monitoring-server",
        "monitors",
        "scalable"
      ],
      intro_full:
        "bench-routes is a highly scalable routes-benchmarking, monitoring, and route-network analysis tool. It monitors the routes of the application and analyses the network pipe between the server-client."
    },
    {
      title: "Blog Project",
      id: 10,
      btnid: 1010,
      intro:
        "This web application generates a simple but capable blog using Django. The platform allows authors to create text posts using a dedicated admin portal, and allows logged in users to post comments through a simple comment form.",
      mentor: "Akshit Jain",
      mentor_email: "akshjain.jain74@gmail.com",
      comm:
        "https://join.slack.com/t/kwocblogproject/shared_invite/enQtODI3NTE0NjEyMDk5LWE1NzVjYTcwMDUzYmVlYjkzNjBlMDllMzU0ZjQzNmQyOWY5NTc4YjI5ZjczNmI0MzEyOTBjM2IyMWMxMTEyMzI",
      link: "https://github.com/AkshJain99/Blogging-App",
      img: "https://github.com/AkshJain99.png?size=50",
      tag: [
        "pyhton3",
        "django-framework",
        "git",
        "javascript",
        "css",
        "bootstrap",
        "html",
        "linux"
      ],
      intro_full: "It is a blogging webapp made in django with various features"
    },
    {
      title: "BlogMan",
      id: 11,
      btnid: 1011,
      intro:
        "BlogMan is a new social blogging platform where anybody can share their views and read other's opinion related to any topic. It is a way to connect with people and to know how the world is thinking.",
      mentor: "Avijit Das",
      mentor_email: "adavijit@yahoo.com",
      comm: "https://gitter.im/ADKWOC/BlogMan",
      link: "https://github.com/adavijit/BlogMan",
      img: "https://github.com/adavijit.png?size=50",
      tag: ["mern", "react", "kwoc", "express"],
      intro_full:
        "A Blog Web Application, specially made for open source contribution. Simple MERN (MongoDB, ExpressJs, React, Node) technology has been used"
    },
    {
      title: "Bookish-invention",
      id: 12,
      btnid: 1012,
      intro:
        "This project aims to create short notes after fetching books from different URLs then after fetching those books it aims to use several NLP techniques in order to shorten the content from the text extracted from the image and then after categorizing the best possible words that displays some meaning to the text and can be represented as notes which can be read by the viewers is displayed to them. \\nThis project involves active research in the field of NLP for extracting certain important words and then by using certain techniques to plot those words in form of graphs to gather them.",
      mentor: "Shashank Jain",
      mentor_email: "shashankjain291298@gmail.com",
      comm:
        "https://join.slack.com/t/kwocnlp/shared_invite/enQtODM5MTM3NjY1OTUzLTNlZmEyZTFiOTFlYTM0MzdjMThjMDdkZTBjOGFhYjRkNzhmZDkyMTY2YWIzZmJiNTg5MThiNjZjMWY5YzZiZWY",
      link: "https://www.github.com/Shashankjain12/bookish-invention",
      img: "https://github.com/Shashankjain12.png?size=50",
      tag: [],
      intro_full:
        "This is an open source project which will needs some open source contribution with an innovation by which we can make the everyone learn their future by this project we can make the people learn faster by visualising how the books look like"
    },
    {
      title: "BossY",
      id: 13,
      btnid: 1013,
      intro:
        "This is an entire API and a unique employee management application to serve information for today's most accomplished entrepreneurs. It helps entrepreneurs keep track of their employees and handle all the annoying meetings that keep getting added to their busy schedule. It also helps them to organize their brilliant ideas in a click.",
      mentor: "Aditya Sharma",
      mentor_email: "sharmaaditya570191@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-bossy/shared_invite/enQtODMxMzgzNTk2NDA3LTE3ZTc4OGZmNzc3Y2QwZjIxYzFjMjNhZDE2ZTIzMmEyMWU3OTcyZWI4NGQyOGMxNjE0NDY2ODU0NWVjZWZiMzU",
      link: "https://github.com/sharmaaditya570191/BossY",
      img: "https://github.com/sharmaaditya570191.png?size=50",
      tag: [
        "javascript",
        "node-js",
        "express-js",
        "react",
        "chai",
        "mocha",
        "html",
        "css",
        "bootstrap",
        "linux"
      ],
      intro_full:
        "This is an entire API and a unique management application to serve information for today's most accomplished entrepreneurs."
    },
    {
      title: "C Programming Made Easy",
      id: 14,
      btnid: 1014,
      intro:
        "A Flutter based android app for learning basic of C Programming. (Available on Google Play Store)",
      mentor: "Hariom Verma",
      mentor_email: "hariom18599@gmail.com",
      comm: "https://t.me/cmadeeasy",
      link: "https://github.com/enzaimz/c_made_easy",
      img: "https://github.com/enzaimz.png?size=50",
      tag: ["android", "flutter", "dart"],
      intro_full: "A basic android app to learn C Programming basics"
    },
    {
      title: "Chat-Room",
      id: 15,
      btnid: 1015,
      intro: "Chat-Room made up on MERN stack with socket.io",
      mentor: "Aryaman Puri",
      mentor_email: "aryamanpuri@gmail.com",
      comm:
        "https://join.slack.com/t/coding-ninjasgroup/shared_invite/enQtODM2OTgxODE3ODYyLTE4MGE0ZDNhMTczYTc5NjAwYjNmZWEwNGM1N2JhNjU0MWJkOTBmYjc3ZmQ3MTgwM2EwNWYzNTIwMjMxZmEyOGQ",
      link: "https://github.com/aryamanpuri/Chat-Room",
      img: "https://github.com/aryamanpuri.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Chatup",
      id: 16,
      btnid: 1016,
      intro:
        "Chatup is an Android app that allows two people to chat. It is entirely based on Firebase for its backend. It has a clean UI (along with a dark mode) following Google's Material Design Guidelines. Also, Bluetooth chat is the option that we are working on currently so that people can still chat in a small classroom where there are network fluctuations.",
      mentor: "Jashaswee Jena, Bhavna Haritsa",
      mentor_email: "jishujena2000@gmail.com",
      comm:
        "https://join.slack.com/t/chatupworkspace/shared_invite/enQtODE4NTMwNjAyNjkxLTkzMjFjY2NkNTc0YTY4ZDdiNDIzNjI0YmM0YTRjYjYyNWM3N2MwOTg0ZTNkNjcxOGNjYWM2OWU3YjY4YWEyYTg",
      link: "https://github.com/epigama/chatup",
      img: "https://github.com/epigama.png?size=50",
      tag: ['android', 'firebase', 'design'],
      intro_full: "Chatup is a chatting application built on the support of Firebase. It is currently a one-to-one chatting application but the future goals are to support bluetooth feature and group chat"
    },
    {
      title: "CodeManiacs",
      id: 17,
      btnid: 1017,
      intro: "OpenSource online judge based on nodejs. ",
      mentor: "Dheeraj",
      mentor_email: "dhirajyadav135@gmail.com",
      comm: "https://codemaniacs.zulipchat.com/",
      link: "https://github.com/KamandPrompt/CodeManiacs/",
      img: "https://github.com/KamandPrompt.png?size=50",
      tag: [],
      intro_full: "IIT Mandi Online Judge"
    },
    {
      title: "ColorLS",
      id: 18,
      btnid: 1018,
      intro: "LS with colors and icons!",
      mentor: "Athitya Kumar",
      mentor_email: "athityakumar@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc2019athit-frp7450/shared_invite/enQtODQzMzM4NDgwODIxLTljYWY4ODc2ZDMyMmZlMDJjNGFiYTdjODU0OWFiNWEwZjdhMDVjNjQ5M2NjNTA3N2QyYzk5ZDRiYmZlM2I3ZmI",
      link: "https://github.com/athityakumar/colorls",
      img: "https://github.com/athityakumar.png?size=50",
      tag: [
        "color",
        "icons",
        "ls",
        "terminal",
        "ruby",
        "cli",
        "gem",
        "eye-candy"
      ],
      intro_full:
        "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons. :tada:"
    },
    {
      title: "Community Hacktoberfest Tracker",
      id: 19,
      btnid: 1019,
      intro:
        "A simple hacktoberfest tracker for your whole community. Gets you the stats of the community so that you can share them with the world.",
      mentor: "Venu Vardhan Reddy Tekula",
      mentor_email: "venuvardhanreddytekula8@gmail.com",
      comm: "https://t.me/hackbunch",
      link: "https://github.com/vchrombie/hackbunch",
      img: "https://github.com/vchrombie.png?size=50",
      tag: ["hacktoberfest-tracker", "community"],
      intro_full: "Hacktoberfest tracker for your community."
    },
    {
      title: "Competitive-Programming Data structure And Algorithms",
      id: 20,
      btnid: 1020,
      intro:
        "This project contains some useful codes, techniques, algorithms and problem solutions helpful in Competitive Coding.",
      mentor: "Rishabh Garg",
      mentor_email: "rishabhgarg25699@gmail.com",
      comm: "https://gitter.im/rishabhgarg25699",
      link: "https://github.com/rishabhgarg25699/Competitive-Programming",
      img: "https://github.com/rishabhgarg25699.png?size=50",
      tag: [],
      intro_full:
        "This repository contains some useful codes, techniques, algorithms and problem solutions helpful in Competitive Coding."
    },
    {
      title: "Connect 4",
      id: 21,
      btnid: 1021,
      intro:
        "Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs, I have implemented this game in python programming language & using Pygame library.  ",
      mentor: "Mayank Singh",
      mentor_email: "mayank.singh081997@gmail.com",
      comm:
        "https://join.slack.com/t/connectfourgroup/shared_invite/enQtODMxNTAwNDY4NDU0LTZmYTZkMzJiNWQwZDk1YjhlZTEzY2VhMDNkNjVhOGIzNGIyNmYxODM4NWI5MjNjYmJlZjk4MjA4MzQ3MjZhNDg",
      link: "https://github.com/code-monk08/connect4",
      img: "https://github.com/code-monk08.png?size=50",
      tag: ["python", "pygame", "numpy", "connect-four", "board-game"],
      intro_full:
        "Two player Connect 4 board game implemented in Python & PyGame."
    },
    {
      title: "Connect All",
      id: 22,
      btnid: 1022,
      intro:
        "Connect All is an application developed to help the disabled communicate and live life normally. This was developed in a 36 hours hackathon and is a very complex project. The documentation needs to be improved as well as better deployment methods need to be employed.",
      mentor: "Manjunath Bhat",
      mentor_email: "manjunathbhat9920@gmail.com",
      comm:
        "https://join.slack.com/t/connect-all-workspace/shared_invite/enQtODQzMjY0Mzg2NzM5LTJmOTJiNzY5OTg5NDQ3Y2UzM2QxYTQ0MTA2NDhjOGI0NzA5ZDNhNWI4NzBlNGE0Nzk3ODViMmM2MTI3NDg2YWY",
      link: "https://github.com/thealphadollar/ConnectAll",
      img: "https://github.com/thealphadollar.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "D-SYFER",
      id: 23,
      btnid: 1023,
      intro: "A simple JavaScript project for ciphering text.",
      mentor: "Rashil Gandhi",
      mentor_email: "rashilgandhi@yahoo.co.in",
      comm: "https://gitter.im/d-syfer/community",
      link: "https://github.com/rashil2000/d-syfer",
      img: "https://github.com/rashil2000.png?size=50",
      tag: [],
      intro_full: "A simple JavaScript website for ciphering text"
    },
    {
      title: "DASH - Data Sharing",
      id: 24,
      btnid: 1024,
      intro:
        "A Command Line tool for faster, smarter and limitless file sharing.The DASH means, Data sharing. It's made for providing faster, safer and elegent way to transfer files between two users. ",
      mentor: "Prateek Mishra",
      mentor_email: "pr4t333k@gmail.com",
      comm: "https://gitter.im/DASH_github/community",
      link: "https://github.com/0xPrateek/DASH",
      img: "https://github.com/0xPrateek.png?size=50",
      tag: [
        "file-sharing",
        "file-upload",
        "python3",
        "flask",
        "data-sharing",
        "file-transfer"
      ],
      intro_full:
        "A Command Line tool for faster, smarter and limitless file sharing."
    },
    {
      title: "Django Blog",
      id: 25,
      btnid: 1025,
      intro:
        "This project is a simple web blog app developed using django as a backend. This web app helps users to write and share their own personal blogs.",
      mentor: "Deepak Kumar",
      mentor_email: "deepakdk2431@gmail.com",
      comm: "https://gitter.im/djangoBlog-lobby/community",
      link: "https://github.com/deepak2431/djangoBlog",
      img: "https://github.com/deepak2431.png?size=50",
      tag: [],
      intro_full: "A simple web app made using Django."
    },
    {
      title: "draggers-dagger",
      id: 26,
      btnid: 1026,
      intro:
        "Get your website page ready to deploy just by dropping your widget in the playground. \\n\\nA list of widget will be provided, which users will use to create their own website. Once created the user will get the code written in ReactJs which will be ready for deployment.",
      mentor: "Sandeep Patel, Pranay Agarwal",
      mentor_email: "b117045@iiit-bh.ac.in",
      comm:
        "https://join.slack.com/t/draggers-dagger/shared_invite/enQtODM1OTIwODkxMzYxLTc5NGJjYjkzMDI1OGNjN2NmZmFlY2IxZmNjMWYzMzI1OTdhNzViOWYyMDEwZTUxMGI5Nzc4ODgzYTc0NWVmMTU",
      link: "https://github.com/draggers-dagger/dragToMake",
      img: "https://github.com/draggers-dagger.png?size=50",
      tag: [],
      intro_full: "Drag To Make"
    },
    {
      title: "E-Learning Platform",
      id: 28,
      btnid: 1028,
      intro:
        "This is an e-learning platform where departments and clubs can upload lecture contents and users can access it. Apart from this, we have an extension where users can upload shared notes and e-books pdf. We plan to extend this project by enabling different schools to integrate and create a common database for users from different schools to access the materials.  ",
      mentor: "Ayush Jain",
      mentor_email: "ayushjain.iitg@gmail.com",
      comm:
        "https://join.slack.com/t/ayush-elearning/shared_invite/enQtODMwNDY2ODAxNzc5LTkxMTVmNDg0NzQ3OGY3ZDAyNDIzY2UxOGY3ZTcwNDk5MzgzYjRlM2ZmODQ4YjhkZmRjNTU2ZWNhOTYzYjFlMTE",
      link: "https://github.com/AJ-54/e-learning",
      img: "https://github.com/AJ-54.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Easy Shopping",
      id: 29,
      btnid: 1029,
      intro:
        "The main aim of this project is to reduce the queuing delays faced by customers while shopping in a mall or departmental store. This project cosists of building an Android App for the customers and a Electron Desktop App for the billing section to ease the process of payments.",
      mentor: "Abhishek Garain",
      mentor_email: "abhi211199@gmail.com",
      comm:
        "https://join.slack.com/t/easyshoppingworkspace/shared_invite/enQtODM5Mzk5MjMzMjg0LTQwYWViOWI1NWZlYzUyNTVhYmJiNjk5ZGFiYTI2YzFlMmNjMzU3ZjQ2MjRiMTUxYmY1ODRmYzUwNGE1ODMzNzMhttps://join.slack.com/t/easyshoppingworkspace/shared_invite/enQtODM5Mzk5MjMzMjg0LTQwYWViOWI1NWZlYzUyNTVhYmJiNjk5ZGFiYTI2YzFlMmNjMzU3ZjQ2MjRiMTUxYmY1ODRmYzUwNGE1ODMzNzMhttps://join.slack.com/t/easyshoppingworkspace/shared_invite/enQtODM5Mzk5MjMzMjg0LTQwYWViOWI1NWZlYzUyNTVhYmJiNjk5ZGFiYTI2YzFlMmNjMzU3ZjQ2MjRiMTUxYmY1ODRmYzUwNGE1ODMzNzM",
      link: "https://github.com/abhi211199/easy_shopping",
      img: "https://github.com/abhi211199.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Eye2Brain",
      id: 30,
      btnid: 1030,
      intro:
        "Django Interface for Deep Learning projects. This repo is to get started with simple DL projects and integrating them to UI.",
      mentor: "Konda Amulya Reddy",
      mentor_email: "amulyareddyk97@gmail.com",
      comm:
        "https://join.slack.com/t/eye2brain/shared_invite/enQtODI5OTIyNjcyNDMzLWE1ZTUwNTgyZDcwYzZlZmE5ODdkZjJjYmQzMzBhMTY3MGU3OGVjZGE2MDIzYWQ5ZWI3ZWY4MGFmZjFmMTFlZmU",
      link: "https://github.com/AmulyaReddy99/Eye2Brain",
      img: "https://github.com/AmulyaReddy99.png?size=50",
      tag: [],
      intro_full:
        "A Django framework to provide input to various Machine Learning/Deep Learning projects. Our trained models are saved under saved_models folder and Django app is in Django app folder. Deployed on heroku https://eye2brain.herokuapp.com/."
    },
    {
      title: "Flask-GDrive",
      id: 31,
      btnid: 1031,
      intro:
        "Flask plugin to fetch static content from Google Drive and use Google Sheets as DB",
      mentor: "Shubham Mishra",
      mentor_email: "smishra99.iitkgp@gmail.com",
      comm: "https://chat.whatsapp.com/LfLxzHjBpXdCnv86ibdmzU",
      link: "https://github.com/grapheo12/Flask-GDrive",
      img: "https://github.com/grapheo12.png?size=50",
      tag: ["python", "google-drive-api", "flask", "flask-extensions"],
      intro_full:
        "Flask extension for serving static files easily from Google Drives"
    },
    {
      title: "GitHub Battle ",
      id: 32,
      btnid: 1032,
      intro:
        "A Web app that lists 30 of the most popular repositories of a language (overall also). It also lets you battle between any two github users. Also more features like personal profile (like sorcerer) and resume builder using GitHub and other profiles can be added.",
      mentor: "Rajat Verma",
      mentor_email: "rajatverma5885045@gmail.com",
      comm:
        "https://gitter.im/Kwoc-rajat2502/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/rajat2502/GitHub-Battle",
      img: "https://github.com/rajat2502.png?size=50",
      tag: [],
      intro_full: "A simple react app to battle two github users "
    },
    {
      title: "gyft2",
      id: 33,
      btnid: 1033,
      intro:
        "Get Your Freaking Timetable REBORN , A version of metakgp/gyft that does not need password smile ",
      mentor: "Aditya Vikram Singh",
      mentor_email: "xypnox@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-koss/shared_invite/enQtODM4MDY3ODIxMzk5LWIzZDUwNmIyNGVkMDEzZjc1Y2YzN2ZhODQxOTFlNzJkYzRlZGU5N2IzYTk3ZWYxN2NiNjk0MGZmYTdmNzhhNjA",
      link: "https://github.com/xypnox/gyft2",
      img: "https://github.com/xypnox.png?size=50",
      tag: ["timetable", "erp", "google-calendar", "ics", "gyft"],
      intro_full:
        "Get Your Freaking Timetable REBORN , A version of metakgp/gyft that does not need password :smile:"
    },
    {
      title: "Hand Gesture Recognition",
      id: 34,
      btnid: 1034,
      intro:
        "The aim of this project is to develop an automated system for hand gesture recognition in realtime (Web Cam). Also, It can collect data in realtime. ",
      mentor: "Arun Garg",
      mentor_email: "18335@iiitu.ac.in",
      comm:
        "https://join.slack.com/t/kwocbuddy/shared_invite/enQtODM0OTk3NDM3MjUzLTgwNzI2NDM5OTBhYjQzYTRjYWFjNGMzMmJmNzQ0YzFlZDJlZGNhYWMxNzQ2ZGNiZTRmMTllNzc3MTI3YWEzYzk",
      link: "https://github.com/iamchinu14/hand_gesture_recognition",
      img: "https://github.com/iamchinu14.png?size=50",
      tag: [],
      intro_full: "Hand Gesture Recognition"
    },
    {
      title: "iCalculator",
      id: 35,
      btnid: 1035,
      intro:
        "This is scientific calculator for iPhone and iPad which is written in Swift-5",
      mentor: "Anubhav Singh",
      mentor_email: "anubhavssingh177@gmail.com",
      comm: "https://app.slack.com/client/TQJM697S4/CQLGX1K0X",
      link: "https://github.com/anubhavsingh16/iCalculator",
      img: "https://github.com/anubhavsingh16.png?size=50",
      tag: [
        "ios-app",
        "swift5",
        "xcode11",
        "ui-kit",
        "macos",
        "slack",
        "github",
        "git",
        "icalculator",
        "communication",
        "calculator-application"
      ],
      intro_full: "This is Calculator app for iPhone and iPad."
    },
    {
      title: "Imagery",
      id: 36,
      btnid: 1036,
      intro:
        "Imagery is a slack bot that takes any uploaded image, hosts it on Imgur and posts the link to the same channel after deleting the uploaded image, thus, saving space on a free plan.",
      mentor: "Dibya Prakash Das",
      mentor_email: "dibyadas998@gmail.com",
      comm:
        "https://join.slack.com/t/dpdtesting/shared_invite/enQtNDkzMzgxMDM5MjA2LThkOWVlN2I0YTdhOTU4NGNhYjc5YzQ5NjI2ZjViZDEwOGY1YTgzYzBlNzQ4MTMyMTk1ODMyODU3ODk1YzJhM2M",
      link: "https://github.com/dibyadas/imagery",
      img: "https://github.com/dibyadas.png?size=50",
      tag: ["imgur", "slack", "heroku", "flask", "bot", "imagery"],
      intro_full:
        "Slack app to upload shared images to Imgur to save space and share easily"
    },
    {
      title: "Instances",
      id: 37,
      btnid: 1037,
      intro:
        "A website for travellers to publish their blogs and describe their experience, and inspire others through their journey.",
      mentor: "Bishal Deb",
      mentor_email: "bsihaldeb656@gmail.com",
      comm:
        "https://gitter.im/InstancesProject/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/thebishaldeb/Instances",
      img: "https://github.com/thebishaldeb.png?size=50",
      tag: [],
      intro_full: "The Photo Diary for Explorers and Travel Junkies."
    },
    {
      title: "InstiGo",
      id: 38,
      btnid: 1038,
      intro:
        "InstiGo is an android app for the students and faculties of IIT Dharwad that provide a one stop solution for matters related to mess, academia and hostel. ",
      mentor: "Sonu Sourav",
      mentor_email: "sonusouravdx001@gmail.com",
      comm: "https://gitter.im/oss2019/instigo-android",
      link: "https://github.com/oss2019/instigo-android",
      img: "https://github.com/oss2019.png?size=50",
      tag: [
        "android",
        "ui-design",
        "firebase-auth",
        "firebase-realtime-database",
        "firebase-storage",
        "firebase-firestore",
        "travis-ci",
        "iitdharwad",
        "oss",
        "glide"
      ],
      intro_full:
        "InstiGo is an android app for the students and faculties of IIT Dharwad that provide a one stop solution for matters related to mess, academia and hostel."
    },
    {
      title: "introduction-to-machine-learning with pyrhon",
      id: 39,
      btnid: 1039,
      intro: "to learn about meachine learning to biggner",
      mentor: "HARSH KHANDELWAL",
      mentor_email: "harshkhd1234@gmail.com",
      comm: "https://khandelwal.slack.com/",
      link:
        "https://github.com/khandelwalharsh/introduction-to-machine-learning",
      img: "https://github.com/khandelwalharsh.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Izanami",
      id: 40,
      btnid: 1040,
      intro: "A fully anonymous socket based chat client. ",
      mentor: "Mukul Mehta",
      mentor_email: "mukul.csiitkgp@gmail.com",
      comm:
        "https://join.slack.com/t/izanami-workspace/shared_invite/enQtODQ4NjY5NDE0NDIzLWIzMzVjM2QzOWY3YWQ0MmJkMGNhZjI4MmVmZjJiZWY3ZDhlZWYxODJlYTRmZGMyY2VjYTc4MWQzNTdiNmEyYzc",
      link: "https://github.com/Shankusu993/izanami",
      img: "https://github.com/Shankusu993.png?size=50",
      tag: ["Python", "Socket Programming", "React", "Chat-Service"],
      intro_full: "izanami -she who invites"
    },
    {
      title: "Jarvis Personal Assistant",
      id: 41,
      btnid: 1041,
      intro:
        "The project aims to develop a personal-assistant for Linux-based systems. Jarvis draws its inspiration from virtual assistants like Cortana for Windows, and Siri for iOS. It has been designed to provide a user-friendly interface for carrying out a variety of tasks by employing certain well-defined commands. Users can interact with the assistant either through voice commands or using a keyboard input. To know the steps to install and run the project, kindly check the Install.md of the project.",
      mentor: "Muskan Khedia",
      mentor_email: "muskan.khedia2000@gmail.com",
      comm: "https://gitter.im/COSS-Jarvis/community",
      link: "https://github.com/Harkishen-Singh/Jarvis-personal-assistant",
      img: "https://github.com/Harkishen-Singh.png?size=50",
      tag: [
        "personal-assistant",
        "linux",
        "modular",
        "golang",
        "angular",
        "linux-personal-assistant",
        "linux-assistant"
      ],
      intro_full:
        "Comfort of a personal assistant for Linux systems. Currently features native google, yahoo, bing searches, weather conditions, videos from youtube and looking up for images as well, all in a very reliable structure and UI."
    },
    {
      title: "Kalrav",
      id: 42,
      btnid: 1042,
      intro:
        "Problem: Twitter isn't the same anymore!\\n\\nWhen Twitter started its humble beginnings, it was just a simple app to compose tweets of 140 characters. But as days went by, several new features ( or distractions ) were added to Twitter. With the increasing number of distractions such as Images, Links, Advertisements, etc. The vanilla Twitter experience faded. Gone were the witty, sharp and funny tweets.\\n\\nKalrav is an attempt to restore Twitter back to it's glory days!",
      mentor: "Aditya Vikram Singh",
      mentor_email: "xypnox@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-koss/shared_invite/enQtODM4MDY3ODIxMzk5LWIzZDUwNmIyNGVkMDEzZjc1Y2YzN2ZhODQxOTFlNzJkYzRlZGU5N2IzYTk3ZWYxN2NiNjk0MGZmYTdmNzhhNjA",
      link: "https://github.com/xypnox/kalrav",
      img: "https://github.com/xypnox.png?size=50",
      tag: [],
      intro_full: "A tweet App"
    },
    {
      title: "Kaneki",
      id: 43,
      btnid: 1043,
      intro:
        "It is the website of Manga and Anime Society Kharagpur .It is a simple single page web app for now .",
      mentor: "Pankaj kumar Agarwal",
      mentor_email: "pankaj08072000@gmail.com",
      comm: "https://chat.whatsapp.com/BXJqKiG8hqaLe7HIHnlPn1",
      link: "https://github.com/mask-tech/kaneki",
      img: "https://github.com/mask-tech.png?size=50",
      tag: [],
      intro_full: "MASK static version 1.0"
    },
    {
      title: "Keep Clone",
      id: 44,
      btnid: 1044,
      intro:
        "A project to make a webapp to keep notes using checklist, text and draw. It uses google firebase at its base for database.",
      mentor: "Bishal Deb",
      mentor_email: "bishaldeb656@gmail.com",
      comm:
        "https://gitter.im/KeepClone/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/nityanandagohain/keep_clone",
      img: "https://github.com/nityanandagohain.png?size=50",
      tag: [],
      intro_full: "a google keep clone"
    },
    {
      title: "KGPApp",
      id: 45,
      btnid: 1045,
      intro:
        "An app for the whole of KGP Students. Developed for the community taking projects from metaKGP.",
      mentor: "Rishabhdeep Singh",
      mentor_email: "rishabhdeepsingh98@gmail.com",
      comm: "https://gitter.im/Rishabhdeepsingh/KGPApp",
      link: "https://github.com/rishabhdeepsingh/KGPApp",
      img: "https://github.com/rishabhdeepsingh.png?size=50",
      tag: [],
      intro_full:
        "An app for the whole of KGP Students. Developed for the community taking projects from metaKGP."
    },
    {
      title: "Learn Awesome",
      id: 46,
      btnid: 1046,
      intro:
        "Humanity's universal learning map. Curated lists of awesome learning resources on various topics categorized by formats, difficulty, estimated time etc.",
      mentor: "Athitya Kumar",
      mentor_email: "athityakumar@gmail.com",
      comm: "https://gitter.im/learn-awesome/meta",
      link: "https://github.com/learn-awesome/learn",
      img: "https://github.com/learn-awesome.png?size=50",
      tag: [
        "learning",
        "skills",
        "knowledge-graph",
        "learning-map",
        "resources",
        "community",
        "education",
        "curated-list"
      ],
      intro_full:
        "Humanity's universal learning map. Curated lists of awesome learning resources and learning plans on various topics categorized by formats, difficulty, estimated time etc. A social network for learners."
    },
    {
      title: "Magical-Flute",
      id: 47,
      btnid: 1047,
      intro:
        "this project is an implementation of a working flute using Html,CSS,Javascript,Bootstrap",
      mentor: "Aman Kumar",
      mentor_email: "kumaramanjha2901@gmail.com",
      comm:
        "https://join.slack.com/t/magicalflute/shared_invite/enQtODM2NjY3OTU5MTQzLTRjN2NlZmYxODRlYjU1N2EwYTM1ZjdhNjRmYWI5MzRkNDNlNmY1ZjQ3ZTAxMDkzMDgxMWE3ZGFmNjMzMTVjNGE",
      link: "https://github.com/coderbabu10/Magical-Flute",
      img: "https://github.com/coderbabu10.png?size=50",
      tag: [
        "html5",
        "css",
        "javascript",
        "bootstrap4",
        "git",
        "github",
        "front-end-development",
        "webdevelopment",
        "vanilla-javascript"
      ],
      intro_full:
        "A full working flute with the use of html,css,javascript with the help of my friend param sharma."
    },
    {
      title: "Mathematics Department Website ",
      id: 48,
      btnid: 1048,
      intro: "Website for the MnC Department, IIT KGP",
      mentor: "Raghavendra Kaushik, Adarsh Kumar",
      mentor_email: "rka87338@gmail.com",
      comm:
        "https://join.slack.com/t/mathematicskwoc/shared_invite/enQtODI5ODY2ODg4OTMzLTJhMDEwN2YzYzQzOGRhZTYxNGMxODgzZTJhZTYxNTYyNmY0NmU1OThlZmYxODIxMjU4ODY0YzUzMGU2MzY0MGE",
      link: "https://github.com/AdarshKumar712/MathsDep_Website",
      img: "https://github.com/AdarshKumar712.png?size=50",
      tag: ["frontend", "CSS", "Web Design"],
      intro_full: "Website for the department of Mathematics, IIT Kharagpur"
    },
    {
      title: "MedAI",
      id: 49,
      btnid: 1049,
      intro:
        "An intelligent medical app, currently capable of interactive symptom checking, prescription parser (with google calender sync). Lots more features to come.",
      mentor: "Snehal Reddy",
      mentor_email: "snehalreddyk@gmail.com",
      comm:
        "https://join.slack.com/t/medai-group/shared_invite/enQtODU0OTYxMDQwMTk4LWE1NWI1MGVkNzZhMWIzMGM0ODZmNTYzNzI5MmRjM2EzNTExZDk2YmFkYTA2MWVmZjY4ZjBiZTliYThmMTU1ZGQ",
      link: "https://github.com/Snehal-Reddy/MedAI",
      img: "https://github.com/Snehal-Reddy.png?size=50",
      tag: ["medical-ai", "ai", "symptom-based-clustering", "ocr"],
      intro_full: "Keep your cancer in check !!"
    },
    {
      title: "Movie Search Engine",
      id: 50,
      btnid: 1050,
      intro:
        "A search engine that displays the movie name from a natural language  query from the user",
      mentor: "Raghavendra Kaushik, Sriyash Poddar",
      mentor_email: "rka87338@gmail.com",
      comm:
        "https://join.slack.com/t/movie-search-engine/shared_invite/enQtODIyMTc3NjUzOTM2LWY4NzU2N2ZlYTYzODI1OTllZjUxNGQ1ZjI3NDQxOTg2MGI0NmE0M2FkMTNhMTVhYzdkOWRhYzgyMTg3YjcwOGE",
      link: "https://github.com/rakaar/Movie-search-engine.git",
      img: "https://github.com/rakaar.png?size=50",
      tag: ["React JS", "Flask", "NLP", "UI"],
      intro_full:
        "Built during Open IIT Hackathon, to find movie name through key words "
    },
    {
      title: "mTracker",
      id: 51,
      btnid: 1051,
      intro: "An open source mail tracker",
      mentor: "Prashant Sengar",
      mentor_email: "prashantsengar5@gmail.com",
      comm: "https://t.me/joinchat/INDdLhHnniCnOsIe3ivWDg",
      link: "https://github.com/prashantsengar/mTracker",
      img: "https://github.com/prashantsengar.png?size=50",
      tag: [],
      intro_full: "An open source mail tracker"
    },
    {
      title: "Music-App",
      id: 52,
      btnid: 1052,
      intro:
        "This project has been implemented using HTML, CSS and Vanilla Javascript. It allows the user to play beats by clicking mouse. This project is beginner friendly and specially designed for the students who are new to Open Source and want to make their first PR.",
      mentor: "Arteev Raina",
      mentor_email: "arteevraina@gmail.com",
      comm:
        "https://join.slack.com/t/beataddicts/shared_invite/enQtODIzMzQ3NzAwNzIzLTVhMTMzZDdlNGFiM2I3ZDhlZjk4ZjYxZWUxMTliZDBkZjgwNzlhMjRhM2U2OTc3Nzg0MWI1MWNkN2Q4ZDgyZDY",
      link: "https://github.com/arteevraina/Music-App",
      img: "https://github.com/arteevraina.png?size=50",
      tag: [
        "html5",
        "css",
        "vanilla-javascript",
        "github",
        "git",
        "frontend",
        "linux",
        "macos",
        "windows",
        "slack",
        "music",
        "bootstrap"
      ],
      intro_full: "This app plays beats on clicking on different colors."
    },
    {
      title: "Music-DL",
      id: 53,
      btnid: 1053,
      intro:
        "An android application with a python back-end to download YouTube videos in audio and video format. ",
      mentor: "Yash M Kothari",
      mentor_email: "yashkothari199767@gmail.com",
      comm: "https://gitter.im/Music-DL-KWoC/community",
      link: "https://github.com/CaptainDaVinci/Music-DL",
      img: "https://github.com/CaptainDaVinci.png?size=50",
      tag: [],
      intro_full:
        "An android application that let's you download YouTube videos in mp3 and mp4 format."
    },
    {
      title: "nest4guest",
      id: 54,
      btnid: 1054,
      intro: "It is a python based online guest house booking",
      mentor: "Ritik Kumar",
      mentor_email: "ritikburnwal@gmail.com",
      comm: "http://bit.ly/KWoCProject19",
      link: "https://github.com/krritik/nest4guest",
      img: "https://github.com/krritik.png?size=50",
      tag: ["django", "html", "python"],
      intro_full: "This is a python based online guest house booking system"
    },
    {
      title: "Neural Networks and Data Visualization",
      id: 55,
      btnid: 1055,
      intro:
        "The current trend for starting to learn Machine learning involves the black box approach, but this project features the way of learning the most powerful algorithm with a deep enough understanding . This project will also focus on data visualization and the techniques used to tweak the algorithms which is usually missed in the off the shelf libraries. To give a better understanding of Data Science in general",
      mentor: "Ayush Pratap Singh",
      mentor_email: "ayushpratap16@gmail.com",
      comm:
        "https://join.slack.com/t/thetrevprovers/shared_invite/enQtODM2MjA5ODY4NDg0LTE0Y2FiZmQwMjY0MTBjMTc2MjcwZDE2ZmI0NTZlMWM4Y2JjMjY5YTAyODU4Y2ZmMjhkZmRkZjc5NTQ3MTgzNTI",
      link: "https://github.com/DantrazTrev/Neural-Networks",
      img: "https://github.com/DantrazTrev.png?size=50",
      tag: [
        "neural-network",
        "ann",
        "machine-learning",
        "data-visualization",
        "python",
        "image-processing"
      ],
      intro_full:
        "A basic ANN repository for understanding Neural networks without any black box approach"
    },
    {
      title: "NEWSapp",
      id: 56,
      btnid: 1056,
      intro:
        "A Web-App that hosts leading news and different newspapers of various countries on a common platform..",
      mentor: "ANIKET SINGH",
      mentor_email: "theprover97@gmail.com",
      comm:
        "https://join.slack.com/t/newsappglobal/shared_invite/enQtODM2NzQ4Njk4MjQwLTc5MDE4YTIwYTRjZTg3YTZjZTllNzk1ZGNiZGY0MzY1NzlhNWY0NjM3NzJjODMyNzcyODMzOTg4Njk3YjdjYWE",
      link: "https://github.com/theprover97/NEWSapp",
      img: "https://github.com/theprover97.png?size=50",
      tag: [],
      intro_full:
        "A Web-App that hosts leading news and different newspapers of various countries on a common platform.."
    },
    {
      title: "Newspaper-app",
      id: 57,
      btnid: 1057,
      intro:
        "It is web app made-up using Django framework , used Sqlite for backend database and html5  and bootstrap for frontend .",
      mentor: "Rohan Gupta",
      mentor_email: "rohaninjmu@gmail.com",
      comm:
        "https://join.slack.com/t/codingninjas-talk/shared_invite/enQtODI1ODM0NTIzNzMwLTk3ZjMwMDExNWFlMTMyZDdjMjYzOWMzNjFmYzY5YjYyYjYzMmJiNDEyZmZlM2ExMDU0MGUzYzRiMTMyZGFiNDI",
      link: "https://github.com/Rohan-cod/newspaper-app",
      img: "https://github.com/Rohan-cod.png?size=50",
      tag: [
        "python3",
        "django",
        "html5",
        "css",
        "bootstrap",
        "sqlite",
        "github",
        "git",
        "slack",
        "zsh"
      ],
      intro_full:
        "A web app made-up using django. Frontend using html and bootstrap. Add articles which can be viewed by anyone. Just make an account and you are good to go."
    },
    {
      title: "OnRoad",
      id: 59,
      btnid: 1059,
      intro:
        "An App to find and share rides (and thus, reduce cost, reduce pollution and also traffic) Aim of the app is to provide rides to passengers in private or public cars at reduced costs, depenbding on the availability.",
      mentor: "Bishal Deb",
      mentor_email: "bishaldeb656@gmail.com",
      comm:
        "https://gitter.im/On-Road/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/thebishaldeb/onRoad",
      img: "https://github.com/thebishaldeb.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Org-manage-bot",
      id: 60,
      btnid: 1060,
      intro:
        "The Org-manage-bot is a telegram bot written in python which a company/organization/community can use to manage its telegram group. It has features like add, remove, schedule meetings, filter text etc. ",
      mentor: "Nilesh Patra",
      mentor_email: "nileshp.ec.17@nsit.net.in",
      comm: "https://t.me/joinchat/J22LWxGkZTvt2bSEZ7wAPg",
      link: "https://github.com/nileshpatra/Org-manage-bot/",
      img: "https://github.com/nileshpatra.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Peeple",
      id: 61,
      btnid: 1061,
      intro: "Peep and find out information about people!",
      mentor: "Athitya Kumar",
      mentor_email: "athityakumar@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc2019athit-frp7450/shared_invite/enQtODQzMzM4NDgwODIxLTljYWY4ODc2ZDMyMmZlMDJjNGFiYTdjODU0OWFiNWEwZjdhMDVjNjQ5M2NjNTA3N2QyYzk5ZDRiYmZlM2I3ZmI",
      link: "https://github.com/athityakumar/peeple",
      img: "https://github.com/athityakumar.png?size=50",
      tag: [],
      intro_full: "Peep and know about people"
    },
    {
      title: "PEP 8 Speaks",
      id: 62,
      btnid: 1062,
      intro:
        "A GitHub app to automatically review Python code style over Pull Requests",
      mentor: "Himanshu Mishra",
      mentor_email: "himanshu@orkohunter.net",
      comm: "https://please-email-at-himanshu-at-orkohunter.net",
      link: "https://github.com/OrkoHunter/pep8speaks",
      img: "https://github.com/OrkoHunter.png?size=50",
      tag: [
        "review",
        "bot",
        "pycodestyle",
        "python",
        "pep8",
        "flake8",
        "styleguide",
        "python-style",
        "code-style",
        "static-analysis",
        "linter",
        "static-code-analysis",
        "code-quality",
        "github-app",
        "github-webhooks"
      ],
      intro_full:
        "A GitHub :octocat: app to automatically review Python code style over Pull Requests"
    },
    {
      title: "Personal notepad",
      id: 63,
      btnid: 1063,
      intro:
        "It is notepad written in python which can be used to edit, make new word files etc . It is written in python and works only on windows. ",
      mentor: "Abhishu Raina",
      mentor_email: "abhishuraina10@gmail.com",
      comm: "https://kwoc-personalnotepad.slack.com/",
      link: "https://github.com/abhishuraina/MY-NOTEPAD",
      img: "https://github.com/abhishuraina.png?size=50",
      tag: [],
      intro_full: "A note pad made in python using Tkinter (GUI)"
    },
    {
      title: "Photoroid",
      id: 64,
      btnid: 1064,
      intro:
        "Photoroid is the fastest, Lightweight, easy to use image scanner tool. Photoroid is made using OpenCV with Python. It can be used to find a similar image from a list of images without taking much time. Photoroid can be very helpful in finding similar images when the number of images to scan is bigger. It can also be helpful in finding duplicate images.",
      mentor: "Prateek Mishra",
      mentor_email: "pr4t333k@gmail.com",
      comm: "https://gitter.im/Photoroid-gitter/community",
      link: "https://github.com/0xPrateek/photoroid",
      img: "https://github.com/0xPrateek.png?size=50",
      tag: [
        "opencv",
        "python3",
        "computer-vision",
        "opencv3",
        "cv2",
        "image-processing"
      ],
      intro_full: "Fastest Image scanner using openCV  :rocket:"
    },
    {
      title: "Portfolio-Template",
      id: 66,
      btnid: 1066,
      intro:
        "A Portfolio/Resume website template for Programmers, Geeks, Developers, Hackers etc.\\n\\nHighlights\\nSetup is very easy and you get a portfolio template of your own for free.\\nTo add your details, you just need simple editing skills. No code changes required!\\nSimple and Fast website User Interface.",
      mentor: "Prateek Mishra",
      mentor_email: "pr4t333k@gmail.com",
      comm: "https://gitter.im/Portfolio-Template-gitter/community",
      link: "https://github.com/0xPrateek/Portfolio-Template",
      img: "https://github.com/0xPrateek.png?size=50",
      tag: [
        "html",
        "css",
        "javascript",
        "portfolio",
        "resume",
        "website",
        "portfolio-template",
        "geeks",
        "hackers",
        "demo",
        "programmer"
      ],
      intro_full:
        "A portfolio website template for Geeks,Programmers and hackers."
    },
    {
      title: "Present",
      id: 67,
      btnid: 1067,
      intro: " A simple way to create presentations using markdown ",
      mentor: "Aditya Vikram Singh",
      mentor_email: "xypnox@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-koss/shared_invite/enQtODM4MDY3ODIxMzk5LWIzZDUwNmIyNGVkMDEzZjc1Y2YzN2ZhODQxOTFlNzJkYzRlZGU5N2IzYTk3ZWYxN2NiNjk0MGZmYTdmNzhhNjA",
      link: "https://github.com/xypnox/present",
      img: "https://github.com/xypnox.png?size=50",
      tag: [],
      intro_full: "A simple way to create presentations using markdown"
    },
    {
      title: "PyDataStructs",
      id: 68,
      btnid: 1068,
      intro:
        "The project aims at developing a python package for all the complex data\\nstructures(https://en.wikipedia.org/wiki/List_of_data_structures) to ease the lives of programmers.",
      mentor: "Gagandeep Singh",
      mentor_email: "singh.23@iitj.ac.in",
      comm: "https://gitter.im/codezoned2017/Lobby",
      link: "https://github.com/codezonediitj/pydatastructs",
      img: "https://github.com/codezonediitj.png?size=50",
      tag: [
        "data-structures",
        "algorithms",
        "algorithms-and-data-structures",
        "sports-programming",
        "computer-science"
      ],
      intro_full: "A python package for data structures"
    },
    {
      title: "pytodo",
      id: 69,
      btnid: 1069,
      intro: "A command line todo list built with Python and MongoDB.",
      mentor: "Parth Paradkar",
      mentor_email: "parthparadkar3@gmail.com",
      comm:
        "https://gitter.im/pytodo/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/thescriptninja/pytodo",
      img: "https://github.com/thescriptninja.png?size=50",
      tag: ["mongodb", "todolist", "python"],
      intro_full:
        "A minimal command line todo list created using Python and MongoDB"
    },
    {
      title: "QuTiP",
      id: 70,
      btnid: 1070,
      intro:
        "QuTiP is the quantum toolbox in Python. QuTiP\\u00a0is the open-source software to study quantum optics and related processes. It develops both an intuitive playground to understand quantum mechanics and cutting-edge tools to investigate it. QuTiP provides the most comprehensive toolbox to characterize noise and dissipation \\u2013 realistic processes \\u2013 affecting quantum systems, as well as tools not only to monitor but also to minimize their impact, quantum optimal control, description of decoherence-free spaces, used also for quantum circuits. It contains quantum circuit simulator module, and it integrates it with noise models. Several projects are ",
      mentor: "Nathan Shammah",
      mentor_email: "nathan.shammah@gmail.com",
      comm: "https://gitter.im/qutip/Lobby?source=orgpage",
      link: "https://github.com/qutip/qutip",
      img: "https://github.com/qutip.png?size=50",
      tag: [
        "qutip",
        "python",
        "quantum-toolbox",
        "quantum",
        "quantum-computing",
        "quantum-mechanics",
        "quantum-information",
        "quantum-optics"
      ],
      intro_full: "QuTiP: Quantum Toolbox in Python"
    },
    {
      title: "React Extension Boilerplate",
      id: 71,
      btnid: 1071,
      intro:
        "React Extension Boilerplate is a modern web extension template for building Mozilla and Chrome extensions using ReactJS.\\n\\nAllows smooth and fast development of extension using on-the-go loading, building, packaging and publishing on the most common browsers Chrome and Firefox.\\nMake changes to the source code and watch the extension implement these changes live in the browser.\\nImplements all the best Javascript practises with ESLint, Jest, React-StoryBook, Webpack and lots more.",
      mentor: "kryptoknight",
      mentor_email: "minanshu.1998@gmail.com",
      comm:
        "https://gitter.im/react-boilerplate-extension/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/kryptokinght/react-extension-boilerplate",
      img: "https://github.com/kryptokinght.png?size=50",
      tag: [
        "web-extension",
        "chrome-extension",
        "add-ons",
        "firefox-extension",
        "boilerplate",
        "javascript",
        "react"
      ],
      intro_full:
        ":rocket: Modern React boilerplate for Firefox and Chrome extensions."
    },
    {
      title: "React Native Async Auth Boilerplate",
      id: 72,
      btnid: 1072,
      intro:
        "A boilerplate, with all almost all essentials installed, \\nwith clear explanations and implementation of concepts used in real world,\\nand at same time, good starter template for almost any RN project",
      mentor: "Chinmay Vibhute",
      mentor_email: "chinmayvibhute@gmail.com",
      comm: "https://gitter.im/react-native-async-auth-boilerplate",
      link: "https://github.com/chinvib66/react-native-async-auth-boilerplate",
      img: "https://github.com/chinvib66.png?size=50",
      tag: [],
      intro_full:
        "A React Native app boilerplate with auth workflows and async actions."
    },
    {
      title: "Research Web Portal",
      id: 73,
      btnid: 1073,
      intro:
        "The Research web-portal for the students and professors of NIT Durgapur where information of the ongoing research projects from each department is available, with a short description of goals and required skills. It aims to fill the gap between students and professors of the institute by maintaining a hub for all research projects.",
      mentor: "Monsij Biswal",
      mentor_email: "biswalmonsij@gmail.com",
      comm:
        "https://join.slack.com/t/ieee-sbnitdgp/shared_invite/enQtODM4OTgwODg5NzM0LTM1NjhkMWU5NzYxMTQwODEwM2JmMDk0ZWYwOTgzYzQzZTUyOWY1YTY1NDY5NDFiYjU3MmFhMTA3NjE3YzdmZWM",
      link: "https://github.com/ieeesb-nitdgp/Research-Web-Portal",
      img: "https://github.com/ieeesb-nitdgp.png?size=50",
      tag: ["django", "research", "portal", "ieee"],
      intro_full: "v0.1"
    },
    {
      title: "ResumeReviewer",
      id: 74,
      btnid: 1074,
      intro:
        "ResumeReviewer will prepare students for resume based interview rounds during Placements by highlighting critical topics and suggesting relevant questions based on past interviews. ",
      mentor: "Saumo Pal",
      mentor_email: "saumopal1997@gmail.com",
      comm:
        "https://join.slack.com/t/resumereviewerkwoc/shared_invite/enQtODUxNTQ2NDYyODAwLTRjZmNkZWM4NGVmNTdlMmRmMzBkMWY3NmUzNDk3OTYyNzdkNDY3NTg0OWU0MzkxYTc5ZGU4NWM1NmUxYmQ3YjE",
      link: "https://github.com/SaumoPal97/ResumeReviewer",
      img: "https://github.com/SaumoPal97.png?size=50",
      tag: [],
      intro_full:
        "ResumeReviewer will prepare students for resume based interview rounds during Placements by highlighting critical topics and suggesting relevant questions based on past interviews"
    },
    {
      title: "Rock-Paper-Scissors",
      id: 75,
      btnid: 1075,
      intro:
        "It is an simple python based gaming project very user friendly for Beginners,in which an user can play with computer rock-paper-scissor game and see if they won or the computer.",
      mentor: "Shivank singh",
      mentor_email: "97shivank@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-workspace/shared_invite/enQtODUwMDk5NzU0NzI3LWM2MTBhMDFhNTE0ODJmOTI3MWJhOGE0NjZiMTBkMmNlNzUyNmM2YjZhZTVkODZhYjFiMGM5NTA2NWM0N2Q0NjM",
      link: "https://github.com/97shivank/RockPaperScissor",
      img: "https://github.com/97shivank.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Sarathi",
      id: 76,
      btnid: 1076,
      intro:
        "Sarathi is a progressive web application intended to connect a group of people having similar travel arrangements and create or join travel groups.",
      mentor: "Arib Alam",
      mentor_email: "aribalam64@gmail.com",
      comm:
        "https://join.slack.com/t/sarathihq/shared_invite/enQtODE2MDY2ODA0NTQ2LTkyYmNjOTEzYjFmY2IyNGU5ZWVmNmRkNGE5NDQ3NGUzZmEwZGIzYTk5YjFlN2M1Yzg1ODNjNWUyOTBhN2JiY2E",
      link: "https://github.com/metakgp/sarathi",
      img: "https://github.com/metakgp.png?size=50",
      tag: [],
      intro_full:
        "A web application to connect people with similar journey details and share rides"
    },
    {
      title: "Shakal.io",
      id: 77,
      btnid: 1077,
      intro: "P2P video chat website using React and WebRTC",
      mentor: "Vikrant Gajria",
      mentor_email: "vikrantgajria@gmail.com",
      comm:
        "https://gitter.im/shakal-io/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge",
      link: "https://github.com/vixrant/shakal-io",
      img: "https://github.com/vixrant.png?size=50",
      tag: [
        "webrtc",
        "webrtc-experiments",
        "webrtc-video",
        "javascript",
        "react",
        "redux",
        "semantic-ui"
      ],
      intro_full: "\\ud83c\\udfad WebRTC based video-chat website."
    },
    {
      title: "Spacemania(pygame)",
      id: 78,
      btnid: 1078,
      intro: "A 2d game made using pygame library in python3",
      mentor: "Dvij Kalaria",
      mentor_email: "dvij.kalaria@gmail.com",
      comm:
        "https://gitter.im/Spacemania-for-KWoC/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/dvij542/Spacemania.git",
      img: "https://github.com/dvij542.png?size=50",
      tag: [],
      intro_full: "A game made in python using pygame library"
    },
    {
      title: "Spot It",
      id: 79,
      btnid: 1079,
      intro:
        "An application to find a word or phrase in the images of hard copies. Basically Ctrl+F for hard copies at basic level.",
      mentor: "Bedant Agarwal",
      mentor_email: "bedantagarwal9@gmail.com",
      comm: "https://groups.google.com/d/forum/kwoc_19_spot_it",
      link: "https://github.com/bedant/Spot-It",
      img: "https://github.com/bedant.png?size=50",
      tag: [],
      intro_full:
        "Use it to find a word or phrase in the images of hard copies."
    },
    {
      title: "Spotify Recommendation Engine",
      id: 80,
      btnid: 1080,
      intro:
        "A system that recommends songs from your existing playlists using Spotify API and a bit of classical machine learning techniques. Goal is to implement Implicit Matrix Factorisation according to http://building-babylon.net/2015/08/11/logistic-matrix-factorization-for-implicit-feedback-data/ is the method behind their inhouse api.We also had traffic on this project during Hacktoberfest 2019 where we tackled smaller bugs. I will create beginner level issues but the goal will be what I have mentioned above [moderate issue].",
      mentor: "Sayantan Das",
      mentor_email: "santaclaus30011998@gmail.com",
      comm: "https://gitter.im/Spotify-Recommendation-Engine/community",
      link: "https://github.com/ucalyptus/Spotify-Recommendation-Engine/",
      img: "https://github.com/ucalyptus.png?size=50",
      tag: [],
      intro_full: "Music Recommender System"
    },
    {
      title: "Stardox",
      id: 81,
      btnid: 1081,
      intro:
        "Stardox is an advanced github stargazers information gathering tool. It scraps Github for information and display them in list tree view.It can be used for collecting information of your's/someones repository stargazers details.",
      mentor: "Prateek Mishra",
      mentor_email: "pr4t333k@gmail.com",
      comm: "https://gitter.im/Stardox-gitter/community",
      link: "https://github.com/0xPrateek/Stardox",
      img: "https://github.com/0xPrateek.png?size=50",
      tag: [
        "stargazers",
        "python3",
        "webscraping",
        "beautifulsoup4",
        "information-gathering-tool",
        "blackarch",
        "blackarch-packages",
        "recon",
        "github",
        "stargazer"
      ],
      intro_full: "Github stargazers information gathering tool"
    },
    {
      title: "Synix",
      id: 82,
      btnid: 1082,
      intro:
        "A command line interface in Node.js to make Unix and some other commands available for Windows, Linux and OS X",
      mentor: "Hemanth Kumar",
      mentor_email: "uppadahemanthkumar27@gmail.com",
      comm: "https://chat.whatsapp.com/D3fBijTFF157HRPc9oFdnk",
      link: "https://github.com/hemanth-hk/synix",
      img: "https://github.com/hemanth-hk.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "The EinsteinPy Project",
      id: 83,
      btnid: 1083,
      intro:
        "EinsteinPy is an open source pure Python package dedicated to problems arising in General Relativity and gravitational physics, such as goedesics plotting for Schwarzschild, Kerr and Kerr Newman space-time model, calculation of Schwarzschild radius, calculation of Event Horizon and Ergosphere for Kerr space-time. Symbolic Manipulations of various tensors like Metric, Riemann, Ricci and Christoffel Symbols is also possible using the library. EinsteinPy also features Hypersurface Embedding of Schwarzschild space-time, which will soon lead to modelling of Gravitational Lensing! It is released under the MIT license.\\n\\n\\n\\nVisit https://einsteinpy.org for more details.",
      mentor: "Shreyas Bapat",
      mentor_email: "shreyas@einsteinpy.org",
      comm: "https://bit.ly/einsteinpy-chatroom",
      link: "https://github.com/einsteinpy/einsteinpy",
      img: "https://github.com/einsteinpy.png?size=50",
      tag: [
        "gravitational-physics",
        "orbital-simulation",
        "perihelion",
        "space-physics",
        "general-relativity",
        "geodesics"
      ],
      intro_full: "Repository for the EinsteinPy core package :rocket:"
    },
    {
      title: "TheZalophusBlog",
      id: 84,
      btnid: 1084,
      intro:
        "A website for bloggers to post their blogs and articles to showcase their talents which gets saved in the database.",
      mentor: "Bishal Deb",
      mentor_email: "bishaldeb656@gmail.com",
      comm:
        "https://gitter.im/TheZalophusBlog/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/thebishaldeb/TheZalophusBlog",
      img: "https://github.com/thebishaldeb.png?size=50",
      tag: [],
      intro_full: "A site  for bloggers."
    },
    {
      title: "Timeline-wave",
      id: 85,
      btnid: 1085,
      intro:
        "We are going to develop Progress Tracking web-app in which you can add your progress each day and the web-app will create a timeline based on your daily progress. We are also going to develop a social network in which you can follow your peers and can look over their timeline too.",
      mentor: "Ritik Jain",
      mentor_email: "ritikjain1272@gmail.com",
      comm:
        "https://join.slack.com/t/timelinewave/shared_invite/enQtODQ2Njg1OTU1OTUzLWJiNmJmNjAzYmI0OGI2N2RhZWFhMTliYzI1NmZmN2U5ZTQ3M2YyZGJjYzc0MTdjZTgyNTBlMGU4NGQ5ODYxOWY",
      link: "https://github.com/Rits1272/Timeline-wave",
      img: "https://github.com/Rits1272.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "TodX",
      id: 86,
      btnid: 1086,
      intro: "A simple and easy to use yet configurable todo app. ",
      mentor: "Aditya Vikram Singh",
      mentor_email: "xypnox@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-koss/shared_invite/enQtODM4MDY3ODIxMzk5LWIzZDUwNmIyNGVkMDEzZjc1Y2YzN2ZhODQxOTFlNzJkYzRlZGU5N2IzYTk3ZWYxN2NiNjk0MGZmYTdmNzhhNjA",
      link: "https://github.com/xypnox/todxpy/",
      img: "https://github.com/xypnox.png?size=50",
      tag: [
        "python3",
        "python",
        "cli",
        "website",
        "todo",
        "todoapp",
        "easy-to-use",
        "pip"
      ],
      intro_full: " A simple and easy to use yet configurable todo app."
    },
    {
      title: "TrackMaster",
      id: 87,
      btnid: 1087,
      intro:
        "It is a common thing that after buying a new phone, we tend to keep the old phone in an idle state. Why not use the old phone for surveillance purposes? Let's dive in the project to build something secure and useful to us.",
      mentor: "Abhishek Garain",
      mentor_email: "abhi211199@gmail.com",
      comm:
        "https://join.slack.com/t/trackmaster-workspace/shared_invite/enQtODQxMTU0OTUzMjA1LWM5MThkYzM2YTQ5M2I2MDZhNDg0NWJjMGIyNjkxNGMxODI1OGZkOTQ4ZjBhYzgxNTY3ZWI4Y2RiNzI0NDE1NmM",
      link: "https://github.com/abhi211199/TrackMaster/",
      img: "https://github.com/abhi211199.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "TrelloGraph",
      id: 88,
      btnid: 1088,
      intro:
        "A network-kinda UI to navigate back and forth between Trello linkages",
      mentor: "Athitya Kumar",
      mentor_email: "athityakumar@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc2019athit-frp7450/shared_invite/enQtODQzMzM4NDgwODIxLTljYWY4ODc2ZDMyMmZlMDJjNGFiYTdjODU0OWFiNWEwZjdhMDVjNjQ5M2NjNTA3N2QyYzk5ZDRiYmZlM2I3ZmI",
      link: "https://github.com/athityakumar/TrelloGraph",
      img: "https://github.com/athityakumar.png?size=50",
      tag: [],
      intro_full:
        "A social-network kinda UI to navigate back and forth between Trello linkages"
    },
    {
      title: "TV Series",
      id: 89,
      btnid: 1089,
      intro:
        "Aggregate tv series scrapers and show them in a more readable manner",
      mentor: "Athitya Kumar",
      mentor_email: "athityakumar@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc2019athit-frp7450/shared_invite/enQtODQzMzM4NDgwODIxLTljYWY4ODc2ZDMyMmZlMDJjNGFiYTdjODU0OWFiNWEwZjdhMDVjNjQ5M2NjNTA3N2QyYzk5ZDRiYmZlM2I3ZmI",
      link: "https://github.com/athityakumar/tvseries",
      img: "https://github.com/athityakumar.png?size=50",
      tag: ["scraping", "imdb-link", "ruby-script", "tv-series"],
      intro_full:
        "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI."
    },
    {
      title: "Vault",
      id: 90,
      btnid: 1090,
      intro: "Swiss army knife for hackers.",
      mentor: "Mehtab Zafar",
      mentor_email: "mehtab.zafar98@gmail.com",
      comm:
        "https://gitter.im/vault_scanner/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/abhisharma404/vault",
      img: "https://github.com/abhisharma404.png?size=50",
      tag: [
        "python",
        "pentesting",
        "security",
        "networking",
        "offensive-security",
        "scanner",
        "hacking",
        "xss-vulnerability",
        "lfi",
        "rfi",
        "sqlite",
        "ssl-inspection",
        "port-scanner",
        "crawler",
        "scrapy",
        "fuzzing",
        "hacking-tool",
        "information-gathering",
        "osint",
        "vault"
      ],
      intro_full: "swiss army knife for hackers"
    },
    {
      title: "WhatsApp Cleaner",
      id: 91,
      btnid: 1091,
      intro: "Tool to clean received and sent media of WhatsApp. ",
      mentor: "Pawan Kumar Gorai",
      mentor_email: "pawankumar17264@gmail.com",
      comm: "https://gitter.im/whatsAppCleanerKwoc/community",
      link: "https://github.com/Pawan0411/WhatsApp-Cleaner",
      img: "https://github.com/Pawan0411.png?size=50",
      tag: ["java", "android", "cardview-recyclerview", "whatsapp"],
      intro_full: "Tool to clean received and sent media of WhatsApp. "
    },
    {
      title: "xyPlot",
      id: 92,
      btnid: 1092,
      intro:
        "Plotting with python made easy.\\n\\nAre you tired of replicating common steps that are needed to plot even a simple polynomial functions in python's infamous Matplotlib?\\n\\nWorry no more! Presenting xyplot! Plot polynomials easily and, more importantly, pythonically!",
      mentor: "Aditya Vikram Singh",
      mentor_email: "xypnox@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc-koss/shared_invite/enQtODM4MDY3ODIxMzk5LWIzZDUwNmIyNGVkMDEzZjc1Y2YzN2ZhODQxOTFlNzJkYzRlZGU5N2IzYTk3ZWYxN2NiNjk0MGZmYTdmNzhhNjA",
      link: "https://github.com/xypnox/xyplot",
      img: "https://github.com/xypnox.png?size=50",
      tag: [],
      intro_full: "Plotting with python made easy"
    },
    {
      title: "Angular-shopping-app",
      id: 93,
      btnid: 1093,
      intro:
        "A responsive Angular 6 based Shopping Web application for purchasing goods with additional advance features made using Angular material.",
      mentor: "Parul Priyedarshani",
      mentor_email: "parulpriyedarshani@gmail.com",
      comm:
        "https://join.slack.com/t/parul-world/shared_invite/enQtODQ4MTM5ODE1MjIzLWVmMTM4Y2FiNjk1YTA1N2I0MTY0MjgwMGMxNzU4ODIyYzA2YTk5ODU4ODNjZmI5OTA1ZjU1NDQ1Y2JiNTZlNmE",
      link: "https://github.com/parulpriyedarshani/Angular-Shopping-app",
      img: "https://github.com/parulpriyedarshani.png?size=50",
      tag: [],
      intro_full:
        "A responsive Angular 5+ based Shopping web App for purchasing goods with so many additional advance features made using Angular material. "
    },
    {
      title: "AWOL",
      id: 94,
      btnid: 1094,
      intro:
        "Attendance tracker Android Application for ITER, SOA University, Bhubaneswar",
      mentor: "Pawan Kumar Gorai",
      mentor_email: "pawankumar17264@gmail.com",
      comm: " https://gitter.im/awolkwoc/community",
      link: "https://github.com/Pawan0411/AWOL",
      img: "https://github.com/Pawan0411.png?size=50",
      tag: ["attendance", "java", "android", "volley-library", "api"],
      intro_full: "Official Repository"
    },
    {
      title: "CandyView Library",
      id: 95,
      btnid: 1095,
      intro:
        "The easiest way to implement RecyclerView in just 1 Line. \\n\\nDelicious Facts \\ud83c\\udf6d\\n\\n1. Forget creation of tasteless Adapters & monotonous findViewById for your views in adapter. \\ud83d\\udcbb\\n2. Text data (String, int, float ... ) is automatically set into TextView & Button\\n3. Image URL String and Image Drawable (int) R.drawable.id is automatically set into ImageView. \\ud83d\\ude80\\n4. It's all done without any extra line of code. How? (Find out by joining)\\n5. Manage properties of all view using single SugarListener or just set attributes for specific views. \\n",
      mentor: "Nishant Singh Hada",
      mentor_email: "hadanis.singh@gmail.com",
      comm:
        "https://join.slack.com/t/candyviewlibrary/shared_invite/enQtODQ3MjM2MjAzMjUzLTExNTBiYjU4NmZlMzA1MmYzZWY5ZTMxNzNiZjU1YzIzZDQxZjg4NTZjYmYyZWE0ZGZkNDY3YjEwMDNjMDVhMTE",
      link: "http://github.com/thisisnsh/candyview",
      img: "https://github.com/thisisnsh.png?size=50",
      tag: [
        "android",
        "library",
        "recyclerview",
        "gradle",
        "listeners",
        "recyclerview-adapter",
        "adapter",
        "easy-to-use",
        "fast",
        "small",
        "recycler",
        "view",
        "android-library",
        "recyclerviewadapter"
      ],
      intro_full:
        "Implement any RecyclerView in just 1 Line. Forget creation of Adapters & usage of findViewById for your views in the adapter. CandyView handles everything automatically. "
    },
    {
      title: "Certify",
      id: 96,
      btnid: 1096,
      intro:
        "Certify helps creating multiple certificates (Upto 1000 at a time) that are using a same template but differ in data. It also provides an authentication feature to verify authenticity of certificate by providing it a unique Certify Code",
      mentor: "Kartikay Bhutani",
      mentor_email: "kbhutani0001@gmail.com",
      comm: "https://t.me/certify0001",
      link: "https://github.com/kbhutani0001/Certify",
      img: "https://github.com/kbhutani0001.png?size=50",
      tag: [],
      intro_full:
        "Trying to create a solution to make creation and management of certificates easier. Also aim to make a system to stop piracy of digital certificates"
    },
    {
      title: "Chess_Engine",
      id: 97,
      btnid: 1097,
      intro:
        "A chess engine using supervised learning and unsupervised learning ",
      mentor: "Avi Bomb",
      mentor_email: "avi.bomb@gmail.com",
      comm:
        "https://join.slack.com/t/chessengineworkspace/shared_invite/enQtODM4NDEwNDk1NzE4LWFhM2UwYzAwZDFkZDFkYzAwYzU3NDMwMzRlNWJmY2RkNjczMjdjYjRiZjcyN2YyYTk1MjQ3OWM1YjlmNTNkNjg",
      link: "https://github.com/AviBomb/Chess_Engine",
      img: "https://github.com/AviBomb.png?size=50",
      tag: [],
      intro_full:
        "A chess Engine made with the help of Supervised Learning Algorithm"
    },
    {
      title: "CleanPy",
      id: 98,
      btnid: 1098,
      intro: "Organizes files in folders and helps you to clean your PC",
      mentor: "Prashant Sengar",
      mentor_email: "prashantsengar5@gmail.com",
      comm: "https://t.me/joinchat/INDdLlDf-SFDPURESGgdrQ",
      link: "https://github.com/prashantsengar/CleanPy",
      img: "https://github.com/prashantsengar.png?size=50",
      tag: [],
      intro_full: "Organizes files in folders and helps you to clean your PC"
    },
    {
      title: "CMS",
      id: 99,
      btnid: 1099,
      intro: "Courier management system",
      mentor: "Laasya sree",
      mentor_email: "laasyasree7410@gmail.com",
      comm:
        "https://join.slack.com/t/cmskwoc/shared_invite/enQtODM1NzM1ODg1ODkyLTYxNjc5Y2I5YmI2ZjE0ZDQxNjUzOTc4M2UyODE2ODgwODk1ZmYzYTIwODFlMjQzOWY3ZTExNGUxZjgyMmNmY2E",
      link: "https://github.com/laasyasree/Courier-management-system",
      img: "https://github.com/laasyasree.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Codeforces",
      id: 100,
      btnid: 1100,
      intro:
        "Codeforces is an Android version of Codeforces web. This app is made to integrate all the available Codeforces API into this app. This way the users can have a mobile version of their handle and can get key information on the go.",
      mentor: "Ajay Prabhakar",
      mentor_email: "Ajayprabhakar369@gmail.com",
      comm:
        "https://join.slack.com/t/chromicle/shared_invite/enQtODMwOTg5MDg0MTQ1LTc3ZmZiNTIyYTE0ZTdiMDMyYzc0NWNmMGRmNTViOWZiYjgwNTFlNzdhNGQ0NWZlMjNhNWRiOGQ5Mzg2NmJiYjU",
      link: "https://github.com/Chromicle/Codeforces",
      img: "https://github.com/Chromicle.png?size=50",
      tag: ["codeforces", "java", "android", "api"],
      intro_full:
        "Codeforces is Android version of Codeforces web. This app is made to integrate all the available Codeforces API into this app. This way the users can have a mobile version of their handle and can get key information on the go."
    },
    {
      title: "ColorWow_Pygame",
      id: 101,
      btnid: 1101,
      intro:
        "A game written using pygame, a shooting based game and theme - stroop,puzzle .",
      mentor: "ANMOL HARSH",
      mentor_email: "anmolharsh007@gmail.com",
      comm:
        "https://join.slack.com/t/colorwowkwoc19/shared_invite/enQtODI0MDk1NDI2NTEzLWVmNzIyMDliY2Y0ZjhmZjY1YmJkOGNlNzNlOGI2YTQ1YTlkMDE1Y2Y5MGNmZGY4NjViMTFiYzBiZGVkNmU2ZmY",
      link: "https://github.com/anmolharsh/ColorWow_Pygame1",
      img: "https://github.com/anmolharsh.png?size=50",
      tag: [],
      intro_full:
        "A pygame project to learn and implement options, improvements and enhanced learning !"
    },
    {
      title: "Food Application",
      id: 103,
      btnid: 1103,
      intro:
        "A food management application that enables people in selecting, relocating, selling and managing food from homes in a metropolitan.",
      mentor: "tripti shukla",
      mentor_email: "tripti12shukla1280@gmail.com",
      comm:
        "https://join.slack.com/t/mentorship-d7p1572/shared_invite/enQtODQ2NjQzNTU1ODYwLTJlMWNiNGNlZjhiZTNkMjc3YmI2MGZjZmM2NjRlNDk1YzI1MTI2ODc0ODgzODdiMjBkZmJjMmM3YjM3OTA5MmE",
      link: "https://github.com/yellowwoods12/Home-s-Magic",
      img: "https://github.com/yellowwoods12.png?size=50",
      tag: [],
      intro_full:
        "Home's Magic is a home-made food selling application website."
    },
    {
      title: "Listen-To-This-KGP",
      id: 104,
      btnid: 1104,
      intro:
        "It's a dashboard for the facebook group listen to this KGP. We plan to list top songs weekly and monthly and allowing you to search by users to see their songs. ",
      mentor: "Mukul Mehta",
      mentor_email: "mukul.csiitkgp@gmail.com",
      comm:
        "https://join.slack.com/t/listentothiskgp/shared_invite/enQtODMwMjIwMjExNjIxLWI2NjgxYzhjZmM0ZWNlMzg4MjA5YzZkMjg0MTdjZjE4ZGQ4YjM1YzA0NWYxYTY1YjFmNDJhNGYzMzJmOGU4ZWI",
      link: "https://github.com/mukul-mehta/listen-to-this-kgp",
      img: "https://github.com/mukul-mehta.png?size=50",
      tag: [],
      intro_full: "A dashboard for the facebook group Listen to this KGP. "
    },
    {
      title: "Matadhikar",
      id: 105,
      btnid: 1105,
      intro:
        "Develop an application where Indian citizens with valid voter ID cards, provided by the government, can vote during the elections from across the globe using Blockchain. The votes thus collected, can then be counted for declaration of the results of the elections.",
      mentor: "Avi Bomb",
      mentor_email: "avi.bomb@gmail.com",
      comm:
        "https://join.slack.com/t/matadhikar/shared_invite/enQtODI4MzI4Njc1NjA0LTlhNTA1OGEyYWM3ZWFiZmM4NzA4ZTRmN2VhOGI3YjQxYmIyYWI0OGUwYTA2NWU2YTVhMzYzYTE1MjIxNTU4ZmQ",
      link: "https://github.com/AviBomb/Matadhikar",
      img: "https://github.com/AviBomb.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Melonicious",
      id: 106,
      btnid: 1106,
      intro:
        "An Android app that tracks the daily commits of a given set of GitHub users. This app can be used to monitor their technical progress and also view interesting statistics of the users over a period of time.",
      mentor: "Abhilash Gunasegaran",
      mentor_email: "abhilash.gunasegaran@gmail.com",
      comm:
        "https://gitter.im/Melonicious/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/AbhilashG97/Melonicious",
      img: "https://github.com/AbhilashG97.png?size=50",
      tag: [],
      intro_full:
        "An Android app that tracks the daily commits of a given set of GitHub users "
    },
    {
      title: "Moviepedia",
      id: 107,
      btnid: 1107,
      intro:
        "List of movies and their actor/actress. Also save your fav movies",
      mentor: "Samagra Gupta",
      mentor_email: "samagraguptajpr@gmail.com",
      comm: "https://gitter.im/samagragupta/Moviepedia#",
      link: "https://github.com/samagragupta/Moviepedia",
      img: "https://github.com/samagragupta.png?size=50",
      tag: [],
      intro_full: "List of Movies and their Actors/Actress "
    },
    {
      title: "Multilingual AI-powered Voice Assistant",
      id: 108,
      btnid: 1108,
      intro:
        "multilingual voice based chatbot in RASA using python,REACTJS and NODEJS",
      mentor: "arbaz khan",
      mentor_email: "arbazkhan971@gmail.com",
      comm: "https://gitter.im/Multilingual-AI-powered-VoiceBOT/community#",
      link: "https://github.com/arbazkhan971/Multilingual-AI-powered-VoiceBOT",
      img: "https://github.com/arbazkhan971.png?size=50",
      tag: [],
      intro_full: null
    },
    {
      title: "Name the Code",
      id: 109,
      btnid: 1109,
      intro:
        "A web based algorithm guessing platform where mentor/admin can post the code or algorithm and students need to guess the name of it within limited time frame. Students can track their progress on leader board and can apply filters to see weekly and monthly weeks. The updation of leader board would be dynamic and would not require any third person involvement. The main aim for building this project is to make student aware about famous and important algorithm in a fun way.",
      mentor: "Arpit Agrawal",
      mentor_email: "arpitagrawal3018@gmail.com",
      comm:
        "https://join.slack.com/t/namethecode/shared_invite/enQtODQ5ODE5OTU4NDg2LTgxZTdhYWVlZWM5NjQ4NDJjYTE2Y2E4NDM2ZmJmMGFjZWQ5YTcxMDEyMzVhOWQxNGY5YzcwYTY1ODY2MmJkYjM",
      link: "https://github.com/arpit3018/NameTheCode",
      img: "https://github.com/arpit3018.png?size=50",
      tag: ["flutter-web", "sqlite", "flutter", "algorithm"],
      intro_full:
        "A web based algorithm guessing platform where mentor/admin can post the code or algorithm and students need to guess the name of it within limited time frame."
    },
    {
      title: "Notify",
      id: 110,
      btnid: 1110,
      intro: "Extract notes and chords from a piano audio file",
      mentor: "Shreyansh Darshan",
      mentor_email: "shreyanshdarshan1@gmail.com",
      comm:
        "https://gitter.im/notify_music/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/ShreyanshDarshan/Notify",
      img: "https://github.com/ShreyanshDarshan.png?size=50",
      tag: [],
      intro_full: "From piano audio to notes."
    },
    {
      title: "Open wallet ",
      id: 111,
      btnid: 1111,
      intro:
        "Open wallet is an flutter based cryptocurrency wallet that aims to smoothen up the onboarding process and user experience of Blockchain and cryptocurrencies while maintaining privacy and security without being a centralized platform.\\nOur project is under development and simultaneously it has won 4 hackathons , got honorable mention in ethIndia 2.0.\\nThe project has been selected as personal best project for relays program run by Consensys labs(one of the leader in Blockchain/eithereum domain).\\nMore information is available at the GitHub repository of the project.",
      mentor: "Abhimanyu Shekhawat",
      mentor_email: "abhimanyushekhawat17.as@gmail.com",
      comm: "https://t.me/joinchat/CXfZ8xOlWjcPL4UoLl8QEQ",
      link: "https://github.com/Abhimanyu121/OpenWallet",
      img: "https://github.com/Abhimanyu121.png?size=50",
      tag: [],
      intro_full: "Truly mass adoptable blockchain wallet in making"
    },
    {
      title: "Parallel Programming using OpenMP and MPI",
      id: 112,
      btnid: 1112,
      intro:
        "The project aims at creating a collection of implementations of various algorithms that can be implemented in parallel using OpenMP and MPI libraries in C++.",
      mentor: "Sahil Bansal",
      mentor_email: "shlbnsl843@gmail.com",
      comm: "https://groups.google.com/forum/#!forum/parallelprog",
      link: "https://github.com/sahilbansal17/Parallel-Programs",
      img: "https://github.com/sahilbansal17.png?size=50",
      tag: [],
      intro_full: "Parallel Programming using OpenMP/MPI"
    },
    {
      title: "Pneumothorax Segmentation using Hypercolumns",
      id: 113,
      btnid: 1113,
      intro:
        "Collapsed Lung Segmentation using Hypercolumns. Goal is to create a working mybinder template for this project[moderate issue]. Too many beginner level issues.\\nMore details here :-> https://ucalyptus.github.io/Pneumothorax-Segmentation-using-Hypercolumns/",
      mentor: "Sayantan Das",
      mentor_email: "santaclaus30011998@gmail.com",
      comm:
        "https://gitter.im/Pneumothorax-Segmentation-using-Hypercolumns/community",
      link:
        "https://github.com/ucalyptus/Pneumothorax-Segmentation-using-Hypercolumns",
      img: "https://github.com/ucalyptus.png?size=50",
      tag: ["aiwb"],
      intro_full: "Collapsed Lung Segmentation using Hypercolumns "
    },
    {
      title: "Rappel ",
      id: 114,
      btnid: 1114,
      intro:
        "a software which helps us to remember what to do at a particular place which he was said to do a long time ago at a particular place . so he won't regret that he forgot . (Purely built under react native and NodeJs )",
      mentor: "D. Venkata Vamsi",
      mentor_email: "vammu920@gmail.com",
      comm:
        "https://join.slack.com/t/rappelworkspace/shared_invite/enQtODI5OTY4NTU2NjQxLTAzMzQ1ODMzY2RkOWY4N2UxNzViODMxYWQxZWZjMTU3OWU2YThlZTM1N2Q4OGYzOWVkMTEwYzExMzBjMDI1M2M",
      link: "https://github.com/vammu920/Rappel",
      img: "https://github.com/vammu920.png?size=50",
      tag: [],
      intro_full:
        "a software which helps us to remember what to do at a particular place which he was said to do a long time ago at a particular place . so he won't regret that he forgot "
    },
    {
      title: "Recommendation System",
      id: 115,
      btnid: 1115,
      intro:
        "With the advancement in technology, a recommendation engine has become an integral part of today's world. With the aim to personalize products (movies, books, songs, etc.) according to the end user's taste and needs recommendation systems have been improved significantly over the past decade. \\n\\nIn this project, we would start with understanding how the recommendation system works and building a naive recommendation system. Then we would move on towards building a movie recommendation engine and implement some of the research papers. \\n\\nPrerequisites: Python Programming, Git, and Beginner level Machine Learning\\n\\nIf you don't satisfy the prerequisites don't worry, follow the links below and have some basic idea about it. Then learn while working on it.\\n\\nBasic Python: https://www.tutorialspoint.com/python/python_basic_syntax.htm\\n\\nGit: https://www.atlassian.com/git/tutorials/what-is-version-control",
      mentor: "Tannmay Yadav",
      mentor_email: "tanmayy98@gmail.com",
      comm:
        "https://join.slack.com/t/kwoc2019-20/shared_invite/enQtODIyMjY1MzMxMjUwLThlYzQ4MjQ1ZjliODI2NWNiM2NhZTY5NWNiMDZhODk2ZDMwNjQyM2UwMDkyZmE2NmJlNDBiZGM2MDIxZGYxNDk",
      link: "https://github.com/ytann/Recommendation_Engine",
      img: "https://github.com/ytann.png?size=50",
      tag: [],
      intro_full:
        "This repository is dedicated towards the development of movie recommendation engines for Kharagpur Winter of Code 2019-20. "
    },
    {
      title: "RedIns",
      id: 116,
      btnid: 1116,
      intro: "Takes media from Reddit and posts to Twitter and Instagram",
      mentor: "Prashant Sengar",
      mentor_email: "prashantsengar5@gmail.com",
      comm: "https://t.me/joinchat/INDdLhNoG-yYqLb-sf8Rlg",
      link: "https://github.com/prashantsengar/RedIns",
      img: "https://github.com/prashantsengar.png?size=50",
      tag: [
        "python",
        "reddit",
        "reddit-api",
        "instagram",
        "instagram-api",
        "twitter",
        "twitter-api",
        "twitter-bot"
      ],
      intro_full: "Get images from Reddit and upload to Instagram"
    },
    {
      title: "Resume Builder",
      id: 117,
      btnid: 1117,
      intro:
        "A java based application using Swings which takes in all the details of the user and returns a resume in a file. The project uses JDBC for connecting the database. Also Windows Builder was used for the UI part. Now the project only returns the resume in a file. The aim is to return a html page or a file with proper formatting options. And accordingly the resume should be changing. ",
      mentor: "Bhanu Prakash Poluparthi",
      mentor_email: "p.bhanuprakash12345@gmail.com",
      comm: "https://app.slack.com/client/T06GX3JTS/CQF5JGNQM",
      link: "https://github.com/BhanuPrakashNani/Resume-Builder-Java",
      img: "https://github.com/BhanuPrakashNani.png?size=50",
      tag: ["java", "oops-in-java"],
      intro_full: "Resume Builder using Java"
    },
    {
      title: "SolveNext-Codeforces",
      id: 118,
      btnid: 1118,
      intro:
        "CLI version of codeforces problemsets which not only brings you all the problems present in Codeforces to your terminal effortlessly, but also orders them in the best way you should SolveNext.",
      mentor: "N Krithick Santhosh",
      mentor_email: "krithickrockz@gmail.com",
      comm:
        "https://gitter.im/KWoC-2019-SolveNext/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
      link: "https://github.com/Krythz43/SolveNext-Codeforces",
      img: "https://github.com/Krythz43.png?size=50",
      tag: ["codeforces", "scripts", "cli", "suggestion-engine"],
      intro_full:
        "CLI version of codeforces problemsets which not only brings you all the problems present in Codeforces to your terminal effortlessly, but also orders them in the best way you should SolveNext."
    },
    {
      title: "Tam\\u00e9t\\u00fb - A Productivity Timer App",
      id: 119,
      btnid: 1119,
      intro:
        "The most important aspect of collaborative project is to get everyone involved, and this idea is simple enough for everyone to contribute to, tweak - and maybe even have some fun while doing it.",
      mentor: "Sanjeev Kumar Sharma",
      mentor_email: "thedevelopersanjeev@gmail.com",
      comm: "https://gitter.im/android-productivity-timer-tametu-app/tametu",
      link:
        "https://github.com/thedevelopersanjeev/abnd-track-pomodoro-timer-app",
      img: "https://github.com/thedevelopersanjeev.png?size=50",
      tag: [],
      intro_full: "abnd-track-numerative created by GitHub Classroom"
    },
    {
      title: "TimeTracker",
      id: 120,
      btnid: 1120,
      intro: "Tracks the time one spends on PC and produces analysis",
      mentor: "Prashant Sengar",
      mentor_email: "prashantsengar5@gmail.com",
      comm: "https://t.me/joinchat/INDdLhbuC7hWgHqTyBplIw",
      link: "https://github.com/prashantsengar/TimeTracker",
      img: "https://github.com/prashantsengar.png?size=50",
      tag: ["python", "python3", "timetracker", "tkinter", "matplotlib"],
      intro_full: "Track your time, know where it goes"
    },
    {
      title: "Web Crawler",
      id: 121,
      btnid: 1121,
      intro: "Web Crawler that crawl Ookla 10 billion website.",
      mentor: "Debojyoti Sinha",
      mentor_email: "sinha.debojyoti75@gmail.com",
      comm:
        " https://join.slack.com/t/ooklawebcrawler/shared_invite/enQtODQzMDg5MDEwNDE5LTdlZGNiMzg1MDljMDYwMjkyMWFhOTRmYWExNGZjMGI0NWU2MDc4NmU5N2YyY2IyMDk3OTdjYTk5ZWI0ZDU2MGE",
      link: "https://github.com/sinha-debojyoti/Ookla-Speedtest.net-Crawler",
      img: "https://github.com/sinha-debojyoti.png?size=50",
      tag: ["ookla", "speedtest", "python", "bs4", "webcrawler"],
      intro_full:
        "A python web crawler that fetches nearly 10 billion pages of https://www.speedtest.net to fetch download speed, upload speed, latency, date, distance, country code, server ID, server name, sponsor name, sponsor URL, connection_mode, isp name, isp rating, test rank, test grade, test rating, path."
    },
    {
      title: "drawing-using-openCV",
      id: 122,
      btnid: 1122,
      intro:
        "Here is my python source code for QuickDraw - developed by google. with my code, you could:\n\nRun an app which you could draw in front of a camera (If you use laptop, your webcam will be used by default)\nRun an app which you could draw on a canvas",
      mentor: "Rahul Agrawal",
      mentor_email: "rahulagrawal799110@gmail.com",
      comm:
        "https://join.slack.com/t/drawing-using-opencv/shared_invite/enQtODQwNDIzMzY5ODEwLTlkYjk4YmZlNzUwMWI1M2E1ZjllNjJkOTI5YWFjZjg2NzUwNTA3YjA0OWE4OGY1MTY0MGFhZDljNDFlYzEzMmE",
      link: "https://gitlab.com/rahul_799/drawing-using-opencv",
      img: "https://github.com/rahul_799.png?size=50",
      intro_full:
        "Here is my python source code for QuickDraw - an online game developed by google.",
      tag: []
    },
    {
      title: "plagarism-checker",
      id: 123,
      btnid: 1123,
      intro:
        "Web application of Plagiarism Checker using Python-Flask. TF-IDF and cosine similarity is a very common technique. It allows the system to quickly retrieve documents similar to a search query. Similarly, based on the same concept instead of retrieving documents similar to a query, it checks for how similar the query is to the existing database file.",
      mentor: "Rahul Agrawal",
      mentor_email: "rahulagrawal799110@gmail.com",
      comm:
        "https://join.slack.com/t/plagarism-checker/shared_invite/enQtODQ2MTI1NDcxNTA0LWZjZDJjMDcxZTlkNTBkMjEzMWY3OWViYTlkNDk4MzNmNzU2YWYyZWJlMzc1YTU1ZGY3NjRiZWM0ZDNjZWRjNzA",
      link: "https://gitlab.com/rahul_799/plagarism-checker/",
      img: "https://github.com/rahul_799.png?size=50",
      intro_full:
        "Web application of Plagiarism Checker using Python-Flask. TF-IDF and cosine similarity is a very common technique. It allows the system to quickly retrieve documents similar to a search query. Similarly, based on the same concept instead of retrieving documents similar to a query, it checks for how similar the query is to the existing database file",
      tag: []
    },
    {
      title: "Ozone Calculator",
      id: 125,
      btnid: 1125,
      intro:
        "A calculator app written with flutter having advanced functions along with regular calculation abilities. Main focus in on the UI and UX",
      link: "https://github.com/OzoneApps/OzoneCalculator",
      mentor: "Abhi Jain",
      mentor_email: "devabhixda@gmail.com",
      comm: "https://t.me/joinchat/IgDgDxYG2Pkh-OUngbr0tA",
      img: "",
      intro_full: "Calculator app written with Flutter framework",
      tag: ["flutter", "flutter-apps", "calculator", "hybrid-application"]
    },
    {
      title: "Ozone Clock",
      id: 124,
      btnid: 1124,
      intro:
        "A clock app written with flutter framework, developed as a part of OzoneApps ecosystem for Lucid Project.",
      link: "https://github.com/OzoneApps/OzoneClock",
      mentor: "Abhi Jain",
      mentor_email: "devabhixda@gmail.com",
      comm: "https://t.me/joinchat/IgDgDxYG2Pkh-OUngbr0tA",
      img: "",
      intro_full: "Clock app written with Flutter framework",
      tag: ["flutter", "flutter-apps", "clock", "hybrid-apps"]
    },
    {
      title: "Voice email service",
      id: 126,
      btnid: 1126,
      intro:
        "Complete Voice based interaction for blinds to use email service effectively.",
      link: "https://github.com/CodefosterGS/Voice-Email",
      mentor: "Deshna Jain",
      mentor_email: "deshna66jain@gmail.com",
      comm: "https://groups.google.com/d/forum/voice-email-service-project",
      img: "",
      intro_full: "Voice Based email service for visually impaired",
      tag: []
    },

{
  "title": "Communify",
  "id": 127,
  "btnid": 1127,
  "intro": "Complete Voice based interaction for blinds to use email service effectively.",
  "link": "https://github.com/CodefosterGS/Communify",
  "mentor": "Ajinkya Taranekar",
  "mentor_email": "ajinkyataranekar@gmail.com",
  "comm": "https://join.slack.com/t/communify-workspace/shared_invite/enQtODU5Mzc0NTI2MDcxLWUzNzM0NDJmODZiZmQwZDI5M2EyODY5OGUyMWE1YTk0MWRhYzhmY2E2M2UzMTkyN2JjMWJiMDMwNTdiOTU5NDE",
  "img":  "",
  "intro_full": "Communify is an app, which have two parts speaker(host) and listeners. So, whenever the listener needs to ask doubt or interact with host it can raise hand in the app, or use hand gesture to ask doubt, such that his smartphone now serve as a mic.The main objective is to close communication gap. Such that the person who are disabled, who can’t interact and miss important sessions, can easily communicate with our application. The app will use various technologies and ideas like use of machine learning in transliteration and hand language to speech conversion, or simple translation using google translate api, or simple speech to text and vice versa.  Tech Stack will be:-  1. Python, along with Flask. 2. Flutter and Dart. 3. Some APIs",
  "tag": ['flutter', 'python', 'flutter-apps', 'flask', 'opensource', 'firebase']
},
{
  "title": "Expense Manager",
  "id": 128,
  "btnid": 1128,
  "intro": "Automatic expense logger and analyser",
  "link": "https://github.com/CodefosterGS/Expense-Manager",
  "mentor": "Abhishek Singh Baghel",
  "mentor_email": "abhisheksbaghel99@gmail.com",
  "comm": "https://join.slack.com/t/expense-manager-group/shared_invite/enQtODQ1MDc0MTM1ODc0LTk3NDdjMGVkZmFlZjI0MjhlMzI5ZmZmNDJkMWM2ZmY1N2UzYjk2NjFiYTA5NjU3MTVhNTk3NDkwMzQ2YjUwOWI",
  "img":  "",
  "intro_full": "Expense Manager is a Expense management mobile application that will read messages (SMS) to generate the expense report. It will show our monthly, weekly and daily online expenses and will give tips to invest and save money",
  "tag": []
},

    {
      title: "Rubik's Cube Solver",
      id: 129,
      btnid: 1129,
      intro:
        "Program to generate steps to solve all 3x3 scrambled Rubik's Cube.",
      link: "https://github.com/CodefosterGS/Rubik-Cube-Solver",
      mentor: "Ashutosh Mehra",
      mentor_email: "mehraashu1017@gmail.com",
      comm:
        "https://join.slack.com/t/cf-team-workspace/shared_invite/enQtODU3NzgxNTgwNTQ4LThmNGVlYzAyNjMxZTBjZTY4NDIwMjYyNmJkOWZiNmQzMWRmYTlhMDJmNDI5NjNhYWI4NTBlY2FkNGRkOTYzMDY",
      img: "https://github.com/mehraashu1017.png?size=50",
      intro_full:
        "This project is guide for beginners who want to solve any scrambled rubik’s cube. A visual guide which demonstrates steps to follow to solve rubik’s cube with speed.",
      tag: []
    },

{
  "title": "Image recoloring",
  "id": 130,
  "btnid": 1130,
  "intro": "This is a deep learning project that includes image detection and it's recoloring",
  "link": "https://github.com/CodefosterGS/Image-Recoloring",
  "mentor": "Yashsvi Sharma",
  "mentor_email": "yashsvi30201@gmail.com",
  "comm": "https://join.slack.com/t/imagerecoluring/shared_invite/enQtODYxMTM4NzAzNjU0LTA2NTRlMjRhYjA2OGQ4NzkxMmE5MGQzYjRiZDYxYjRjZDMxNmE2NTdmODAwMDIxNzRkMzY0OWM5N2I1NGEyYzA",
  "img":  "",
  "intro_full": "To utilize existing libraries and image processing techniques to create new and interesting filters and presets for images. For example - Coloring black and white images, Coloring selective portions of images, Enhancing image attributes like brightness, sharpness etc.",
  "tag": []
},
{
  "title": "Envisage",
  "id": 131,
  "btnid": 1131,
  "intro": "Data Analyser and Visualize",
  "link": "https://github.com/CodefosterGS/Envisage",
  "mentor": "Soham Chhapre",
  "mentor_email": "1899sohamchhapre@gmail.com",
  "comm": "https://t.me/joinchat/LeaDFxfUucH8d87O0YFuLw",
  "img":  "https://github.com/mehraashu1017.png?size=50",
  "intro_full": "Once file is uploaded on the basis of file type system should display analytics:For text based files basic text processing is done along with the parse tree of the text.For Excel and CSV generate a table on webpage along with the search on any column .For Image RGB desegregation of image and changing dimension of image.For Video apply mask on video and crop video and download option available for downloading the processed video",
  "tag": []
},
// {
//   "title": "Fitofy-India",
//   "id": 132,
//   "btnid": 1132,
//   "intro": "Fitofy-India",
//   "link": "https://github.com/SaumyaSingh1/Fitofy-India ",
//   "mentor": "Saumya Singh",
//   "mentor_email": "singhsaumyas150@gmail.com",
//   "comm": "https://groups.google.com/d/forum/fitofy-india",
//   "img":  "",
//   "intro_full": "An android application for Fit and Healthy Nation .In 21st century , people believe that technological innovations is prominent cause of stressful lives, inactive lifestyle and unfit society. We will use technology to make our India Fit 💙Various features include : Gym At Home , Yoga Training,  Health Tips, Pedometer , Speed Test .This application has plenty of features on which newbies can work .",
//   "tag": ["java",
// "android",
// "ui",
// "ux-design",
// "kotlin",
// "easy-to-use",
// "userfriendly",
// "software",
// "opensource",
// "github",
// "mobile-development",
// "android-studio",
// "androiddevchallenge"]
// },
{"title": "Resume-Station", "id": 133, "btnid": 1133, "intro": "This is a simple resume making web application where the user has to simply fill a form with his details and the resume is automatically generated.", "mentor": "Pragati Verma", "mentor_email": "itispragativerma@gmail.com", "comm": "https://gitter.im/Resume-station/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link", "link": "https://github.com/PragatiVerma18/Resume-Station", "img": "https://github.com/PragatiVerma18.png?size=50", "tag": [], "intro_full": "This is a simple resume making web application where the user has to simply fill a form with his details and the resume is automatically generated."}, {"title": "debkal", "id": 134, "btnid": 1134, "intro": "it is an automated script that converts a Debian based OS to Kali Linux tested on Ubuntu and Debian here I am trying to create a GUI version of same and even add some more Conversion options and some error tolerance", "mentor": "Anurag batra", "mentor_email": "anuragbatra1999@gmail.com", "comm": "https://gitter.im/debkal/", "link": "https://github.com/DevelopedByAnurag/debkal", "img": "https://github.com/DevelopedByAnurag.png?size=50", "tag": ["debkal", "kali-linux", "converts", "ubuntu", "debian", "python3"], "intro_full": "A automated Script that converts a Debian based OS to Kali Linux tested on Ubuntu and Debian"}, {"title": "WEB CRAWLER", "id": 135, "btnid": 1135, "intro": "A python web crawler that fetches nearly 10 billion pages of https://www.speedtest.net to fetch download speed, upload speed, latency, date, distance, country code, server ID, server name, sponsor name, sponsor URL, connection_mode, isp name, isp rating, test rank, test grade, test rating, path.", "mentor": "Debojyoti Sinha", "mentor_email": "sinha.debojyoti75@gmail.com", "comm": "https://join.slack.com/t/ooklawebcrawler/shared_invite/enQtODQzMDg5MDEwNDE5LTdlZGNiMzg1MDljMDYwMjkyMWFhOTRmYWExNGZjMGI0NWU2MDc4NmU5N2YyY2IyMDk3OTdjYTk5ZWI0ZDU2MGE", "link": "https://github.com/sinha-debojyoti/Ookla-Speedtest.net-Crawler", "img": "https://github.com/sinha-debojyoti.png?size=50", "tag": ["ookla", "speedtest", "python", "bs4", "webcrawler"], "intro_full": "A python web crawler that fetches nearly 10 billion pages of https://www.speedtest.net to fetch download speed, upload speed, latency, date, distance, country code, server ID, server name, sponsor name, sponsor URL, connection_mode, isp name, isp rating, test rank, test grade, test rating, path."}, {"title": "Amethi", "id": 136, "btnid": 1136, "intro": "This is demo web page to know about city Amethi.", "mentor": "Anubhav Singh", "mentor_email": "anubhavssingh177@gmail.com", "comm": "https://join.slack.com/t/realamethi/shared_invite/enQtODM2OTMwMDc0OTgyLTk4YzlhYjk5ZDI0YWYwZjg1NjI2ZmU4MTNiYjBjZWQ5OGIwYmM3ODFlMjY5MzI5NzYwMmI4NDM3ZjkwYzcyZGI", "link": "https://github.com/anubhavsingh16/iCalculator", "img": "https://github.com/anubhavsingh16.png?size=50", "tag": ["ios-app", "swift5", "xcode11", "ui-kit", "macos", "slack", "github", "git", "icalculator", "communication", "calculator-application"], "intro_full": "This is Calculator app for iPhone and iPad."}, {"title": "Write-It-Away", "id": 137, "btnid": 1137, "intro": "To create a repository of literary enthusiasts and their works", "mentor": "Siba Smarak Panigrahi", "mentor_email": "sibasmarak.p@gmail.com", "comm": "https://join.slack.com/t/write-it-away/shared_invite/enQtODU0NTk0OTUzNzgwLTU4MmJiYTJhYzhjMTQ2NGEzYTg1MjhjZWQ2OTNhYjdmMWFlZTZmNmU2YWJhZTE3ODNjNzMwZDMyMDE4YjE0NmU", "link": "https://github.com/sibasmarak/writeitout.github.io", "img": "https://github.com/sibasmarak.png?size=50", "tag": [], "intro_full": "The website for removing your frustration"}, {"title": "Moviepedia", "id": 138, "btnid": 1138, "intro": "List of movies their actor/actress", "mentor": "Samagra Gupta", "mentor_email": "samagraguptajpr@gmail.com", "comm": "https://gitter.im/samagragupta/Moviepedia", "link": "https://github.com/samagragupta/Moviepedia", "img": "https://github.com/samagragupta.png?size=50", "tag": [], "intro_full": "List of Movies and their Actors/Actress "}, {"title": "AutoChain", "id": 139, "btnid": 1139, "intro": "A decentralized blockchain for the network for automobile ownership.", "mentor": "Vivek Raj", "mentor_email": "vivekraj3200@gmail.com", "comm": "https://join.slack.com/t/kwocprojects/shared_invite/enQtODU3NDMwNDEwNDg2LWU4ZjY2YzgzODA1MjU3ZmI1Mzk5ZTY2Njg3MGZlNjhmMTAwNTYxNjFmMjJlYzA5MDdjMzM1MGRlZGRhN2VlM2M", "link": "https://github.com/vivekrj0/AutoChain", "img": "https://github.com/vivekrj0.png?size=50", "tag": [], "intro_full": "A decentralized blockchain for the network for automobile ownership."}, {"title": "TraBot", "id": 140, "btnid": 1140, "intro": "Trabot is a simple Telegram bot to recommend places around you based on your mood.", "mentor": "Swarup Ghosh, Nisha", "mentor_email": "swarup.ghosh@gdgu.org", "comm": "https://t.me/trabotters", "link": "https://github.com/gdgu/trabot", "img": "https://github.com/gdgu.png?size=50", "tag": ["python", "overpass-api", "mood", "chatbot", "telegram-bot", "flask", "hackathon", "app-engine"], "intro_full": "TraBot is simple Telegram bot to recommend places around you based on your mood."}, {"title": "executor", "id": 141, "btnid": 1141, "intro": "A command line tool to automate execution and testing process for competitive websites", "mentor": "Yash M Kothari", "mentor_email": "yashkothari199767@gmail.com", "comm": "https://gitter.im/Kharagpur-Winter-of-Code/executor", "link": "https://github.com/CaptainDaVinci/executor", "img": "https://github.com/CaptainDaVinci.png?size=50", "tag": [], "intro_full": "A command line tool for running C and C++ code against sample test cases on SPOJ and Codeforces."}, {"title": "Fitofy-India", "id": 142, "btnid": 1142, "intro": "An android application for a Healthy and Fit Nation .", "mentor": "Saumya Singh", "mentor_email": "singhsaumyas150@gmail.com", "comm": "https://join.slack.com/t/fitofy-saumyasingh/shared_invite/enQtODU2MDg5MTk5MDcyLTdkNTU5YmNiNmFkOTFkZjY4M2NkNjUzYjY3NzFjNGQyYzQ2M2ZkZDY2OGZlYzE0OWZjNGVmYWNiMzVlNjQ1MGY", "link": "https://github.com/SaumyaSingh1/Fitofy-India", "img": "https://github.com/SaumyaSingh1.png?size=50", "tag": ["java", "android", "ui", "ux-design", "kotlin", "easy-to-use", "userfriendly", "software", "opensource", "github", "mobile-development", "android-studio", "androiddevchallenge"], "intro_full": "An android application for a Healthy and Fit Nation . Appliaction Video : https://drive.google.com/open?id=1EDsmbbfC6vOWWcHLmBkHyuT21jcMMv-t"}, {"title": "May-May", "id": 143, "btnid": 1143, "intro": "It\'s a meme bot that tweets the most popular memes on Reddit. ", "mentor": "Mukul Mehta", "mentor_email": "mukul.csiitkgp@gmail.com", "comm": "https://join.slack.com/t/may-maybot/shared_invite/enQtODQzNTk4NjUwMzA2LTUxOTdkZGFiYTNiOGZlM2JkNzEzNTEzNWU1MzM0NTNhYjNjYWIwM2Y1YTlkMWZmMDM3YjdiZmY2N2QzZjc5NDA", "link": "https://github.com/mukul-mehta/may-may", "img": "https://github.com/mukul-mehta.png?size=50", "tag": ["python", "twitter-bot", "scraping"], "intro_full": "A bot that tweets the top memes of the day scraped from Reddit and other popular Social Media. "}, {"title": "Hand Written Digit Predictor", "id": 144, "btnid": 1144, "intro": "This is a basic  Neural Network model trained to predict hand written digits live by taking input using canvas draw board . Famous MNIST dataset is used for training the model. ", "mentor": "Sandeep Yadav", "mentor_email": "sandeepyadav2133@gmail.com", "comm": "https://t.me/joinchat/OMelVRLyXDs6FwB31b5ldg", "link": "https://github.com/sandeep021/Handwritten-digit-predictor-using-MNIST-data-set", "img": "https://github.com/sandeep021.png?size=50", "tag": [], "intro_full": null}, {"title": "My Ml Tool Kit", "id": 145, "btnid": 1145, "intro": "As the project title suggests, it is a ml tool box which contains pre-trained models on computer vision,object detection,facial recognition", "mentor": "vedha krishna yarasuri", "mentor_email": "vedhakrishnapanchami@gmail.com", "comm": "https://gitter.im/yvkrishna/MyMlToolKit?utm_source=share-link&utm_medium=link&utm_campaign=share-link", "link": "https://github.com/yvkrishna/AI-webapp", "img": "https://github.com/yvkrishna.png?size=50", "tag": [], "intro_full": "This repo is about Usinig AI features like `computer vision` , `Facial Recognition` ,`Object detection`,`Handwriting letters and numbers detection` and many more features which will be added later"},
 {"title": "Productify", "id": 146, "btnid": 1146, "intro": "Productify is a Chrome Extension that aims to increase the efficiency of an everyday user on the internet. In this modern age where internet addiction has become rampant, it is productify that comes to your rescue. The basic idea behind the extension is to provide users with a wholesome and productive browsing experience on the internet. This is done by providing the user with the tools to control what he/she views on the internet and various other features that will assist him/her in browsing productively. Productify allows the user to block websites that he considers to be distracting, moving it out of his way. Websites can be unblocked at user\'s discretion. Users can find the meaning, translation and pronunciation of text on a website by selecting and right clicking it. Productify also comes with its own mobile app! Users can save articles from a website and view it on their app (offline). Words searched for- by the user are stored into a personalized dictionary which is made available on the mobile app. Simultaneously, Productify displays usage statistics (time spent on websites, number of articles saved, number of words searched for meaning,etc) of the user that will provide a measure of his productiveness.", "mentor": "Muskan Khedia", "mentor_email": "muskan.khedia2000@gmail.com", "comm": "https://gitter.im/COSS-Jarvis/community", "link": "https://github.com/muskankhedia/Productify", "img": "https://github.com/muskankhedia.png?size=50", "tag": [], "intro_full": "Increase your web browsing productivity and improve the experience with added comforts which this extension does."}, {"title": "Swachh Amrita", "id": 147, "btnid": 1147, "intro": "This is web application which is built to provide easy management and registration of events for the authorities conducting the event and the students who are taking part in the event. This application is mainly focused on the events with green initiatives like clean up drives. Basically, events are scheduled and shown on the website and interested students can register. There are different roles in the web application namely Event Managers, Volunteers, Participants and Administrator. Users are supposed to sign up for the first time. Admin will give access to users as event managers after contacting him according to the requirement. They can create events and add teams and assign volunteers to each and every team. Students can directly register for the event and join a particular team. Then users who are assigned as volunteers by event managers can manage the team like check-in and check out the participants during the event. Event Managers can see the statistics of the registrations of a particular event.", "mentor": "Abhishek Bvs", "mentor_email": "bvsabhishek@gmail.com", "comm": "https://gitter.im/Swacch-Amrita/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link", "link": "https://github.com/abhishekbvs/swachh-amrita/", "img": "https://github.com/abhishekbvs.png?size=50", "tag": [], "intro_full": "Web application for clean-up drives registration"}, {"title": "CInfo(Computer Information)", "id": 148, "btnid": 1148, "intro": "CInfo is a python based utility tool to gather system,network, software,hardware,file related information and export to text file.", "mentor": "Ravishankar Chavare", "mentor_email": "Chavare.ravi123@gmail.com", "comm": "https://join.slack.com/t/cinfo-group/shared_invite/enQtODU3Nzc2OTUwMjk1LTQxNzdhNmI1MjJkMjYxMjM2OTIyOTMwYzkyMDZhMDU2OGE5ZDliMWEwZWVmN2Q4ZmMzOTQ0NThmMjMwZmU4OTk", "link": "https://github.com/chavarera/Cinfo", "img": "https://github.com/chavarera.png?size=50", "tag": ["python", "information-gathering-tools", "computer", "networking", "system-information", "cinfo", "hardware-information"], "intro_full": "Cinfo is an python based tool to gather system related information"}, {"title": "LearnARF", "id": 149, "btnid": 1149, "intro": "LearnARF is a Flutter application that uses Google\'s ARCore to spawn 3D models into the real world. Additionally, it uses the Sceneform SDK to make it easier to handle 3D models.\\n\\nThe back-end is written using BLoC, or Business Logic Component.\\n\\nThis app is made for the sole purpose of helping students get started with Open Source, Flutter, and Augmented Reality.", "mentor": "Akshansh Bhanjana", "mentor_email": "akshansh2000@gmail.com", "comm": "https://join.slack.com/t/learnarf/shared_invite/enQtODYyMjAzMjY3MjU0LWM4YjRlNDlkNDM2ZGZkY2MzMzk5OTQ5ZmVhYmQzZmYyMTU5MGE2MTk4ZWMwZGQ1MDg4MmZjNjlkNzAwNTg0OTk", "link": "https://github.com/akshansh2000/learn_ar_flutter", "img": "https://github.com/akshansh2000.png?size=50", "tag": ["flutter", "flutter-apps", "flutter-app", "arcore", "arcore-android", "arcore-sdk", "google-arcore", "android", "android-application", "android-app", "android-sdk", "augmented-reality", "augmentedreality", "augmented-reality-applications", "augmented-reality-application"], "intro_full": "An app designed to help students get started with Flutter and Augmented Reality"}, {"title": "C# Scripting for Unity2D/3D", "id": 150, "btnid": 1150, "intro": "Open source re-usable C# Scripts for Unity Games, for handling small tasks such as character collision detection, gameflow and for coding components such as minimaps and UI elements.", "mentor": "Anirban", "mentor_email": "bloodraven166@gmail.com", "comm": "https://discord.gg/ujH7SEj", "link": "https://github.com/Anirban166/Unity-Scripts", "img": "https://github.com/Anirban166.png?size=50", "tag": [], "intro_full": ":beginner: C# scripts for Unity Games."}, {"title": "Driver Safety Interface", "id": 151, "btnid": 1151, "intro": "While driving, the driver\'s behaviour may be continuously monitored through 2-D pictures clicked by a camera placed on the dashboard (pi-camera), and the driver is immediately notified if he/she is found to be distracted (through alert tones using pi).", "mentor": "Vishal Singh", "mentor_email": "singhvishal0304@gmail.com", "comm": "https://gitter.im/Driver-Safety-Interface", "link": "https://github.com/singhv1shal/Driver-Safety-Interface", "img": "https://github.com/singhv1shal.png?size=50", "tag": [], "intro_full": null}, {"title": "Interview Preparation Kit", "id": 152, "btnid": 1152, "intro": "https://www.hackerrank.com/interview/interview-preparation-kitnGive Solvution of all hacker-rank Interview preparation kit problems in c++ , java and python . And also add Competitive-programing algorithms .", "mentor": "Sundaram Dubey", "mentor_email": "dubesundaram99@gmail.com", "comm": "https://chat.whatsapp.com/CYABcATwQVK0Yw5IfpgUvn", "link": "https://github.com/maze-runnar/interview-preparation-kit", "img": "https://github.com/maze-runnar.png?size=50", "tag": ["hackerrank", "interview-preparation", "cpp", "java"], "intro_full": null}

]
;
/*

syntax  for the projects array element
{
  "title": "Fitofy-India",
  "id": 132,
  "btnid": 1132,
  "intro": "Fitofy-India",
  "link": "https://github.com/SaumyaSingh1/Fitofy-India ",
  "mentor": "Saumya Singh",
  "mentor_email": "singhsaumyas150@gmail.com",
  "comm": "https://groups.google.com/d/forum/fitofy-india",
  "img":  "",
  "intro_full": "An android application for Fit and Healthy Nation .In 21st century , people believe that technological innovations is prominent cause of stressful lives, inactive lifestyle and unfit society. We will use technology to make our India Fit 💙
Various features include : Gym At Home , Yoga Training,  Health Tips, Pedometer , Speed Test .
This application has plenty of features on which newbies can work .",
  "tag": ["java",
"android",
"ui",
"ux-design",
"kotlin",
"easy-to-use",
"userfriendly",
"software",
"opensource",
"github",
"mobile-development",
"android-studio",
"androiddevchallenge"]
}

*/

  var searchRes = cards;

  function findMatches(wordToMatch, cards) {
    if (wordToMatch === "") {
      return cards;
    } else {
      var options = {
        findAllMatches: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 50,
        minMatchCharLength: 1,
        keys: ["intro_full", "link", "tag", "title", "mentor"]
      };
      var fuse = new Fuse(cards, options);
      var result = fuse.search(wordToMatch);
      return result;
    }
  }

  var isEqual = function(value, other) {
    // Get the value type
    var type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen =
      type === "[object Array]" ? value.length : Object.keys(value).length;
    var otherLen =
      type === "[object Array]" ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    // Compare two items
    var compare = function(item1, item2) {
      // Get the object type
      var itemType = Object.prototype.toString.call(item1);

      // If an object or array, compare recursively
      if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
        if (!isEqual(item1, item2)) return false;
      }

      // Otherwise, do a simple comparison
      else {
        // If the two items are not the same type, return false
        if (itemType !== Object.prototype.toString.call(item2)) return false;

        // Else if it's a function, convert to a string and compare
        // Otherwise, just compare
        if (itemType === "[object Function]") {
          if (item1.toString() !== item2.toString()) return false;
        } else {
          if (item1 !== item2) return false;
        }
      }
    };

    // Compare properties
    if (type === "[object Array]") {
      for (var i = 0; i < valueLen; i++) {
        if (compare(value[i], other[i]) === false) return false;
      }
    } else {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          if (compare(value[key], other[key]) === false) return false;
        }
      }
    }

    // If nothing failed, return true
    return true;
  };

  var searchInput = $(".searchTerm");
  function displayMatches() {
    var matchArray = findMatches(searchInput.val(), cards);
    if (!isEqual(searchRes, matchArray)) {
      searchRes = matchArray;
      displayRes();
    }
  }

  searchInput.keyup(displayMatches);

  function displayRes() {
    var str = "";
    $.each(searchRes, function(k, v) {
      var list = "";
      var i = 0;
      var tagcolor = "#8e44ad";
      var len = v.tag.length;
      for (i = 0; i < len; i++) {
        tagcolor =
          langColor[v.tag[i]] ||
          randcolors[Math.floor(Math.random() * randcolors.length)];
        list +=
          '<li style="background: ' +
          tagcolor +
          '" >\
              <div class="tag click-to-search">' +
          v.tag[i] +
          "</div>\
            </li>";
      }

      str +=
        '<div class="cards">\
            <div class="card-item">\
              <div class="card-info">\
                <h2 class="card-title">' +
        v.title +
        '</h2>\
                <p class="card-intro">' +
        v.intro +
        '</p>\
            </div>\
            <div class="mentor"><p>Mentored by : <span>' +
        v.mentor +
        '</span></p></div>\
            <form id="form">\
          <ul class="tags custom">' +
        list +
        '\
          </ul>\
        </form>\
        <div class="wrap">\
             <a href="#" onclick="return false;" class="button2" id="' +
        v.btnid +
        '" class="modal-btn">Details</a>\
         </div>\
            </div>\
          </div>\
          <div class="modal" id="' +
        v.id +
        '">\
            <div class="modal-content">\
              <div class="modal-header">\
                <h3 class="header-title"><i class><img src="' +
        v.img +
        '" height="50" width="50"></i>' +
        '<a target="_blank" href="' +
        v.link +
        '">' +
        v.title +
        "</a>" +
        '</h3>\
                <div class="close fa fa-close"></div>\
              </div>\
              <div class="modal-body">\
                <p>' +
        v.intro_full +
        '</p>\
                <ul class="tags custom"><span class="icon-pricetags i-extra-small-box"></span>' +
        list +
        '\
                </ul>\
                <ul class="qwe">\
                <span>Mentor(s) : </span>\
                  <li>\
                    <div class="tag">' +
        v.mentor +
        " ( " +
        v.mentor_email +
        " ) " +
        '</div>\
                  </li>\
                </ul>\
               <ul class="qwe">\
                <span>Communication channel : </span>\
                  <li>\
                    <div class="tag comm" style="word-break: break-all;">' +
        v.comm +
        '</div>\
                  </li>\
                </ul>\
              </div>\
              <div class="modal-footer">\
                 <a href="' +
        v.link +
        '" target="_blank" " class="highlight-button-dark btn btn-round button xs-margin-bottom-five">\
                 </i><span>View Project</span></a>\
              </div>\
            </div>\
          </div>';
    });

    $(".container2").html(str);

    var btnno, no;
    var modBtn, modal, close, modContent;
    $(".button2").click(function() {
      btnno = $(this).attr("id");
      no = btnno - 1000;
      console.log(btnno);
      console.log(no);
      modBtn = $("#" + btnno);
      modal = $("#" + no);
      console.log(modBtn);
      (close = modal.find(".close")),
        (modContent = modal.find(".modal-content"));
      modal.css("display", "block");
      modContent
        .removeClass("modal-animated-out")
        .addClass("modal-animated-in");
    });

    // close modal when click on close button or somewhere out the modal content
    $(document).on("click", function(e) {
      var target = $(e.target);
      if (target.is(modal) || target.is(close)) {
        modContent
          .removeClass("modal-animated-in")
          .addClass("modal-animated-out")
          .delay(300)
          .queue(function(next) {
            modal.css("display", "none");
            next();
          });
      }
    });

    // When a tag is clicked, it goes to the search bar
    function onTagClick() {
      let tagText = this.innerText;
      searchInput.val(tagText);
      displayMatches();
    }

    v = $(".tag.click-to-search");
    v.click(onTagClick);

    v.css("cursor", "pointer");
  }

  displayRes();
});