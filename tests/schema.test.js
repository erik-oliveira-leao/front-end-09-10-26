const assert = require('node:assert/strict');
const { test } = require('node:test');
const { graphql } = require('graphql');
const schema = require('../schema');

test('returns events with their speakers and locations', async () => {
    const result = await graphql(
        schema,
        `{
            events {
                id
                name
                speakers {
                    name
                }
                location {
                    city
                }
            }
        }`
    );

    assert.equal(result.errors, undefined);
    assert.deepEqual(JSON.parse(JSON.stringify(result.data.events)), [
        {
            id: '1',
            name: 'Tech Summit 2024',
            speakers: [{ name: 'Alice Santos' }, { name: 'Carlos Silva' }],
            location: { city: 'São Paulo' }
        },
        {
            id: '2',
            name: 'Data Science Conference',
            speakers: [{ name: 'Mariana Costa' }],
            location: { city: 'Rio de Janeiro' }
        }
    ]);
});

test('returns the event matching the requested ID', async () => {
    const result = await graphql(
        schema,
        '{ event(id: "2") { id name } }'
    );

    assert.equal(result.errors, undefined);
    assert.deepEqual(JSON.parse(JSON.stringify(result.data.event)), {
        id: '2',
        name: 'Data Science Conference'
    });
});

test('returns null when the event ID does not exist', async () => {
    const result = await graphql(
        schema,
        '{ event(id: "missing") { id name } }'
    );

    assert.equal(result.errors, undefined);
    assert.equal(result.data.event, null);
});
