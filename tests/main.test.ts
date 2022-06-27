import * as handler from "../src/handlers/main";
import { APIGatewayEvent, Context } from "aws-lambda";

describe("main test suite", () => {

  test("hellp serverless", async () => {
    const event: APIGatewayEvent = {} as APIGatewayEvent;
    const context: Context = {} as Context;

    await handler.hello(event, context, (error, response) => {
      expect(error).toBeUndefined();
      expect(response?.statusCode).toEqual(200);
      expect(response?.body).toBe("Go Serverless v1.0! Your function executed successfully!");
    });
  });

});
