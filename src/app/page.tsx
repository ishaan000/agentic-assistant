import { ConvAI } from "../components/ConvAI";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center">
          Meet Medha
        </h1>

        <div className="mb-6 sm:mb-8 text-center px-2 sm:px-4">
          <p className="text-base sm:text-lg mb-3 sm:mb-4">
            Medha is an intelligent virtual assistant designed to help you learn
            about Ishaan&apos;s work experiences and interests. She speaks both
            Hindi and English.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            You can even ask her to send Ishaan an email for you — just speak,
            and she’ll handle the rest.
          </p>
        </div>

        <ConvAI />
      </div>
    </main>
  );
}
