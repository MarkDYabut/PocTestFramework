export declare class MarksIntegration {
    isLoading: boolean;
    data: any;
    drivers: string[];
    fetchData(endpoint: string): Promise<void>;
    private handleNewDriver;
    private handleGetDrivers;
    private handleDeleteDrivers;
    render(): any;
}
