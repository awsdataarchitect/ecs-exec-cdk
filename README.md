# Open-source example code for a read-only root file system in ECS using bind mounts implemented with CDK
This is a CDK project written in TypeScript that provisions a nginx web server with a read-only root file system on an ECS Fargate Cluster using bind mounts and running in a VPC with Public Subnets and associated IAM Roles/Policies, Security Groups, Route Tables, Internet Gateway and an Application Load Balancer. This example shows how you can enforce the Security Hub best practices with read-only root file system in ECS using bind mounts implemented with CDK

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
