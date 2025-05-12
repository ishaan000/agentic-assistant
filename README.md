# Ishaan's Virtual Assistant

A voice-enabled AI assistant built with Next.js and ElevenLabs technology that provides real-time conversational interactions through speech.

## Features

- **Voice Conversations**: Engage in natural voice conversations with an AI assistant
- **Real-time Feedback**: Visual indicators show when the assistant is speaking or listening
- **ElevenLabs Integration**: Leverages ElevenLabs' advanced text-to-speech and speech-to-text capabilities
- **Responsive Design**: Clean, modern interface built with Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start interacting with the assistant.

## How It Works

1. Click "Start conversation" to activate the assistant
2. Grant microphone permissions when prompted
3. Speak naturally to the assistant
4. Watch the visual feedback as the assistant processes and responds
5. End the conversation by clicking "End conversation"

## Technical Stack

- **Frontend**: Next.js 15.3.2 with React 19
- **Voice API**: ElevenLabs via @11labs/react
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript