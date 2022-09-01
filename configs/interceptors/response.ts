import {Interceptor, InterceptorInterface, Action} from 'routing-controllers';
import {Service} from 'typedi';

@Interceptor()
@Service()
export class AutoResponseJSONInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any): any {
        if (typeof content === 'object')
            return JSON.stringify(Object.assign({message: 'ok'}, {data: content, code: 0}));
        return JSON.stringify(content);
    }
}
