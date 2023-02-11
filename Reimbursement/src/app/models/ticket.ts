export interface Ticket{
    id: number;
    employeeId: number;
    status?: string;
    isPending: boolean;
    amount: number;
    description: String;
}