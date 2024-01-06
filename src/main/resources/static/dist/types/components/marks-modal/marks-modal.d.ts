export declare class MarksModal {
    isopen: boolean;
    closeIcon: string;
    header: string;
    appearance: string;
    buttons: string;
    _buttons: Array<any>;
    arrayDataWatcher(buttons: any): void;
    private action;
    componentWillLoad(): void;
    private handleCancel;
    private handleAction;
    render(): any;
}
