// 🔐 Base64 encoded Firebase config
const encodedConfig = {
  apiKey: "QUl6YVN5QXI0VWlEUkVIUVNRZmZUendIaEZmRzJZcW1rQS1SZGQw",
  authDomain: "aW50ZXJuYWwtbWVzc2FnZXMtNWNlOGMuZmlyZWJhcHBjb20uY29t",
  databaseURL: "aHR0cHM6Ly9pbnRlcm5hbC1tZXNzYWdlcy01Y2U4Yy1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwLw==",
  projectId: "aW50ZXJuYWwtbWVzc2FnZXMtNWNlOGM=",
  storageBucket: "aW50ZXJuYWwtbWVzc2FnZXMtNWNlOGMuZmlyZWJhc3RvcmFnZS5hcHA=",
  messagingSenderId: "ODQ5MTAwNDczMDc5",
  appId: "MTo4NDkxMDA0NzMwNzk6d2ViOmEzMjBkMzEyYWU5MjZjNmQ0ZGM5ZjI="
};

// 🔓 Decode
const firebaseConfig = {
  apiKey: atob(encodedConfig.apiKey),
  authDomain: atob(encodedConfig.authDomain),
  databaseURL: atob(encodedConfig.databaseURL),
  projectId: atob(encodedConfig.projectId),
  storageBucket: atob(encodedConfig.storageBucket),
  messagingSenderId: atob(encodedConfig.messagingSenderId),
  appId: atob(encodedConfig.appId)
};

// 🚀 Init Firebase
firebase.initializeApp(firebaseConfig);
