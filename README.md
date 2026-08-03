# facecopyapp

> Google AI Studio로 만든 AI 얼굴 복사 웹앱 — 텍스트 프롬프트로 얼굴 이미지를 생성하고 편집한다.

Google Gemini (`@google/genai`) 기반 React + Vite SPA. AI Studio에서 export한 프로젝트를 로컬에서 실행하고 확장할 수 있다.

## 기술 스택

- React 19 + TypeScript + Vite
- Google Gen AI SDK (`@google/genai`)
- Tailwind CSS v4
- Lucide Icons

## 시작하기

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## 프로젝트 구조

```text
src/
├── App.tsx       메인 앱 컴포넌트
├── main.tsx      엔트리포인트
└── index.css     Tailwind 스타일
```

## 비고

Google AI Studio에서 생성된 프로토타입 프로젝트. Facebook UI에서 영감을 받았다.
