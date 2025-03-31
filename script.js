const apiKey = "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"; // Замініть на ваш API ключ
const apiUrl = "https://api.openai.com/v1/completions"; // URL для API

let language = 'uk'; // Встановлено за замовчуванням на українську

languageSelect.addEventListener('change', () => {
  language = languageSelect.value;
});

sendBtn.addEventListener('click', () => {
  const userMessage = input.value.trim();
  if (userMessage) {
    addMessage('Ви: ' + userMessage);
    input.value = '';
    fetchAIResponse(userMessage);
  }
});

async function fetchAIResponse(userMessage) {
  loading.style.display = 'block';
  try {
    const response = await fetch('https://api.openai.com/v1/completions', { // Замініть URL на ваш API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage, language: 'uk' }) // Вказано мову українську
    });
    const data = await response.json();
    addMessage('ШІ: ' + data.reply); // Відображення відповіді українською
  } catch (error) {
    addMessage('ШІ: Вибачте, сталася помилка.');
  } finally {
    loading.style.display = 'none';
  }
}
fetch(url, {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + token // Ensure valid characters
    },
    body: JSON.stringify(data)
 })
 .then(response => response.json())
 .catch(error => console.error('Error:', error));
// Перемикання теми з плавною анімацією
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Зміна кольору фону відповідей
    const responseContainer = document.getElementById("responseContainer");
    if (document.body.classList.contains("dark-mode")) {
        responseContainer.style.setProperty("--response-bg-color", "#1e1e1e");
    } else {
        responseContainer.style.setProperty("--response-bg-color", "#f2f2f2");
    }
});

// Надсилання запиту до ШІ
document.getElementById("submitBtn").addEventListener("click", async () => {
    const userInput = document.getElementById("userInput").value;
    const responseContainer = document.getElementById("responseContainer");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const language = document.getElementById("languageSelect").value;
    const tone = document.getElementById("toneSelect").value;

    if (!userInput.trim()) {
        return; // Не надсилати порожній запит
    }

    try {
        // Додати відповідь ШІ
        const aiMessage = document.createElement("p");
        aiMessage.textContent = `ШІ: ${data.choices[0].text.trim()}`;
        responseContainer.prepend(aiMessage);

        // Очистити поле введення
        document.getElementById("userInput").value = "";
    } catch (error) {
        console.error("Сталася помилка:", error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Сталася помилка, спробуйте знову.";
        responseContainer.prepend(errorMessage);
    } finally {
        // Сховати значок завантаження
        loadingSpinner.style.display = "none";
    }
});