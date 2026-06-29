import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Send,
  Trash2,
  User,
  Loader2,
  Sparkles,
} from "lucide-react";

const SUGGESTED_QUESTIONS = [
  "What is the overall attendance rate?",
  "Which students need attention?",
  "How many assignments are overdue?",
  "List all ongoing lessons.",
  "Who are the top performing students?",
  "Show teacher details.",
];

export function AIChat() {
  const { messages, isStreaming, error, sendMessage, clearMessages } = useChat();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;
    sendMessage(input);
    setInput("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (q: string) => {
    if (isStreaming) return;
    sendMessage(q);
    inputRef.current?.focus();
  };

  const isEmpty = messages.length === 0;

  return (
    <Card className="flex flex-col h-[600px] border-border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between py-3 px-4 border-b shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base font-semibold">Madrasa AI Assistant</CardTitle>
            <p className="text-xs text-muted-foreground">Powered by Gemini</p>
          </div>
          {isStreaming && (
            <Badge variant="outline" className="text-xs gap-1 ms-2 text-primary border-primary/30">
              <Loader2 className="h-3 w-3 animate-spin" />
              Thinking…
            </Badge>
          )}
        </div>
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearMessages}
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            title="Clear chat"
            data-testid="button-clear-chat"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>

      <ScrollArea className="flex-1 px-4 py-3">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full gap-5 py-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-7 w-7 text-primary" />
              </div>
              <p className="font-medium text-foreground">Ask me anything about your madrasa</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                I have full knowledge of students, teachers, attendance, lessons, and assignments.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center max-w-md">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSuggestion(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/50 text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors text-left"
                  data-testid={`button-suggestion-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 pb-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                data-testid={`message-${msg.role}-${msg.id}`}
              >
                <div
                  className={`h-7 w-7 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted text-foreground rounded-tl-sm"
                  }`}
                >
                  {msg.content ? (
                    msg.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-headings:my-1 prose-strong:font-semibold">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )
                  ) : (
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span className="text-xs">Generating…</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
            {error && (
              <p className="text-xs text-destructive text-center px-4">{error}</p>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </ScrollArea>

      <div className="px-4 py-3 border-t shrink-0">
        <div className="flex items-center gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about students, attendance, lessons…"
            disabled={isStreaming}
            className="flex-1 text-sm h-9"
            data-testid="input-chat-message"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isStreaming}
            size="icon"
            className="h-9 w-9 shrink-0"
            data-testid="button-send-message"
          >
            {isStreaming ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
