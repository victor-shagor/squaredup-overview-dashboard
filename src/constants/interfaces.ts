
export interface MetricCardProps {
    icon?: any;
    svg?: any;
    rate?: string;
    title?: string;
    number?: number;
    direction?: string;
    change?: (e: any) => void;
    period?: any;
  }

export interface ChartProps{
    series: number[] | UserMetric[];
    options: any;
    width: number|string;
    height: number;
}

export interface ButtonProps {
  onClick: () => void
  active: boolean;
  text: string;
  testId?: string
}

export interface ResumeDetailsPieChartProps{
 label: string[];
 series: number[]
}

export interface SelectProps {
    array: { value: any; name: string }[];
    change?: (e: any) => void;
  }

export interface TrendingCardProps{
    loading?: boolean;
    className?: string;
    array: {_id: string; count: number}[]
}

export interface ResumeDetailsProps{
    sharedAndUnsharedResumes: {sharedResumes: number, unSharedResume: number}
}

interface UserMetric{
  name: string, data: number[]
}

export interface UserMetricBarchartProps{
  categories: number|string[]
  series: UserMetric[]
}

export interface GuestAndVerifiedUsersProps{
    columnChartToggle: string;
    onClickToggle: (toggle: string) => void;
    guestAndVerifiedUsers: {guestUser: UserMetric, verifiedUser: UserMetric, category: string[]}
  }


interface ActiveUser{
  firstName: string, lastName: string, email:string, created: string
}
export interface ActiveUserProps{
  onClickActiveUserToggle: (toggle: string) => void,
  activeUserToggle: string,
  activeUsers: ActiveUser[],
}

export interface ActiveUserTableProps{
  users: ActiveUser[]
}

