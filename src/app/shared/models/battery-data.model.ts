export interface BatteryData {
    academyId: number;
    batteryLevel: number;
    employeeId: string;
    serialNumber: string;
    timestamp: string;
}

export type BatteryDataExt = BatteryData & {
    date?: string;
    batteryAverage?: number;
}
