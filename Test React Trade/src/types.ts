export interface IParticipant {
    name?: string;
    еvents?: string;
    time: number;
    warranty: number;
    conditions: string;
    price: {
     bluePrice: string;
     redPrice: string;
     greenPrice: string;
    };
    actions: string;
    action: boolean;
   }