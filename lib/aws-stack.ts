import * as cdk from '@aws-cdk/core';
import { Bucket } from "@aws-cdk/aws-s3";

export class AwsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'MyFirstBucket', {
      versioned: true,
    });
  }
};
