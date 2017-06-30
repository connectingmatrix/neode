import {assert, expect} from 'chai';
import Neode, {Model} from '../src/index';
import neo4j from 'neo4j-driver';
import {Driver} from 'neo4j-driver/lib/v1/driver';

describe('index.js', () => {
    const instance = require('./instance');

    it('should instantiate', () => {
        expect(instance).to.be.an.instanceOf(Neode);
        expect(instance.driver).to.be.an.instanceOf(Driver);
    });

    it('should run cypher query', (done) => {
        instance.cypher('MATCH (n) RETURN count(n)')
            .then(res => {
                expect(res.records).to.be.an('array');
                expect(res.records.length).to.equal(1);

                done();
            })
            .catch(err => {
                done(err);
            });
    });

    it('should handle error in syntax query', (done) => {
        instance.cypher('MATCH (n) RETURN coutn(n)')
            .catch(err => {
                done();
            });
    });

    it('should handle a batch of queries', (done) => {
        const queries = [
            'MATCH (n) RETURN count(n)',
            {query: 'MATCH (n) WHERE n.name = {name} RETURN n', params: {name: 'name'}}
        ];

        instance.batch(queries)
            .then(res => {
                assert.isArray(res)
                expect(res.length).to.equal(2)
            })
            .then(done)
            .catch(done)
    });
});