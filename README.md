# PlayGround

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/Aidar145/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/Aidar145/PlayGround)

- 🎮 [Open the project](https://omgithub.com/Aidar145/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=Aidar145%2FPlayGround).
- 💻 [Explore the source](https://github.com/Aidar145/PlayGround).
- 🛠️ [Check build runs](https://github.com/Aidar145/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/Aidar145/PlayGround/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/Aidar145).
- 🌍 [Create with OMGithub](https://omgithub.com).
<!-- omgithub:readme:end -->

## J.A.R.V.I.S.

Голосовой ассистент: `src/` — исходники, `dist/` — сборка (esbuild + статика).

```bash
npm install
npm run build
npm start          # http://localhost:3000
```

### APK (Android)

Требования: Node 22+, JDK 21, Android SDK 36.

```bash
npm install
npm run android:apk
# → android/app/build/outputs/apk/debug/app-debug.apk
```

APK подписан debug-ключом — передайте его на телефон и разрешите установку из неизвестного
источника. В приложении голос работает через нативный Android SpeechRecognizer и Android TTS
(нужен сервис распознавания речи, обычно Google); без него остаётся текстовый ввод.

GitHub Actions (workflow «Android APK») собирает APK и отдаёт его артефактом
`jarvis-debug-apk`.
