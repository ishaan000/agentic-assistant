"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useConversation } from "@11labs/react";
import { cn } from "@/lib/utils";

async function requestMicrophonePermission() {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch {
    console.error("Microphone permission denied");
    return false;
  }
}

async function getSignedUrl(): Promise<string> {
  const response = await fetch("/api/signed-url");
  if (!response.ok) {
    throw Error("Failed to get signed url");
  }
  const data = await response.json();
  return data.signedUrl;
}

export function ConvAI() {
  const conversation = useConversation({
    onConnect: () => {
      console.log("connected");
    },
    onDisconnect: () => {
      console.log("disconnected");
    },
    onError: error => {
      console.log(error);
      alert("An error occurred during the conversation");
    },
    onMessage: message => {
      console.log(message);
    },
  });

  async function startConversation() {
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
      alert("No permission");
      return;
    }
    const signedUrl = await getSignedUrl();
    const conversationId = await conversation.startSession({ signedUrl });
    console.log(conversationId);
  }

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className={"flex justify-center items-center w-full"}>
      <Card className={"rounded-3xl backdrop-blur-sm bg-opacity-80 border border-opacity-30 shadow-lg w-full max-w-md"}>
        <CardContent className="px-3 py-4 sm:px-6 sm:py-6">
          <CardHeader className="px-2 py-2 sm:px-4 sm:py-3">
            <CardTitle className={"text-center text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)]"}>              {conversation.status === "connected"
                ? conversation.isSpeaking
                  ? `Agent is speaking`
                  : "Agent is listening"
                : "Disconnected"}
            </CardTitle>
          </CardHeader>
          <div className={"flex flex-col gap-y-3 sm:gap-y-4 text-center"}>
            <div className="relative flex justify-center items-center my-8 sm:my-12 mx-4 sm:mx-8">
              <div className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full blur-xl opacity-50 bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)]"></div>
              <div
                className={cn(
                  "orb z-10",
                  conversation.status === "connected" && conversation.isSpeaking
                    ? "orb-active animate-orb"
                    : conversation.status === "connected"
                    ? "animate-orb-slow orb-inactive"
                    : "orb-inactive"
                )}
              ></div>
            </div>

            <Button
              variant={"outline"}
              className={"rounded-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white border-none hover:opacity-90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"}
              size={"default"}
              disabled={
                conversation !== null && conversation.status === "connected"
              }
              onClick={startConversation}
            >
              Start conversation
            </Button>
            <Button
              variant={"outline"}
              className={"rounded-full border border-[var(--gradient-2)] text-[var(--gradient-2)] hover:bg-[var(--gradient-2)]/10 transition-all shadow-md text-sm sm:text-base"}
              size={"default"}
              disabled={conversation === null}
              onClick={stopConversation}
            >
              End conversation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
