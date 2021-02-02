// HELLO-WORLD Lambda function

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

exports.handler =  async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  
  console.log('request -->', JSON.stringify(event));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `Hello-World ${event.path}`
  }
  
}