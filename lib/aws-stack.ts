// AWS-CDK Docs API-Reference
// https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html

import * as cdk from '@aws-cdk/core';
import { Bucket } from "@aws-cdk/aws-s3";
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as s3 from '@aws-cdk/aws-s3'
import * as s3deploy from '@aws-cdk/aws-s3-deployment'

// for defining stack and their resources of AWS

export class AwsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS-S3 Bucket Stack

    // new Bucket(this, 'MyFirstBucket', {
    //   versioned: true,
    // });
    // ==================================

    // AWS-LAMBDA FUNCTIONS

    // joining Lambda function from the folder that we created name (lambda) in our root folder
    // and calling in stack to create IaS (infrastructure as code)
    // TIP: ([ when we use fromAsset function from AWS it is important that first run cdk bootstrap and then deploy the code ])

    // const Lambda = new lambda.Function(this, 'new function', {
      // defining our runtime env --- 
      // runtime: lambda.Runtime.NODEJS_10_X,
    
      // defining our file in which we define our lambda function e.g=(hello is our filename and handler is our functions name) ---
      // handler: 'hello.handler',
    
      // defining our folder name, where our lambda function is lived ---
      // code: lambda.Code.fromAsset('lambda'),
    // }) 

    // create and API gateway so that browser can hit that REST url and perform some sort of action.

    // new apigw.LambdaRestApi(this, 'Endpoint', {
      // handler: Lambda
    // })
    // ===================================

    // AWS-AppSync and AWS-GraphQL

    const bucket = new s3.Bucket(this, 'MyNewBucket', {
      versioned: true
    })

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('./website-dist')],
      destinationBucket: websiteBucket,
      destinationKeyPrefix: 'web/static' // optional prefix in destination bucket
    });

  }
};
