import * as handler from '../src/handlers/main';
import {APIGatewayEvent, Context} from "aws-lambda";

test('hello', async () => {
    const event: APIGatewayEvent = {} as APIGatewayEvent;
    const context: Context = {} as Context;

    const callback = (error, response) => {
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe("string");
    };

    await handler.hello(event, context, callback);
});