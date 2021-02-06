// HELLO-WORLD Lambda function

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

export async function handler (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  
  console.log('request -->', JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `Hello-World ${event.path}`
  } 
}; 
