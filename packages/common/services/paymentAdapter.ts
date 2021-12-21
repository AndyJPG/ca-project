import {PaymentService} from "../useCases/ports";
import {PriceCents} from "../domain/shared-kernel";

export function usePayment(): PaymentService {
    return {
        tryPay(amount: PriceCents): Promise<boolean> {
            return new Promise(resolve => setTimeout(() => resolve(true), 450))
        }
    }
}
