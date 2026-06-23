const db = firebase.database();
const messagesRef = db.ref("messages");

// 🔔 Ήχος ειδοποίησης
const ding = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

// 🧹 Διαγραφή μηνυμάτων παλαιότερων από 24 ώρες
const oneDay = 24 * 60 * 60 * 1000;
const cutoff = Date.now() - oneDay;

messagesRef
  .orderByChild("timestamp")
  .endAt(cutoff)
  .once("value", snapshot => {
    snapshot.forEach(child => child.ref.remove());
  });

// 📥 Live λήψη μηνυμάτων
messagesRef.on("child_added", snap => {
  const data = snap.val();
  const msg = data.text;

  // Εμφάνιση στο παράθυρο
  const div = document.createElement("div");
  div.textContent = msg;
  document.getElementById("messages").appendChild(div);

  // 🔔 Ήχος
  ding.play().catch(() => {});

  // 🪟 Windows Notification
  if (Notification.permission === "granted") {
    new Notification("📨 Νέο μήνυμα", {
      body: msg,
      icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png"
    });
  }
});

// 📤 Αποστολή μηνύματος
document.getElementById("sendBtn").onclick = () => {
  const input = document.getElementById("msgInput");
  const text = input.value.trim();

  if (text.length === 0) return;

  messagesRef.push({
    text: text,
    timestamp: Date.now()
  });

  input.value = "";
};
