import { NotificationContext, NotificationContextType } from "@/providers/NotificationProvider";
import { use } from "react";

export const useNotification = (): NotificationContextType => {
  const context = use(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};
