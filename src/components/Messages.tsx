import { type Message as TMessage } from "ai/react";
import { MessageSquare } from "lucide-react";

import Message from "./Message";

interface MessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="text-xl font-semibold text-white">
            You&apos;re all set!
          </h3>
          <p className="text-sm text-zinc-500">
            Ask you first question to get started
          </p>
        </div>
      )}
    </div>
  );
};
