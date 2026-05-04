export interface IEventCardProps {
  /** Event title */
  title: string;
  /** Call type (e.g., "Video", "Audio", "In-Person") */
  callType?: string;
  /** Start time as ISO string or Date */
  fromTime: string | Date;
  /** End time as ISO string or Date */
  toTime: string | Date;
  /** Event description */
  description?: string;
  /** Tenant name or ID */
  tenantId?: string;
  /** List of participant names to display */
  participantNames?: string[];
  /** Whether this card is selected */
  isSelected?: boolean;
  /** Click handler for the card */
  onClick?: () => void;
  /** Show blue status dot */
  showBlueDot?: boolean;
  /** Whether to show the black dot (time has passed) */
  showBlackDot?: boolean;
  /** Custom countdown time string (optional) */
  countdownDisplay?: string;
  /** Progress percentage (0-100) for countdown */
  progress?: number;
  /** Custom class name */
  className?: string;
}
