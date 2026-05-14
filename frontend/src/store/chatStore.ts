import { create } from "zustand";

interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  text: string;
  time: string;
}

interface ChatStore {
  messages: ChatMessage[];

  addMessage: (message: ChatMessage) => void;

  clearMessages: () => void;

  loadMessages: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({

  messages: [],

  addMessage: (message) =>
    set((state) => {

      const updated = [
        ...state.messages,
        message
      ];

      localStorage.setItem(
        "aionex_chat_history",
        JSON.stringify(updated)
      );

      return {
        messages: updated
      };
    }),

  clearMessages: () => {

    localStorage.removeItem(
      "aionex_chat_history"
    );

    set({
      messages: []
    });
  },

  loadMessages: () => {

    const saved = localStorage.getItem(
      "aionex_chat_history"
    );

    if (saved) {

      set({
        messages: JSON.parse(saved)
      });

    }
  }

}));