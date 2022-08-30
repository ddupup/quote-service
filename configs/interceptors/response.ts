import {Interceptor, InterceptorInterface, Action} from 'routing-controllers';

@Interceptor()
export class AutoResponseJSONInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any): any {
        if (typeof content === 'object')
            return JSON.stringify(Object.assign({message: 'ok'}, content));
        return JSON.stringify({message: content});
    }
}
