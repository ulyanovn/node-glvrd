'use strict';

import test from 'ava';
import sinon from 'sinon';
import nodeGlvrd from './index';
import endpointsSpec from './endpointsSpec.js';

test.beforeEach(t => {
  t.context.glvrd = new nodeGlvrd('testApp');
  t.context.requestStub = sinon.stub();

  t.context.glvrd.req = t.context.requestStub;
});

test('should throw on empty appName', t => t.throws(() => { var t = new nodeGlvrd(); }, Error));

test('should save appName', t => t.is(t.context.glvrd.params.app, 'testApp'));

test('should check server status', t => {
  t.context.requestStub.yields(null, null, endpointsSpec.endpoints.getStatus.responseExample);

  return t.context.glvrd.checkStatus().then(
    response => t.same(response, endpointsSpec.endpoints.getStatus.responseExample)
  );
});

test('should create session and save session id & lifespan value', t => {
  var responseExample = endpointsSpec.endpoints.postSession.responseExample;

  t.context.requestStub.yields(null, null, responseExample);

  return t.context.glvrd._createSession().then(response => {
    t.same(response, responseExample);
    t.is(t.context.glvrd.params.lifespan, responseExample.lifespan);
    t.is(t.context.glvrd.params.session,  responseExample.session);
  });
});
