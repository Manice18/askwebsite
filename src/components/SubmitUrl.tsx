"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Input } from "@nextui-org/react";
import { Rocket } from "lucide-react";

export const SubmitUrl = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const handleSetUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  return (
    <div className="flex size-full flex-col items-center justify-center space-y-10 p-24">
      <h1 className="text-3xl">Chat with any website</h1>
      <div className="flex space-x-4">
        <Input
          label="Website Url"
          className="h-14 min-w-[320px] max-w-[500px]"
          radius="sm"
          onChange={handleSetUrl}
          value={url}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
            }
          }}
        />
        <Button
          className="h-14 w-full"
          radius="sm"
          onClick={() => {
            router.push(`/${url}`);
          }}
        >
          Let&apos;s chat <Rocket className="size-5" />
        </Button>
      </div>
    </div>
  );
};
