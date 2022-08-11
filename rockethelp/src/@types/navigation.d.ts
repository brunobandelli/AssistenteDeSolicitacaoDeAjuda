export declare global {
import { Details } from './../screens/Details';
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            new: undefined;
            details: { orderId: string};
        }
    }
}