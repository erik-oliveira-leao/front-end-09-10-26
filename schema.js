// schema.js
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const { events, speakers, locations } = require('./data');
// Definição do Tipo Evento
const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        date: { type: GraphQLString },
        speakers: {
            type: new GraphQLList(SpeakerType),
            resolve(parent) {
                return speakers.filter(speaker => parent.speakerIds.includes(speaker.id));
            }
        },
        location: {
            type: LocationType,
            resolve(parent) {
                return locations.find(location => location.id === parent.locationId);
            }
        }
    })
});

// Definição do Tipo Palestrante
const SpeakerType = new GraphQLObjectType({
    name: 'Speaker',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        expertise: { type: GraphQLString }
    })
});

// Definição do Tipo Local
const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        city: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        event: {
            type: EventType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return events.find(event => event.id === args.id);
            }
        },
        events: {
            type: new GraphQLList(EventType),
            resolve() {
                return events;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
