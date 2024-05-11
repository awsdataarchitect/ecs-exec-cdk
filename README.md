# An open-source project demo of ECS Exec to access your containers on AWS Fargate by using AWS-CDK
This is a CDK project written in TypeScript that shows implementation og ECS Exec to access your containers on AWS Fargate by using AWS-CDK. This project provisions a nginx web server with a read-only root file system on an ECS Fargate Cluster using bind mounts and running in a VPC with Public Subnets and associated IAM Roles/Policies, Security Groups, Route Tables, Internet Gateway and an Application Load Balancer. ECS Exec is implemented by enforcing the Security Hub best practices with read-only root file system in ECS with bind mounts in the CDK code.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
