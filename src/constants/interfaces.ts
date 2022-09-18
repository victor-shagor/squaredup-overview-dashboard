export interface BarChartProps {
    categories: string[];
    series: { name: string; data: number[] }[];
  }

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

export interface PieChartProps{
    series: number[];
    label: string[];
    colors: string[];
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

export interface GuestAndVerifiedUsersProps{
    columnChartToggle: string;
    onClickToggle: (toggle: string) => void;
    guestAndVerifiedUsers: {guestUser: {name: string, data: number[]}, verifiedUser: {name: string, data: number[]}, category: string[]}
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

