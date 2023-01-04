export interface DoTiming {
    count:number;
    start(index:number):void;
    stop(): void;
}
