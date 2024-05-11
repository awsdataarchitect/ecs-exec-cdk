#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ecsStack } from '../lib/ecsStack';

const app = new cdk.App();
new ecsStack(app, 'ecsStack', {});