import { ChatMessage } from "./";

interface MessageSettingsProps {
  from: string;
  message: string;
}

class MessageSettings {
  public message: ChatMessage;

  constructor({ from, message }: MessageSettingsProps) {
    this.message = new ChatMessage({ from, message });
  }
}

export default MessageSettings;
