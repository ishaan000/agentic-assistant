import { ConvAI } from "../components/ConvAI";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4 text-center">Meet Medha</h1>

        <div className="mb-8 text-center">
          <p className="text-lg mb-4">
            Medha is an intelligent virtual assistant designed to help you learn
            about Ishaan&apos;s work experiences and interests. She speaks both
            Hindi and English.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Start a conversation with Medha using the interface below!
          </p>
        </div>

        <ConvAI />
      </div>

      <footer className="w-full text-center py-4 text-sm text-slate-500 mt-auto">
        Powered by <span className="font-medium">Eleven Labs</span>
      </footer>
    </main>
  );
}
