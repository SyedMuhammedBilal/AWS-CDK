import * as cdk from '@aws-cdk/core';
import { Bucket } from "@aws-cdk/aws-s3";

// for defining stack and their resources of AWS

export class AwsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS-S3 Bucket Stack

    // new Bucket(this, 'MyFirstBucket', {
    //   versioned: true,
    // });

    // AWS-LAMBDA FUNCTIONS


  }
};
