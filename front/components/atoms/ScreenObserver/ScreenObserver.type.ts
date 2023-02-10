export interface ScreenObserverProps {
  onInScreen?: () => void | Promise<void>;
  onOutScreen?: () => void | Promise<void>;
  isLoading?: boolean;
}
