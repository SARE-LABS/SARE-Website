export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  duration?: number; // Duration in milliseconds, optional
  onClose?: () => void; // Optional callback when the toast is closed
}