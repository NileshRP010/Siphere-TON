import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorFeedbackProps {
  error: string | null;
  type?: "wallet" | "transaction" | "insurance" | "network";
  onRetry?: () => void;
  onDismiss?: () => void;
}

export function ErrorFeedback({
  error,
  type = "transaction",
  onRetry,
  onDismiss,
}: ErrorFeedbackProps) {
  if (!error) return null;

  const getErrorMessage = () => {
    switch (type) {
      case "wallet":
        return {
          title: "Wallet Connection Failed",
          description: error.includes("rejected")
            ? "Transaction was rejected by wallet. Please try again."
            : "Unable to connect to your TON wallet. Please check your wallet app and try again.",
          icon: WifiOff,
        };
      case "transaction":
        return {
          title: "Transaction Failed",
          description: error.includes("insufficient")
            ? "Insufficient balance to complete this transaction."
            : "Transaction failed. Please check your connection and try again.",
          icon: AlertTriangle,
        };
      case "insurance":
        return {
          title: "Insurance Claim Error",
          description:
            "Unable to submit insurance claim. Please verify your SIP details and try again.",
          icon: AlertTriangle,
        };
      case "network":
        return {
          title: "Network Error",
          description:
            "Unable to connect to TON network. Please check your internet connection.",
          icon: Wifi,
        };
      default:
        return {
          title: "Error",
          description: error,
          icon: AlertTriangle,
        };
    }
  };

  const { title, description, icon: Icon } = getErrorMessage();

  return (
    <Alert variant="destructive" className="mb-4">
      <Icon className="h-4 w-4" />
      <AlertDescription>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm mt-1">{description}</p>
          </div>
          <div className="flex gap-2 ml-4">
            {onRetry && (
              <Button variant="outline" size="sm" onClick={onRetry}>
                Retry
              </Button>
            )}
            {onDismiss && (
              <Button variant="ghost" size="sm" onClick={onDismiss}>
                Dismiss
              </Button>
            )}
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
}
