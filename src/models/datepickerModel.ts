export interface CustomProps {
  color?: string | "";
  value?: Date;
  ref: React.RefObject<HTMLDivElement>;
  className?: string;
  text?: string;
  onClick?(): void;
}
