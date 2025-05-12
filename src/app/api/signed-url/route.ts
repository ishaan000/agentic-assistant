import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_AGENT_ID) {
      throw new Error("Missing NEXT_PUBLIC_AGENT_ID environment variable");
    }
    
    if (!process.env.ELEVENLABS_API_KEY) {
      throw new Error("Missing ELEVENLABS_API_KEY environment variable");
    }

    const url = `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${process.env.NEXT_PUBLIC_AGENT_ID}`;
    
    console.log(`Fetching signed URL from: ${url}`);
    
    const response = await fetch(url, {
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get signed URL: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.signed_url) {
      throw new Error("API response missing signed_url field");
    }
    
    return NextResponse.json({ signedUrl: data.signed_url });
  } catch (error) {
    console.error("Error getting signed URL:", error);
    return NextResponse.json(
      {
        error: `Failed to generate signed URL: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
