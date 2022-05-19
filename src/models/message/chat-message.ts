interface ChatMessageProps {
  from: string;
  message: string;
}

class ChatMessage {
  private from: string;
  private message: string;

  constructor({ from, message }: ChatMessageProps) {
    this.from = from;
    this.message = message;
  }
}

export default ChatMessage;
