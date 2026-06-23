const db = firebase.database();
const messagesRef = db.ref("messages");

// 📥 Load messages live
messagesRef.on("child_added", snap => {
  const msg = snap.val();
  const div = document.createElement("div");
  div.textContent = msg;
  document.getElementById("messages").appendChild(div);
});

// 📤 Send message
document.getElementById("sendBtn").onclick = () => {
  const input = document.getElementById("msgInput");
  const text = input.value.trim();

  if (text.length === 0) return;

  messagesRef.push(text);
  input.value = "";
};
